import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COLORS = {
  blue: new THREE.Color('#4A9BF5'),
  teal: new THREE.Color('#34CFCB'),
  green: new THREE.Color('#9BDB6A'),
  white: new THREE.Color('#EAF6FF'),
}

const BPM = 64
const SHELL_POINTS = 22000
const CORE_POINTS = 5000

/**
 * Taubin's implicit heart surface: f(x, y, z) = (x^2 + 9/4 z^2 + y^2 - 1)^3 - x^2 y^3 - 9/80 z^2 y^3.
 * Negative inside, zero on the surface. y is up and z is depth, so the heart faces the camera.
 * Returns f and the approximate distance to the surface, |f| / |grad f|.
 */
function distance(x, y, z) {
  const a = x * x + (9 / 4) * z * z + y * y - 1
  const a2 = a * a
  const y3 = y * y * y
  const f = a2 * a - x * x * y3 - (9 / 80) * z * z * y3
  const gx = 6 * x * a2 - 2 * x * y3
  const gy = 6 * y * a2 - 3 * x * x * y * y - (27 / 80) * z * z * y * y
  const gz = 13.5 * z * a2 - 0.225 * z * y3
  const g = Math.sqrt(gx * gx + gy * gy + gz * gz) || 1e-6
  return { f, d: Math.abs(f) / g }
}

function heightColor(y, out) {
  const t = THREE.MathUtils.clamp((y + 1.05) / 2.3, 0, 1)
  if (t < 0.5) out.lerpColors(COLORS.green, COLORS.teal, t * 2)
  else out.lerpColors(COLORS.teal, COLORS.blue, (t - 0.5) * 2)
  return out
}

/** Rejection-samples points on (shell) or inside (core) the heart. */
function sampleHeart(count, shell) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const color = new THREE.Color()
  let i = 0
  let guard = 0
  while (i < count && guard < count * 400) {
    guard += 1
    const x = THREE.MathUtils.randFloat(-1.3, 1.3)
    const y = THREE.MathUtils.randFloat(-1.15, 1.35)
    const z = THREE.MathUtils.randFloat(-0.9, 0.9)
    const { f, d } = distance(x, y, z)
    const keep = shell ? f <= 0 && d < 0.028 : f < 0 && d >= 0.028
    if (!keep) continue
    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
    heightColor(y, color)
    if (shell && Math.random() < 0.04) color.lerp(COLORS.white, 0.7)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
    i += 1
  }
  return { positions: positions.subarray(0, i * 3), colors: colors.subarray(0, i * 3) }
}

/** One PQRST-like beat over phase p in [0, 1). */
function ecgWave(p) {
  if (p > 0.3 && p < 0.36) return 0.18 * Math.sin(((p - 0.3) / 0.06) * Math.PI)
  if (p >= 0.41 && p < 0.43) return -0.22 * ((p - 0.41) / 0.02)
  if (p >= 0.43 && p < 0.455) return -0.22 + 1.22 * ((p - 0.43) / 0.025)
  if (p >= 0.455 && p < 0.48) return 1 - 1.3 * ((p - 0.455) / 0.025)
  if (p >= 0.48 && p < 0.5) return -0.3 + 0.3 * ((p - 0.48) / 0.02)
  if (p > 0.6 && p < 0.7) return 0.3 * Math.sin(((p - 0.6) / 0.1) * Math.PI)
  return 0
}

function makeEcgRing(radius, beats, color, opacity) {
  const segments = 900
  const positions = new Float32Array((segments + 1) * 3)
  for (let i = 0; i <= segments; i += 1) {
    const u = i / segments
    const theta = u * Math.PI * 2
    const wave = ecgWave((u * beats) % 1)
    positions[i * 3] = Math.cos(theta) * radius
    positions[i * 3 + 1] = wave * 0.32
    positions[i * 3 + 2] = Math.sin(theta) * radius
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  return new THREE.Line(geometry, material)
}

function softSprite(size, inner, outer) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, inner)
  gradient.addColorStop(1, outer)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

/** Two gaussian bumps per cycle: the "lub" and the "dub". */
function heartbeat(seconds) {
  const period = 60 / BPM
  const p = (seconds % period) / period
  const bump = (center, width) => Math.exp(-((p - center) ** 2) / (2 * width * width))
  return bump(0.08, 0.035) + 0.55 * bump(0.27, 0.05)
}

export default function HeartScene({ className }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return undefined
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50)
    camera.position.set(0, 0.05, 5.6)

    const rig = new THREE.Group()
    const heart = new THREE.Group()
    rig.add(heart)
    scene.add(rig)

    const pointSprite = softSprite(64, 'rgba(255,255,255,1)', 'rgba(255,255,255,0)')

    const shell = sampleHeart(SHELL_POINTS, true)
    const shellGeometry = new THREE.BufferGeometry()
    shellGeometry.setAttribute('position', new THREE.BufferAttribute(shell.positions, 3))
    shellGeometry.setAttribute('color', new THREE.BufferAttribute(shell.colors, 3))
    const shellMaterial = new THREE.PointsMaterial({
      size: 0.034,
      map: pointSprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    heart.add(new THREE.Points(shellGeometry, shellMaterial))

    const core = sampleHeart(CORE_POINTS, false)
    const coreGeometry = new THREE.BufferGeometry()
    coreGeometry.setAttribute('position', new THREE.BufferAttribute(core.positions, 3))
    coreGeometry.setAttribute('color', new THREE.BufferAttribute(core.colors, 3))
    const coreMaterial = new THREE.PointsMaterial({
      size: 0.02,
      map: pointSprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    heart.add(new THREE.Points(coreGeometry, coreMaterial))

    const glowMaterial = new THREE.SpriteMaterial({
      map: softSprite(256, 'rgba(52,207,203,0.55)', 'rgba(52,207,203,0)'),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.8,
    })
    const glow = new THREE.Sprite(glowMaterial)
    glow.scale.set(5.6, 5.6, 1)
    glow.position.z = -0.6
    rig.add(glow)

    const ringA = makeEcgRing(1.6, 3, COLORS.teal, 0.55)
    ringA.rotation.set(1.25, 0, 0.35)
    const ringB = makeEcgRing(1.9, 4, COLORS.blue, 0.4)
    ringB.rotation.set(1.05, 0, -0.5)
    rig.add(ringA, ringB)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const clock = new THREE.Clock()
    const pointer = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    let frame = 0
    let visible = true
    let running = true

    const resize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      const fit = Math.min(1, width / 560)
      rig.scale.setScalar(0.78 + 0.22 * fit)
    }

    const render = () => {
      const t = clock.getElapsedTime()
      const beat = heartbeat(t)
      heart.scale.setScalar(1 + 0.06 * beat)
      heart.rotation.y = Math.sin(t * 0.45) * 0.6
      heart.position.y = Math.sin(t * 0.8) * 0.04
      glowMaterial.opacity = 0.6 + 0.35 * beat
      ringA.rotation.y = t * 0.22
      ringB.rotation.y = -t * 0.17
      target.x = pointer.y * 0.22
      target.y = pointer.x * 0.35
      rig.rotation.x += (target.x - rig.rotation.x) * 0.04
      rig.rotation.y += (target.y - rig.rotation.y) * 0.04
      renderer.render(scene, camera)
    }

    const loop = () => {
      if (!running) return
      if (visible && !document.hidden) render()
      frame = window.requestAnimationFrame(loop)
    }

    const onPointerMove = (event) => {
      const rect = mount.getBoundingClientRect()
      pointer.x = THREE.MathUtils.clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1.5, 1.5)
      pointer.y = THREE.MathUtils.clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1.5, 1.5)
    }
    const onPointerLeave = () => {
      pointer.x = 0
      pointer.y = 0
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0.05 },
    )
    observer.observe(mount)

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()

    if (reduceMotion) {
      heart.rotation.y = -0.3
      renderer.render(scene, camera)
    } else {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      mount.addEventListener('pointerleave', onPointerLeave)
      loop()
    }

    return () => {
      running = false
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      mount.removeEventListener('pointerleave', onPointerLeave)
      scene.traverse((object) => {
        object.geometry?.dispose()
        if (object.material) {
          object.material.map?.dispose()
          object.material.dispose()
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className={className} aria-hidden="true" />
}

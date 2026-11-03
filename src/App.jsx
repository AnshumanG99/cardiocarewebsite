import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/Home'

const Platform = lazy(() => import('./pages/Platform'))
const Impact = lazy(() => import('./pages/Impact'))
const Validation = lazy(() => import('./pages/Validation'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

/** Keeps the layout stable while a route chunk loads. */
function RouteFallback() {
  return <div className="min-h-screen" aria-hidden="true" />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="platform"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Platform />
            </Suspense>
          }
        />
        <Route
          path="impact"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Impact />
            </Suspense>
          }
        />
        <Route
          path="validation"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Validation />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<RouteFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

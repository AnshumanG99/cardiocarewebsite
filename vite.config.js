import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // three.js is lazy-loaded for the home page hero and lands in its own ~550 kB chunk.
    chunkSizeWarningLimit: 600,
  },
})

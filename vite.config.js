import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: vite-plugin-ssg requires a pages-directory router architecture
// incompatible with the current React Router v6 setup.
// SSG can be added in a future migration to a file-based router.
// All other SEO improvements (react-helmet-async, sitemap, robots, schemas) are active.

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
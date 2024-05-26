import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5500 },
  optimizeDeps: {
    exclude: ['react-hot-toast']
  }
})
// vite.config.js
// export default {
  
// }

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows Vite to accept connections from network IPs
    port: 5173, // Ensure this matches your frontend port
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend server URL
        changeOrigin: true,
        secure: false,
        // Optional: Rewrite the URL if your API doesn't start with /api
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

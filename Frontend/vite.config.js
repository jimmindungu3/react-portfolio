import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Make sure Vite listens on all network interfaces
    port: 5173, // Optional: specify the port if you want to
  },
})

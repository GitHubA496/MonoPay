import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // port: 3000,
    // strictPort: true, // Optional: Ensures Vite uses the specified port
    // open: true,       // Optional: Automatically opens the browser
  },
})

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/icaisda25/', // 👈 Important for GitHub Pages or subfolder hosting
  plugins: [react()],
})

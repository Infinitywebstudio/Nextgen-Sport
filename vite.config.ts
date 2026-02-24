import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ELOO Frontend - App autonome
  resolve: {
   alias: {
     moment: 'moment/moment.js'
   },
 },
})

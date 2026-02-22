import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FuzzAds/",   // 👈 VERY IMPORTANT (repo name same hona chahiye)
})
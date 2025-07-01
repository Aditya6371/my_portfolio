import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/my_portfolio/',
  plugins: [
    tailwindcss(),
  ],
})
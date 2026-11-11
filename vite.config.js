import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// "base" precisa ser o nome do repositório para funcionar no GitHub Pages
export default defineConfig({
  base: '/Trabalho-Extensao-Dark-Patterns/',
  plugins: [vue(), tailwindcss()],
})

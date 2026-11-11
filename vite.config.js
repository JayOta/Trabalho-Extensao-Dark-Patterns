import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Vercel serve o site na raiz ('/'); o GitHub Pages serve na subpasta do repositório.
// A Vercel define VERCEL=1 durante o build.
const base = process.env.VERCEL ? '/' : '/Trabalho-Extensao-Dark-Patterns/'

export default defineConfig({
  base,
  plugins: [vue(), tailwindcss()],
})

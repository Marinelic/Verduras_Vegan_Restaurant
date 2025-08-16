import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  fontFamily: {
    'Ledger': ['Ledger', 'serif'],
  },
  plugins: [react(), tailwindcss()],
})

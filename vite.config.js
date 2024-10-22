import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://rrhh.iie.cl/public/web_rrhh/dev_test',
  plugins: [react()],
})

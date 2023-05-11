import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// to run the program and visualize in another device, use this command to run the project
//npm run dev -- --host
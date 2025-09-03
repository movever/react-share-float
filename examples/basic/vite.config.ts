import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-share-float': path.resolve(__dirname, '../../packages/react-share-float/src')
    }
  },
  server: {
    open: true
  }
})



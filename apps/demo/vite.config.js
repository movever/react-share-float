import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': '../../packages/utils/src/index.js'
    }
  },
  server: {
    port: 5173,
    open: false
  }
});

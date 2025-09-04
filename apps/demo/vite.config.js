import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {}
  },
  server: {
    port: 5173,
    open: false
  }
});

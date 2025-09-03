import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.jsx',
      name: 'ReactShareFloat',
      fileName: (format) => `index.${format === 'es' ? 'es' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-share', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-share': 'ReactShare',
          'lucide-react': 'LucideReact'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@utils': '../../packages/utils/src/index.js'
    }
  }
});

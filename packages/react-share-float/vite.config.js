import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    lib: {
      entry: 'src/index.jsx',
      name: 'ReactShareFloat',
      formats: ['es', 'cjs'],
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

});

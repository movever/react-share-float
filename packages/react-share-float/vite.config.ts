import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactShareFloat',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'react-share-float.es.js' : 'react-share-float.cjs'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-share'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});



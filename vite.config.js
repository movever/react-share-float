import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// 自定义插件：将CSS内联到JS中
function inlineCssPlugin() {
  return {
    name: 'inline-css',
    generateBundle(options, bundle) {
      // 找到CSS文件
      const cssFiles = Object.keys(bundle).filter(key => key.endsWith('.css'));
      
      cssFiles.forEach(cssFileName => {
        const cssFile = bundle[cssFileName];
        const cssContent = cssFile.source;
        
        // 创建内联CSS的JS代码
        const inlineCssCode = `
// 内联CSS样式
if (typeof document !== 'undefined') {
  const styleId = 'react-share-float-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = \`${cssContent}\`;
    document.head.appendChild(style);
  }
}
`;
        
        // 将CSS内容添加到JS文件中
        const jsFiles = Object.keys(bundle).filter(key => key.endsWith('.js'));
        jsFiles.forEach(jsFileName => {
          const jsFile = bundle[jsFileName];
          jsFile.code = inlineCssCode + jsFile.code;
        });
        
        // 删除CSS文件
        delete bundle[cssFileName];
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: './tailwind.config.js'
    }),
    inlineCssPlugin()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ReactShareFloat',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'react-share-float.es.js' : 'react-share-float.cjs'
    },
    cssCodeSplit: false,
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
})



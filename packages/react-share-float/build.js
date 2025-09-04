import { build } from 'vite';
import fs from 'fs';
import path from 'path';

async function buildWithClientDirective() {
  // 构建包
  await build();

  // 读取CSS文件内容
  const cssFilePath = path.resolve('dist/style.css');
  const cssContent = fs.readFileSync(cssFilePath, 'utf8');

  // 创建CSS注入函数
  const cssInjectionCode = `
// CSS注入函数
function injectStyles() {
  if (typeof document !== 'undefined') {
    const styleId = 'react-share-float-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = \`${cssContent.replace(/`/g, '\\`')}\`;
      document.head.appendChild(style);
    }
  }
}

// 自动注入样式
injectStyles();
`;

  // 在ES模块文件开头添加 "use client" 指令和CSS注入
  const esFilePath = path.resolve('dist/index.es.js');
  const esContent = fs.readFileSync(esFilePath, 'utf8');
  const esWithDirective = '"use client";\n' + cssInjectionCode + esContent;
  fs.writeFileSync(esFilePath, esWithDirective);

  // 在CommonJS文件开头添加 "use client" 指令和CSS注入
  const cjsFilePath = path.resolve('dist/index.js');
  const cjsContent = fs.readFileSync(cjsFilePath, 'utf8');
  const cjsWithDirective = '"use client";\n' + cssInjectionCode + cjsContent;
  fs.writeFileSync(cjsFilePath, cjsWithDirective);

  // 删除CSS文件，因为已经内联到JS中
  fs.unlinkSync(cssFilePath);

  console.log('✅ Build completed with "use client" directive and inline CSS');
}

buildWithClientDirective().catch(console.error);

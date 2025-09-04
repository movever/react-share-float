import { build } from 'vite';
import fs from 'fs';
import path from 'path';

async function buildWithClientDirective() {
  // 构建包
  await build();
  
  // 在ES模块文件开头添加 "use client" 指令
  const esFilePath = path.resolve('dist/index.es.js');
  const esContent = fs.readFileSync(esFilePath, 'utf8');
  const esWithDirective = '"use client";\n' + esContent;
  fs.writeFileSync(esFilePath, esWithDirective);
  
  // 在CommonJS文件开头添加 "use client" 指令
  const cjsFilePath = path.resolve('dist/index.js');
  const cjsContent = fs.readFileSync(cjsFilePath, 'utf8');
  const cjsWithDirective = '"use client";\n' + cjsContent;
  fs.writeFileSync(cjsFilePath, cjsWithDirective);
  
  console.log('✅ Build completed with "use client" directive');
}

buildWithClientDirective().catch(console.error);

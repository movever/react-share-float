# 开发与调试说明

本仓库为单包结构（非 Monorepo）：

- `src`：组件库源码与构建配置（Vite Library）
- `examples/basic`：本地调试示例（Vite React 应用），通过别名直接引用库源码

## 环境准备

```bash
npm install
```

## 本地调试

示例应用通过别名将 `react-share-float` 指向库源码目录，修改库源码可立即热更新：

```bash
npm run dev
```

打开浏览器访问 `http://localhost:5173/`。

## 构建库

```bash
npm run build
```

产物输出到 `dist`，包含 ESM、CJS 与类型声明。

## 发布到 npm

1. 确保已登录：`npm login`
2. 构建：
   ```bash
   npm run build
   ```
3. 发布：
   ```bash
   npm publish --access public
   ```

## 目录结构建议

```
react-share-float/
├─ src/
│  ├─ react-share-float.tsx          # 核心组件（单文件）
│  └─ index.ts                       # 导出入口
├─ vite.config.ts                    # Vite 库构建配置
├─ tsconfig.json
├─ tsconfig.build.json
├─ package.json
├─ examples/
│  └─ basic/
│     ├─ src/
│     │  ├─ App.tsx
│     │  └─ main.tsx
│     ├─ index.html
│     ├─ vite.config.ts             # Alias 到库源码
│     └─ package.json
├─ README.md                         # 组件使用文档
└─ dev.md                            # 开发/调试/发布 文档
```

## 常用脚本

- 启动示例：`npm run dev`
- 构建库：`npm run build`
- 预览示例构建：`npm run preview`



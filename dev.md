# React Share Float - 开发文档（精简版）

面向日常开发与发布的最小说明，只保留必需命令与目录用途。

## 项目结构（做什么用）

```
react-share-float/
├── apps/
│   └── demo/                    # 示例应用，开发/联调组件
├── packages/
│   └── react-share-float/       # 核心组件包（npm 包）
│       ├── src/                 # 组件源码（入口：index.jsx，含 styles.css）
│       ├── build.js             # 自定义构建脚本（注入 "use client" 与 CSS）
│       ├── vite.config.js       # 组件库构建配置
│       └── package.json         # 包配置（name/main/module/version 等）
├── scripts/                      # 发布与校验脚本
├── package.json                  # 根脚本（启动 demo、构建、发布等）
└── dev.md                        # 本文档
```

## 本地开发常用命令

```bash
# 安装所有依赖
npm install

# 启动 demo（用于联调组件，不自动打开浏览器）
npm run dev

# 或仅在 demo 目录内启动
cd apps/demo && npm run dev
```

## 构建与发布命令

单包（核心包）发布常用：

```bash
# 构建核心包（等同根脚本：npm run build）
npm run build

# 发布核心包到 npm（需已 npm login）
npm run publish:main

# 或手动进入包目录发布
cd packages/react-share-float && npm publish
```

多包/全量发布（目前只有主包）：

```bash
# 发布所有（由 scripts/publish.js 处理）
npm run publish:all

# 快速发布（跳过部分校验，谨慎使用）
npm run publish:quick
```

版本号管理（语义化版本）：

```bash
# 在包目录内执行，或手动改版本号后提交
npm version patch | minor | major
```

## 备注

- 组件包已适配 Next.js App Router 与 SSR，构建时会自动注入 "use client" 并将 CSS 内联进 JS，无需使用者手动引入 CSS。
- 外部依赖：`react`, `react-dom`, `react-share`, `lucide-react`；内部使用 `clsx`、`tailwind-merge`。
- 开发调试建议：优先在 `apps/demo` 进行联调，确认样式和交互后再发布。

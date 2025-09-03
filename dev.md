# React Share Float - 开发文档

## 项目结构

```
react-share-float/
├── apps/
│   └── demo/                 # 开发示例应用
│       ├── src/
│       ├── package.json
│       └── vite.config.js
├── packages/
│   ├── react-share-float/   # 核心组件库
│   │   ├── src/
│   │   │   └── index.js     # 主入口文件
│   │   ├── package.json
│   │   └── vite.config.js
│   └── utils/               # 工具函数库
│       ├── src/
│       │   └── index.js
│       └── package.json
├── package.json             # 根目录配置
├── jsconfig.json           # JS路径映射
└── dev.md                  # 开发文档
```

## 技术栈

- **React 18**: 前端框架
- **react-share**: 社交分享功能
- **Vite**: 构建工具
- **Tailwind CSS**: 样式框架
- **Lucide React**: 图标库

## 开发环境设置

### 1. 安装依赖

```bash
# 根目录安装所有依赖
npm install

# 或者使用 yarn
yarn install

# 安装所有子包依赖
npm run install:all
```

### 2. 开发模式

```bash
# 启动开发服务器（不自动打开浏览器）
npm run dev

# 或者单独启动示例应用
cd apps/demo
npm run dev
```

### 3. 构建

```bash
# 构建所有包
npm run build

# 构建特定包
npm run build:react-share-float
npm run build:utils

# 测试构建输出
npm run test:build
```

## 开发指南

### 核心组件开发

核心组件位于 `packages/react-share-float/src/index.js`，主要功能：

- 浮动分享按钮
- 响应式设计（移动端/桌面端）
- 原生分享API支持
- 多种社交平台分享

### 组件特性

1. **响应式设计**
   - 移动端：使用原生分享API
   - 桌面端：展开式分享按钮

2. **支持的平台**
   - Twitter/X
   - Facebook
   - Reddit
   - LinkedIn
   - WhatsApp
   - Telegram
   - Email
   - 更多平台...

3. **自定义配置**
   - 分享URL
   - 分享标题
   - 分享描述
   - 媒体图片

### 开发注意事项

1. **路径映射**: 
   - 使用 `@utils/*` 映射到 `packages/utils/src/*`
2. **样式**: 使用 Tailwind CSS 类名
3. **图标**: 使用 Lucide React 图标
4. **调试**: 使用单行 console.log 输出
5. **导入**: 在demo应用中使用相对路径 `import FloatingShareButton from '../../packages/react-share-float/src/index.jsx'`

## 测试

### 示例应用

示例应用位于 `apps/demo/`，用于开发和测试核心组件：

```bash
cd apps/demo
npm run dev
```

访问 `http://localhost:5173` 查看组件效果。

### 测试要点

1. **响应式测试**
   - 桌面端展开/收起功能
   - 移动端原生分享

2. **功能测试**
   - 各平台分享按钮
   - 对话框展开
   - 错误处理

3. **样式测试**
   - 不同屏幕尺寸
   - 主题适配

## 编译和发布

### 1. 构建配置

每个包都有自己的 `vite.config.js` 配置：

- **react-share-float**: 构建为 UMD/ESM 格式
- **utils**: 构建为 CommonJS/ESM 格式

### 2. 构建流程

```bash
# 清理构建文件
npm run clean

# 构建所有包
npm run build

# 类型检查（如果有）
npm run type-check
```

### 3. 发布到 NPM

```bash
# 登录 NPM
npm login

# 发布核心包
cd packages/react-share-float
npm publish

# 发布工具包
cd ../utils
npm publish
```

### 4. 版本管理

使用语义化版本控制：

- **主版本号**: 不兼容的API修改
- **次版本号**: 向下兼容的功能性新增
- **修订号**: 向下兼容的问题修正

```bash
# 更新版本号
npm version patch  # 0.0.1 -> 0.0.2
npm version minor  # 0.0.2 -> 0.1.0
npm version major  # 0.1.0 -> 1.0.0
```

### 5. 发布流程

```bash
# 发布所有包
npm run publish:all

# 发布特定包
npm run publish:utils
npm run publish:main
```

## 常见问题

### 1. 路径映射问题

确保 `jsconfig.json` 配置正确：

```json
{
  "compilerOptions": {
    "paths": {
      "@utils/*": ["packages/utils/src/*"]
    }
  }
}
```

### 2. 依赖问题

如果遇到依赖冲突，检查各包的 `package.json` 中的依赖版本。

### 3. 构建问题

确保所有包都正确配置了构建脚本和输出格式。

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证，详见 `LICENSE` 文件。

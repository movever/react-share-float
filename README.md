# React Share Float

一个基于 react-share 的浮动分享组件，支持多种社交平台分享。

## 特性

- 🎯 **零配置** - 开箱即用，无需额外配置
- 🎨 **Tailwind CSS 内置** - 样式已包含，无需用户安装 Tailwind
- 📱 **响应式设计** - 支持移动端和桌面端
- 🌐 **多平台支持** - 支持 20+ 个社交平台
- ⚡ **原生分享 API** - 移动端自动使用原生分享
- 🎭 **主题切换** - 支持明暗主题切换

## 安装

```bash
npm install react-share-float
```

## 使用

```jsx
import { ReactShareFloat } from 'react-share-float'

function App() {
  return (
    <div>
      <h1>我的应用</h1>
      <p>滚动页面查看浮动分享按钮</p>
      
      {/* 组件会自动包含所需的 Tailwind CSS 样式 */}
      <ReactShareFloat />
    </div>
  )
}
```

## 架构设计

### 主项目 (react-share-float)
- ✅ 包含 Tailwind CSS v4 配置
- ✅ 包含所有必要的样式
- ✅ 使用 `cn` 函数处理样式合并
- ✅ 构建时生成独立的 CSS 文件

### 示例项目 (examples/basic)
- ✅ 不包含 Tailwind CSS 依赖
- ✅ 通过别名导入主项目源码
- ✅ 自动使用主项目的样式

## 开发

```bash
# 安装依赖
npm install

# 启动示例项目
npm run dev

# 构建主项目
npm run build
```

## 技术栈

- React 18+
- Tailwind CSS v4
- Vite
- react-share
- clsx + tailwind-merge

## 许可证

MIT

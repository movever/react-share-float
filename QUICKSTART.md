# React Share Float - 快速启动指南

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/yourusername/react-share-float.git
cd react-share-float
```

### 2. 安装依赖
```bash
npm install
npm run install:all
```

### 3. 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:5173` 查看演示应用。

## 📦 构建和发布

### 构建所有包
```bash
npm run build
```

### 测试构建结果
```bash
npm run test:build
```

### 发布到NPM
```bash
npm run publish:all
```

## 🔧 开发

### 项目结构
```
react-share-float/
├── packages/react-share-float/  # 核心组件
├── packages/utils/               # 工具函数
├── apps/demo/                    # 演示应用
└── scripts/                      # 构建脚本
```

### 常用命令
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建所有包
- `npm run test:build` - 测试构建结果
- `npm run publish:all` - 发布所有包

## 📚 文档

- [README.md](README.md) - 项目文档
- [dev.md](dev.md) - 开发文档
- [examples/](examples/) - 使用示例

## 🎯 特性

- ✅ 响应式设计
- ✅ 移动端原生分享API
- ✅ 多种社交平台支持
- ✅ 平滑动画效果
- ✅ Tailwind CSS 样式
- ✅ 完整的开发环境

## 🐛 故障排除

### 开发服务器启动失败
1. 确保所有依赖已安装：`npm run install:all`
2. 检查端口是否被占用
3. 查看控制台错误信息

### 构建失败
1. 运行 `npm run build` 查看详细错误
2. 确保所有依赖版本兼容
3. 检查文件路径配置

### 模块导入错误
1. 检查 vite.config.js 中的别名配置
2. 确保源文件存在
3. 重新安装依赖

## 📞 支持

如有问题，请：
1. 查看 [dev.md](dev.md) 开发文档
2. 检查 [examples/](examples/) 使用示例
3. 提交 Issue 到 GitHub

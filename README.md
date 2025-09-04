# React Share Float

<div align="center">

![React Share Float](https://img.shields.io/badge/React-Share%20Float-blue?style=for-the-badge&logo=react)
![Version](https://img.shields.io/npm/v/react-share-float?style=for-the-badge)
![Downloads](https://img.shields.io/npm/dm/react-share-float?style=for-the-badge)
![License](https://img.shields.io/npm/l/react-share-float?style=for-the-badge)

A modern, responsive floating share button component for React that supports multiple social media platforms with automatic mobile/desktop adaptation.

[Documentation](dev.md) • [Issues](https://github.com/movever/react-share-float/issues) • [Contributing](CONTRIBUTING.md)

</div>

## ✨ Features

- 🎯 **Responsive Design** - Automatically adapts to mobile and desktop environments
- 📱 **Native Share API** - Uses native sharing on mobile devices when available
- 🌐 **Multiple Platforms** - Supports Twitter, Facebook, LinkedIn, WhatsApp, Telegram, and more
- ⚡ **Smooth Animations** - Beautiful slide-in/out animations with CSS transitions
- 🎨 **Tailwind CSS** - Built with Tailwind CSS for easy customization
- ♿ **Accessible** - Full keyboard navigation and screen reader support
- 📦 **Lightweight** - Minimal bundle size with tree-shaking support
- 🔧 **Easy Integration** - Simple setup, works out of the box

## 🚀 Quick Start

### Installation

```bash
# Install main package
npm install react-share-float

# Install utils package (optional)
npm install react-share-float-utils

# Or using yarn
yarn add react-share-float
yarn add react-share-float-utils
```

### Basic Usage

```jsx
import FloatingShareButton from 'react-share-float';

function App() {
  return (
    <div>
      <h1>My Awesome Content</h1>
      <p>Share this amazing content!</p>
      <FloatingShareButton />
    </div>
  );
}
```

That's it! The floating share button will appear on the left side of your screen.

## 📖 Usage Guide

### How It Works

The component automatically:
- **Detects environment** - Mobile vs desktop
- **Uses native sharing** - On mobile devices when available
- **Shows expandable buttons** - On desktop with smooth animations
- **Shares current page** - URL, title, and description

### Mobile vs Desktop Behavior

| Feature | Mobile | Desktop |
|---------|--------|---------|
| **Primary Action** | Native Share API | Expandable buttons |
| **Button Style** | Single share button | Chevron + expandable panel |
| **Animation** | Native transitions | Smooth slide-in/out |
| **Interaction** | Touch optimized | Hover + click |

### Customization

Currently, the component uses these default values:

```jsx
const shareUrl = window.location.href;
const shareTitle = document.title || 'Your Page Title';
const shareDescription = 'Your page description';
const mediaUrl = 'https://yourdomain.com/image.jpg';
```

To customize these values, modify the component source or create a wrapper component.

## 🌐 Supported Platforms

### Primary Platforms
- **Twitter/X** - Social media platform
- **Facebook** - Social networking
- **LinkedIn** - Professional networking
- **WhatsApp** - Messaging
- **Telegram** - Messaging
- **Reddit** - Community discussions
- **Email** - Email sharing

### Additional Platforms
- Pinterest, VK, OK, Tumblr, Mailru, Livejournal, Viber, Workplace, Line, Weibo, Pocket, Instapaper, Hatena, Facebook Messenger

## 🎨 Styling & Customization

The component uses Tailwind CSS and can be customized in several ways:

### Method 1: Direct Modification
Edit the Tailwind classes directly in the component source.

### Method 2: CSS Overrides
Use CSS specificity to override default styles:

```css
/* Custom styles */
.floating-share-button {
  background-color: #your-color;
  border-radius: 8px;
}
```

### Method 3: Wrapper Component
Create a wrapper with custom styling:

```jsx
function CustomShareButton() {
  return (
    <div className="custom-wrapper">
      <FloatingShareButton />
    </div>
  );
}
```

### Default Styling
- **Position**: Fixed to the left side of the screen
- **Colors**: White background with gray borders
- **Animations**: 300ms transitions
- **Responsive**: Adapts to different screen sizes

## 🔧 Technology Stack

- **React 18** - Frontend framework
- **react-share** - Social sharing functionality
- **Vite** - Build tool
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **JavaScript** - Development language (no TypeScript)

## 🌍 Browser Support

| Browser | Native Share API | Fallback Support |
|---------|----------------|------------------|
| Chrome 61+ | ✅ | ✅ |
| Firefox 89+ | ✅ | ✅ |
| Safari 14+ | ✅ | ✅ |
| Edge 79+ | ✅ | ✅ |
| Other browsers | ❌ | ✅ |

## 📦 Package Structure

```
react-share-float/
├── packages/
│   ├── react-share-float/   # Main component library
│   └── utils/               # Utility functions
├── apps/
│   └── demo/                # Demo application
├── scripts/                 # Build and publish scripts
├── examples/                # Usage examples
└── docs/                    # Documentation
```

## 🛠️ Development

### Prerequisites
- Node.js 16+
- npm 8+

### Setup
```bash
# Clone the repository
git clone https://github.com/movever/react-share-float.git
cd react-share-float

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build all packages
npm run test:build   # Test build outputs
npm run publish:all  # Publish all packages
npm run verify:package # Verify package configuration
```

### Building
```bash
# Build all packages
npm run build

# Build specific package
npm run build:react-share-float
npm run build:utils
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all builds pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React Share](https://github.com/nygardk/react-share)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)

## 📞 Support & Community

### Getting Help
- 📖 [Documentation](dev.md) - Detailed development guide
- 🎮 [Demo](apps/demo/) - Local demo application
- 🐛 [Issues](https://github.com/movever/react-share-float/issues) - Report bugs or request features
- 💬 [Discussions](https://github.com/movever/react-share-float/discussions) - Ask questions and share ideas

### Stay Updated
- ⭐ **Star** this repository
- 👀 **Watch** for updates
- 🔔 **Follow** releases

---

<div align="center">

Made with ❤️ by [movever](https://github.com/movever) for the React community

[![NPM](https://img.shields.io/npm/v/react-share-float?style=flat-square)](https://www.npmjs.com/package/react-share-float)
[![Downloads](https://img.shields.io/npm/dm/react-share-float?style=flat-square)](https://www.npmjs.com/package/react-share-float)
[![License](https://img.shields.io/npm/l/react-share-float?style=flat-square)](https://github.com/movever/react-share-float/blob/main/LICENSE)

</div>

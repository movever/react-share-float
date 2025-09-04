# React Share Float

A modern, responsive floating share button component for React that supports multiple social media platforms with automatic mobile/desktop adaptation.

## Features

- 🎯 **Responsive Design** - Automatically adapts to mobile and desktop environments
- 📱 **Native Share API** - Uses native sharing on mobile devices when available
- 🌐 **Multiple Platforms** - Supports Twitter, Facebook, LinkedIn, WhatsApp, Telegram, and more
- ⚡ **Smooth Animations** - Beautiful slide-in/out animations with CSS transitions
- 🎨 **Tailwind CSS** - Built with Tailwind CSS for easy customization
- ♿ **Accessible** - Full keyboard navigation and screen reader support
- 📦 **Lightweight** - Minimal bundle size with tree-shaking support

## Technology Stack

- **React 18** - Frontend framework
- **react-share** - Social sharing functionality
- **Vite** - Build tool
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **JavaScript** - Development language (no TypeScript)

## Installation

```bash
# 安装主包
npm install react-share-float

# 安装工具包（可选）
npm install react-share-float-utils

# 或者使用 yarn
yarn add react-share-float
yarn add react-share-float-utils
```

## Quick Start

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

## Usage

### Basic Usage

The component will automatically:
- Detect mobile/desktop environment
- Use native share API on mobile when available
- Show expandable share buttons on desktop
- Use current page URL and title for sharing

```jsx
import FloatingShareButton from 'react-share-float';

function MyPage() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>Check out this amazing content!</p>
      
      {/* Floating share button will appear on the left side */}
      <FloatingShareButton />
    </div>
  );
}
```

### Custom Configuration

You can customize the sharing content by modifying the component's internal logic:

```jsx
// The component currently uses these default values:
const shareUrl = window.location.href;
const shareTitle = 'Your Page Title';
const shareDescription = 'Your page description';
const mediaUrl = 'https://yourdomain.com/image.jpg';
```

To customize these values, you'll need to modify the component source or create a wrapper component.

## Supported Platforms

The component supports sharing to:

### Primary Platforms
- **Twitter/X** - Social media platform
- **Facebook** - Social networking
- **Reddit** - Community discussions
- **LinkedIn** - Professional networking
- **WhatsApp** - Messaging
- **Telegram** - Messaging
- **Email** - Email sharing

### Additional Platforms
- Pinterest, VK, OK, Tumblr, Mailru, Livejournal, Viber, Workplace, Line, Weibo, Pocket, Instapaper, Hatena, Facebook Messenger

## Mobile vs Desktop Behavior

### Mobile Devices
- Shows a single share button
- Uses native share API when available
- Falls back to expandable buttons if native sharing is not supported
- Optimized for touch interactions

### Desktop Devices
- Shows an expandable chevron button
- Click to reveal share options
- Smooth slide-in animation
- "More" button to access all platforms
- Hover effects and keyboard navigation

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Modifying the component source** - Edit the Tailwind classes directly
2. **CSS overrides** - Use CSS specificity to override styles
3. **Wrapper components** - Create a wrapper with custom styling

### Default Styling

- **Position**: Fixed to the left side of the screen
- **Colors**: White background with gray borders
- **Animations**: 300ms transitions for smooth interactions
- **Responsive**: Adapts to different screen sizes

## Browser Support

- Chrome 61+ (supports native share API)
- Firefox 89+ (supports native share API)
- Safari 14+ (supports native share API)
- Edge 79+ (supports native share API)
- All modern browsers (fallback to expandable buttons)

## Development

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

### Project Structure

```
react-share-float/
├── packages/
│   ├── react-share-float/   # Main component library
│   └── utils/               # Utility functions
├── apps/
│   └── demo/                # Demo application
├── dev.md                   # Development documentation
└── README.md               # This file
```

### Building

```bash
# Build all packages
npm run build

# Build specific package
npm run build:react-share-float
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React Share](https://github.com/nygardk/react-share)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)

## Support

If you have any questions or need help, please:

1. Check the [documentation](dev.md)
2. Look at the [demo application](apps/demo/)
3. Open an [issue](https://github.com/movever/react-share-float/issues)

---

Made with ❤️ for the React community

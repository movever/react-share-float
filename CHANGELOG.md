# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed
- Removed utils package dependency
- Simplified package structure

### Changed
- Integrated cn utility function directly into main package
- Updated build scripts to remove utils package references

## [1.0.5] - 2024-09-04

### Changed
- Renamed package from `react-share-float` to `react-share-float-button`
- Updated all documentation and examples to use new package name

## [1.0.3] - 2024-09-04

### Removed
- Removed react-share-float-utils package
- Simplified package structure and dependencies

### Changed
- Integrated utility functions directly into main package
- Updated all build and publish scripts
- Simplified installation process

## [1.0.2] - 2024-09-03

### Fixed
- Updated GitHub configuration
- Changed author to "movever"
- Fixed repository URLs to point to correct GitHub account
- Removed TypeScript configuration from JavaScript project

### Changed
- Repository URL: `https://github.com/movever/react-share-float`
- Author: `movever`
- All documentation links updated to correct GitHub account

## [1.0.1] - 2024-09-03

### Fixed
- Removed TypeScript-related configuration from package.json
- Fixed build configuration for JavaScript-only project
- Added proper Tailwind CSS support
- Fixed module resolution issues

### Changed
- Package configuration optimized for JavaScript
- Build output now includes proper CSS files
- Improved development workflow

## [1.0.0] - 2024-09-03

### Added
- Initial release of React Share Float
- Floating share button component with responsive design
- Support for multiple social media platforms
- Mobile native share API integration
- Desktop expandable share panel
- Tailwind CSS styling
- Smooth animations and transitions
- Accessibility features
- Utility package for helper functions

### Features
- **Responsive Design**: Automatically adapts to mobile and desktop
- **Native Share API**: Uses native sharing on mobile devices
- **Multiple Platforms**: Twitter, Facebook, LinkedIn, WhatsApp, Telegram, and more
- **Smooth Animations**: Beautiful slide-in/out animations
- **Tailwind CSS**: Built with Tailwind for easy customization
- **Accessible**: Full keyboard navigation and screen reader support
- **Lightweight**: Minimal bundle size with tree-shaking

### Supported Platforms
- Twitter/X
- Facebook
- LinkedIn
- WhatsApp
- Telegram
- Reddit
- Email
- Pinterest, VK, OK, Tumblr, Mailru, Livejournal, Viber, Workplace, Line, Weibo, Pocket, Instapaper, Hatena, Facebook Messenger

---

## Version Legend

- **Major** (X.0.0): Breaking changes
- **Minor** (0.X.0): New features, backward compatible
- **Patch** (0.0.X): Bug fixes, backward compatible

For more information about semantic versioning, see [semver.org](https://semver.org/).

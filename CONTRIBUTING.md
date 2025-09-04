# Contributing to React Share Float

Thank you for your interest in contributing to React Share Float! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** - Your issue might already be reported
2. **Check the documentation** - The answer might be in the docs
3. **Provide details** - Include steps to reproduce, browser info, etc.

### Feature Requests

We welcome feature requests! Please:

1. **Describe the feature** - What should it do?
2. **Explain the use case** - Why is it needed?
3. **Consider alternatives** - Is there another way to achieve this?

### Pull Requests

We love pull requests! Here's how to contribute:

#### 1. Fork the Repository

```bash
git clone https://github.com/YOUR_USERNAME/react-share-float.git
cd react-share-float
```

#### 2. Create a Feature Branch

```bash
git checkout -b feature/amazing-feature
```

#### 3. Make Your Changes

- Follow the existing code style
- Add tests if applicable
- Update documentation
- Keep commits small and focused

#### 4. Test Your Changes

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build packages
npm run build

# Test build outputs
npm run test:build
```

#### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add amazing feature"
```

#### 6. Push to Your Fork

```bash
git push origin feature/amazing-feature
```

#### 7. Create a Pull Request

- Provide a clear description of changes
- Reference any related issues
- Include screenshots if UI changes

## 📋 Development Guidelines

### Code Style

- Use **JavaScript** (no TypeScript)
- Follow **ESLint** rules
- Use **Prettier** for formatting
- Write **descriptive commit messages**

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Testing

- Test on multiple browsers
- Test responsive behavior
- Test accessibility features
- Test with different screen sizes

### Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update examples if API changes
- Update CHANGELOG.md for new versions

## 🛠️ Development Setup

### Prerequisites

- Node.js 16+
- npm 8+

### Local Development

```bash
# Clone and setup
git clone https://github.com/movever/react-share-float.git
cd react-share-float
npm install

# Start development
npm run dev

# Build packages
npm run build

# Test builds
npm run test:build
```

### Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build all packages
npm run test:build       # Test build outputs
npm run publish:all      # Publish all packages
npm run verify:package   # Verify package configuration
npm run pre-publish      # Pre-publish checks
```

## 🎯 Areas for Contribution

### High Priority

- **Bug fixes** - Any issues reported
- **Documentation** - Improve guides and examples
- **Accessibility** - Enhance a11y features
- **Performance** - Optimize bundle size

### Medium Priority

- **New platforms** - Add more social media platforms
- **Customization** - More styling options
- **Examples** - More usage examples
- **Tests** - Add unit and integration tests

### Low Priority

- **New features** - Major functionality additions
- **Refactoring** - Code improvements
- **Tooling** - Development tools

## 📞 Getting Help

- **Issues**: [GitHub Issues](https://github.com/movever/react-share-float/issues)
- **Discussions**: [GitHub Discussions](https://github.com/movever/react-share-float/discussions)
- **Documentation**: [dev.md](dev.md)

## 🏆 Recognition

Contributors will be recognized in:

- **README.md** - Contributors section
- **CHANGELOG.md** - For significant contributions
- **Release notes** - For major releases

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to React Share Float! 🚀

import React from 'react';
import FloatingShareButton from 'react-share-float-button';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                React Share Float Demo
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                A floating share button component for React
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Version 1.0.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About This Component
              </h2>
              <p className="text-gray-600 mb-4">
                React Share Float is a modern, responsive floating share button component
                that supports multiple social media platforms. It automatically adapts to
                mobile and desktop environments, providing the best user experience for
                each platform.
              </p>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">Features:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Responsive design (mobile/desktop)</li>
                  <li>Native share API support for mobile</li>
                  <li>Multiple social media platforms</li>
                  <li>Smooth animations and transitions</li>
                  <li>Customizable styling with Tailwind CSS</li>
                  <li>Accessibility features</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Supported Platforms
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Twitter/X', 'Facebook', 'LinkedIn', 'WhatsApp',
                  'Telegram', 'Reddit', 'Pinterest', 'Email',
                  'VK', 'OK', 'Tumblr', 'Viber'
                ].map((platform) => (
                  <div key={platform} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{platform}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Usage Example
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-800 overflow-x-auto">
{`import FloatingShareButton from 'react-share-float-button';

function App() {
  return (
    <div>
      <h1>My Awesome Content</h1>
      <p>Share this amazing content!</p>
      <FloatingShareButton />
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Interactive Demo
              </h2>
              <p className="text-gray-600 mb-6">
                Try the floating share button on the left side of the screen.
                On desktop, click to expand/collapse. On mobile, it will use
                the native share API.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Desktop Instructions:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Click the chevron button on the left</li>
                    <li>• Share buttons will slide out</li>
                    <li>• Click "More" to see all platforms</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Mobile Instructions:</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Click the share button</li>
                    <li>• Native share sheet will appear</li>
                    <li>• Select your preferred app</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Customization
              </h2>
              <p className="text-gray-600 mb-4">
                The component can be customized with various props and CSS classes.
                Check the documentation for advanced configuration options.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Available Props:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• shareUrl - Custom share URL</li>
                  <li>• shareTitle - Custom share title</li>
                  <li>• shareDescription - Custom share description</li>
                  <li>• mediaUrl - Custom media URL for platforms that support it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500">
              React Share Float - A modern share button component for React
            </p>
            <p className="text-sm text-gray-400 mt-2">
              MIT License • Made with ❤️ for the React community
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Share Button */}
      <FloatingShareButton />
    </div>
  );
}

export default App;

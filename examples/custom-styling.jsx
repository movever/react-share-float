import React from 'react';
import FloatingShareButton from 'react-share-float';

function CustomStylingExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Custom Styling Example
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This example shows how the floating share button works with custom page styling.
          The component automatically adapts to your page design.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Content Section
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Another Section
          </h2>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
      
      {/* 浮动分享按钮会自动适应页面样式 */}
      <FloatingShareButton />
    </div>
  );
}

export default CustomStylingExample;

import React, { useState } from 'react'
import { ReactShareFloat } from 'react-share-float'
import { cn } from './lib/utils.js'

export function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={cn(
      "p-6",
      isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    )}>
      <h1 className={cn(
        "text-3xl font-bold mb-4",
        isDark ? "text-white" : "text-gray-900"
      )}>
        react-share-float example
      </h1>
      
      <p className={cn(
        "mb-8",
        isDark ? "text-gray-300" : "text-gray-600"
      )}>
        Scroll and see the floating button.
      </p>

      <button 
        onClick={() => setIsDark(!isDark)}
        className={cn(
          "px-4 py-2 rounded-lg mb-4 transition-colors",
          isDark 
            ? "bg-blue-600 hover:bg-blue-700 text-white" 
            : "bg-gray-200 hover:bg-gray-300 text-gray-900"
        )}
      >
        Toggle Theme
      </button>

      <div className={cn(
        "h-96 rounded-lg flex items-center justify-center mb-4",
        isDark 
          ? "bg-gradient-to-b from-blue-900 to-purple-900" 
          : "bg-gradient-to-b from-blue-100 to-purple-100"
      )}>
        <p className={cn(
          isDark ? "text-gray-200" : "text-gray-700"
        )}>
          Scroll down to see the floating share button
        </p>
      </div>

      <div className={cn(
        "h-96 rounded-lg flex items-center justify-center",
        isDark 
          ? "bg-gradient-to-b from-purple-900 to-pink-900" 
          : "bg-gradient-to-b from-purple-100 to-pink-100"
      )}>
        <p className={cn(
          isDark ? "text-gray-200" : "text-gray-700"
        )}>
          Keep scrolling...
        </p>
      </div>

      <ReactShareFloat />
    </div>
  )
}



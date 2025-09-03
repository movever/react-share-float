import React from 'react'
import { cn } from './utils.js'
import { cn as cnSimple, classNames } from './utils-simple.js'

// 使用完整版 cn 函数的示例
export function ExampleWithCn() {
  const isActive = true
  const isDisabled = false
  
  return (
    <div>
      <button className={cn(
        "px-4 py-2 rounded",
        "bg-blue-500 hover:bg-blue-600",
        "text-white font-medium",
        isActive && "ring-2 ring-blue-300",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}>
        Click me
      </button>
    </div>
  )
}

// 使用简化版 cn 函数的示例
export function ExampleWithCnSimple() {
  const isActive = true
  const isDisabled = false
  
  return (
    <div>
      <button className={cnSimple(
        "px-4 py-2 rounded",
        "bg-blue-500 hover:bg-blue-600",
        "text-white font-medium",
        isActive && "ring-2 ring-blue-300",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}>
        Click me
      </button>
    </div>
  )
}

// 使用 classNames 函数的示例
export function ExampleWithClassNames() {
  const isActive = true
  const isDisabled = false
  
  return (
    <div>
      <button className={classNames({
        "px-4 py-2 rounded": true,
        "bg-blue-500 hover:bg-blue-600": true,
        "text-white font-medium": true,
        "ring-2 ring-blue-300": isActive,
        "opacity-50 cursor-not-allowed": isDisabled
      })}>
        Click me
      </button>
    </div>
  )
}

// 条件样式示例
export function ConditionalStyles() {
  const variant = 'primary'
  const size = 'large'
  
  return (
    <button className={cn(
      // 基础样式
      "font-medium rounded transition-colors",
      
      // 尺寸样式
      size === 'small' && "px-2 py-1 text-sm",
      size === 'medium' && "px-3 py-2 text-base",
      size === 'large' && "px-4 py-3 text-lg",
      
      // 变体样式
      variant === 'primary' && "bg-blue-500 hover:bg-blue-600 text-white",
      variant === 'secondary' && "bg-gray-500 hover:bg-gray-600 text-white",
      variant === 'outline' && "border border-blue-500 text-blue-500 hover:bg-blue-50"
    )}>
      Button
    </button>
  )
}

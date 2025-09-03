/**
 * 简化的类名合并函数，不依赖外部库
 * @param {...any} classes - 要合并的类名
 * @returns {string} 合并后的类名字符串
 */
export function cn(...classes) {
  return classes
    .filter(Boolean) // 过滤掉 falsy 值
    .join(' ')
    .trim()
}

/**
 * 条件类名合并函数
 * @param {Object} classMap - 类名映射对象
 * @returns {string} 合并后的类名字符串
 */
export function classNames(classMap) {
  return Object.entries(classMap)
    .filter(([key, value]) => value)
    .map(([key]) => key)
    .join(' ')
    .trim()
}

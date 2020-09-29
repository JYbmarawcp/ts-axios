const toString = Object.prototype.toString

// 类型谓词
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 如果是FormData typeof为object, 但toString.call为[object FormData]
// 所以需要一个判断普通对象的函数
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

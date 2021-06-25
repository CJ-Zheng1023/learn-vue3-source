export function isObject(target) {
  return target && typeof target === 'object'
}
export function hasOwnProperty(target, key) {
  return target.hasOwnProperty(key)
}
export function isEqual(newVal, oldVal) {
  return newVal === oldVal
}

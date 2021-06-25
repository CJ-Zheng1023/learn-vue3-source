import { isObject, hasOwnProperty, isEqual } from '../shared/utils'
import { reactive } from './reactive'
function createGetter() {
  return function get(target, key, receiver) {
    const result = Reflect.get(target, key, receiver)
    console.log('取属性：', key, '  值为：', result)
    if (isObject(result)) {
      return reactive(result)
    }
    return result
  }
}
function createSetter() {
  return function set(target, key, value, receiver) {
    const hadKey = hasOwnProperty(target, key)
    const hasChanged = !isEqual(value, target[key])
    const result = Reflect.set(target, key, value, receiver)
    if (!hadKey) {
      console.log('新增属性：', key, '  值为：', value)
    } else if (hasChanged) {
      console.log('修改属性：', key, '  值为：', value)
    }
    return result
  }
}
export const reactiveHandler = {
  get: createGetter(),
  set: createSetter()
}

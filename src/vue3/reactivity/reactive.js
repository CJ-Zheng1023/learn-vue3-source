import { isObject } from '../shared/utils'
import { reactiveHandler } from './baseHandler'
const reactiveMap = new WeakMap()
function createReactiveObject(target, baseHandler, proxyMap) {
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    console.log('this proxy is existing')
    return existingProxy
  }
  const proxy = new Proxy(target, baseHandler)
  proxyMap.set(target, proxy)
  return proxy
}
export function reactive(target) {
  if (!isObject(target)) {
    return target
  }
  return createReactiveObject(target, reactiveHandler, reactiveMap)
}

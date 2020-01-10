import store from '@/store'
import Vue from 'vue'

// 权限指令
const has = Vue.directive('has', function (el, binding) {
  // console.log(`${binding.value}：${Vue.prototype.$_has(binding.value)}`)
  if (!Vue.prototype.$_has(binding.value)) {
    setTimeout(() => el.parentNode.removeChild(el))
  }
})
export const hasPer = (perCode) => {
  if (!perCode) {
    return false
  }
  let user = store.getters.user
  let components = user.components
  // console.log(components.length)
  if (!components || components.length === 0) {
    return false
  }
  for (let i = 0; i < components.length; i++) {
    if (!components[i].path) {
      continue
    }
    if (components[i].path === perCode) {
      return true
    }
  }
  return false
}

// 权限检查
Vue.prototype.$_has = function (value) {
  return hasPer(value)
  // if (!value) {
  //   return false
  // }
  // let user = store.getters.user
  // let components = user.components
  // if (!components || components.length === 0) {
  //   return false
  // }
  // for (let i = 0; i < components.length; i++) {
  //   if (!components[i].path) {
  //     continue
  //   }
  //   if (components[i].path === value) {
  //     return true
  //   }
  // }
  // return false
}
export { has }

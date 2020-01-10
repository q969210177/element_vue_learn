import store from '@/store'
import router from '@/router'
import util from '@/utils/util'
import axios from 'axios'
import { Message } from 'element-ui'

// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((request) => {
  // console.log('request', request)
  // 先判断是否登录, 如果没有登录则直接跳转到登录
  store.dispatch('app/switchLoading')
  request.headers['X-Requested-With'] = 'XMLHttpRequest'
  // 如果是带文件提交
  if (request.method !== 'get') {
    // 去掉不需要的参数
    let data = Object.assign({}, request.data)
    if (data) {
      data.createTime = undefined
      data.creatorId = undefined
      data.creatorNmae = undefined
      data.modifyTime = undefined
      data.modifierId = undefined
      data.modifierNmae = undefined
    }
    if (request.headers[''] === 'application/json') {
      request.data = data
    } else if (request.headers['Content-Type'] === 'multipart/form-data') {
      request.data = util.parseParams(data, '', new FormData())
    } else {
      request.data = util.parseParams(data).toString()
    }
  } else {
    // get方法
    request.params = util.parseParams(request.params)
  }
  return request
})

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  store.dispatch('app/switchLoading')
  return response.data
  // 每个ajax返回的都是正常的服务， 在请求处理的时候不需要再做判断
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  store.dispatch('app/switchLoading')
  if (err && err.response) {
    Message.error(err.response.data.message)
  }
  if (!err.response || err.response.status === 401) {
    // 清理token信息
    store.dispatch('user/logout')
    router.replace('/login')
  }
  return Promise.reject(err)
})
export default axios

import request from '@/utils/request'

// 分页显示二维码列表方法 listBikeBatch
export function listBatch(data) {
  return request({
    url: '/qrcode/listBatch',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 获取城市列表的方法 listCityInfo
export function listCityInfo(data) {
  return request({
    url: '/qrcode/listCityInfo/',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 获取批次二维码详情的方法  batchInfo
export function batchInfo(data) {
  return request({
    url: '/qrcode/batchInfo/',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 下载二维码的方法 download
export function download(data) {
  return request({
    url: '/qrcode/download/',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 在新的批次号下新增二维码的方法 generateQrcode
export function generateQrcode(data) {
  return request({
    url: '/qrcode/generateQrcode/',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 在该批次下新增二维码 addQrcode
export function addQrcode(data) {
  return request({
    url: '/qrcode/addQrcode/',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 更新批次信息 updateBikebatch
export function updateBikebatch(data) {
  return request({
    url: '/qrcode/updateBikebatch/',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

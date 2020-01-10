export default {

  // 方法成熟 用于Servlet底层的参数转换
  parseParams (params, parentObjectStr = '', resultParams = new URLSearchParams()) {
    if (!resultParams && resultParams === null) {
    // if (!resultParams && resultParams === null && !(resultParams instanceof URLSearchParams)) {
      resultParams = new URLSearchParams()
    }
    if (!params || Object.keys(params).length === 0) {
      return resultParams
    }
    parentObjectStr = parentObjectStr === '' ? '' : parentObjectStr + '.'
    Object.keys(params).forEach(item => {
      if (typeof (params[item]) === 'object' && !(params[item] instanceof File)) {
        if (params[item] instanceof Array) {
          // 处理大于0的情况
          if (params[item].length > 0) {
            // 判断第一个元素是基本元素  还是 对象
            if (typeof (params[item][0]) === 'object' && !((params[item][0]) instanceof File)) {
              for (let i in params[item]) {
                this.parseParams(params[item][i], parentObjectStr + item + '[' + i + ']', resultParams)
              }
            } else {
              // 当为基本元素的时候 将 元素直接放到返回map中
              params[item].forEach(c => {
                if (params[item] != null && params[item] !== undefined && params[item] !== '') {
                  resultParams.append(parentObjectStr + item, c)
                }
              })
            }
          }
        } else {
          // 如果是对象
          this.parseParams(params[item], parentObjectStr + item, resultParams)
        }
      } else {
        // 判断值是否有效
        if (params[item] != null && params[item] !== undefined && params[item] !== '') {
          resultParams.append(parentObjectStr + item, params[item])
        }
      }
    })
    return resultParams
  },
  parseFileForm (data, newData = undefined) {
    if (!newData) {
      newData = new FormData()
    }
    Object.keys(data).forEach(item => {
      if (Object.prototype.toString.call(data[item]) === '[object Array]') {
        data[item].forEach(child => {
          if ((child && child !== 'undefined')) {
            newData.append(item, child)
          }
        })
      } else if (data[item] instanceof Object) {
        this.parseFileForm(data[item], newData)
      } else {
        if (data[item] && data[item] !== null && data[item] !== undefined) {
          newData.append(item, data[item])
        }
      }
    })
    return newData
  },
  capitalRMB (n) {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
      return 'NAN'
    }
    let unit = '千百拾亿千百拾万千百拾元角分'
    let str = ''
    n += '00'
    let p = n.indexOf('.')
    if (p >= 0) {
      n = n.substring(0, p) + n.substr(p + 1, 2)
    }
    unit = unit.substr(unit.length - n.length)
    for (let i = 0; i < n.length; i++) {
      str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i)
    }
    return str.replace(/零(千|百|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|元)/g, '$1').replace(/(亿)万|壹(拾)/g, '$1$2').replace(/^元零?|零分/g, '').replace(/元$/g, '元整')
  },
  dateFormat (date, fmt) {
    let o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },
  /**
   * 计算年份->计算月份->计算天数
   * @param sDate1
   * @param sDate2
   * @returns {{d: number, y: number, m: number}}
   */
  getDiffYmdBetweenDate (sDate1, sDate2) {
    var fixDate = function (sDate) {
      var aD = sDate.split('-')
      for (var i = 0; i < aD.length; i++) {
        aD[i] = fixZero(parseInt(aD[i]))
      }
      return aD.join('-')
    }
    var fixZero = function (n) {
      return n < 10 ? '0' + n : n
    }
    var fixInt = function (a) {
      for (var i = 0; i < a.length; i++) {
        a[i] = parseInt(a[i])
      }
      return a
    }
    var getMonthDays = function (y, m) {
      var aMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
        aMonthDays[2] = 29
      }
      return aMonthDays[m]
    }
    // var checkDate = function (sDate) { }
    var y = 0
    var m = 0
    var d = 0
    var sTmp
    var aTmp
    sDate1 = fixDate(sDate1)
    sDate2 = fixDate(sDate2)
    if (sDate1 > sDate2) {
      sTmp = sDate2
      sDate2 = sDate1
      sDate1 = sTmp
    }
    var aDate1 = sDate1.split('-')
    aDate1 = fixInt(aDate1)
    var aDate2 = sDate2.split('-')
    aDate2 = fixInt(aDate2)
    // 计算相差的年份
    /* aTmp = [aDate1[0]+1,fixZero(aDate1[1]),fixZero(aDate1[2])];
    while(aTmp.join('-') <= sDate2){
        y++;
        aTmp[0]++;
    } */
    y = aDate2[0] - aDate1[0]
    if (sDate2.replace(aDate2[0], '') < sDate1.replace(aDate1[0], '')) {
      y = y - 1
    }
    // 计算月份
    aTmp = [aDate1[0] + y, aDate1[1], fixZero(aDate1[2])]
    while (true) {
      if (aTmp[1] === 12) {
        aTmp[0]++
        aTmp[1] = 1
      } else {
        aTmp[1]++
      }
      if (([aTmp[0], fixZero(aTmp[1]), aTmp[2]]).join('-') <= sDate2) {
        m++
      } else {
        break
      }
    }
    // 计算天数
    aTmp = [aDate1[0] + y, aDate1[1] + m, aDate1[2]]
    if (aTmp[1] > 12) {
      aTmp[0]++
      aTmp[1] -= 12
    }
    while (true) {
      if (aTmp[2] === getMonthDays(aTmp[0], aTmp[1])) {
        aTmp[1]++
        aTmp[2] = 1
      } else {
        aTmp[2]++
      }
      sTmp = ([aTmp[0], fixZero(aTmp[1]), fixZero(aTmp[2])]).join('-')
      if (sTmp <= sDate2) {
        d++
      } else {
        break
      }
    }
    return { y: y, m: m, d: d }
  }
}

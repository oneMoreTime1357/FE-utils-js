const dateFormat = (d, fmt) => {
  if (!d || !fmt) {
    return ''
    // throw new Error('lack date or format')
  }
  // 转换毫秒和字符串为时间对象
  if (typeof d === 'string' || typeof d === 'number') {
    d = new Date(d)
  }
  // d是NaN的时候返回空
  if (isNaN(d)) return ''
  const dateObj = {
    'M+': d.getMonth() + 1, // 月份
    'D+': d.getDate(), // 日
    'h+': d.getHours(), // 小时
    'm+': d.getMinutes(), // 分
    's+': d.getSeconds(), // 秒
    'Q+': Math.floor((d.getMonth() + 3) / 3), // 季度
    'S': d.getMilliseconds() // 毫秒
  }

  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in dateObj) {

    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (dateObj[k]) : (('00' + dateObj[k]).substr(('' + dateObj[k]).length)))
    }
  }
  return fmt
}

const UTCto0800 = (time) => {
  let d = new Date(time)
  return d.getTime() + (d.getTimezoneOffset() * 60 * 1000)
}

const UTCto00 = (time) => {
  let date = new Date(time)
  var y = date.getUTCFullYear()
  var m = date.getUTCMonth()
  var d = date.getUTCDate()
  var h = date.getUTCHours()
  var M = date.getUTCMinutes()
  var s = date.getUTCSeconds()
  return Date.UTC(y, m, d, h, M, s)
}

export { dateFormat, UTCto0800, UTCto00 }

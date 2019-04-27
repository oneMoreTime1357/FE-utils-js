let domainHost = ''
var cookie = {
  // 写cookies
  setCookie: function setCookie (name, value, domain, expiredays) {
    var exdate = new Date(expiredays)
    var expires = isNaN(exdate) ? '' : ';expires=' + exdate.toGMTString()
    document.cookie = `${name}=${escape(value)}${expires};path=/;domain=.${domain}`
  },

  // 读取cookies
  getCookie: function getCookie (name) {
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    var arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return ''
    }
  },

  // 删除cookies
  delCookie: function delCookie (name, domain) {
    var exp = new Date()
    var cval = ' '
    exp.setTime(exp.getTime() - 100)

    document.cookie = `${name}=${cval};expires=${exp.toGMTString()};path=/;domain=.${domain}`
  },

  // 清除所有的cookie
  clearCookie: function clearCookie () {
    var keys = document.cookie.split(';')
    if (keys) {
      for (let i = keys.length; i--;) {
        var exp = new Date()
        exp.setTime(exp.getTime() - 100)
        document.cookie = keys[i].split('=')[0] + '=" ";expires=' + exp.toGMTString() + ';path=/;domain=.' + domainHost
      }
    }
  }
}

export default cookie

// 动态加载JS和CSS文件，js代码
const dynamicLoading = {
  css: function (path, callback) {
    let haveJs = false
    var aScript = document.getElementsByTagName('link')
    for (let i = 0, len = aScript.length; i < len; i++) {
      if (aScript[i].getAttribute('href') === path) {
        haveJs = true
        break
      }
    }

    if (!haveJs) {
      let oCss = document.createElement('link')
      oCss.type = 'text/css'
      oCss.rel = 'stylesheet'
      oCss.setAttribute('href', path)
      document.head.appendChild(oCss)

      if (oCss.readyState) { // IE
        oCss.onreadystatechange = function () {
          if (oCss.readyState === 'loaded' || oCss.readyState === 'complete') {
            oCss.onreadystatechange = null
            callback && callback()
          }
        }
      } else { // Others
        oCss.onload = function () {
          callback && callback()
        }
      }

      oCss.onerror = function (event) {
        console.error('The css ' + event.target.src + ' is not accessible.')
      }
    } else {
      callback && callback()
    }
  },
  js: function (path, callback) {
    let haveJs = false
    var aScript = document.getElementsByTagName('script')
    for (let i = 0, len = aScript.length; i < len; i++) {
      if (aScript[i].getAttribute('src') === path) {
        haveJs = true
        break
      }
    }

    if (!haveJs) {
      let oScript = document.createElement('script')
      oScript.type = 'text/javascript'
      oScript.setAttribute('src', path)
      document.head.appendChild(oScript)

      if (oScript.readyState) { // IE
        oScript.onreadystatechange = function () {
          if (oScript.readyState === 'loaded' || oScript.readyState === 'complete') {
            oScript.onreadystatechange = null
            callback && callback()
          }
        }
      } else { // Others
        oScript.onload = function () {
          callback && callback()
        }
      }

      oScript.onerror = function (event) {
        console.error('The script ' + event.target.src + ' is not accessible.')
      }
    } else {
      callback && callback()
    }
  }
}

export default dynamicLoading

前端经常使用到的js库整理

#### cookie.js

cookie使用方式

```js
// 使用ES6的方式引入
import Cookie from './utils/cookie'

// 在cookie中设置token
let token = 'xxxxxrwwxxxxxx'
Cookie.setCookie('token', token) // 后面还可以将域名 过期时间传上

// 获取token
Cookie.getCookie('token')
```

#### date.js

日期格式化

```js
// 引入
import date from './utils/date'

let fmtDate = date.dateFormat(1556369425181, 'MM:hh YYYY')
console.log(fmtDate)
```
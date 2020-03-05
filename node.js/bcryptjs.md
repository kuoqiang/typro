#### bcryptjs

```js
npm install bcryptjs		//下载加密模块

const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)	//生成盐
const result = bcrypt.hashSync('123456',salt) //使用随机字符串加密

const isFlag = bcrypt.compareSync(password,数据库密码)	//密码比对
```


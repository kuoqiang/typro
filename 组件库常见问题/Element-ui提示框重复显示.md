#### 对原有的提示框组件重写

```js
//newMessage.js

import { Message } from "element-ui";

const showMessage = Symbol("showMessage");

let messageItem = null;

class ResetMessage {
  [showMessage](type, options, only) {
    if (messageItem && only) {
      messageItem.close();
    }

    messageItem = Message[type](options);
  }

  success(options, only = true) {
    this[showMessage]("success", options, only);
  }

  error(options, only = true) {
    this[showMessage]("error", options, only);
  }

  warning(options, only = true) {
    this[showMessage]("warning", options, only);
  }

  info(options, only = true) {
    this[showMessage]("info", options, only);
  }
}

export const message = new ResetMessage();

```



#### 在main.js中挂载到vue原型

```js
import Vue from "vue";
import { message } from "@/until/newMessage.js";
Vue.prototype.$message = message; //重写message提示框
```


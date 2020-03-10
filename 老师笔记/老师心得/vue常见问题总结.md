###### 组件间通信(父子，兄弟，跨级)

1. 父子组件之前传值， props/$emit

   - 子组件向父组件传值，是子组件$emit发送一个事件，父组件通过v-on的形式监听这个事件

2. 事件总线(`EventBus`)  $emit/$on

   + 通过一个空的`Vue`实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。当我们的项目比较大时，可以选择更好的状态管理解决方案`vuex`吗

     ```
     var Event=new Vue();
     Event.$emit(事件名,数据);
     Event.$on(事件名,data => {});
     ```

3. vuex

   1. 使用场景： 构建是一个中大型单页应用,(小项目使用事件总线即可)

   2. 几个常见概念  state, getters, mutations, commit, actions, dispatch

      ```
      Action对State的异步操作，并通过在Action提交Mutaion变更状态
      this.$store.dispatch('action 名称', data1)
      注意一点 action里面提交的是mutation， 例子：context.commit('increment')
      
      Mutaion是改变State的唯一途径，并且只能是同步操作
      this.$store.commit('mutation 名称', {payload载荷})
      
      Getter 的作用与 filters 有一些相似，可以将 State 进行过滤后输出
      ```

      

   3. 与localStorage在项目里面的使用

      1. `vuex`存储的数据在内存里面，浏览器一刷新数据就变为了初始状态
      2. 项目里面的做法应该在`vuex`里数据改变的时候把数据拷贝一份保存到`localStorage`里面，刷新之后，如果`localStorage`里有保存的数据，取出来再替换store里的state

4. provide / inject API

5. $attr/$listeners

6. $parent,$children, ref



###### 如何给第三方/自定义组件绑定原生事件

1. 错误例子以及原理 （关键词： vue组件绑定原生事件）

   ```html
   <el-input placeholder="请输入特定消费金额 " @mouseover="test()"></el-input>
   <router-link :to="item.menuUrl" @click="toggleName=''"></router-linkrouter-link>
   
   // 上面这两种都是错误的例子，都没有触发事件
   // 正确的做法应该是加一个.native事件修饰符
   <router-link :to="item.menuUrl" @click.native="toggleName=''"></router-link>
   //如果不加 .native， Vue把它当做组件的自定义事件了，而组件的自定义事件的触发需要使用this.$emit('click')
   // 在元素上绑定的事件，监听的是原生事件，在组件上绑定的事件，监听的是自定义事件，需要用this.$emit()来触发
   ```

   

###### keepAlive使用场景

1. `https://juejin.im/post/5b407c2a6fb9a04fa91bcf0d#heading-0`
2. <https://www.jianshu.com/p/0b0222954483>



###### 在Vue中使用第三方库

1. 常见的几种情况

   ```
   // 推荐这种
   import moment from 'moment';
   Object.defineProperty(Vue.prototype, '$moment', { value: moment });
   
   // 不推荐下面这种
   Vue.propetype.$http = moment;
   ```

2. 写一个插件,给第三方使用

   ```
   import axios from 'axios';
   // 插件要对外暴露一个 install 方法, 该方法的第一个参数是 Vue 的构造函数
   export default {
     install: function(Vue,name = '$http') { //提供一个可选的名字， 因为$http是vue-resource提供的通用的名字，可能有些人不喜欢
       Object.defineProperty(Vue.prototype, '$http', { value: axios });
     }
   }
   
   // 使用自定义插件
   import AxiosPlugin from './axios.js';
   Vue.use(AxiosPlugin, '$axios');
   
   this.$http...
   this.$axios...
   ```

3. `<https://juejin.im/post/591aa14f570c35006961acac#heading-3>`

4. `<https://juejin.im/post/5c92ff94f265da6128275a85>`

------

###### vue参数序列化

1. 在vue里面是通过一个qs的库来实现

2. 自己实现的代码，就是将对象装换为&形式拼接的字符串， 就是参数的序列化和反序列化

   ```javascript
   // 将json格式的数据 编码转换为&符号拼接的形式
   var obj = {
     name: '张三',
     age: 25
   }
   
   function objToUrl(obj){
     let arr = [];
     for(var key in obj){
       if(obj.hasOwnProperty(key)){
         console.log(key, obj[key])
         // arr.push(key + '=' + obj[key])
         arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
       }
     }
     return arr.join('&')
   }
   
   console.log(objToUrl(obj))
   ```




###### 版本号的问题

版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

1. 主版本号：当你做了不兼容的 API 修改，
2. 次版本号：当你做了向下兼容的功能性新增，
3. 修订号：当你做了向下兼容的问题修正。

先行版本号及版本编译元数据可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

<https://semver.org/lang/zh-CN/>
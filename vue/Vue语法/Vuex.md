#### Vuex是什么

```
Vuex是实现组件全局状态管理的一种机制，可以方便的实现组件之间数据共享
```



#### 使用Vuex统一管理状态的好处

```
能够在vuex中集中管理共享的数据，易于开发和后期维护
能够高效地实现组件之间的数据共享，提高开发效率
存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步
```



#### 引入Vuex

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    //用于展示Store中的数据
    state:{ 
        count:0
    },
    
    //用于改变Store中的数据，可以集中监控数据的变化
    mutations:{	
        //mutations中不能执行异步操作，会导致数据变化不能被监控
        add(state,num){  //相当于一个函数，执行它来达到改变数据的目的
			state.count++
        }
    },
    
    //用于处理异步任务
    actions:{
		//action中也可以拿到state,但是为了让数据变化能够被监控				//还是得用mutations
        addAsync(context){
            setTimeout(()=>{
				context.commit('add')
            },1000)
        }
    }
    
})

外部通过 this.$store.commit('add'，3) 来触发mutations中的函数
第一个参数为mutations的函数名，第二个值传递给函数的自定义参数

外部通过 this.$store.dispatch('addAsync') 来触发actions中的函数
```







#### state第二种方式

```js
import { mapState } from 'vuex'

在store.js中
state:{ 
        count:0
    },

export default {
    data(){
        return {}
    },
    computed:{
		...mapState(['count'])
    }
}
```



#### mutations第二种方式

```js
import { mapMutations } from 'vuex'

在store.js中
 mutations:{	
        add(state,num){  
			state.count++
        }
    }


export default {
    data(){
        return {}
    },
    methods:{
        ...mapMutations['add'],
        handel(){
            this.add()
        }
    }
}
```



#### actions第二种方式

```js
import { mapActions } from 'vuex'

在store.js中
 actions:{
        addAsync(context){
            setTimeout(()=>{
				context.commit('add')
            },1000)
        }
    }

export default {
    data(){
        return {}
    },
    methods:{
        ...mapActions(['addAsync']),
        handel(){
            this.addAsync()
        }
    }
}
```





#### Getter

```js
	Getter用于对Store中的数据进行加工处理形成新的数据，并且Store中的数据发生变化，Getter的数据也会跟着变化,类似于computed计算属性
	const store = new Vuex.store({
        state:{
            count:0
        },
        getters:{
            showNum:state => {
                return '当前数据为' + state.count
            }
        }
    })

    外部通过 this.$store.getters.名称 拿到对应的值
    
    
    第二种方法
    export default {
    data(){
        return {}
    },
    compured:{
        ...mapGetters(['showNum']),
       
    }
}

```


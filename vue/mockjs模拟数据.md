#### Vue中使用mockjs

```js
//下载依赖模块
 npm install mockjs

import Mock from 'mockjs'


//生成随机字符串
	const data = Mock.mock({ 
        'content':'@cword(3,10)',
        //生成一个属性名为content,长度3-10之间的字符串
        
        'title':'@ctitle()',
        //生成一个属性名为title的随机长度标题
        
        'sentence':'@csentence()',
        //生成一个属性名为csentence的随机长度句子
        
        'content':'@word(3,10)',
        //生成一个3-10长度的英文字符
    })
    
//生成数字
    const data = Mock.mock({
		'number|80':1,
        //生成一个值为80的数字
        
        'number|1-999':1,
        //生成一个值在1-999之间的数字
    })
    
//常用的数据
    const data = Mock.mock({
		'name':'@cname()',		//生成一个名字
        
        'id':'@id()',			//生成一个身份证号
        
        'city':'@city(true)',	//生成一个随机地址,加true返回省市信息，不加									true只返回市信息
        
        'img':'@image("200*200","#fff","#000","png","哈哈哈")',
        //生成一个图片地址，参数分别为图片大小、图片背景色、文字颜色、图片格式、			文字内容
        
        'date':'@date(yyyy-MM-dd hh:mm:ss)'
        //生成一个随机时间，不定义格式默认为年月日
    })
```



#### 生成一个随机数组对象

```js
	const data = Mock.mock({
		'list|5-8':[//随机5-8个对象
            {
                id:'@increment(1)',
                name:'@cname()',
                city:'@city()',
                date:'@date()'
            }
        ]
	})
```



#### 实际开发用法，配合拦截请求使用

```js
	const dataList = Mock.mock({
        'list|50':[
            {
                id:'@increment(1)',
                name:'@cname()',
                city:'@city()',
                date:'@date()'
            }
        ]
    })

	Mock.mock('/api/get/news','get',()=>{
        return {
				status:200,
        		msg:'获取数据成功'
            	list:dataList
        }
    })
```


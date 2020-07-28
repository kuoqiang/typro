#### prerender预渲染

```react
1.搭建一个CSR客户端渲染
2.搭建中间层服务器(使用express或koa2搭建中间层服务器,托管静态资源)
3.prerender服务器(纯粹给搜索引擎访问，实现seo优化，无法解决白屏问题)
	yarn add prerender
    const prerender = require("prerender")
    const server = prerender({
        port:6000,	//更改prerender的端口
        
    })
    
    server.use(prerender.removeScriptTags())
	server.start()
    
    访问时 localhost:6000/render?真实服务器地址

4.使用ngnix反向代理服务器,普通用户访问时，反向代理先向node服务器请求，然后将返回的数据响应给浏览器。如果是搜索引擎访问时，则请求prerender服务器，将响应的html文本响应给爬虫。
```





#### 代码

```react
App.js
	function App(){
        const [data,setDate] = useState("")
        useEffect(()=>{
            fetch("/api/test")
                .then(resp => resp.text())
                .then(resp ={ 
                		setData(resp) 
            		})
        },[])
            return (<div>{data}</div>)
    }
                  

node的index.js
     const express = require("express")
     const history = require("connect-history-api-fallback")
     
     const app = express();
     app.use(
     	history({
            htmlAcceptHearders:["text/html"]
        })
     )
        
    app.use(express.static("public"))
    app.get("/api/test",(req,res)=>{
        res.send("data from server")
    })
    
    app.listen(5010)
```


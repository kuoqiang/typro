#### 文件上传持续触发事件

```js
file.onchange = function(){
    //文件上传过程中持续触发onprogress事件
    xhr.upload.onprogress = function(ev){
        //将上传进度转换为百分数
        bar.style.width = (ev.loaded/ev.total) *100 +'%';
    }
}
//ev.loaded   当前上传的文件大小
//ev.total    文件总大小
```





#### 上传图片即时预览

```js
	form.parse(req,(err,fields,files)=>{
        res.send(files.attrName.path)
    })
```


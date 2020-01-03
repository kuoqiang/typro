```
$.ajax({
	type:'post',
	url:'http://localhose:8000',
	headers:{
		'Content-type':"application/json"
	},
	success:function(res){
		console.log('success')
	},
	error:function(err){
		console.log(err)
	}
})
```


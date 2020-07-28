####  图片上传

```react
	import React from 'react'
	import styles from './index.css'
	import { Upload, Button } from 'antd'

	export default function index() {
		return (
        	<Upload listType="picture-card" showUploadList={false}>
            	<Button icon="upload" >点击上传</Button>
            </Upload>
        )
    }


css:
	object-fit: cover   //图片自适应，防止图片失真
```


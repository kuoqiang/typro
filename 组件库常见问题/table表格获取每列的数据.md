#### 获取每列数据

```vue
<el-table :data="数据">
		<el-table-column type="index"></el-table-column>
    	<el-table-column label="姓名" prop="username"></el-table-colunm>
    
    	<el-table-column label="状态" prop="state">
    		<template slot-scope="scope">
					{{scope.row}}
			</template>
    	</el-table-column>
    
    	<el-table-column label="操作">
    		<template slot-scope="scope">
					<el-button>删除</el-button>
					<el-button>修改</el-button>
					<el-button>分配</el-button>
			</template>
    	</el-table-column>
</el-table>


//通过scope.row可以拿到当前行的列表数据
```


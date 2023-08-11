## 树形可搜索组件
### 简介
* 本项目使用uni_ui项目，涉及到`uni-easyinput`插件，可自行安装，树形可搜索组件可搭配弹窗使用，也可以手动修改插件内展示方式变为页面树形组件，树形组件的数据格式都是相同的嵌套数据，可参考下面数据格式

* 注意：必须有id、name(id可通过valueKey来配置为其它键值，如value)字段，且唯一

* demo仓库：https://github.com/flexyw/tree-search.git

* 项目截图

* ![](C:\Users\Administrator\Desktop\tree-search\static\插件截图.png)

  ```js
  let list = [
  	{
  		"id":"4c4bf47d76",
  		"name":"美团",
  		"children":[
  			{
  				"id":"SC-45393",
  				"name":"北林区民和街1311号宜宾咨美化妆品公司"
  			}]
  	},
  	{
  		"id":"ae22a83a0c",
  		"name":"饿了么",
  		"children":[
  			{
  				"id":"SC-45391",
  				"name":"天天向上公司"
  			}]
  	},
  	{
  		"id":"ae22a83a0c55",
  		"name":"朴朴",
  		"children":[
  			{
  				"id":"SC-4539122",
  				"name":"日不落美化妆品公司"
  			},
  			{
  				"id":"SC-4895122",
  				"name":"人工牛黄公司"
  			}]
  	}
  ]
  ```

  

### 使用方法
在 `script` 中引入组件
``` javascript
	import treeSearch from "@/components/tree-search/tree-search.vue"
	export default {
		components: {
			treeSearch
		}
```
在 `template` 中使用组件
``` javascript
	 <tree-search ref="treePicker" :multiple='true' title="选择系统/门店" @select-change="selectChangeList"
      @iconClickChange="iconClickChange" @cancel="cancel" :localdata="listData" valueKey="value" textKey="label"
      children="children" />
```
在 `script` 中定义打开方法，成功回调，取消回调，数据搜索展示
``` javascript
		methods: {
			// 打开树形组件
			showPicker() {
				this.$refs.treePicker.show();
			}，
		}

```
数据搜索处理方法`fuzzySearch`

```json
      // 模糊搜索数据进行展示
      fuzzySearch(value, list) {
        let filteredList = [];
        for (let item of list) {
          let filteredItem = {
            id: item.id,
            name: item.name,
            children: []
          };
          if ((item.id.includes(value) || item.name.includes(value)) && !this.isDuplicate(item, filteredList)) {
            filteredItem.children = item.children;
            filteredList.push(filteredItem);
          }
          if (item.children && item.children.length > 0) {
            let filteredChildren = this.fuzzySearch(value, item.children);
            filteredItem.children = this.mergeChildren(filteredItem.children, filteredChildren, filteredList);
            if (filteredItem.children.length > 0 && !this.isDuplicate(item, filteredList)) {
              filteredList.push(filteredItem);
            }
          }
        }
        return filteredList;
      },
      // 辅助函数判断当前节点是否在过滤后的列表中已存在
      isDuplicate(item, filteredList) {
        for (let filteredItem of filteredList) {
          if (filteredItem.id === item.id) {
            return true;
          }
        }
        return false;
      },
      // 辅助函数合并子节点
      mergeChildren(originalChildren, filteredChildren, filteredList) {
        let mergedChildren = [];

        for (let child of originalChildren) {
          if (!this.isDuplicate(child, filteredList)) {
            mergedChildren.push(child);
          }
        }

        for (let child of filteredChildren) {
          if (!this.isDuplicate(child, mergedChildren) && !this.isDuplicate(child, filteredList)) {
            mergedChildren.push(child);
          }
        }
        return mergedChildren;
      },
```



在 `template` 中调用打开

``` javascript
	 <button type="default" plain="true" @click="showPicker">打开树形搜索组件弹窗</button>
```

### 属性
|属性名|类型|默认值|说明|
|:-|:-:|:--:|-:|
|sourceList|Array|[]|源数据，目前支持tree结构，|
|valueKey|String|id|指定 Object 中 key 的值作为节点数据id|
|textKey|String|name|指定 Object 中 key 的值作为节点显示内容|
|childrenKey|String|children|指定 Object 中 key 的值作为节点子集|
|multiple|Boolean|false|是否多选，默认单选|
|selectParent|Boolean|true|是否可以选父级，默认可以|
|title|String| |标题|
|titleColor|String||标题颜色|
|confirmColor|String|#0055ff|确定按钮颜色|
|cancelColor|String|#757575|取消按钮颜色|
|switchColor|String|#666|节点切换图标颜色|
|border|Boolean|false|是否有分割线，默认无|



### 方法
|方法名|参数|默认值|说明|
|:-|:-:|:--:|-:|
|show()| | |显示选择器|
|hide()| | |隐藏选择器|

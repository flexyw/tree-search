<template>
  <view class="container">
    <button type="default" plain="true" @click="showPicker">打开树形搜索组件弹窗</button>
    <uni-easyinput v-model="value" placeholder="选中的数据展示" />
    <tree-search ref="treePicker" :multiple='true' title="选择系统/门店" @select-change="selectChangeList"
      @iconClickChange="iconClickChange" @cancel="cancel" :sourceList="listData" valueKey="value" textKey="label"
      children="children" />
  </view>
</template>

<script>
  import treeSearch from '../../components/tree-search/tree-search.vue'
  export default {
    components: {
      treeSearch
    },
    data() {
      return {
        value: '',
        // listData 为处理后的数据格式
        listData: [],
        originalList: []
      }
    },
    methods: {

      onShow() {
        // 获取处理后满足树形结构的数据
        this.listData = [{
              id: "4c4bf47d76",
              name: "美团",
              children: [{
                id: "SC-45393",
                name: "北林区民和街1311号宜宾咨美化妆品公司"
              }]
            },
            {
              id: "ae22a83a0c",
              name: "饿了么",
              children: [{
                id: "SC-45391",
                name: "天天向上公司"
              }]
            },
            {
              id: "ae22a83a0c55",
              name: "朴朴",
              children: [{
                  id: "SC-4539122",
                  name: "日不落美化妆品公司",
                },
                {
                  id: "SC-4895122",
                  name: "人工牛黄公司",
                }
              ]
            }
          ],
          this.originalList = JSON.parse(JSON.stringify(this.listData)); // 保存原始的树型数据
      },
      // 打开    
      showPicker() {
        this.$refs.treePicker.show()
      },
      // 确认回调展示数据
      selectChangeList(ids, names) {
        this.value = ''
        this.value = names;
        console.log(ids, names)
      },
      // 取消按钮回调
      cancel() {
        this.listData = this.fuzzySearch('', this.listData);
      },
      // 搜索
      // 也可以watch监听输入框为空的时候自动重置数据
      iconClickChange(val) {
        console.log(val);
        if (val === '') {
          this.listData = JSON.parse(JSON.stringify(this.originalList)); // 恢复原始的树型数据
        } else {
          this.listData = this.fuzzySearch(val, this.listData);
        }
      },
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
    }
  }
</script>

<style>
  .container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;
  }
</style>
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tree-search/tree-search"],{

/***/ 43:
/*!*****************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/tree-search/components/tree-search/tree-search.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-search.vue?vue&type=template&id=4f4d2e74&scoped=true& */ 44);
/* harmony import */ var _tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-search.vue?vue&type=script&lang=js& */ 46);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tree_search_vue_vue_type_style_index_0_id_4f4d2e74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-search.vue?vue&type=style&index=0&id=4f4d2e74&scoped=true&lang=css& */ 48);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f4d2e74",
  null,
  false,
  _tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/tree-search/tree-search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/*!************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/tree-search/components/tree-search/tree-search.vue?vue&type=template&id=4f4d2e74&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tree-search.vue?vue&type=template&id=4f4d2e74&scoped=true& */ 45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_template_id_4f4d2e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 45:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/tree-search/components/tree-search/tree-search.vue?vue&type=template&id=4f4d2e74&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniEasyinput: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput */ "uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue */ 50))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 46:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/tree-search/components/tree-search/tree-search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tree-search.vue?vue&type=script&lang=js& */ 47);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 47:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/tree-search/components/tree-search/tree-search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 = {
  emits: ['select-change'],
  name: "ba-tree-picker",
  props: {
    valueKey: {
      type: String,
      default: 'id'
    },
    textKey: {
      type: String,
      default: 'name'
    },
    children: {
      type: String,
      default: 'children'
    },
    sourceList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    localTreeList: {
      //在已经格式化好的数据
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectedData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    title: {
      type: String,
      default: ''
    },
    multiple: {
      // 是否可以多选
      type: Boolean,
      default: true
    },
    selectParent: {
      //是否可以选父级
      type: Boolean,
      default: true
    },
    confirmColor: {
      // 确定按钮颜色
      type: String,
      default: '' // #0055ff
    },

    cancelColor: {
      // 取消按钮颜色
      type: String,
      default: '' // #757575
    },

    titleColor: {
      // 标题颜色
      type: String,
      default: '' //
    },

    switchColor: {
      // 节点切换图标颜色
      type: String,
      default: '' // #666
    },

    border: {
      // 是否有分割线
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showDialog: false,
      treeList: [],
      value: ''
    };
  },
  computed: {},
  methods: {
    show: function show() {
      this.showDialog = true;
    },
    _hide: function _hide() {
      this.showDialog = false;
      this.value = '';
    },
    _cancel: function _cancel() {
      this._hide();
      this.$emit("cancel", '');
    },
    _confirm: function _confirm() {
      //多选
      var selectedList = []; //如果子集全部选中，只返回父级 id
      var selectedNames;
      var currentLevel = -1;
      this.treeList.forEach(function (item, index) {
        if (currentLevel >= 0 && item.level > currentLevel) {} else {
          if (item.checkStatus === 2) {
            currentLevel = item.level;
            selectedList.push(item.id);
            selectedNames = selectedNames ? selectedNames + ' / ' + item.name : item.name;
          } else {
            currentLevel = -1;
          }
        }
      });
      //console.log('_confirm', selectedList);
      this._hide();
      this.$emit("select-change", selectedList, selectedNames);
    },
    iconClick: function iconClick() {
      this.$emit("iconClickChange", this.value);
    },
    //格式化原数据（原数据为tree结构）
    _formatTreeData: function _formatTreeData() {
      var _this = this;
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var parentItem = arguments.length > 2 ? arguments[2] : undefined;
      var isShowChild = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var nextIndex = 0;
      var parentId = -1;
      var initCheckStatus = 0;
      if (parentItem) {
        nextIndex = this.treeList.findIndex(function (item) {
          return item.id === parentItem.id;
        }) + 1;
        parentId = parentItem.id;
        if (!this.multiple) {
          //单选
          initCheckStatus = 0;
        } else initCheckStatus = parentItem.checkStatus == 2 ? 2 : 0;
      }
      list.forEach(function (item) {
        var isLastLevel = true;
        if (item && item[_this.children]) {
          var children = item[_this.children];
          if (Array.isArray(children) && children.length > 0) {
            isLastLevel = false;
          }
        }
        var itemT = {
          id: item.id,
          name: item.name,
          level: level,
          isLastLevel: isLastLevel,
          isShow: isShowChild,
          isShowChild: false,
          checkStatus: initCheckStatus,
          orCheckStatus: 0,
          parentId: parentId,
          children: item[_this.children],
          childCount: item[_this.children] ? item[_this.children].length : 0,
          childCheckCount: 0,
          childCheckPCount: 0
        };
        if (_this.selectedData.indexOf(itemT.id) >= 0) {
          itemT.checkStatus = 2;
          itemT.orCheckStatus = 2;
          itemT.childCheckCount = itemT.children ? itemT.children.length : 0;
          _this._onItemParentSelect(itemT, nextIndex);
        }
        _this.treeList.splice(nextIndex, 0, itemT);
        nextIndex++;
      });
      console.log(this.treeList);
    },
    // 节点打开、关闭切换
    _onItemSwitch: function _onItemSwitch(item, index) {
      // console.log(item)
      //console.log('_itemSwitch')
      if (item.isLastLevel === true) {
        return;
      }
      item.isShowChild = !item.isShowChild;
      if (item.children) {
        this._formatTreeData(item.children, item.level + 1, item);
        item.children = undefined;
      } else {
        this._onItemChildSwitch(item, index);
      }
    },
    _onItemChildSwitch: function _onItemChildSwitch(item, index) {
      //console.log('_onItemChildSwitch')
      var firstChildIndex = index + 1;
      if (firstChildIndex > 0) for (var i = firstChildIndex; i < this.treeList.length; i++) {
        var itemChild = this.treeList[i];
        if (itemChild.level > item.level) {
          if (item.isShowChild) {
            if (itemChild.parentId === item.id) {
              itemChild.isShow = item.isShowChild;
              if (!itemChild.isShow) {
                itemChild.isShowChild = false;
              }
            }
          } else {
            itemChild.isShow = item.isShowChild;
            itemChild.isShowChild = false;
          }
        } else {
          return;
        }
      }
    },
    // 节点选中、取消选中
    _onItemSelect: function _onItemSelect(item, index) {
      var _this2 = this;
      //console.log('_onItemSelect')
      //console.log(item)
      if (!this.multiple) {
        //单选
        item.checkStatus = item.checkStatus == 0 ? 2 : 0;
        this.treeList.forEach(function (v, i) {
          if (i != index) {
            _this2.treeList[i].checkStatus = 0;
          } else {
            _this2.treeList[i].checkStatus = 2;
          }
        });
        var selectedList = [];
        var selectedNames;
        selectedList.push(item.id);
        selectedNames = item.name;
        this._hide();
        this.$emit("select-change", selectedList, selectedNames);
        return;
      }
      var oldCheckStatus = item.checkStatus;
      switch (oldCheckStatus) {
        case 0:
          item.checkStatus = 2;
          item.childCheckCount = item.childCount;
          item.childCheckPCount = 0;
          break;
        case 1:
        case 2:
          item.checkStatus = 0;
          item.childCheckCount = 0;
          item.childCheckPCount = 0;
          break;
        default:
          break;
      }
      //子节点 全部选中
      this._onItemChildSelect(item, index);
      //父节点 选中状态变化
      this._onItemParentSelect(item, index, oldCheckStatus);
    },
    _onItemChildSelect: function _onItemChildSelect(item, index) {
      //console.log('_onItemChildSelect')
      var allChildCount = 0;
      if (item.childCount && item.childCount > 0) {
        index++;
        while (index < this.treeList.length && this.treeList[index].level > item.level) {
          var itemChild = this.treeList[index];
          itemChild.checkStatus = item.checkStatus;
          if (itemChild.checkStatus == 2) {
            itemChild.childCheckCount = itemChild.childCount;
            itemChild.childCheckPCount = 0;
          } else if (itemChild.checkStatus == 0) {
            itemChild.childCheckCount = 0;
            itemChild.childCheckPCount = 0;
          }
          // console.log('>>>>index：', index, 'item：', itemChild.name, '  status：', itemChild
          // 	.checkStatus)
          index++;
        }
      }
    },
    _onItemParentSelect: function _onItemParentSelect(item, index, oldCheckStatus) {
      //console.log('_onItemParentSelect')
      //console.log(item)
      var parentIndex = this.treeList.findIndex(function (itemP) {
        return itemP.id == item.parentId;
      });
      //console.log('parentIndex：' + parentIndex)
      if (parentIndex >= 0) {
        var itemParent = this.treeList[parentIndex];
        var count = itemParent.childCheckCount;
        var oldCheckStatusParent = itemParent.checkStatus;
        if (oldCheckStatus == 1) {
          itemParent.childCheckPCount -= 1;
        } else if (oldCheckStatus == 2) {
          itemParent.childCheckCount -= 1;
        }
        if (item.checkStatus == 1) {
          itemParent.childCheckPCount += 1;
        } else if (item.checkStatus == 2) {
          itemParent.childCheckCount += 1;
        }
        if (itemParent.childCheckCount <= 0 && itemParent.childCheckPCount <= 0) {
          itemParent.childCheckCount = 0;
          itemParent.childCheckPCount = 0;
          itemParent.checkStatus = 0;
        } else if (itemParent.childCheckCount >= itemParent.childCount) {
          itemParent.childCheckCount = itemParent.childCount;
          itemParent.childCheckPCount = 0;
          itemParent.checkStatus = 2;
        } else {
          itemParent.checkStatus = 1;
        }
        //console.log('itemParent：', itemParent)
        this._onItemParentSelect(itemParent, parentIndex, oldCheckStatusParent);
      }
    },
    // 重置数据
    _reTreeList: function _reTreeList() {
      var _this3 = this;
      this.treeList.forEach(function (v, i) {
        _this3.treeList[i].checkStatus = v.orCheckStatus;
      });
    },
    _initTree: function _initTree() {
      this.treeList = [];
      this._formatTreeData(this.sourceList);
      console.log(this.treeList);
    }
  },
  watch: {
    sourceList: function sourceList() {
      this._initTree();
    },
    localTreeList: function localTreeList() {
      this.treeList = this.localTreeList;
    }
  },
  mounted: function mounted() {
    this._initTree();
  }
};
exports.default = _default2;

/***/ }),

/***/ 48:
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/tree-search/components/tree-search/tree-search.vue?vue&type=style&index=0&id=4f4d2e74&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_style_index_0_id_4f4d2e74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tree-search.vue?vue&type=style&index=0&id=4f4d2e74&scoped=true&lang=css& */ 49);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_style_index_0_id_4f4d2e74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_style_index_0_id_4f4d2e74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_style_index_0_id_4f4d2e74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_style_index_0_id_4f4d2e74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tree_search_vue_vue_type_style_index_0_id_4f4d2e74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 49:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/tree-search/components/tree-search/tree-search.vue?vue&type=style&index=0&id=4f4d2e74&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tree-search/tree-search.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tree-search/tree-search-create-component',
    {
        'components/tree-search/tree-search-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(43))
        })
    },
    [['components/tree-search/tree-search-create-component']]
]);

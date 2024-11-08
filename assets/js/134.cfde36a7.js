(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{423:function(v,t,e){"use strict";e.r(t);var _=e(4),a=Object(_.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[v._v("#")]),v._v(" Vue")]),v._v(" "),t("h3",{attrs:{id:"vue-computed-watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-computed-watch"}},[v._v("#")]),v._v(" Vue computed watch")]),v._v(" "),t("ul",[t("li",[v._v("computed 计算用于产生新的数据")]),v._v(" "),t("li",[v._v("watch 用于监听现有的数据")])]),v._v(" "),t("h3",{attrs:{id:"vue-组件的通讯方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件的通讯方式"}},[v._v("#")]),v._v(" Vue 组件的通讯方式")]),v._v(" "),t("ul",[t("li",[v._v("自定义事件")]),v._v(" "),t("li",[v._v("$emit\n"),t("ul",[t("li",[v._v("父子组件 props")])])]),v._v(" "),t("li",[v._v("$attrs\n"),t("ul",[t("li",[v._v("v-bind")])])]),v._v(" "),t("li",[v._v("$parent     this.$parent")]),v._v(" "),t("li",[v._v("$ref      this.$ref")]),v._v(" "),t("li",[v._v("provide inject")])]),v._v(" "),t("h3",{attrs:{id:"vex-mutation-action-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vex-mutation-action-区别"}},[v._v("#")]),v._v(" vex mutation action 区别")]),v._v(" "),t("ul",[t("li",[v._v("mutation 原子操作，同步代码；")]),v._v(" "),t("li",[v._v("action 可包含多个 mutation ；可包含异步代码；")])]),v._v(" "),t("h3",{attrs:{id:"vdom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vdom"}},[v._v("#")]),v._v(" VDOM")]),v._v(" "),t("blockquote",[t("p",[v._v("用 js 对象模拟 dom 节点数据")])]),v._v(" "),t("ul",[t("li",[v._v("组件化")]),v._v(" "),t("li",[v._v("数据视图分离")]),v._v(" "),t("li",[v._v("不用关注 dom 操作")])]),v._v(" "),t("h4",{attrs:{id:"vue-每个生命周期都做了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-每个生命周期都做了什么"}},[v._v("#")]),v._v(" Vue 每个生命周期都做了什么")]),v._v(" "),t("ul",[t("li",[v._v("beforeCreate\n"),t("ul",[t("li",[v._v("创建一个空白的 vue 实例")])])]),v._v(" "),t("li",[v._v("create\n"),t("ul",[t("li",[v._v("完成响应式的绑定")]),v._v(" "),t("li",[v._v("data, method 初始化完成")]),v._v(" "),t("li",[v._v("未开始模版的渲染")])])]),v._v(" "),t("li",[v._v("beforeMount\n"),t("ul",[t("li",[v._v("编译模版调用 render 生成 vdom")]),v._v(" "),t("li",[v._v("还没有开始渲染 dom")])])]),v._v(" "),t("li",[v._v("mounted\n"),t("ul",[t("li",[v._v("完成 do m 渲染")]),v._v(" "),t("li",[v._v("组件创建完成")])])]),v._v(" "),t("li",[v._v("beforeupdate\n"),t("ul",[t("li",[v._v("data 变化之后 还没有更新 do m")])])]),v._v(" "),t("li",[v._v("updated\n"),t("ul",[t("li",[v._v("dat a dom 渲染完成")])])]),v._v(" "),t("li",[v._v("beforeUnmount\n"),t("ul",[t("li",[v._v("解除一些全局的事件")])])]),v._v(" "),t("li",[v._v("unmounted")])]),v._v(" "),t("h4",{attrs:{id:"vue-什么操作-dom-合适"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-什么操作-dom-合适"}},[v._v("#")]),v._v(" Vue 什么操作 dom 合适")]),v._v(" "),t("ul",[t("li",[v._v("$nexTick 渲染 dom")]),v._v(" "),t("li",[v._v("mounted 和 created 都可以\n"),t("ul",[t("li",[v._v("mounted 最合适")])])])]),v._v(" "),t("h4",{attrs:{id:"vue3-composition-api-生命周期有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue3-composition-api-生命周期有什么区别"}},[v._v("#")]),v._v(" Vue3 composition api 生命周期有什么区别")]),v._v(" "),t("ul",[t("li",[v._v("用 setup 代替了 beforeCreate 和 created")]),v._v(" "),t("li",[v._v("使用 hooks 函数形式 onMounted()")])]),v._v(" "),t("h4",{attrs:{id:"vue2-vue3-react-diff-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2-vue3-react-diff-算法"}},[v._v("#")]),v._v(" Vue2 Vue3 React diff 算法")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("只比较同一级")])]),v._v(" "),t("li",[t("p",[v._v("tag 不同则删掉重建 不再去比较内部的细节")])]),v._v(" "),t("li",[t("p",[v._v("子节点通过 key 区分")])]),v._v(" "),t("li",[t("p",[v._v("react")]),v._v(" "),t("ul",[t("li",[v._v("仅仅右移")])])]),v._v(" "),t("li",[t("p",[v._v("vue2")]),v._v(" "),t("ul",[t("li",[v._v("双端移动")])])]),v._v(" "),t("li",[t("p",[v._v("vue3")]),v._v(" "),t("ul",[t("li",[v._v("最长递增子序列")])])])]),v._v(" "),t("h4",{attrs:{id:"vue-react-为何循环时候使用-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-react-为何循环时候使用-key"}},[v._v("#")]),v._v(" Vue React 为何循环时候使用 key")]),v._v(" "),t("ul",[t("li",[v._v("vdom diff 会根据 key 元素是否要删除")]),v._v(" "),t("li",[v._v("匹配了 key 只要移动元素就好")]),v._v(" "),t("li",[v._v("没有匹配到 key 则删除重建")])]),v._v(" "),t("h4",{attrs:{id:"vue-router-memoryhistory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-memoryhistory"}},[v._v("#")]),v._v(" Vue-router Memoryhistory")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("hash")])]),v._v(" "),t("li",[t("p",[v._v("webhistory")])]),v._v(" "),t("li",[t("p",[v._v("memoryhistory")]),v._v(" "),t("ul",[t("li",[v._v("网页 url 不会变化 像组件一样")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);
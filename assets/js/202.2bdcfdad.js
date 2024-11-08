(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{495:function(t,a,s){"use strict";s.r(a);var r=s(4),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"vue基础知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue基础知识点"}},[t._v("#")]),t._v(" Vue基础知识点：")]),t._v(" "),a("p",[t._v("1:全局的代表"),a("code",[t._v("Vue.")]),t._v("的")]),t._v(" "),a("p",[t._v("2:实例的代表"),a("code",[t._v("this.")]),t._v("或者"),a("code",[t._v("new Vue().")])]),t._v(" "),a("p",[t._v("3:选项代表"),a("code",[t._v("new Vue()")]),t._v("的参数或者"),a("code",[t._v("export default")]),t._v("里边的属性")]),t._v(" "),a("h3",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期：")]),t._v(" "),a("blockquote",[a("p",[t._v("生命周期函数就是"),a("code",[t._v("vue")]),t._v("实例在某个时间点会自动执行的函数")]),t._v(" "),a("p",[t._v("beforeCreate created beforeMount mounted beforeDestroy destroyed  befroeUpdate updated")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("beforeMount：页面还没被渲染")])]),t._v(" "),a("li",[a("p",[t._v("mounted: 页面已经被渲染完毕")])]),t._v(" "),a("li",[a("p",[t._v("vue实例销毁：")]),t._v(" "),a("ul",[a("li",[t._v("需要调用  vm.$destroy() 方法")]),t._v(" "),a("li",[t._v("beforeDestroyed：即将被销毁")]),t._v(" "),a("li",[t._v("destroyed: 销毁完成")])])])]),t._v(" "),a("h3",{attrs:{id:"过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[t._v("#")]),t._v(" 过滤器")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("content")]),t._v("|过滤器,vue中没有提供相关的内置过滤器，可以自定义过滤器。")])]),t._v(" "),a("li",[a("p",[t._v("组件内的过滤器 + 全局过滤器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("组件内的过滤器就是"),a("code",[t._v("options")]),t._v("中的一个"),a("code",[t._v("filters")]),t._v("的属性（一个对象）")]),t._v(" "),a("ul",[a("li",[t._v("对个"),a("code",[t._v("key")]),t._v("就是不同的过滤器名，多个"),a("code",[t._v("value")]),t._v("就是与"),a("code",[t._v("key")]),t._v("对应的过滤方式函数体")])])]),t._v(" "),a("li",[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myFilter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("全局：范围大，如果出现同名时，权力小")])]),t._v(" "),a("li",[a("p",[t._v("组件内：如果出现同名时，权力大，范围小")])])])])]),t._v(" "),a("h3",{attrs:{id:"路由-vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由-vue-router"}},[t._v("#")]),t._v(" 路由 vue-router")]),t._v(" "),a("h5",{attrs:{id:"前端路由核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由核心"}},[t._v("#")]),t._v(" 前端路由核心：")]),t._v(" "),a("blockquote",[a("p",[t._v("​\t锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据")])]),t._v(" "),a("h5",{attrs:{id:"ui-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-router"}},[t._v("#")]),t._v(" ui-router：")]),t._v(" "),a("blockquote",[a("p",[t._v("​\t锚点值的改变，如何获取模板")])]),t._v(" "),a("h5",{attrs:{id:"vue中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中"}},[t._v("#")]),t._v(" vue中：")]),t._v(" "),a("blockquote",[a("p",[t._v("​\t模板数据不是通过ajax请求来的，而是通过函数获取模板内容")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("核心：锚点值的改变")])]),t._v(" "),a("li",[a("p",[t._v("看到"),a("code",[t._v("vue")]),t._v("开头，需要使用"),a("code",[t._v("Vue.use")])])]),t._v(" "),a("li",[a("p",[t._v("核心插件：")]),t._v(" "),a("ul",[a("li",[t._v("vue-router   路由")]),t._v(" "),a("li",[t._v("vuex   管理全局共享数据")])])]),t._v(" "),a("li",[a("p",[t._v("使用方式：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("下载")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-router "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--save")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在main.js中引入")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueRouter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("安装插件"),a("code",[t._v("Vue.use(VueRouter)")])])]),t._v(" "),a("li",[a("p",[t._v("创建路由对象并配置路由规则")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("将其路由对象传递给Vue的实例，options中加入 router:router")])]),t._v(" "),a("li",[a("p",[t._v("留坑"),a("code",[t._v("<router-view></router-view>")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("命名路由")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用router-link标签")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{name:'where'}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("去哪里"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更利于维护，如果修改了path 只修改路由配置中的path,该a标签会根据修改的值自动修改。")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在vue-router中，有两大对象被挂载到了实例this")]),t._v(" "),a("ul",[a("li",[t._v("$route:只读，具备信息的对象")]),t._v(" "),a("li",[t._v("$router :具备功能函数")])])]),t._v(" "),a("li",[a("p",[t._v("查询字符串")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("去哪里：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{name:'detail',query:{id:1}}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("导航（查询字符串path不用改）")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/detail'")]),t._v("，组件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("去了干嘛，获取路由参数（要注意的是query还是params和对应id名）")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("this.$route.query.id")])])])])])]),t._v(" "),a("li",[a("p",[t._v("path方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("去哪里：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{name:'detail',query:{name:1}}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("导航（path 方式需要在路由规则上加上 /:xxx）")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/detail/:name'")]),t._v("，组件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("去了干嘛，获取路由参数（要注意的是query还是params和对应id名）")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("this.$route.param.name")])])])])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("编程式导航")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("不能保证用户一定会点击某些按钮")])]),t._v(" "),a("li",[a("p",[t._v("并且当前操作，除了路由跳转之外，还有一些别的附加操作")])]),t._v(" "),a("li",[a("p",[t._v("this.$router.go 根据浏览器记录 前进1 后退-1")])]),t._v(" "),a("li",[a("p",[t._v("this.$router.push（直接跳转到某个页面显示）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("push 参数：字符串   /xxx")])]),t._v(" "),a("li",[a("p",[t._v("对象")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("重定向和404")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("进入后，默认就是/")])]),t._v(" "),a("li",[a("p",[t._v("重定向")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code")])])])]),t._v(" "),a("p",[t._v("{path:'/',redirect:'/home'}\n{path:'/',redirect:{name:'home'}}")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n+ 404: 在路由规则的最后一个规则\n\n+ 写一个匹配\n\n```javascript\n  {path:'*',component:notFoundVue}\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("嵌套路由")])]),t._v(" "),a("ul",[a("li",[t._v("用单页去实现多页应用，复杂的嵌套路由")])])]),t._v(" "),a("li",[a("p",[t._v("开发中一般会需要使用")]),t._v(" "),a("ul",[a("li",[t._v("试图包含视图")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("路由父子级关系路由")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/music'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Music"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//子路由的path /就是绝对路径   不用/ 就是相对父级路径")]),t._v("\n   \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Child1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Child2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("axios")])]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给Vue原型挂载一个属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$axios "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("post请求的时候，如果数据是字符串，默认头就是键值对，否则对象就是application/json")])]),t._v(" "),a("li",[a("p",[t._v("this.$axios.get(url,options)")])]),t._v(" "),a("li",[a("p",[t._v("this.$axios.post(url,data,options)")])]),t._v(" "),a("li",[a("p",[t._v("options:{params:{id:1} //查询字符串， headers:{'content-type':'xxxxx'}}")])]),t._v(" "),a("li",[a("p",[t._v("全局默认设置：Axios.defaults.baseURl = 'xxxx';")])]),t._v(" "),a("li",[a("p",[t._v("针对当前这一次请求的相关设置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content=post api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("合并请求")]),t._v(" "),a("ul",[a("li",[t._v("axios.all([请求1，请求2])")]),t._v(" "),a("li",[t._v("分发响应   axios.spread(fn)")]),t._v(" "),a("li",[t._v("fn: 对应参数和请求的顺序一致")]),t._v(" "),a("li",[t._v("执行特点：只要有一次失败就算失败，否则成功。必须保证两次请求都成功。")])])]),t._v(" "),a("li",[a("p",[t._v("拦截器")]),t._v(" "),a("ul",[a("li",[t._v("过滤，在每一次请求与响应中，添加东西")]),t._v(" "),a("li",[t._v("axios.interceptors.request.use(fn)  在请求之前")]),t._v(" "),a("li",[t._v("function(config) { config.headers = {xxxx}}  config 相当于options对象")]),t._v(" "),a("li",[t._v("默认设置 defaults 范围小，权力小")]),t._v(" "),a("li",[t._v("单个请求的设置options get(url ,options) 范围小，权力中")]),t._v(" "),a("li",[t._v("拦截器  范围广，权力大，")])])]),t._v(" "),a("li",[a("p",[t._v("拦截器的loading应用")])]),t._v(" "),a("li",[a("p",[t._v("监视（watch）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("watch 可以对（单个）变量进行监视，也可以深度监视")])]),t._v(" "),a("li",[a("p",[t._v("简单数据类型")])]),t._v(" "),a("li",[a("p",[t._v("复杂的数据类型")])]),t._v(" "),a("li",[a("p",[t._v("如果需求是对于10个变量进行监视？")]),t._v(" "),a("ul",[a("li",[t._v("计算属性computed可以监视多个值，并且指定返回数据，并且可以显示在页面")]),t._v(" "),a("li",[t._v("都是options中的跟属性\n"),a("ul",[a("li",[t._v("watch 监视单个")]),t._v(" "),a("li",[t._v("computed 可以监视多个this相关属性值的改变，如果和原值一样则不会触发函数的调用，并且可以返回对象。")])])])])])])]),t._v(" "),a("li",[a("p",[t._v("token(扩展)")]),t._v(" "),a("ul",[a("li",[t._v("cookie 和 session 的机制，cookie自动带一个字符串")]),t._v(" "),a("li",[t._v("cookie只在浏览器")]),t._v(" "),a("li",[t._v("移动端原生应用，也可以使用http协议，\n"),a("ul",[a("li",[t._v("可以加自定义的头，原生应用没有cookie")])])]),t._v(" "),a("li",[t._v("对于三端来讲，token可以作为类似cookie的使用，并且可以通用")]),t._v(" "),a("li",[t._v("拦截器可以用在添加token上")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("vue-resource")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("options")]),t._v(" 预检请求，是当浏览器发现跨域 + application/json的请求，就会自动发起并且发起的时候携带了一个content-type的头")])])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("created(){}")]),t._v("中")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1/api/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post api'")]),t._v("\n  \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("emulateJSON")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{395:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"错误码-events-js-183-throw-er-unhandled-error-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误码-events-js-183-throw-er-unhandled-error-event"}},[t._v("#")]),t._v(" 错误码：events.js:183 throw er; // Unhandled 'error' event")]),t._v(" "),s("h3",{attrs:{id:"在运行node项目的时候遇到此错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在运行node项目的时候遇到此错误"}},[t._v("#")]),t._v(" 在运行node项目的时候遇到此错误,")]),t._v(" "),s("h4",{attrs:{id:"错误原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误原因"}},[t._v("#")]),t._v(" 错误原因：")]),t._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("项目运行的端口被占用\n")])])]),s("h4",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("最简单粗暴的方式就是关机重启；那当然不是好的")])]),t._v(" "),s("li",[s("p",[t._v("将项目运行的端口和换一个，如果是三大框架以及相关使用包管理工具的项目都会有"),s("code",[t._v("package.json")]),t._v("的配置文件，可以在其中配置运行的端口号;如果是"),s("code",[t._v("node")]),t._v("服务直接修改其端口号即可")])]),t._v(" "),s("li",[s("p",[t._v("查找被占用的端口号，然后将其关闭")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Win+R,打开cmd查询")])]),t._v(" "),s("li",[s("p",[t._v("使用的端口号命令查看被占用的端口对应的"),s("code",[t._v("PID")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v("  -ano"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("findstr  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080"')]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("回车显示占用"),s("code",[t._v("8080")]),t._v("端口对应的程序的"),s("code",[t._v("PID")]),t._v("号；")])]),t._v(" "),s("li",[s("p",[t._v("根据"),s("code",[t._v("PID")]),t._v("号找到对应的程序：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("tasklist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("findstr "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5644"')]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("按回车后显示出占用该端口的程序；")])]),t._v(" "),s("li",[s("p",[t._v("调出"),s("code",[t._v("Windows")]),t._v("任务管理器，根据"),s("code",[t._v("PID/程序")]),t._v("对应名称结束该程序进程即可。")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{451:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"egg-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#egg-js"}},[t._v("#")]),t._v(" Egg.js")]),t._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[s("strong",[t._v("Egg.js 为企业级框架和应用而生")]),t._v("，帮助开发团队和开发人员降低开发和维护成本。")]),t._v(" "),s("p",[t._v("专注于提供 Web 开发的核心功能和一套灵活可扩展的插件机制，不会做出技术选型，因为固定的技术选型会使框架的扩展性变差，无法满足各种定制需求。")]),t._v(" "),s("p",[t._v("Egg 的插件机制有很高的可扩展性，"),s("strong",[t._v("一个插件只做一件事")]),t._v("，Egg 通过框架聚合这些插件，并根据自己的业务场景定制配置，这样应用的开发成本就变得很低。")]),t._v(" "),s("p",[t._v("Egg 奉行『"),s("strong",[t._v("约定优于配置")]),t._v("』，按照"),s("a",{attrs:{href:"https://eggjs.org/zh-cn/advanced/loader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("一套统一的约定"),s("OutboundLink")],1),t._v("进行应用开发，Egg 有很高的扩展性，可以按照团队的约定定制框架。使用 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/advanced/loader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Loader"),s("OutboundLink")],1),t._v(" 可以让框架根据不同环境定义默认配置，还可以覆盖 Egg 的默认约定。")]),t._v(" "),s("h3",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("提供基于 Egg "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/advanced/framework.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("定制上层框架"),s("OutboundLink")],1),t._v("的能力")]),t._v(" "),s("li",[t._v("高度可扩展的"),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/plugin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件机制"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("内置"),s("a",{attrs:{href:"https://eggjs.org/zh-cn/advanced/cluster-client.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("多进程管理"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("基于 "),s("a",{attrs:{href:"http://koajs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Koa"),s("OutboundLink")],1),t._v(" 开发，性能优异")]),t._v(" "),s("li",[t._v("框架稳定，测试覆盖率高")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://eggjs.org/zh-cn/tutorials/progressive.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("渐进式开发"),s("OutboundLink")],1),t._v("(根据设备的支持情况来提供更多功能，提供离线能力，推送通知，甚至原生应用的外观和速度，以及对资源进行本地缓存。)")])]),t._v(" "),s("h3",{attrs:{id:"egg和koa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#egg和koa"}},[t._v("#")]),t._v(" Egg和koa")]),t._v(" "),s("blockquote",[s("p",[t._v("如上述，Koa 是一个非常优秀的框架，然而对于企业级应用来说，它还比较基础。")]),t._v(" "),s("p",[t._v("而 Egg 选择了 Koa 作为其基础框架，在它的模型基础上，进一步对它进行了一些增强。")]),t._v(" "),s("p",[t._v("Eggjs的官网网站有很详细的文档 https://eggjs.org/zh-cn/intro/index.html")])]),t._v(" "),s("ul",[s("li",[t._v("在 Express 和 Koa 中，经常会引入许许多多的中间件来提供各种各样的功能，而 Egg 提供了一个更加强大的插件机制，让这些独立领域的功能模块可以更加容易编写。\n"),s("ul",[s("li",[t._v("extend：扩展基础对象的上下文，提供各种工具类、属性。")]),t._v(" "),s("li",[t._v("middleware：增加一个或多个中间件，提供请求的前置、后置处理逻辑。")]),t._v(" "),s("li",[t._v("config：配置各个环境下插件自身的默认配置项。")]),t._v(" "),s("li",[t._v("一个独立领域下的插件实现，可以在代码维护性非常高的情况下实现非常完善的功能，而插件也支持配置各个环境下的默认（最佳）配置，让我们使用插件的时候几乎可以不需要修改配置项。")])])])]),t._v(" "),s("h3",{attrs:{id:"快速搭建环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建环境"}},[t._v("#")]),t._v(" 快速搭建环境")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("运行环境")]),t._v(" "),s("ul",[s("li",[t._v("建议选择Node.js稳定版本，最低要求 8.x")])])]),t._v(" "),s("li",[s("p",[t._v("初始化项目")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init egg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple   //--type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple可以去掉然后自己配置\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" demo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("启动项目")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n浏览器打开：localhost:7001\n")])])])])])])]),t._v(" "),s("p",[s("strong",[t._v("注意：实际项目中，推荐使用脚手架直接初始化，所以这里不做手动初始化项目了。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果了解java的可以看出eggjs的项目目录结构以及处理请求的模式和javaweb很像，controller,service,view；不陌生的是都是MVCde 开发模式，不同就是如何拿数据给请求者")])]),t._v(" "),s("li",[s("p",[t._v("项目目录")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("app文件夹:\n\t项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。\nconfig文件夹：\n\t这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。\nlogs文件夹：\n\t日志文件夹，正常情况下不用修改和查看里边内容。\nnode_modules:\n\t项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。\nrun文件夹：\n\t运行项目时，生成的配置文件，基本不修改里边的文件。\ntest文件夹：\n\t测试使用的配合文件，这个在测试时会使用。\n.autod.conf.js: \n\tegg.js自己生成的配置文件，不需要进行修改。\neslinttrc和eslintignore：\n\t代码格式化的配置文件。\ngitgnore：\n\tgit设置忽略管理的配置文件。\npackage.json：\n\t包管理和命令配置文件，这个文件经常进行配置。\n")])])])]),t._v(" "),s("li",[s("p",[t._v("app目录中")]),t._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("controller文件夹：\n\t控制器，渲染和简单的业务逻辑都会写道这个文件里。配置路由时也会用到（路由配置需要的文件都要写在控制器里）。\npublic文件夹：\n\t公用文件夹，把一些公用资源都放在这个文件夹下。\nrouter.js: \n\t项目的路由配置文件，当用户访问服务的时候，在没有中间件的情况下，会先访问router.js文件。\nservice文件夹：\n\t这个是当我们的业务逻辑比较复杂或和数据库打交道时，会把业务逻辑放到这个文件中。\nview文件夹：\n\t模板文件夹，相当于表现层的专属文件夹，这个项目，我们使用接口的形式，所以不需要建立view文件夹。\nextend文件：\n\t当我们需要写一些模板中使用的扩展方法时，我们会放到这个文件夹里。\nmiddleware：\n\t中间件文件夹，用来写中间件的，比如最常用的路由首位。\n")])])])])])])]),t._v(" "),s("h4",{attrs:{id:"扩展插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展插件"}},[t._v("#")]),t._v(" 扩展插件")]),t._v(" "),s("p",[t._v("在基于 Egg 的框架或者应用中，我们可以通过定义 "),s("code",[t._v("app/extend/{application,context,request,response}.js")]),t._v("\n这里表示可以创建application,context,request,response四个js文件")]),t._v(" "),s("p",[t._v("来扩展 Koa 中对应的四个对象的原型，通过这个功能，我们可以快速的增加更多的辅助方法，例如我们在 "),s("code",[t._v("app/extend/context.js")]),t._v(" 中写入下列代码：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./app/extend/context.js\nmodule.exports = {\n  get isIOS() {//get表示通过这个isIOS得到什么记得添加\n    const iosReg = /iphone|ipad|ipod/i;//正则\n    return iosReg.test(this.get('user-agent'));\n      //User Agent显示使用的浏览器类型及版本、操作系统及版本、浏览器内核、等信息的标识。\n  },\n};\n")])])]),s("p",[t._v("在 Controller 中，我们就可以使用到刚才定义的这个便捷属性了：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./app/controller/home.js\nconst Controller = require('egg').Controller;//从egg上引入控制器\nclass HomeController extends Controller {//声明一个类并从constroller继承\n    async index() {//声明一个函数\n        this.ctx.body = this.ctx.isIOS\n            ? '你的操作系统是IOS.'\n            : '你的操作系统不是IOS.';\n    }\n}\nmodule.exports = HomeController;//把这个类默认暴露出去\n")])])]),s("ul",[s("li",[s("p",[t._v("静态资源")]),t._v(" "),s("ul",[s("li",[t._v("Egg 内置了"),s("code",[t._v("static")]),t._v("插件static 插件默认映射 "),s("code",[t._v("app/public/")]),t._v(" 目录，我们把静态资源都放到 "),s("code",[t._v("app/public")]),t._v(" 目录即可：")])])]),t._v(" "),s("li",[s("p",[t._v("模板渲染")]),t._v(" "),s("ul",[s("li",[t._v("框架并不强制你使用某种模板引擎，只是约定了 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/advanced/view-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("View 插件开发规范"),s("OutboundLink")],1),t._v("，开发者可以引入不同的插件来实现差异化定制。")])])]),t._v(" "),s("li",[s("p",[t._v("更多用法参见 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/core/view.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("View"),s("OutboundLink")],1),t._v("，在本例中，我们使用 "),s("a",{attrs:{href:"https://mozilla.github.io/nunjucks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nunjucks"),s("OutboundLink")],1),t._v(" 来渲染，先安装对应的插件 "),s("a",{attrs:{href:"https://github.com/eggjs/egg-view-nunjucks",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-view-nunjucks"),s("OutboundLink")],1),t._v(" ：")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i egg-view-nunjucks --save\n")])])]),s("p",[t._v("开启插件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./config/plugin.js\nexports.nunjucks = {\n  enable: true,//使用\n  package: 'egg-view-nunjucks'//使用什么插件\n};\n// ./config/config.default.js\nexports.keys = '此处改为你自己的 Cookie 安全字符串';\n// 添加 view 配置\nexports.view = {\n  defaultViewEngine: 'nunjucks',//默认视图引擎\n  mapping: {//.tpl结尾的文件\n    '.tpl': 'nunjucks',\n  },\n};\n")])])]),s("p",[t._v("为列表页编写模板文件，一般放置在 "),s("code",[t._v("./app/view")]),t._v(" 目录下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\x3c!-- ./app/view/news/list.tpl --\x3e\n\x3c!-- {% %} 来当做模板，与现有的html标记混用。和php干的事情是一样的。--\x3e\n<html>\n  <head>\n    <title>Hacker News</title>\n    <link rel="stylesheet" href="/public/css/news.css" />\n  </head>\n  <body>\n    <ul class="news-view view">\n      {% for item in list %}\x3c!-- 这里可以直接拿到dataList中的list但无法拿到dataList --\x3e\n        <li class="item">\n          <a href="{{ item.url }}">{{ item.title }}</a>\n        </li>\n      {% endfor %}\x3c!-- 结束for循环 --\x3e\n    </ul>\n  </body>\n</html>\n')])])]),s("p",[t._v("添加 Controller 和 Router")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./app/controller/news.js\nconst Controller = require('egg').Controller;\nclass NewsController extends Controller {\n  async list() {\n    const dataList = {\n      list: [\n        { id: 1, title: 'this is news 1', url: '/news/1' },\n        { id: 2, title: 'this is news 2', url: '/news/2' }\n      ]\n    };\n    await this.ctx.render('news/list.tpl', dataList);\n      //渲染list.tpl文件且把dataList的内容传过去\n  }\n}\n\nmodule.exports = NewsController;\n// ./app/router.js\nmodule.exports = app => {\n  const { router, controller } = app;\n  router.get('/', controller.home.index);\n  router.get('/news', controller.news.list);\n};\n")])])]),s("p",[t._v("启动浏览器，访问 http://localhost:7001/news 即可看到渲染后的页面。")]),t._v(" "),s("ul",[s("li",[t._v("编写 service\n"),s("ul",[s("li",[t._v("在实际应用中，Controller 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应该交给业务逻辑层 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/service.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service"),s("OutboundLink")],1),t._v("。")])])])]),t._v(" "),s("p",[t._v("我们来添加一个 Service 抓取页面的数据 ，如下：这里只是demo写法，根据实际情况再改变")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./app/service/news.js\nconst Service = require('egg').Service;\nclass NewsService extends Service {\n  async list(page) {//得到传来的页码参数\n    // 读取配置拿到API接口\n    const { serverUrl } = this.config.news;\n\n    //使用内置的curl发出请求拿回数据\n    //结构出来result，在这里给他改名叫做idList\n    const { result: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {\n      data: {//携带信息\n        orderBy: '\"$key\"',//根据什么排序\n        startAt: `${page}`,//起始页\n        endAt: `${page+1}`,//结束页\n      },\n      dataType: 'json',//需要返回的数据类型\n    });\n\n    // 获取详细信息\n    const newsList = await Promise.all(\n        //获取对象的所有键名\n      Object.keys(idList).map(key => {\n        const url = `${serverUrl}/item/${idList[key]}.json`;\n        return this.ctx.curl(url, { dataType: 'json' });//再去请求每一个的详细信息\n      })\n    );\n    return newsList.map(res => res.data);//把每一条的数据的data返回出去。\n  }\n}\nmodule.exports = NewsService;\n")])])]),s("p",[t._v("框架提供了内置的 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/core/httpclient.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HttpClient"),s("OutboundLink")],1),t._v(" 来方便开发者使用 HTTP 请求。\n"),s("code",[t._v("this.ctx.curl(api地址:string,配置:json)")])]),t._v(" "),s("p",[t._v("然后稍微修改下之前的 Controller：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./app/controller/news.js\nconst Controller = require('egg').Controller;\n\nclass NewsController extends Controller {\n  async list() {\n    const ctx = this.ctx;\n    const page = ctx.query.page || 1;//获取用户url里面的page值没有就返回1\n    const newsList = await ctx.service.news.list(page);//传过去，声明newsList接受return回来的数据\n    await ctx.render('news/list.tpl', { list: newsList });//把list传过去，他的数据是newsList\n  }\n}\nmodule.exports = NewsController;\n")])])]),s("p",[t._v("还需增加 "),s("code",[t._v("app/service/news.js")]),t._v(" 中读取到的配置：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./config/config.default.js\n// 添加 news 的配置项\nexports.news = {\n  serverUrl: 'API接口地址'\n};\n")])])]),s("ul",[s("li",[s("p",[t._v("编写扩展")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果时间的数据是 UnixTime 格式的，我们希望显示为便于阅读的格式。框架提供了一种快速扩展的方式，只需在 "),s("code",[t._v("app/extend")]),t._v(" 目录下提供扩展脚本即可，具体参见"),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/extend.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("扩展"),s("OutboundLink")],1),t._v("。在这里，我们可以使用 View 插件支持的 Helper 来实现：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm i moment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./app/extend/helper.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("relativeTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromNow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("在模板里面使用：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ./app/view/news/list.tpl --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hacker News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/public/css/news.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("news-view view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {% for item in list %}\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ item.url }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.title }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {% endfor %}\n      {{ helper.relativeTime(item.time) }}"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--通过这样的方法使用 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("编写中间")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("假设我们的新闻站点，禁止百度爬虫访问。可以通过 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/middleware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Middleware"),s("OutboundLink")],1),t._v(" 判断 User-Agent，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./app/middleware/robot.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options === app.config.robot //这里的robot是这个文件的名字")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("robotMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user-agent'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ua")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//some()会让ua数组中的每一项去执行()里面的函数，如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Go away, robot.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//别用中文")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//放行")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./config/config.default.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加中间件")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("middleware "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'robot'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加配置")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ua")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("Baiduspider")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("i")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])]),t._v(" "),s("p",[t._v("现在可以使用 "),s("code",[t._v('curl http://localhost:7001/news -A "Baiduspider"')]),t._v(" 看看效果。")]),t._v(" "),s("p",[t._v("如果你是window用户在CMD下是无法执行此命令的，推荐你安装Git Bash运行此命令")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("配置文件")]),t._v(" "),s("blockquote",[s("p",[t._v("写业务的时候，不可避免的需要有配置文件，框架提供了强大的配置合并管理功能：")])]),t._v(" "),s("ul",[s("li",[t._v("支持按环境变量加载不同的配置文件，如 "),s("code",[t._v("config.local.js")]),t._v("， "),s("code",[t._v("config.prod.js")]),t._v(" 等等。")]),t._v(" "),s("li",[t._v("应用/插件/框架都可以配置自己的配置文件，框架将按顺序合并加载。")]),t._v(" "),s("li",[t._v("具体合并逻辑可参见"),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/config.html#%E9%85%8D%E7%BD%AE%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件"),s("OutboundLink")],1),t._v("。")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ./config/config.default.js\n// 这里是默认值\nexports.robot = {\n  ua: [\n    /curl/i,\n    /Baiduspider/i,\n  ],\n};\n// ./config/config.local.js\n// 仅在开发模式下读取，将覆盖默认值\nexports.robot = {\n  ua: [\n    /Baiduspider/i,\n  ],\n};\n// ./app/service/some.js\nconst Service = require('egg').Service;\n\nclass SomeService extends Service {\n  async list() {\n    const rule = this.config.robot.ua;// /Baiduspider/i,\n  }\n}\nmodule.exports = SomeService;\n")])])]),s("ul",[s("li",[t._v("单元测试")])]),t._v(" "),s("p",[t._v("单元测试非常重要，框架也提供了 "),s("a",{attrs:{href:"https://github.com/eggjs/egg-bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-bin"),s("OutboundLink")],1),t._v(" 来帮开发者无痛的编写测试。")]),t._v(" "),s("p",[t._v("测试文件应该放在项目根目录下的 test 目录下，并以 "),s("code",[t._v("test.js")]),t._v(" 为后缀名，即 "),s("code",[t._v("./test/**/*.test.js")]),t._v("。")]),t._v(" "),s("p",[t._v("**表示任何文件夹\n*表示任何文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i egg-mock --save-dev\n")])])]),s("p",[t._v("然后配置依赖和 "),s("code",[t._v("npm scripts")]),t._v("配置：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n  \"scripts\": {\n    \"test\": \"egg-bin test\",\n  }\n}\n// ./test/app/middleware/robot.test.js\nconst { app, mock, assert } = require('egg-mock/bootstrap');\n//他会去找到./app/middleware/robot.js进行测试\ndescribe('test/app/middleware/robot.test.js', () => {\n  it('爬虫', () => {\n    return app.httpRequest()\n      .get('/')\n      .set('User-Agent', \"Baiduspider\")\n      .expect(403);\n  });\n});\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
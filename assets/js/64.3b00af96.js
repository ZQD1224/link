(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{355:function(e,n,v){"use strict";v.r(n);var s=v(4),a=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"npm相关知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm相关知识"}},[e._v("#")]),e._v(" npm相关知识")]),e._v(" "),n("h2",{attrs:{id:"一-包管理工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-包管理工具"}},[e._v("#")]),e._v(" 一. 包管理工具")]),e._v(" "),n("h3",{attrs:{id:"_1-1-认识npm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-认识npm"}},[e._v("#")]),e._v(" 1.1. 认识npm")]),e._v(" "),n("p",[e._v("我们已经学习了在JavaScript中可以通过模块化的方式将代码划分成一个个小的结构：")]),e._v(" "),n("ul",[n("li",[e._v("在以后的开发中我们就可以通过模块化的方式来封装自己的代码，并且封装成一个工具；")]),e._v(" "),n("li",[e._v("这个工具我们可以让同事通过导入的方式来使用，甚至你可以分享给世界各地的程序员来使用；")])]),e._v(" "),n("p",[n("strong",[e._v("如果我们分享给世界上所有的程序员使用，有哪些方式呢？")])]),e._v(" "),n("p",[e._v("方式一：上传到GitHub上、其他程序员通过GitHub下载我们的代码手动的引用；")]),e._v(" "),n("ul",[n("li",[e._v("缺点是大家必须知道你的代码GitHub的地址，并且从GitHub上手动下载；")]),e._v(" "),n("li",[e._v("需要在自己的项目中手动的引用，并且管理相关的依赖；")]),e._v(" "),n("li",[e._v("不需要使用的时候，需要手动来删除相关的依赖；")]),e._v(" "),n("li",[e._v("当遇到版本升级或者切换时，需要重复上面的操作；")])]),e._v(" "),n("p",[e._v("显然，上面的方式是有效的，但是这种传统的方式非常麻烦，并且容易出错；")]),e._v(" "),n("p",[e._v("方式二：使用一个专业的工具来管理我们的代码")]),e._v(" "),n("ul",[n("li",[e._v("我们通过工具将代码发布到特定的位置；")]),e._v(" "),n("li",[e._v("其他程序员直接通过工具来安装、升级、删除我们的工具代码；")])]),e._v(" "),n("p",[e._v("显然，通过第二种方式我们可以更好的管理自己的工具包，其他人也可以更好的使用我们的工具包。")]),e._v(" "),n("p",[e._v("包管理工具npm：")]),e._v(" "),n("ul",[n("li",[e._v("Node Package Manager，也就是Node包管理器；")]),e._v(" "),n("li",[e._v("但是目前已经不仅仅是Node包管理器了，在前端项目中我们也在使用它来管理依赖的包；")]),e._v(" "),n("li",[e._v("比如express、koa、react、react-dom、axios、babel、webpack等等；")])]),e._v(" "),n("p",[e._v("npm管理的包可以在哪里查看、搜索呢？")]),e._v(" "),n("ul",[n("li",[e._v("https://www.npmjs.com/")]),e._v(" "),n("li",[e._v("这是我们安装相关的npm包的官网；")])]),e._v(" "),n("p",[e._v("npm管理的包存放在哪里呢？")]),e._v(" "),n("ul",[n("li",[e._v("我们发布自己的包其实是发布到registry上面的；")]),e._v(" "),n("li",[e._v("当我们安装一个包时其实是从registry上面下载的包；")])]),e._v(" "),n("h3",{attrs:{id:"_1-2-项目配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-项目配置文件"}},[e._v("#")]),e._v(" 1.2. 项目配置文件")]),e._v(" "),n("p",[e._v("事实上，我们每一个项目都会有一个对应的配置文件，无论是前端项目还是后端项目：")]),e._v(" "),n("ul",[n("li",[e._v("这个配置文件会记录着你项目的名称、版本号、项目描述等；")]),e._v(" "),n("li",[e._v("也会记录着你项目所依赖的其他库的信息和依赖库的版本号；")])]),e._v(" "),n("p",[e._v("这个配置文件在Node环境下面（无论是前端还是后端）就是package.json。")]),e._v(" "),n("p",[e._v("我们以vue cli4脚手架创建的项目为例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "name": "my-vue",\n  "version": "0.1.0",\n  "private": true,\n  "scripts": {\n    "serve": "vue-cli-service serve",\n    "build": "vue-cli-service build",\n    "lint": "vue-cli-service lint"\n  },\n  "dependencies": {\n    "core-js": "^3.6.5",\n    "vue": "^2.6.11"\n  },\n  "devDependencies": {\n    "@vue/cli-plugin-babel": "~4.5.0",\n    "@vue/cli-plugin-eslint": "~4.5.0",\n    "@vue/cli-service": "~4.5.0",\n    "babel-eslint": "^10.1.0",\n    "eslint": "^6.7.2",\n    "eslint-plugin-vue": "^6.2.2",\n    "vue-template-compiler": "^2.6.11"\n  },\n  "browserslist": [\n    "> 1%",\n    "last 2 versions",\n    "not dead"\n  ]\n}\n')])])]),n("p",[e._v("事实上Vue ClI4脚手架创建的项目相对进行了简化，我们来看一下CLI2创建的项目：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "name": "vuerouterbasic",\n  "version": "1.0.0",\n  "description": "A Vue.js project",\n  "author": "\'coderwhy\' <\'coderwhy@gmail.com\'>",\n  "private": true,\n  "scripts": {\n    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",\n    "start": "npm run dev",\n    "build": "node build/build.js"\n  },\n  "dependencies": {\n    "vue": "^2.5.2",\n    "vue-router": "^3.0.1"\n  },\n  "devDependencies": {\n    "autoprefixer": "^7.1.2",\n    "babel-core": "^6.22.1",\n    "babel-helper-vue-jsx-merge-props": "^2.0.3",\n    "babel-loader": "^7.1.1",\n    "babel-plugin-syntax-jsx": "^6.18.0",\n    "babel-plugin-transform-runtime": "^6.22.0",\n    "babel-plugin-transform-vue-jsx": "^3.5.0",\n    "babel-preset-env": "^1.3.2",\n    "babel-preset-stage-2": "^6.22.0",\n    "chalk": "^2.0.1",\n    "copy-webpack-plugin": "^4.0.1",\n    "css-loader": "^0.28.0",\n    "extract-text-webpack-plugin": "^3.0.0",\n    "file-loader": "^1.1.4",\n    "friendly-errors-webpack-plugin": "^1.6.1",\n    "html-webpack-plugin": "^2.30.1",\n    "node-notifier": "^5.1.2",\n    "optimize-css-assets-webpack-plugin": "^3.2.0",\n    "ora": "^1.2.0",\n    "portfinder": "^1.0.13",\n    "postcss-import": "^11.0.0",\n    "postcss-loader": "^2.0.8",\n    "postcss-url": "^7.2.1",\n    "rimraf": "^2.6.0",\n    "semver": "^5.3.0",\n    "shelljs": "^0.7.6",\n    "uglifyjs-webpack-plugin": "^1.1.1",\n    "url-loader": "^0.5.8",\n    "vue-loader": "^13.3.0",\n    "vue-style-loader": "^3.0.1",\n    "vue-template-compiler": "^2.5.2",\n    "webpack": "^3.6.0",\n    "webpack-bundle-analyzer": "^2.9.0",\n    "webpack-dev-server": "^2.9.1",\n    "webpack-merge": "^4.1.0"\n  },\n  "engines": {\n    "node": ">= 6.0.0",\n    "npm": ">= 3.0.0"\n  },\n  "browserslist": [\n    "> 1%",\n    "last 2 versions",\n    "not ie <= 8"\n  ]\n}\n')])])]),n("p",[e._v("我们也可以手动创建一个package.json文件：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm init #创建时填写信息\nnpm init -y # 所有信息使用默认的\n")])])]),n("p",[n("code",[e._v("npm init -y")]),e._v("生成文件的效果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "name": "learn-npm",\n  "version": "1.0.0",\n  "description": "",\n  "main": "main.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n')])])]),n("p",[e._v("我们会发现属性非常的多，我们这里对一些常见属性进行一些解析。")]),e._v(" "),n("p",[n("strong",[e._v("必须填写的属性：name、version")])]),e._v(" "),n("ul",[n("li",[e._v("name是项目的名称；")]),e._v(" "),n("li",[e._v("version是当前项目的版本号；")]),e._v(" "),n("li",[e._v("description是描述信息，很多时候是作为项目的基本描述；")]),e._v(" "),n("li",[e._v("author是作者相关信息（发布时用到）；")]),e._v(" "),n("li",[e._v("license是开源协议（发布时用到）；")])]),e._v(" "),n("p",[n("strong",[e._v("private属性：")])]),e._v(" "),n("ul",[n("li",[e._v("private属性记录当前的项目是否是私有的；")]),e._v(" "),n("li",[e._v("当值为true时，npm是不能发布它的，这是防止私有项目或模块发布出去的方式；")])]),e._v(" "),n("p",[n("strong",[e._v("main属性：")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("设置程序的入口。")])]),e._v(" "),n("li",[n("p",[e._v("很多人会有疑惑，webpack不是会自动找到程序的入口吗？")])]),e._v(" "),n("li",[n("ul",[n("li",[e._v("这个入口和webpack打包的入口并不冲突；")]),e._v(" "),n("li",[e._v("它是在你发布一个模块的时候会用到的；")]),e._v(" "),n("li",[e._v("比如我们使用axios模块 "),n("code",[e._v("const axios = require('axios');")])]),e._v(" "),n("li",[e._v("实际上是找到对应的main属性查找文件的；")])])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutp13xTTeLSEf3gnNgqpmiblicnvVDK7acaTgJS9KKJccQ1WjnBamLVg2eKmbNu5z41oaoBbThehoicg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("axios的入口")]),e._v(" "),n("p",[n("strong",[e._v("scripts属性")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("scripts属性用于配置一些脚本命令，以键值对的形式存在；")])]),e._v(" "),n("li",[n("p",[e._v("配置后我们可以通过 "),n("code",[e._v("npm run 命令的key")]),e._v("来执行这个命令；")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("npm start")]),e._v("和"),n("code",[e._v("npm run start")]),e._v("的区别是什么？")])]),e._v(" "),n("li",[n("ul",[n("li",[e._v("它们是等价的；")]),e._v(" "),n("li",[e._v("对于常用的 start、 test、stop、restart可以省略掉run直接通过 "),n("code",[e._v("npm start")]),e._v("等方式运行；")])])])]),e._v(" "),n("p",[n("strong",[e._v("dependencies属性")])]),e._v(" "),n("ul",[n("li",[e._v("dependencies属性是指定无论开发环境还是生成环境都需要依赖的包；")]),e._v(" "),n("li",[e._v("通常是我们项目实际开发用到的一些库模块；")]),e._v(" "),n("li",[e._v("与之对应的是devDependencies；")])]),e._v(" "),n("p",[n("strong",[e._v("devDependencies属性")])]),e._v(" "),n("ul",[n("li",[e._v("一些包在生成环境是不需要的，比如webpack、babel等；")]),e._v(" "),n("li",[e._v("这个时候我们会通过 "),n("code",[e._v("npm install webpack --save-dev")]),e._v("，将它安装到devDependencies属性中；")])]),e._v(" "),n("p",[e._v("疑问：那么在生成环境如何保证不安装这些包呢？")]),e._v(" "),n("ul",[n("li",[e._v("生成环境不需要安装时，我们需要通过 "),n("code",[e._v("npm install --production")]),e._v(" 来安装文件的依赖；")])]),e._v(" "),n("p",[n("strong",[e._v("版本管理的问题")])]),e._v(" "),n("p",[e._v("我们会发现安装的依赖版本出现："),n("code",[e._v("^2.0.3")]),e._v("或"),n("code",[e._v("~2.0.3")]),e._v("，这是什么意思呢？")]),e._v(" "),n("p",[e._v("npm的包通常需要遵从semver版本规范：")]),e._v(" "),n("ul",[n("li",[e._v("semver：https://semver.org/lang/zh-CN/")]),e._v(" "),n("li",[e._v("npm semver：https://docs.npmjs.com/misc/semver")])]),e._v(" "),n("p",[e._v("semver版本规范是X.Y.Z：")]),e._v(" "),n("ul",[n("li",[e._v("X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）；")]),e._v(" "),n("li",[e._v("Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）；")]),e._v(" "),n("li",[e._v("Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）；")])]),e._v(" "),n("p",[e._v("我们这里解释一下 ^和~的区别：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("^x.y.z")]),e._v("：表示x是保持不变的，y和z永远安装最新的版本；")]),e._v(" "),n("li",[n("code",[e._v("~x.y.z")]),e._v("：表示x和y保持不变的，z永远安装最新的版本；")])]),e._v(" "),n("p",[n("strong",[e._v("engines属性")])]),e._v(" "),n("ul",[n("li",[e._v("engines属性用于指定Node和NPM的版本号；")]),e._v(" "),n("li",[e._v("在安装的过程中，会先检查对应的引擎版本，如果不符合就会报错；")]),e._v(" "),n("li",[e._v("事实上也可以指定所在的操作系统 "),n("code",[e._v('"os" : [ "darwin", "linux" ]')]),e._v("，只是很少用到；")])]),e._v(" "),n("p",[n("strong",[e._v("browserslist属性")])]),e._v(" "),n("ul",[n("li",[e._v("用于配置打包后的JavaScript浏览器的兼容情况，参考；")]),e._v(" "),n("li",[e._v("否则我们需要手动的添加polyfills来让支持某些语法；")]),e._v(" "),n("li",[e._v("也就是说它是为webpack等打包工具服务的一个属性（这里不是详细讲解webpack等工具的工作原理，所以不再给出详情）；")])]),e._v(" "),n("h2",{attrs:{id:"二-npm工具解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-npm工具解析"}},[e._v("#")]),e._v(" 二. npm工具解析")]),e._v(" "),n("h3",{attrs:{id:"_2-1-npm-install命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-npm-install命令"}},[e._v("#")]),e._v(" 2.1. npm install命令")]),e._v(" "),n("p",[e._v("安装npm包分两种情况：")]),e._v(" "),n("ul",[n("li",[e._v("全局安装（global install）："),n("code",[e._v("npm install yarn -g")]),e._v(";")]),e._v(" "),n("li",[e._v("项目（局部）安装（local install）："),n("code",[e._v("npm install")])])]),e._v(" "),n("p",[n("strong",[e._v("全局安装")])]),e._v(" "),n("p",[e._v("全局安装是直接将某个包安装到全局：")]),e._v(" "),n("p",[e._v("比如yarn的全局安装：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install yarn -g\n")])])]),n("p",[e._v("但是很多人对全局安装有一些误会：")]),e._v(" "),n("ul",[n("li",[e._v("通常使用npm全局安装的包都是一些工具包：yarn、webpack等；")]),e._v(" "),n("li",[e._v("并不是类似于 axios、express、koa等库文件；")]),e._v(" "),n("li",[e._v("所以全局安装了之后并不能让我们在所有的项目中使用 axios等库；")])]),e._v(" "),n("p",[n("strong",[e._v("项目安装")])]),e._v(" "),n("p",[e._v("项目安装会在当前目录下生产一个 "),n("code",[e._v("node_modules")]),e._v(" 文件夹，我们之前讲解require查找顺序时有讲解过这个包在什么情况下被查找；")]),e._v(" "),n("p",[e._v("局部安装分为开发时依赖和生产时依赖：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# 安装开发和生产依赖\nnpm install axios --save\nnpm install axios -S\nnpm install axios\nnpm i axios\n\n# 开发者\nnpm install axios --save-dev\nnpm install axios -D\nnpm i axios -D\n")])])]),n("h3",{attrs:{id:"_2-2-npm-install原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-npm-install原理"}},[e._v("#")]),e._v(" 2.2. npm install原理")]),e._v(" "),n("p",[e._v("很多同学之情应该已经会了 "),n("code",[e._v("npm install <package>")]),e._v("，但是你是否思考过它的内部原理呢？")]),e._v(" "),n("ul",[n("li",[e._v("执行 "),n("code",[e._v("npm install")]),e._v("它背后帮助我们完成了什么操作？")]),e._v(" "),n("li",[e._v("我们会发现还有一个成为package-lock.json的文件，它的作用是什么？")]),e._v(" "),n("li",[e._v("从npm5开始，npm支持缓存策略（来自yarn的压力），缓存有什么作用呢？")])]),e._v(" "),n("p",[e._v("这是一幅我画出的根据 "),n("code",[e._v("npm install")]),e._v(" 的原理图：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("npm install会检测是有package-lock.json文件：")])]),e._v(" "),n("li",[n("ul",[n("li",[e._v("检测lock中包的版本是否和package.json中一致（会按照semver版本规范检测）；")]),e._v(" "),n("li",[e._v("一致的情况下，会去优先查找缓存")]),e._v(" "),n("li",[e._v("查找到，会获取缓存中的压缩文件，并且将压缩文件解压到node_modules文件夹中；")]),e._v(" "),n("li",[e._v("不一致，那么会重新构建依赖关系，直接会走顶层的流程；")]),e._v(" "),n("li",[e._v("没有找到，会从registry仓库下载，直接走顶层流程；")]),e._v(" "),n("li",[e._v("分析依赖关系，这是因为我们可能包会依赖其他的包，并且多个包之间会产生相同依赖的情况；")]),e._v(" "),n("li",[e._v("从registry仓库中下载压缩包（如果我们设置了镜像，那么会从镜像服务器下载压缩包）；")]),e._v(" "),n("li",[e._v("获取到压缩包后会对压缩包进行缓存（从npm5开始有的）；")]),e._v(" "),n("li",[e._v("将压缩包解压到项目的node_modules文件夹中（前面我们讲过，require的查找顺序会在该包下面查找）")]),e._v(" "),n("li",[e._v("没有lock文件")]),e._v(" "),n("li",[e._v("有lock文件")])])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutp13xTTeLSEf3gnNgqpmiblKOmfSCkaUr8XicHJE3ic92lhsURmXhXuhFuSyXn3l9ApYVQHD8azxJEg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("npm install原理图")]),e._v(" "),n("p",[e._v("package-lock.json文件：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "name": "learn-npm",\n  "version": "1.0.0",\n  "lockfileVersion": 1,\n  "requires": true,\n  "dependencies": {\n    "axios": {\n      "version": "0.20.0",\n      "resolved": "https://registry.npmjs.org/axios/-/axios-0.20.0.tgz",\n      "integrity": "sha512-ANA4rr2BDcmmAQLOKft2fufrtuvlqR+cXNNinUmvfeSNCOF98PZL+7M/v1zIdGo7OLjEA9J2gXJL+j4zGsl0bA==",\n      "requires": {\n        "follow-redirects": "^1.10.0"\n      }\n    },\n    "follow-redirects": {\n      "version": "1.13.0",\n      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.13.0.tgz",\n      "integrity": "sha512-aq6gF1BEKje4a9i9+5jimNFIpq4Q1WiwBToeRK5NvZBd/TRsmW8BsJfOEGkr76TbOyPVD3OVDN910EcUNtRYEA=="\n    }\n  }\n}\n')])])]),n("p",[e._v("package-lock.json文件解析：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("name：项目的名称；")])]),e._v(" "),n("li",[n("p",[e._v("version：项目的版本；")])]),e._v(" "),n("li",[n("p",[e._v("lockfileVersion：lock文件的版本；")])]),e._v(" "),n("li",[n("p",[e._v("requires：使用requires来跟着模块的依赖关系；")])]),e._v(" "),n("li",[n("p",[e._v("dependencies：项目的依赖")])]),e._v(" "),n("li",[n("ul",[n("li",[e._v("version表示实际安装的axios的版本；")]),e._v(" "),n("li",[e._v("resolved用来记录下载的地址，registry仓库中的位置；")]),e._v(" "),n("li",[e._v("requires记录当前模块的依赖；")]),e._v(" "),n("li",[e._v("integrity用来从缓存中获取索引，再通过索引去获取压缩包文件；")]),e._v(" "),n("li",[e._v("当前项目依赖axios，但是axios依赖follow-redireacts；")]),e._v(" "),n("li",[e._v("axios中的属性如下：")])])])]),e._v(" "),n("h3",{attrs:{id:"_2-3-其他npm命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-其他npm命令"}},[e._v("#")]),e._v(" 2.3. 其他npm命令")]),e._v(" "),n("p",[e._v("我们这里再介绍几个比较常用的：")]),e._v(" "),n("p",[e._v("卸载某个依赖包：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm uninstall package\nnpm uninstall package --save-dev\nnpm uninstall package -D\n")])])]),n("p",[e._v("强制重新build")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm rebuild\n")])])]),n("p",[e._v("清除缓存")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm cache clean\n")])])]),n("p",[e._v("npm的命令其实是非常多的：")]),e._v(" "),n("ul",[n("li",[e._v("https://docs.npmjs.com/cli-documentation/cli")]),e._v(" "),n("li",[e._v("更多的命令，可以根据需要查阅官方文档")])]),e._v(" "),n("h3",{attrs:{id:"_2-4-yarn和cnpm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-yarn和cnpm"}},[e._v("#")]),e._v(" 2.4. yarn和cnpm")]),e._v(" "),n("p",[e._v("另一个node包管理工具yarn：")]),e._v(" "),n("ul",[n("li",[e._v("yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具；")]),e._v(" "),n("li",[e._v("yarn 是为了弥补 npm 的一些缺陷而出现的；")]),e._v(" "),n("li",[e._v("早期的npm存在很多的缺陷，比如安装依赖速度很慢、版本依赖混乱等等一系列的问题；")]),e._v(" "),n("li",[e._v("虽然从npm5版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用yarn；")])]),e._v(" "),n("p",[e._v("这里给出一张常用命令的对比")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/O8xWXzAqXutp13xTTeLSEf3gnNgqpmiblsGicPtAm7hxaTCDW7DibOelzF5eLyUibibyxfAwLmczgvtPfRoZ2F2iblFA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),e._v("npm和yarn常用命令对比")]),e._v(" "),n("p",[n("strong",[e._v("补充：cnpm")])]),e._v(" "),n("p",[e._v("由于一些特殊的原因，某些情况下我们没办法很好的从 "),n("code",[e._v("https://registry.npmjs.org")]),e._v("下载下来一些需要的包。")]),e._v(" "),n("p",[e._v("查看npm镜像：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm config get registry # npm config get registry\n")])])]),n("p",[e._v("我们可以直接设置npm的镜像：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm config set registry https://registry.npm.taobao.org\n")])])]),n("p",[e._v("但是对于大多数人来说（比如我），并不希望将npm镜像修改了：")]),e._v(" "),n("ul",[n("li",[e._v("第一，不太希望随意修改npm原本从官方下来包的渠道；")]),e._v(" "),n("li",[e._v("第二，担心某天淘宝的镜像挂了或者不维护了，又要改来改去；")])]),e._v(" "),n("p",[e._v("这个时候，我们可以使用cnpm，并且将cnpm设置为淘宝的镜像：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\ncnpm config get registry # https://r.npm.taobao.org/\n")])])]),n("p",[n("strong",[e._v("补充：npx")])]),e._v(" "),n("p",[e._v("npx是npm5.2之后自带的一个命令。")]),e._v(" "),n("p",[e._v("npx的作用非常多，但是比较常见的是使用它来调用项目中的某个模块的指令。")]),e._v(" "),n("p",[e._v("我们以webpack为例：")]),e._v(" "),n("ul",[n("li",[e._v("全局安装的是webpack5.1.3")]),e._v(" "),n("li",[e._v("项目安装的是webpack3.6.0")])]),e._v(" "),n("p",[e._v("如果我在终端执行 "),n("code",[e._v("webpack --version")]),e._v("使用的是哪一个命令呢？")]),e._v(" "),n("ul",[n("li",[e._v("显示结果会是 "),n("code",[e._v("webpack 5.1.3")]),e._v("，事实上使用的是全局的，为什么呢？")]),e._v(" "),n("li",[e._v("原因非常简单，在当前目录下找不到webpack时，就会去全局找，并且执行命令；")])]),e._v(" "),n("p",[e._v("那么如何使用项目（局部）的webpack，常见的是两种方式：")]),e._v(" "),n("ul",[n("li",[e._v("方式一：明确查找到node_module下面的webpack")]),e._v(" "),n("li",[e._v("方式二：在 "),n("code",[e._v("scripts")]),e._v("定义脚本，来执行webpack；")])]),e._v(" "),n("p",[e._v("方式一：在终端中使用如下命令（在项目根目录下）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("./node_modules/.bin/webpack --version\n")])])]),n("p",[e._v("方式二：修改package.json中的scripts")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "webpack": "webpack --version"\n  },\n')])])]),n("p",[e._v("终端中执行：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm run webpack\n")])])]),n("p",[e._v("但是这两种方式都有一点点麻烦，更好的办法是直接使用npx：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npx webpack --version\n")])])]),n("p",[e._v("npx的原理非常简单，它会到当前目录的node_modules/.bin目录下查找对应的命令")])])}),[],!1,null,null,null);n.default=a.exports}}]);
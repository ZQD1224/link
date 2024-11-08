(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{340:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"mongodb命令行导入导出数据-账号认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb命令行导入导出数据-账号认证"}},[a._v("#")]),a._v(" Mongodb命令行导入导出数据(账号认证)")]),a._v(" "),s("h4",{attrs:{id:"mongoimport-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongoimport-的使用"}},[a._v("#")]),a._v(" mongoimport 的使用")]),a._v(" "),s("h5",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[a._v("#")]),a._v(" 基本语法：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mongoimport "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n// 可以使用mongoimport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v(" 获取mongoimport 的\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("语法：\n    mongoimport "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n \n介绍：\n    该命令可以将CSV，TSV或JSON文件数据导入MongoDB， 如果没有提供文件，则mongoimport从stdin（标准输入）读取。\n \n常规选项：\n    /help                               获取命令用法\n    /version                            获取工具版本\n \n详细选项：\n    /v, /verbose:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("level"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    /quiet                              隐藏所有日志输出\n \n连接选项：\n    /h, /host:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("hostname"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("              要连接的远程mongodb主机的地址\n    /port:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("                      指定服务器端口（也可以使用--host hostname：port）\n \n验证选项：\n    /u，/username:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           指定用于身份验证的用户名\n    /p，/password:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           指定用于身份验证用户的密码\n \n名称选项：\n    /d, /db:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("database-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           指定要使用的数据库名称\n    /c, /collection:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("collection-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     指定要使用的collection集合的名称\n \n输入选项：\n    /f, /fields:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(","),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("*      指定要导入字段的字段名，以逗号作为分隔\n    /file:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("                  指定要导入的数据文件，如果不指定，使用标准输入（stdin）\n    /headerline                         当导入数据文件类型为csv或tsv时，使用文件的第一行作字段名\n    /jsonArray                          当导入数据文件中的数据为json数组时，使用此选项\n    /type:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("                      指定要导入的数据文件的类型json，csv或tsv（默认为json）\n    省略部分\n \n\n使用示例：\n\nmongoimport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--db")]),a._v(" ML_OER "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--collection")]),a._v(" lecture "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v(" /home/tmp/course_temp.json\n")])])]),s("h5",{attrs:{id:"认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证"}},[a._v("#")]),a._v(" 认证")]),a._v(" "),s("blockquote",[s("p",[a._v('当开启auth后，执行mongodump，mongorestore时有如下错误”assertion: 18 { code: 18, ok: 0.0, errmsg: "auth fails" }“')])]),a._v(" "),s("h6",{attrs:{id:"导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[a._v("#")]),a._v(" 导入")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mongoimport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--authenticationDatabase")]),a._v(" admin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--db")]),a._v("  zhibo "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" user_watched "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" json "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v(" ./watched.json\n")])])]),s("h6",{attrs:{id:"导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[a._v("#")]),a._v(" 导出")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mongoexport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--db")]),a._v(" zhibo "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--collection")]),a._v(" platefrom_data "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--out")]),a._v("  ./plateform.json\n")])])]),s("h4",{attrs:{id:"导入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[a._v("#")]),a._v(" 导入数据")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("、导出工具：mongoexport\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("、概念：\n        mongoDB中的mongoexport工具可以把一个collection导出成JSON格式或CSV格式的文件。可以通过参数指定导出的数据项，也可以根据指定的条件导出数据。\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("、语法：\n        mongoexport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" dbname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" collectionname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" json/csv "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" field\n        参数说明：\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" ：数据库名\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" ：collection名\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ：输出的文件名\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" ： 输出的格式，默认为json\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" ：输出的字段，如果-type为csv，则需要加上-f "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"字段名"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("、示例：\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" mongoexport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mongotest "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("users")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /home/python/Desktop/mongoDB/users.json "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" json "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"_id,user_id,user_name,age,status"')]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("、数据导入：mongoimport\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("、语法：\n        mongoimport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" dbname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" collectionname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v(" filename "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--headerline")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" json/csv "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" field\n        参数说明：\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" ：数据库名\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" ：collection名\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" ：导入的格式默认json\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" ：导入的字段名\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--headerline")]),a._v(" ：如果导入的格式是csv，则可以使用第一行的标题作为导入的字段\n            "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v(" ：要导入的文件\n \n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("、示例：\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" mongoimport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mongotest "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("users")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v(" /home/mongodump/articles.json "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),a._v(" json\n \n-------------------MongoDB备份与恢复-------------------\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("、MongoDB数据库备份\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("、语法：\n        mongodump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" dbhost "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" dbname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" dbdirectory\n        参数说明：\n            -h： MongDB所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017\n            -d： 需要备份的数据库实例，例如：test\n            -o： 备份的数据存放位置，例如：/home/mongodump/，当然该目录需要提前建立，这个目录里面存放该数据库实例的备份数据。\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("、实例：\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /home/momgodump/\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /home/momgodump\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" mongodump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".17.129:27017 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" itcast "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /home/mongodump/\n        -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("、MongoDB数据库恢复\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("、语法：\n        mongorestore "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" dbhost "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" dbname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dir")]),a._v(" dbdirectory\n \n        参数或名：\n            -h： MongoDB所在服务器地址\n            -d： 需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如test2\n            --dir： 备份数据所在位置，例如：/home/mongodump/itcast/\n            --drop： 恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用！\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("、实例：\n    mongorestore "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".17.129:27017 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" itcast_restore "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dir")]),a._v(" /home/mongodump/itcast/\n \n \n导入.dat\nmongoimport "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" students students.dat \n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" 指的是导入test 数据库"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" students 指的是导入students表 collections"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("tables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{344:function(n,t,o){"use strict";o.r(t);var a=o(4),e=Object(a.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('启动MongoDB\nsystemctl start mongod.service\n\n登录MongoDB并设置密码\n# 登录\nmongo\n# 切换到admin数据库\nuse admin\n# 创建admin账号，密码::admin111 权限：root权限，授权的数据库名：admin\ndb.createUser({user:"admin", pwd:"admin111", roles:[{role:"root", db:"admin"}]})\n编辑MongoDB配置文件\n\nvim /etc/mongod.conf\n\nnet:\n  port: 27017  # 端口\n  bindIp: 0.0.0.0  # 允许访问的地址，0.0.0.0表示所有\n\nsecurity:\n  authorization: enabled\n重启MongoDB服务\n\nsystemctl restart mongod.service\n测试登录\n\nmongo -u admin -p admin111 --authenticationDatabase admin\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
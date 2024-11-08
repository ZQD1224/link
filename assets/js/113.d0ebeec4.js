(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{403:function(t,a,s){"use strict";s.r(a);var v=s(4),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网络相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络相关"}},[t._v("#")]),t._v(" 网络相关")]),t._v(" "),a("h3",{attrs:{id:"tcp三次握手-四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手-四次挥手"}},[t._v("#")]),t._v(" TCP三次握手，四次挥手")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("先建立连接")]),t._v(" "),a("ul",[a("li",[t._v("确保双方都有收发消息的能力")])])]),t._v(" "),a("li",[a("p",[t._v("再传输内容")]),t._v(" "),a("ul",[a("li",[t._v("发请求")])])]),t._v(" "),a("li",[a("p",[t._v("网络连接协议是tcp, 传输协议是http协议")])]),t._v(" "),a("li",[a("p",[t._v("三次握手的建立")]),t._v(" "),a("ul",[a("li",[t._v("client发包，server接收 ；server: 有client的消息")]),t._v(" "),a("li",[t._v("server发包，client接收；client: server 具备接收消息的能力")]),t._v(" "),a("li",[t._v("client发包，server接收，server: 等待client发送")])])]),t._v(" "),a("li",[a("p",[t._v("四次挥手 断开")]),t._v(" "),a("ul",[a("li",[t._v("client发包 ，server 接收；client发送断开的请求")]),t._v(" "),a("li",[t._v("server发包，client 接收；server收到断开的请求")]),t._v(" "),a("li",[t._v("server发包，client接收；server发送可以断开的信号")]),t._v(" "),a("li",[t._v("client发包，server接收；server断开")])])])]),t._v(" "),a("h3",{attrs:{id:"https-握手过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-握手过程"}},[t._v("#")]),t._v(" HTTPS 握手过程")]),t._v(" "),a("ul",[a("li",[t._v("客户端使用https的url访问web服务器,要求与服务器建立ssl连接")]),t._v(" "),a("li",[t._v("web服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端")]),t._v(" "),a("li",[t._v("客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥")]),t._v(" "),a("li",[t._v("客户端利用公钥将会话秘钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话秘钥")]),t._v(" "),a("li",[t._v("之后服务器与客户端使用秘钥加密传输")])]),t._v(" "),a("h3",{attrs:{id:"https-中间人攻击-如何预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-中间人攻击-如何预防"}},[t._v("#")]),t._v(" HTTPS 中间人攻击 如何预防")]),t._v(" "),a("blockquote",[a("p",[t._v("加密传输 http ssl")])]),t._v(" "),a("ul",[a("li",[t._v("服务器向客户端发送公钥。")]),t._v(" "),a("li",[t._v("攻击者截获公钥，保留在自己手上。")]),t._v(" "),a("li",[t._v("然后攻击者自己生成一个【伪造的】公钥，发给客户端。")]),t._v(" "),a("li",[t._v("客户端收到伪造的公钥后，生成加密hash值发给服务器。")]),t._v(" "),a("li",[t._v("攻击者获得加密hash值，用自己的私钥解密获得真秘钥。")]),t._v(" "),a("li",[t._v("同时生成假的加密hash值，发给服务器。")]),t._v(" "),a("li",[t._v("服务器用私钥解密获得假秘钥。")]),t._v(" "),a("li",[t._v("服务器用加秘钥加密传输信息")])]),t._v(" "),a("h4",{attrs:{id:"预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[t._v("#")]),t._v(" 预防")]),t._v(" "),a("ul",[a("li",[t._v("服务端在发送浏览器的公钥中加入CA证书，浏览器可以验证CA证书的有效性")])]),t._v(" "),a("h3",{attrs:{id:"https-握手过程中-客户端如何验证证书的合法性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-握手过程中-客户端如何验证证书的合法性"}},[t._v("#")]),t._v(" HTTPS 握手过程中,客户端如何验证证书的合法性")]),t._v(" "),a("ul",[a("li",[t._v("校验证书的颁发机构是否受客户端信任。")]),t._v(" "),a("li",[t._v("通过 CRL 或 OCSP 的方式校验证书是否被吊销。")]),t._v(" "),a("li",[t._v("对比系统时间，校验证书是否在有效期内。")]),t._v(" "),a("li",[t._v("通过校验对方是否存在证书的私钥，判断证书的网站域名是否与证书颁发的域名一致。")])]),t._v(" "),a("h3",{attrs:{id:"http协议和udp协议有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议和udp协议有什么区别"}},[t._v("#")]),t._v(" HTTP协议和UDP协议有什么区别")]),t._v(" "),a("ul",[a("li",[t._v("http 协议在应用层")]),t._v(" "),a("li",[t._v("TCP UDP 在传输层\n"),a("ul",[a("li",[t._v("tcp\n"),a("ul",[a("li",[t._v("稳定传输")])])]),t._v(" "),a("li",[t._v("UDP")]),t._v(" "),a("li",[t._v("无连接，无断开")]),t._v(" "),a("li",[t._v("不稳定传输，效率高")]),t._v(" "),a("li",[t._v("视频会议，语音通话")])])])]),t._v(" "),a("h3",{attrs:{id:"http-状态码-301-和-302-的应用场景分别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码-301-和-302-的应用场景分别是什么"}},[t._v("#")]),t._v(" Http 状态码 301 和 302 的应用场景分别是什么")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v(" https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"_301"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_301"}},[t._v("#")]),t._v(" 301")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("301应用场景: 域名到期不想继续用这个,换了地址")])]),t._v(" "),a("li",[a("p",[t._v("请求资源的 URL 已永久更改。在响应中给出了新的 URL")])])]),t._v(" "),a("h4",{attrs:{id:"_302"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_302"}},[t._v("#")]),t._v(" 302")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("302应用场景: 做活动时候,从首页跳到活动页面")])]),t._v(" "),a("li",[a("p",[t._v("只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的")])])]),t._v(" "),a("h3",{attrs:{id:"http跨域请求时为什么发送options请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http跨域请求时为什么发送options请求"}},[t._v("#")]),t._v(" http跨域请求时为什么发送options请求")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("跨域请求之前的预检查")])]),t._v(" "),a("li",[a("p",[t._v("浏览器执行发起的")])]),t._v(" "),a("li",[a("p",[t._v("跨域请求")]),t._v(" "),a("ul",[a("li",[t._v("浏览器的同源策略")]),t._v(" "),a("li",[t._v("限制于ā ja x请求，不能跨域请求server")]),t._v(" "),a("li",[t._v("不会限制 img  link iframe script 加载第三方的资源")])])]),t._v(" "),a("li",[a("p",[t._v("JSONP")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("a\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\twindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scr")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n\nb\n"onSucesss({data:{}})"\n')])])])]),t._v(" "),a("li",[a("p",[t._v("CORS")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("setHeader\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"http-协议1-0-1-1-2-0有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-协议1-0-1-1-2-0有什么区别"}},[t._v("#")]),t._v(" http 协议1.0  1.1  2.0有什么区别")]),t._v(" "),a("h4",{attrs:{id:"_1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1"}},[t._v("#")]),t._v(" 1.1")]),t._v(" "),a("ul",[a("li",[t._v("缓存策略 cache-control")]),t._v(" "),a("li",[t._v("支持长连接 connection: keep-alive")]),t._v(" "),a("li",[t._v("断点续传")]),t._v(" "),a("li",[t._v("支持PUT DELETE")])]),t._v(" "),a("h4",{attrs:{id:"_2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0"}},[t._v("#")]),t._v(" 2.0")]),t._v(" "),a("ul",[a("li",[t._v("可压缩header，减少体积")]),t._v(" "),a("li",[t._v("多路复用")]),t._v(" "),a("li",[t._v("服务端推送")])]),t._v(" "),a("h3",{attrs:{id:"http2的多路复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2的多路复用"}},[t._v("#")]),t._v(" http2的多路复用")]),t._v(" "),a("h4",{attrs:{id:"解决http1的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决http1的问题"}},[t._v("#")]),t._v(" 解决http1的问题")]),t._v(" "),a("ul",[a("li",[t._v("在 HTTP/1 中，每次请求都会建立一次HTTP连接，也就是我们常说的3次握手4次挥手，这个过程在一次请求过程中占用了相当长的时间，即使开启了 Keep-Alive ，解决了多次连接的问题，但是依然有两个效率上的问题：")])]),t._v(" "),a("ul",[a("li",[t._v("第一个：串行的文件传输。当请求a文件时，b文件只能等待，等待a连接到服务器、服务器处理文件、服务器返回文件，这三个步骤。我们假设这三步用时都是1秒，那么a文件用时为3秒，b文件传输完成用时为6秒，依此类推。（注：此项计算有一个前提条件，就是浏览器和服务器是单通道传输）")]),t._v(" "),a("li",[t._v("第二个：连接数过多。我们假设Apache设置了最大并发数为300，因为浏览器限制，浏览器发起的最大请求数为6，也就是服务器能承载的最高并发为50，当第51个人访问时，就需要等待前面某个请求处理完成")])]),t._v(" "),a("h4",{attrs:{id:"帧和流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帧和流"}},[t._v("#")]),t._v(" 帧和流")]),t._v(" "),a("ul",[a("li",[t._v("帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，")]),t._v(" "),a("li",[t._v("流也就是多个帧组成的数据流。")]),t._v(" "),a("li",[t._v("多路复用，就是在一个 TCP 连接中可以存在多条流，也就是可以发送多个请求")]),t._v(" "),a("li",[t._v("通过帧中的标识知道属于哪个请求。")])]),t._v(" "),a("h4",{attrs:{id:"对比http1-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比http1-x"}},[t._v("#")]),t._v(" 对比http1.x")]),t._v(" "),a("ul",[a("li",[t._v("在HTTP1.x中，\n"),a("ul",[a("li",[t._v("并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。")])])])]),t._v(" "),a("ul",[a("li",[t._v("HTTP2中")]),t._v(" "),a("li",[t._v("同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。")]),t._v(" "),a("li",[t._v("单个连接上可以并行交错的请求和响应，之间互不干扰")])]),t._v(" "),a("h3",{attrs:{id:"为什么-http1-1-不能实现多路复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-http1-1-不能实现多路复用"}},[t._v("#")]),t._v(" 为什么 HTTP1.1 不能实现多路复用")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/1.1 不是二进制传输，而是通过文本进行传输。由于没有流的概念，在使用并行传输（多路复用）传递数据时，接收端在接收到响应后，并不能区分多个响应分别对应的请求，所以无法将多个响应的结果重新进行组装，也就实现不了多路复用")])]),t._v(" "),a("h4",{attrs:{id:"http1-x是序列和阻塞机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-x是序列和阻塞机制"}},[t._v("#")]),t._v(" HTTP1.x是序列和阻塞机制")]),t._v(" "),a("h4",{attrs:{id:"http-2-0-是多工复用tcp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0-是多工复用tcp连接"}},[t._v("#")]),t._v(" HTTP 2.0 是多工复用TCP连接，")]),t._v(" "),a("p",[t._v('在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了"队头堵塞"。')]),t._v(" "),a("ul",[a("li",[t._v("举例来说，在一个TCP连接里面，服务器同时收到了A请求和B请求，于是先回应A请求，结果发现处理过程非常耗时，于是就发送A请求已经处理好的部分， 接着回应B请求，完成后，再发送A请求剩下的部分。")]),t._v(" "),a("li",[t._v("旧的http1.1是会等 A请求完全处理完后在 处理B请求，会阻塞")])]),t._v(" "),a("h4",{attrs:{id:"http1-1已经实现了管道机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-1已经实现了管道机制"}},[t._v("#")]),t._v(" http1.1已经实现了管道机制")]),t._v(" "),a("ul",[a("li",[t._v("即 在同一个TCP连接里面，客户端可以同时发送多个请求。")]),t._v(" "),a("li",[t._v("http 1.0并做不到，所以效率很低")])])])}),[],!1,null,null,null);a.default=_.exports}}]);
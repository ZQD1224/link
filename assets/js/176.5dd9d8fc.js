(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{469:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"服务器的相关命令-以下均在linux系统中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器的相关命令-以下均在linux系统中"}},[a._v("#")]),a._v(" 服务器的相关命令(以下均在Linux系统中)")]),a._v(" "),s("p",[a._v("​\t*云服务器的默认的端口号是22；")]),a._v(" "),s("p",[a._v("​\t默认的用户是root （超级权限）；")]),a._v(" "),s("h3",{attrs:{id:"用户的基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户的基本配置"}},[a._v("#")]),a._v(" *用户的基本配置")]),a._v(" "),s("h5",{attrs:{id:"_1-ssh-root-公网-登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ssh-root-公网-登录"}},[a._v("#")]),a._v(" 1.ssh root@公网           -登录")]),a._v(" "),s("h5",{attrs:{id:"_2-df-h-查看硬盘的使用情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-df-h-查看硬盘的使用情况"}},[a._v("#")]),a._v(" 2. df -h             -查看硬盘的使用情况")]),a._v(" "),s("h5",{attrs:{id:"_3-adduser-qd-增加用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-adduser-qd-增加用户"}},[a._v("#")]),a._v(" 3.adduser qd       - 增加用户")]),a._v(" "),s("h5",{attrs:{id:"gpasswd-a-qd-sudo-升级权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpasswd-a-qd-sudo-升级权限"}},[a._v("#")]),a._v(" gpasswd -a qd sudo       -升级权限")]),a._v(" "),s("h5",{attrs:{id:"sudo-visudo-进入配置文件-修改user-privilege-修改成和root一样-ctrl-x-shift-y"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-visudo-进入配置文件-修改user-privilege-修改成和root一样-ctrl-x-shift-y"}},[a._v("#")]),a._v(" sudo visudo        -进入配置文件      （修改user privilege     修改成和root一样）  Ctrl+x   shift +y")]),a._v(" "),s("h5",{attrs:{id:"可以用qd登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可以用qd登录"}},[a._v("#")]),a._v(" 可以用qd登录")]),a._v(" "),s("h3",{attrs:{id:"ssh的免密登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh的免密登录"}},[a._v("#")]),a._v(" *ssh的免密登录")]),a._v(" "),s("h5",{attrs:{id:"_1-公钥和私钥在-ssh的文件中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-公钥和私钥在-ssh的文件中"}},[a._v("#")]),a._v(" 1.公钥和私钥在.ssh的文件中")]),a._v(" "),s("h5",{attrs:{id:"_2-在-ssh文件夹中-本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-ssh文件夹中-本地"}},[a._v("#")]),a._v(" 2.在.ssh文件夹中 (本地)")]),a._v(" "),s("h5",{attrs:{id:"输入-ssh-keygen-t-rsa-b-4096-c-zhouqd-163-com"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入-ssh-keygen-t-rsa-b-4096-c-zhouqd-163-com"}},[a._v("#")]),a._v(' 输入                     ssh-keygen -t rsa -b 4096 -C "zhouqd@163.com"')]),a._v(" "),s("h5",{attrs:{id:"开启ssh代理-eval-ssh-agent-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启ssh代理-eval-ssh-agent-s"}},[a._v("#")]),a._v(' 开启ssh代理 :     eval "$(ssh-agent-s)"')]),a._v(" "),s("h5",{attrs:{id:"将key加入代理-ssh-add-ssh-id-rsa-ssh-add-k"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将key加入代理-ssh-add-ssh-id-rsa-ssh-add-k"}},[a._v("#")]),a._v(" 将key加入代理：ssh-add ~/.ssh/id_rsa.  ssh-add -K")]),a._v(" "),s("h5",{attrs:{id:"_3-服务器中-ssh文件夹中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务器中-ssh文件夹中"}},[a._v("#")]),a._v(" 3.服务器中(.ssh文件夹中)")]),a._v(" "),s("h5",{attrs:{id:"输入-ssh-keygen-t-rsa-b-4096-c-zhouqd-163-com-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入-ssh-keygen-t-rsa-b-4096-c-zhouqd-163-com-2"}},[a._v("#")]),a._v(' 输入                     ssh-keygen -t rsa -b 4096 -C "zhouqd@163.com"')]),a._v(" "),s("h5",{attrs:{id:"开启ssh代理-eval-ssh-agent-s-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启ssh代理-eval-ssh-agent-s-2"}},[a._v("#")]),a._v(' 开启ssh代理 :     eval "$(ssh-agent-s)"')]),a._v(" "),s("h5",{attrs:{id:"将key加入代理-ssh-add-ssh-id-rsa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将key加入代理-ssh-add-ssh-id-rsa"}},[a._v("#")]),a._v(" 将key加入代理：ssh-add ~/.ssh/id_rsa")]),a._v(" "),s("h5",{attrs:{id:"授权-vi-authorized-keys-wq-保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权-vi-authorized-keys-wq-保存"}},[a._v("#")]),a._v(" 授权：\t\t\t vi authorized_keys\t\t(wq!)保存")]),a._v(" "),s("h5",{attrs:{id:"输入内容-将本地的公钥复制到服务器创建好的公钥文件中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入内容-将本地的公钥复制到服务器创建好的公钥文件中"}},[a._v("#")]),a._v(" 输入内容： 将本地的公钥复制到服务器创建好的公钥文件中")]),a._v(" "),s("h5",{attrs:{id:"授权-chmod-600-authorized-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权-chmod-600-authorized-keys"}},[a._v("#")]),a._v(" 授权:                      chmod 600 authorized_keys")]),a._v(" "),s("h5",{attrs:{id:"重启服务-sudo-service-ssh-restart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启服务-sudo-service-ssh-restart"}},[a._v("#")]),a._v(" 重启服务：            sudo service ssh restart")]),a._v(" "),s("h3",{attrs:{id:"修改端口号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改端口号"}},[a._v("#")]),a._v(" *修改端口号")]),a._v(" "),s("h5",{attrs:{id:"_1-进入配置文件-sudo-vi-etc-ssh-sshd-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-进入配置文件-sudo-vi-etc-ssh-sshd-config"}},[a._v("#")]),a._v(" 1.进入配置文件：        sudo vi /etc/ssh/sshd_config")]),a._v(" "),s("h5",{attrs:{id:"_2-修改配置项-port-1024-65536-选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改配置项-port-1024-65536-选择"}},[a._v("#")]),a._v(" 2.修改配置项： Port  （1024-65536）选择")]),a._v(" "),s("h5",{attrs:{id:"usedns-no"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usedns-no"}},[a._v("#")]),a._v(" UseDNS:no")]),a._v(" "),s("h5",{attrs:{id:"permitrootlogin-no"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permitrootlogin-no"}},[a._v("#")]),a._v(" PermitRootLogin no")]),a._v(" "),s("h5",{attrs:{id:"末端增加一行-allowusers-qd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#末端增加一行-allowusers-qd"}},[a._v("#")]),a._v(" 末端增加一行：AllowUsers   qd")]),a._v(" "),s("h5",{attrs:{id:"保存后重启-sudo-service-ssh-restart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存后重启-sudo-service-ssh-restart"}},[a._v("#")]),a._v(" 保存后重启：  sudo service ssh restart")]),a._v(" "),s("h5",{attrs:{id:"登录-ssh-p-39999-qd-公网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录-ssh-p-39999-qd-公网"}},[a._v("#")]),a._v(" 登录：   ssh -p 39999 qd@公网")]),a._v(" "),s("h3",{attrs:{id:"安全配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全配置"}},[a._v("#")]),a._v(" *安全配置")]),a._v(" "),s("h5",{attrs:{id:"_1-升级ubuntu更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-升级ubuntu更新"}},[a._v("#")]),a._v(" 1.升级ubuntu更新：")]),a._v(" "),s("h5",{attrs:{id:"sudo-apt-get-update-sudo-apt-get-upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-apt-get-update-sudo-apt-get-upgrade"}},[a._v("#")]),a._v(" sudo apt-get update && sudo apt-get upgrade")]),a._v(" "),s("h5",{attrs:{id:"_2-sudo-iptables-f"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sudo-iptables-f"}},[a._v("#")]),a._v(" 2.sudo iptables -F")]),a._v(" "),s("h5",{attrs:{id:"sudo-vi-etc-iptables-up-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-vi-etc-iptables-up-rules"}},[a._v("#")]),a._v(" sudo vi /etc/iptables.up.rules")]),a._v(" "),s("h5",{attrs:{id:"编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑"}},[a._v("#")]),a._v(" 编辑：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("*filter\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#allow all connections")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" ESTABLISHED,RELATED "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#allow out traffic")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" OUTPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#allow http https")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#allow ssh port login")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" NEW "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("39999")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#ping")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" icmp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" icmp --icmp-type "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#log denied calls")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" limit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--limit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("/min "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" LOG --log-prefix "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"iptables denied:"')]),a._v(" --log-level "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#drop")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" eth0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" NEW "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" recent "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--set")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" eth0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" NEW "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" recent "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--update")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--seconds")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hitcount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("150")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" DROP\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#reject all other inbound")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" REJECT\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" REJECT\n\nCOMMIT\n")])])]),s("h5",{attrs:{id:"告知iptable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#告知iptable"}},[a._v("#")]),a._v(" 告知IPtable")]),a._v(" "),s("h5",{attrs:{id:"sudo-iptables-restore-etc-iptables-up-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-iptables-restore-etc-iptables-up-rules"}},[a._v("#")]),a._v(" sudo iptables-restore < /etc/iptables.up.rules")]),a._v(" "),s("h5",{attrs:{id:"激活防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#激活防火墙"}},[a._v("#")]),a._v(" 激活防火墙")]),a._v(" "),s("h5",{attrs:{id:"查看状态-sudo-ufw-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看状态-sudo-ufw-status"}},[a._v("#")]),a._v(" 查看状态：sudo ufw status")]),a._v(" "),s("h5",{attrs:{id:"激活-sudo-ufw-enable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#激活-sudo-ufw-enable"}},[a._v("#")]),a._v(" 激活：        sudo ufw enable")]),a._v(" "),s("h5",{attrs:{id:"开机自动启动-sudo-vi-etc-network-if-up-d-iptables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机自动启动-sudo-vi-etc-network-if-up-d-iptables"}},[a._v("#")]),a._v(" 开机自动启动：sudo vi /etc/network/if-up.d/iptables")]),a._v(" "),s("h5",{attrs:{id:"bin-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bin-sh"}},[a._v("#")]),a._v(" #!/bin/sh")]),a._v(" "),s("h5",{attrs:{id:"iptables-restore-etc-iptables-up-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iptables-restore-etc-iptables-up-rules"}},[a._v("#")]),a._v(" iptables-restore /etc/iptables.up.rules")]),a._v(" "),s("h5",{attrs:{id:"sudo-chmod-x-etc-network-if-up-d-iptables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-chmod-x-etc-network-if-up-d-iptables"}},[a._v("#")]),a._v(" sudo chmod +x etc/network/if-up.d/iptables")]),a._v(" "),s("h5",{attrs:{id:"安装fail2ban"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装fail2ban"}},[a._v("#")]),a._v(" 安装fail2ban:")]),a._v(" "),s("h5",{attrs:{id:"sudo-apt-get-install-fail2ban"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-apt-get-install-fail2ban"}},[a._v("#")]),a._v(" sudo apt-get install fail2ban")]),a._v(" "),s("h5",{attrs:{id:"进入修改-sudo-vi-etc-fail2ban-jail-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入修改-sudo-vi-etc-fail2ban-jail-conf"}},[a._v("#")]),a._v(" 进入修改：sudo vi /etc/fail2ban/jail.conf")]),a._v(" "),s("h5",{attrs:{id:"查看状态-sudo-service-fail2ban-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看状态-sudo-service-fail2ban-status"}},[a._v("#")]),a._v(" 查看状态：sudo service fail2ban status")]),a._v(" "),s("h5",{attrs:{id:"启动-sudo-service-fail2ban-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-sudo-service-fail2ban-start"}},[a._v("#")]),a._v(" 启动：sudo service fail2ban start")]),a._v(" "),s("h5",{attrs:{id:"关闭-sudo-service-fail2ban-stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭-sudo-service-fail2ban-stop"}},[a._v("#")]),a._v(" 关闭：sudo service fail2ban stop")]),a._v(" "),s("h3",{attrs:{id:"nodejs的环境搭载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs的环境搭载"}},[a._v("#")]),a._v(" *nodejs的环境搭载")]),a._v(" "),s("h5",{attrs:{id:"_1-更新ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新ubuntu"}},[a._v("#")]),a._v(" 1.更新ubuntu:")]),a._v(" "),s("h5",{attrs:{id:"sudo-apt-get-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-apt-get-update"}},[a._v("#")]),a._v(" sudo apt-get update")]),a._v(" "),s("h5",{attrs:{id:"_2-安装所需要的加载-一次安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装所需要的加载-一次安装"}},[a._v("#")]),a._v(" 2.安装所需要的加载（一次安装）")]),a._v(" "),s("h5",{attrs:{id:"sudo-apt-get-install-vim-openssl-build-essential-libssl-dev-wget-curl-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-apt-get-install-vim-openssl-build-essential-libssl-dev-wget-curl-git"}},[a._v("#")]),a._v(" sudo apt-get install vim openssl build-essential libssl-dev wget curl git")]),a._v(" "),s("blockquote",[s("p",[a._v("在GitHub中找到nvm，wget复制粘贴到命令行回车；安装nvm  ，结束后打开新的窗口登录新的进行操作")])]),a._v(" "),s("h5",{attrs:{id:"_3-安装nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装nodejs"}},[a._v("#")]),a._v(" 3.安装nodejs:")]),a._v(" "),s("h5",{attrs:{id:"nvm-install-v6-9-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvm-install-v6-9-5"}},[a._v("#")]),a._v(" nvm install v6.9.5")]),a._v(" "),s("h5",{attrs:{id:"nvm-use-v6-9-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvm-use-v6-9-5"}},[a._v("#")]),a._v(" nvm use v6.9.5")]),a._v(" "),s("h5",{attrs:{id:"指定node的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定node的版本"}},[a._v("#")]),a._v(" 指定node的版本")]),a._v(" "),s("h5",{attrs:{id:"nvm-alias-default-v6-9-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvm-alias-default-v6-9-5"}},[a._v("#")]),a._v(" nvm alias default v6.9.5")]),a._v(" "),s("h5",{attrs:{id:"_4-安装npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装npm"}},[a._v("#")]),a._v(" 4.安装npm：")]),a._v(" "),s("p",[a._v("​\tnpm --registry=https://registry.npm.taobao.org install -g npm")]),a._v(" "),s("h5",{attrs:{id:"echo-fs-inotify-max-user-watches-524288-sudo-tee-a-etc-sysctl-conf-sudo-sysctl-p"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echo-fs-inotify-max-user-watches-524288-sudo-tee-a-etc-sysctl-conf-sudo-sysctl-p"}},[a._v("#")]),a._v(" echo fs.inotify.max_user_watches=524288 |sudo tee -a /etc/sysctl.conf && sudo sysctl -p")]),a._v(" "),s("h5",{attrs:{id:"_5-安装相关的工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装相关的工具"}},[a._v("#")]),a._v(" 5.安装相关的工具：")]),a._v(" "),s("h5",{attrs:{id:"npm-i-pm2-webpack-gulp-grunt-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-i-pm2-webpack-gulp-grunt-cli"}},[a._v("#")]),a._v(" npm i pm2 webpack gulp grunt-cli")]),a._v(" "),s("h5",{attrs:{id:"_6-安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装nginx"}},[a._v("#")]),a._v(" 6.安装nginx")]),a._v(" "),s("h5",{attrs:{id:"sudo-apt-get-install-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-apt-get-install-nginx"}},[a._v("#")]),a._v(" sudo apt-get install nginx")]),a._v(" "),s("h5",{attrs:{id:"cd-etc-nginx-conf-d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd-etc-nginx-conf-d"}},[a._v("#")]),a._v(" cd /etc/nginx/conf.d")]),a._v(" "),s("h5",{attrs:{id:"sudo-vi-imooc-com-8081-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-vi-imooc-com-8081-conf"}},[a._v("#")]),a._v(" sudo vi imooc-com-8081.conf")]),a._v(" "),s("h5",{attrs:{id:"输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入"}},[a._v("#")]),a._v(" 输入：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("upstream imooc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n\t\t\t\tserver "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:8081\n\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n\tlisten "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\tserver_name 公网ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\n\tlocation / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n\t\tproxy_set_header X-Real-IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_addr")]),a._v("\n\t\tproxy_set_header X-Forward-For "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t\tproxy_set_header Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\tproxy_set_header X-Nginx-Proxy "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t\tproxy_pass http://imooc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\tproxy_redirect off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h5",{attrs:{id:"_7-测试配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-测试配置"}},[a._v("#")]),a._v(" 7.测试配置")]),a._v(" "),s("h5",{attrs:{id:"sudo-nginx-t"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-nginx-t"}},[a._v("#")]),a._v(" sudo nginx -t")]),a._v(" "),s("h5",{attrs:{id:"重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[a._v("#")]),a._v(" 重启：")]),a._v(" "),s("h5",{attrs:{id:"sudo-nginx-s-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-nginx-s-reload"}},[a._v("#")]),a._v(" sudo nginx -s reload")]),a._v(" "),s("p",[a._v("​")]),a._v(" "),s("p",[a._v("​")])])}),[],!1,null,null,null);s.default=r.exports}}]);
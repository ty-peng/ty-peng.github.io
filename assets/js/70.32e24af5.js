(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{608:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("博客搭建系列（一）")]),t._v(" "),e("p",[t._v("最近终于把博客搭建好了，还是写篇文章记录一下搭建过程吧。")]),t._v(" "),e("h2",{attrs:{id:"方案选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案选择"}},[t._v("#")]),t._v(" 方案选择")]),t._v(" "),e("ul",[e("li",[t._v("静态网页生成器："),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("web 服务提供（国外）："),e("code",[t._v("GitHub Pages")])]),t._v(" "),e("li",[t._v("web 服务提供（国内）："),e("code",[t._v("Gitee Pages")])]),t._v(" "),e("li",[t._v("博客主题："),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("p",[t._v("本着节约 "),e("s",[t._v("白嫖")]),t._v(" 的原则，本套方案实现了 0 成本，就是，有点麻烦（是什么蒙蔽了我的双眼.jpg）。")]),t._v(" "),e("p",[t._v("ps：不差钱的直接买服务器搭建 "),e("a",{attrs:{href:"https://ghost.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ghost"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"why-vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-vuepress"}},[t._v("#")]),t._v(" Why VuePress")]),t._v(" "),e("p",[e("code",[t._v("VuePress")]),t._v(" 是 "),e("code",[t._v("Vue")]),t._v(" 驱动的静态网站生成器，这是我比较喜欢的一点。")]),t._v(" "),e("p",[t._v("对比其他……（此处省略 n 个字 "),e("s",[t._v("不需要理由！")]),t._v("）")]),t._v(" "),e("h2",{attrs:{id:"运行环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行环境准备"}},[t._v("#")]),t._v(" 运行环境准备")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Node.js")]),t._v(" "),e("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),e("br"),t._v("\n版本 >= 8.6，同时配置好环境变量")]),t._v(" "),e("li",[e("code",[t._v("NPM")])]),t._v(" "),e("li",[e("code",[t._v("Yarn")])])]),t._v(" "),e("p",[t._v("安装 "),e("code",[t._v("Node.js")]),t._v(" 之后，可使用以下命令安装和配置 "),e("code",[t._v("NPM")]),t._v(" 和 "),e("code",[t._v("Yarn")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org/\n")])])]),e("h2",{attrs:{id:"快捷脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快捷脚本"}},[t._v("#")]),t._v(" 快捷脚本")]),t._v(" "),e("p",[t._v("我写了一个 Windows 的快捷脚本，在想要创建博客文件夹的位置新建 "),e("code",[t._v("install.bat")]),t._v("，复制以下内容粘贴保存后，双击即可执行。")]),t._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@echo off\necho "Node Version:"\ncall node -v || echo "Node.js is not installed!"\necho ">>> Set NPM Registry"\ncall npm config set registry https://registry.npm.taobao.org/ && call npm get registry\necho ">>> Install Yarn"\ncall npm install -g yarn\necho ">>> Set Yarn Registry"\ncall yarn config set registry https://registry.npm.taobao.org/ && call yarn config get registry\n\necho ">>> Get Demo Project Files"\ncall git clone https://github.com/ty-peng/vuepress-blog-demo.git\ncall rename vuepress-blog-demo blog\ncall cd blog\ncall rd /S /Q .git\n\npause')])])]),e("p",[t._v("执行后，会生成一个 "),e("code",[t._v("blog")]),t._v(" 文件夹，这就是一个 "),e("code",[t._v("VuePress")]),t._v(" 项目了。"),e("br"),t._v("\n文件夹里的内容，是从我的 "),e("a",{attrs:{href:"https://github.com/ty-peng/vuepress-blog-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-blog-demo"),e("OutboundLink")],1),t._v(" 项目克隆下来的，是一些常用的配置做成的 demo。"),e("br"),t._v("\n到这里，博客就差不多成型了，可以直接运行看效果。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入 blog 文件夹")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动 VuePress dev 模式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n")])])]),e("p",[t._v("启动后，默认监听 "),e("code",[t._v("8080")]),t._v(" 端口（终端会输出实际地址），用浏览器打开对应地址即可。")]),t._v(" "),e("p",[t._v("如果想自己一步一步搭建，可以接着下文继续看，如果使用脚本的话，可以直接跳到 "),e("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE"}},[t._v("配置")])]),t._v(" "),e("h2",{attrs:{id:"vuepress-官方-getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-官方-getting-started"}},[t._v("#")]),t._v(" VuePress 官方 Getting Started")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速上手 | VuePress"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并进入一个新目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" vuepress-starter "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vuepress-starter\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用你喜欢的包管理器进行初始化")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" init "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm init")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 VuePress 安装为本地依赖，不再推荐全局安装 VuePress")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm install -D vuepress")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建你的第一篇文档")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docs/README.md\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 package.json 中添加一些 scripts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在本地启动服务器")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:dev "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run docs:dev")]),t._v("\n")])])]),e("p",[t._v("VuePress 会在 "),e("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),e("OutboundLink")],1),t._v(" 启动一个热重载的开发服务器。")]),t._v(" "),e("p",[t._v("要生成静态的 HTML 文件，运行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:build "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者：npm run docs:build")]),t._v("\n")])])]),e("p",[t._v("默认情况下，文件将会被生成在 "),e("code",[t._v("docs/.vuepress/dist")]),t._v("，当然，你也可以通过 "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(" 中的 "),e("code",[t._v("dest")]),t._v(" 字段来修改，生成的文件可以部署到任意的静态文件服务器上。")]),t._v(" "),e("h2",{attrs:{id:"应用主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用主题"}},[t._v("#")]),t._v(" 应用主题")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加主题依赖")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-theme-reco "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者 npm install vuepress-theme-reco --save-dev")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置主题")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reco"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"使用-vuepress-reco-theme-cli-主题搭建脚手架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-vuepress-reco-theme-cli-主题搭建脚手架"}},[t._v("#")]),t._v(" 使用 vuepress-reco/theme-cli 主题搭建脚手架")]),t._v(" "),e("p",[t._v("reco 主题文档地址："),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),e("OutboundLink")],1),e("br"),t._v("\n脚手架项目："),e("a",{attrs:{href:"https://github.com/vuepress-reco/theme-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-reco/theme-cli"),e("OutboundLink")],1),t._v(" （貌似很久没更新了）")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建项目文件夹（my-blog 为自定义的文件夹名称）")]),t._v("\nnpx vuepress-theme-reco-cli init my-blog  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者：npm install -g reco-cli init my-blog")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖包")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-blog\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者：npm install")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行（同样，在后面添加 -p xxx 可以指定端口，默认 8080）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者：npm run dev")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译（默认输出路径是 ./public）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者：npm run build")]),t._v("\n")])])]),e("p",[t._v("在进行第一步安装的时候，控制台会输出几个问题，根据自己的情况做出选择和输入即可。")]),t._v(" "),e("p",[t._v("似乎从 git 远程仓库代码下载有点慢，有一个问题是选择 "),e("code",[t._v("doc")]),t._v("、"),e("code",[t._v("blog")]),t._v("、"),e("code",[t._v("afternoon ……")]),t._v("，")]),t._v(" "),e("p",[t._v("如果只是作为项目文档，选择 "),e("code",[t._v("doc")]),t._v(" 即可，如果是作为博客，选择 "),e("code",[t._v("blog")]),t._v(" 即可，")]),t._v(" "),e("p",[t._v("最后一项是作者自己的博客仓库，我试了下，下载半天没下载下来，可能因网络情况而异，建议不要选择，想看作者的博客直接去线上看即可。")]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("ul",[e("li",[t._v("logo、头像、banner 背景图")]),t._v(" "),e("li",[t._v("评论插件")])]),t._v(" "),e("p",[t._v("To Be Continued……")]),t._v(" "),e("h2",{attrs:{id:"编写文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写文章"}},[t._v("#")]),t._v(" 编写文章")]),t._v(" "),e("p",[t._v("Markdown")]),t._v(" "),e("h2",{attrs:{id:"图床"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图床"}},[t._v("#")]),t._v(" 图床")]),t._v(" "),e("h3",{attrs:{id:"存储库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储库"}},[t._v("#")]),t._v(" 存储库")]),t._v(" "),e("p",[t._v("新建 GitHub 仓库")]),t._v(" "),e("h3",{attrs:{id:"免费-cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#免费-cdn"}},[t._v("#")]),t._v(" 免费 CDN")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsDelivr"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("code",[t._v("https://cdn.jsdelivr.net/gh/:user/:repo@:version/:file")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.staticaly.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("staticaly"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("code",[t._v("https://cdn.staticaly.com/gh/:user/:repo/:tag/:file")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://raw.githack.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("githack"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("code",[t._v("https://rawcdn.githack.com/:user/:repo/:tag/:file")])])])])]),t._v(" "),e("h2",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),e("h3",{attrs:{id:"web-服务提供"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-服务提供"}},[t._v("#")]),t._v(" web 服务提供")]),t._v(" "),e("ul",[e("li",[t._v("GitHub Pages")]),t._v(" "),e("li",[t._v("Gitee Pages")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("如果自己有云主机的，可以把编译后的静态 HTML 文件夹放置在 web 服务目录下；")]),t._v(" "),e("p",[t._v("没有的，可以部署在"),e("code",[t._v("GitHub Pages")]),t._v("，免费且无限空间，但是国内访问较慢，")]),t._v(" "),e("p",[t._v("也可以使用"),e("code",[t._v("Gitee Pages")]),t._v("，但是"),e("code",[t._v("push")]),t._v("后需要在"),e("code",[t._v("Pages")]),t._v("页面手动点击更新，貌似空间有限制。")])]),e("h3",{attrs:{id:"手动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动部署"}},[t._v("#")]),t._v(" 手动部署")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在项目下新建"),e("code",[t._v("deploy.sh")]),t._v("脚本")]),t._v(" "),e("p",[t._v("Linux 下可以使用以下命令：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" deploy.sh\n")])])]),e("p",[t._v("Windows 直接新建文件改后缀即可。")])]),t._v(" "),e("li",[e("p",[t._v("编辑 "),e("code",[t._v("deploy.sh")]),t._v("\n输入以下内容（根据自己需要修改）：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除之前的输出目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf public\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" public\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:USERNAME/REPOSITORY.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" github git@github.com:USERNAME/USERNAME.github.io.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitee git@gitee.com:USERNAME/USERNAME.git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布到 GitHub Pages")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f github master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布到当前仓库主分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gitee Pages")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f gitee master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n")])])])])]),t._v(" "),e("p",[t._v("然后需要部署时，运行以下命令即可：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" deploy.sh\n")])])]),e("p",[t._v("Windows 下可以使用 Git Bash 执行以上命令，Linux 下直接运行即可。")]),t._v(" "),e("h3",{attrs:{id:"自动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动部署"}},[t._v("#")]),t._v(" 自动部署")]),t._v(" "),e("p",[t._v("最近在研究 Github Actions，\n详细见 "),e("RouterLink",{attrs:{to:"/views/note/ops/202003231800-github-actions.html"}},[t._v("进行博客的自动部署")])],1),t._v(" "),e("h2",{attrs:{id:"多端使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多端使用"}},[t._v("#")]),t._v(" 多端使用")]),t._v(" "),e("h3",{attrs:{id:"安卓手机端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安卓手机端"}},[t._v("#")]),t._v(" 安卓手机端")]),t._v(" "),e("p",[t._v("在安卓手机上，可以安装"),e("code",[t._v("Termux")]),t._v("终端，然后就可以像使用"),e("code",[t._v("Linux")]),t._v("系统操作一样进行上述操作，具体以后有时间再单独写一篇博客细讲。")]),t._v(" "),e("h3",{attrs:{id:"云主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#云主机"}},[t._v("#")]),t._v(" 云主机")]),t._v(" "),e("p",[t._v("云主机可以提供一个"),e("code",[t._v("Node.js")]),t._v("在线编译的环境和"),e("code",[t._v("Git")]),t._v("仓库，然后也可以在手机端通过 ssh 连接云主机进行操作。")]),t._v(" "),e("h3",{attrs:{id:"个人-pc-端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#个人-pc-端"}},[t._v("#")]),t._v(" 个人 PC 端")]),t._v(" "),e("p",[t._v("性能应该都相对更好，反正"),e("code",[t._v("Git")]),t._v("仓库可以多端共同合作，公司或者自己家里的电脑都可以安装一下。")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"系列文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系列文章"}},[t._v("#")]),t._v(" 系列文章")]),t._v(" "),e("p",[t._v("To Be Continued……")]),t._v(" "),e("p",[e("strong",[t._v("参考链接：")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/2220dbacfde1",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于 vuepress 的个人博客搭建完全教程 - 简书"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/0d9e4224264c",target:"_blank",rel:"noopener noreferrer"}},[t._v("丢掉烂大街的 Hexo 吧，用 Vuepress 搭建专属你的博客吧 - 简书"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);
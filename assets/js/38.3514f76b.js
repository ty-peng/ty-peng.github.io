(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{577:function(a,t,s){"use strict";s.r(t);var e=s(4),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"http://kafka.apache.org/quickstart",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache Kafka Quick Start"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("官方文档说明已经很详细了，简单总结下，不多赘述。")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("下载解压")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://mirrors.tuna.tsinghua.edu.cn/apache/kafka/2.4.1/kafka_2.12-2.4.1.tgz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xzf kafka_2.12-2.4.1.tgz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" kafka_2.12-2.1.0/ kafka_2.12\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" kafka_2.12\n")])])])]),a._v(" "),s("li",[s("p",[a._v("修改配置文件")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /usr/local/kafka_2.12/config/server.properties\n")])])]),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("broker.id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("listeners")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("PLAINTEXT://:9092")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("advertised.listeners")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("PLAINTEXT://your.host.name:9092")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log.dirs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/usr/local/kafka_2.12/kafka-logs")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("zookeeper.connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("xxx.xxx.xxx.xxx:2181,xxx.xxx.xxx.xxx:2181,xxx.xxx.xxx.xxx:2181")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("num.partitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ...")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("集群")]),a._v(" "),s("p",[a._v("复制配置文件：")]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" config/server.properties config/server-1.properties\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" config/server.properties config/server-2.properties\n")])])]),s("p",[a._v("分别修改两个配置文件：")]),a._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config/server-1.properties:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("broker.id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("listeners")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("PLAINTEXT://:9093")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log.dirs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/usr/local/kafka_2.12/kafka-logs-1")]),a._v("\n")])])]),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config/server-1.properties:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("broker.id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("listeners")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("PLAINTEXT://:9094")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("log.dirs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/usr/local/kafka_2.12/kafka-logs-2")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("启动")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("建议设置 kafka 目录下的 bin 目录为环境变量，可直接使用以下命令，否则命令需带上路径。")])]),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kafka-server-start.sh config/server.properties "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 集群其他节点（如果需要集群）")]),a._v("\nkafka-server-start.sh config/server-1.properties "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\nkafka-server-start.sh config/server-2.properties "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
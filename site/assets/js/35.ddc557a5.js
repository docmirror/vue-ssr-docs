(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{189:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("code",[t._v("vue-server-renderer")]),t._v(" の標準ビルドは Node.js 環境を想定していますが、これは、"),a("a",{attrs:{href:"https://github.com/phpv8/v8js",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP V8Js"),a("OutboundLink")],1),t._v(" や  "),a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle Nashorn"),a("OutboundLink")],1),t._v(" のような別のJavaScript 環境では使用できなくなります。2.5 のにおいて、環境にはほとんど影響されない、 "),a("code",[t._v("vue-server-renderer/basic.js")]),t._v(" のビルドを出荷しました。これにより、上記の環境で使用できるようになります。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("php-v8js での使用例:")]),t._v(" "),t._m(3),a("hr"),t._v(" "),t._m(4)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"非-node-js-環境における使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非-node-js-環境における使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 非 Node.js 環境における使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("どちらの環境に対して、それは "),a("code",[t._v("global")]),t._v(" と "),a("code",[t._v("process")]),t._v(" オブジェクトをモックすることによって最初に環境を準備する必要があり、 "),a("code",[t._v("process.env.VUE_ENV")]),t._v(" に "),a("code",[t._v('"server"')]),t._v(" を設定し、そして "),a("code",[t._v("process.env.NODE_ENV")]),t._v(" に "),a("code",[t._v('"development"')]),t._v(' または {code6}"production"{/code6} を設定します。')])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Nashornでは、Java のネイティブタイマーを使用して、 "),s("code",[this._v('Promise{/ code0} または <code data-md-type="codespan">setTimeout')]),this._v(" のポリフィルを提供する必要があります。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$vue_source")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("file_get_contents")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/path/to/vue.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$renderer_source")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("file_get_contents")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/path/to/vue-server-renderer/basic.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$app_source")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("file_get_contents")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/path/to/app.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token variable"}},[t._v("$v8")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("V8Js")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token variable"}},[t._v("$v8")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("executeString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v('\'var process = { env: { VUE_ENV: "server", NODE_ENV: "production" }}; this.global = { process: process };\'')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$v8")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("executeString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$vue_source")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$v8")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("executeString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$renderer_source")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$v8")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("executeString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$app_source")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`<div>{{ msg }}</div>`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// `vue-server-renderer/basic.js` によってエクスポーズ")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("renderVueComponentToString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="non-node.md";s.default=e.exports}}]);
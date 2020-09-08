(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{176:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),a("p",[t._v("The returned value is a "),a("a",{attrs:{href:"https://nodejs.org/api/stream.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js stream"),a("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v('In stream rendering mode, data is emitted as soon as possible when the renderer traverses the Virtual DOM tree. This means we can get an earlier "first chunk" and start sending it to the client faster.')]),t._v(" "),a("p",[t._v("However, when the first data chunk is emitted, the child components may not even be instantiated yet, neither will their lifecycle hooks get called. This means if the child components need to attach data to the render context in their lifecycle hooks, these data will not be available when the stream starts. Since a lot of the context information (like head information or inlined critical CSS) needs to appear before the application markup, we essentially have to wait until the stream to complete before we can start making use of these context data.")]),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"streaming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streaming","aria-hidden":"true"}},[this._v("#")]),this._v(" Streaming")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vue-server-renderer")]),this._v(" supports stream rendering out of the box, for both the base renderer and the bundle renderer. All you need to do is use "),s("code",[this._v("renderToStream")]),this._v(" instead of "),s("code",[this._v("renderToString")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stream "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" renderer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderToStream")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" html "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n\nstream"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstream"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'end'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// render complete")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstream"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'error'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// handle error...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"streaming-caveats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streaming-caveats","aria-hidden":"true"}},[this._v("#")]),this._v(" Streaming Caveats")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It is therefore "),s("strong",[this._v("NOT")]),this._v(" recommended to use streaming mode if you rely on context data populated by component lifecycle hooks.")])}],!1,null,null,null);e.options.__file="streaming.md";s.default=e.exports}}]);
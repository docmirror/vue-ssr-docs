(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{213:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),n("p",[t._v("这是理所应当的，然而在每次编辑过应用程序源代码之后，都必须停止并重启服务。这在开发过程中会影响开发效率。此外，Node.js 本身不支持 source map。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("ul",[t._m(6),t._v(" "),t._m(7),t._v(" "),n("li",[n("p",[t._v("关键 CSS(critical CSS) 注入（在使用 "),n("code",[t._v("*.vue")]),t._v(" 文件时）：自动内联在渲染过程中用到的组件所需的CSS。更多细节请查看 "),n("router-link",{attrs:{to:"./css.html"}},[t._v("CSS")]),t._v(" 章节。")],1)]),t._v(" "),n("li",[n("p",[t._v("使用 "),n("router-link",{attrs:{to:"./../api/#clientmanifest"}},[t._v("clientManifest")]),t._v(" 进行资源注入：自动推断出最佳的预加载(preload)和预取(prefetch)指令，以及初始渲染所需的代码分割 chunk。")],1)])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("在下一章节中，我们将讨论如何配置 webpack，以生成 bundle renderer 所需的构建工件 (build artifact)，但现在假设我们已经有了这些需要的构建工件，以下就是创建和使用 bundle renderer 的方法：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),n("p",[t._v("注意，推荐将 "),n("code",[t._v("runInNewContext")]),t._v(" 选项设置为 "),n("code",[t._v("false")]),t._v(" 或 "),n("code",[t._v("'once'")]),t._v("。更多细节请查看 "),n("router-link",{attrs:{to:"./../api/#runinnewcontext"}},[t._v("API 参考")]),t._v("。")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"bundle-renderer-指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundle-renderer-指引","aria-hidden":"true"}},[this._v("#")]),this._v(" Bundle Renderer 指引")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用基本-ssr-的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用基本-ssr-的问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用基本 SSR 的问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("到目前为止，我们假设打包的服务器端代码，将由服务器通过 "),s("code",[this._v("require")]),this._v(" 直接使用：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" createApp "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/path/to/built-server-bundle.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"传入-bundlerenderer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传入-bundlerenderer","aria-hidden":"true"}},[this._v("#")]),this._v(" 传入 BundleRenderer")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vue-server-renderer")]),this._v(" 提供一个名为 "),s("code",[this._v("createBundleRenderer")]),this._v(" 的 API，用于处理此问题，通过使用 webpack 的自定义插件，server bundle 将生成为可传递到 bundle renderer 的特殊 JSON 文件。所创建的 bundle renderer，用法和普通 renderer 相同，但是 bundle renderer 提供以下优点：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("内置的 source map 支持（在 webpack 配置中使用 "),s("code",[this._v("devtool: 'source-map'")]),this._v("）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("在开发环境甚至部署过程中热重载（通过读取更新后的 bundle，然后重新创建 renderer 实例）")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createBundleRenderer "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'vue-server-renderer'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderer "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("createBundleRenderer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serverBundle"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  runInNewContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 推荐")]),t._v("\n  template"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// （可选）页面模板")]),t._v("\n  clientManifest "),n("span",{attrs:{class:"token comment"}},[t._v("// （可选）客户端构建 manifest")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 在服务器处理函数中……")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'*'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 现在我们的服务器与应用程序已经解耦！")]),t._v("\n  renderer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("renderToString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 处理异常……")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("bundle renderer 在调用 "),s("code",[this._v("renderToString")]),this._v(" 时，它将自动执行「由 bundle 创建的应用程序实例」所导出的函数（传入"),s("code",[this._v("上下文")]),this._v("作为参数），然后渲染它。")])}],!1,null,null,null);a.options.__file="bundle-renderer.md";s.default=a.exports}}]);
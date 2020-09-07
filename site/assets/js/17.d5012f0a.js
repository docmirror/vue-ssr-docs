(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{207:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("При написании кода для клиентской стороны мы привыкли к тому, что наш код каждый раз будет выполняться в новом контексте. Однако сервер Node.js является длительным процессом (long-running process). Поэтому когда наш код потребуется, он будет выполнен один раз и останется в памяти. Это означает, что если вы создаёте объект синглтон, он будет использоваться для всех входящих запросов.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Поэтому, вместо непосредственного создания экземпляра приложения, мы должны предоставить функцию-фабрику, которую можно повторно вызывать для создания свежих экземпляров приложения на каждый запрос:")]),t._v(" "),t._m(3),a("p",[t._v("Код нашего сервера станет таким:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("До сих пор мы не обсуждали каким образом доставлять клиенту такое приложение Vue. Чтобы сделать это, мы должны использовать Webpack для сборки нашего приложения Vue. На самом деле, мы вероятно захотим использовать Webpack для сборки приложения Vue также и на сервере, потому что:")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Поэтому основная идея заключается в том, что мы будем использовать Webpack для сборки нашего приложения как для клиента, так и для сервера — сборка для сервера будет необходима серверу и использоваться для серверного рендеринга, в то время как сборка для клиента будет отправляться в браузер для гидратации статической разметки.")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Мы обсудим подробности настройки в следующих разделах — а сейчас, давайте представим что у нас реализован шаг сборки и мы можем писать код нашего приложения Vue с использованием Webpack.")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("Теперь, когда мы используем Webpack для обработки приложения как для сервера, так и для клиента, большая часть нашего исходного кода может быть написана в универсальном «стиле», с доступом ко всем функциям на основе Webpack. В тоже время, есть "),a("router-link",{attrs:{to:"./universal.html"}},[t._v("ряд вещей")]),t._v(", которые вы должны иметь ввиду при написании универсального кода.")],1),t._v(" "),a("p",[t._v("Простой проект может выглядеть подобным образом:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Клиентская точка входа — просто создаёт приложение и монтирует его в DOM:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("Серверная точка входа — экспортирует по умолчанию функцию, которая будет вызываться повторно для каждого рендеринга. На данный момент не делаем ничего, кроме создания и возврата экземпляра приложения, но, позднее, мы будем выполнять здесь логику сопоставления маршрутов и предзагрузки данных.")]),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"структура-исходного-кода"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#структура-исходного-кода","aria-hidden":"true"}},[this._v("#")]),this._v(" Структура исходного кода")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"избегайте-сингnтонов-с-состоянием"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#избегайте-сингnтонов-с-состоянием","aria-hidden":"true"}},[this._v("#")]),this._v(" Избегайте синглтонов с состоянием")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Как видно из простого примера, мы "),s("strong",[this._v("создаём новый корневой экземпляр Vue для каждого запроса")]),this._v(". Это схоже с тем, когда каждый пользователь будет использовать свежий экземпляр приложения в своём браузере. Если мы будем использовать общий экземпляр для нескольких запросов, то это быстро приведёт к загрязнению состояния.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Vue "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createApp")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`<div>Вы открыли URL: {{ url }}</div>`")])]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// server.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" createApp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nserver"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'*'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createApp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  renderer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderToString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// обработка ошибок...")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Это правило также применимо и к экземплярам маршрутизатора (router), хранилища (store) и шины событий (event bus). Вместо того, чтобы непосредственно экспортировать из модуля и импортировать везде в приложении, вам нужно создавать новый экземпляр в "),s("code",[this._v("createApp")]),this._v(" и внедрять его из корневого экземпляра Vue.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Это ограничение можно обойти при использовании рендерера сборки с опцией "),s("code",[this._v("{ runInNewContext: true }")]),this._v(", однако это сопряжено с некоторыми существенными затратами производительности, поскольку для каждого запроса потребуется создание нового контекста vm.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"представnяем-шаг-сборки"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#представnяем-шаг-сборки","aria-hidden":"true"}},[this._v("#")]),this._v(" Представляем шаг сборки")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("Типичные приложения Vue собраны с помощью Webpack и "),a("code",[t._v("vue-loader")]),t._v(", и многие Webpack-специфичные вещи, такие как импорт файлов через "),a("code",[t._v("file-loader")]),t._v(", импорт CSS через "),a("code",[t._v("css-loader")]),t._v(" не будут работать напрямую в Node.js.")])]),t._v(" "),a("li",[a("p",[t._v("Несмотря на то, что последняя версия Node.js полностью поддерживает ES2015, нам всё же необходимо транспилировать код для клиентской части для совместимости со старыми браузерами. Это снова предполагает шаг сборки.")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png",alt:"architecture"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"структура-кода-с-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#структура-кода-с-webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" Структура кода с Webpack")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("src\n├── components\n│   ├── Foo.vue\n│   ├── Bar.vue\n│   └── Baz.vue\n├── App.vue\n├── app.js "),s("span",{attrs:{class:"token comment"}},[this._v("# универсальная точка входа")]),this._v("\n├── entry-client.js "),s("span",{attrs:{class:"token comment"}},[this._v("# запускается только в браузере")]),this._v("\n└── entry-server.js "),s("span",{attrs:{class:"token comment"}},[this._v("# запускается только на сервере")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"app-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-js","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("app.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("app.js")]),t._v(" — универсальная точка входа в наше приложение. В только клиентском приложении, мы бы создавали корневой экземпляр Vue прямо в этом файле и монтировали непосредственно в DOM. Однако при использовании серверного рендеринга эта ответственность переносится в файл клиентской точки входа ("),a("code",[t._v("entry-client.js")]),t._v("). "),a("code",[t._v("app.js")]),t._v(" просто экспортирует функцию "),a("code",[t._v("createApp")]),t._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// экспортируем функцию фабрику для создания экземпляров")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// нового приложения, маршрутизатора и хранилища")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createApp")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// корневой экземпляр просто рендерит компонент App")]),t._v("\n    render"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" h "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("h")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"entry-client-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry-client-js","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("entry-client.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./app'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Специфичная для клиента логика загрузки...")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createApp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v('// предполагается, что у корневого элемента в шаблоне App.vue есть элемент с `id="app"`')]),t._v("\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$mount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"entry-server-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry-server-js","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("entry-server.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./app'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" context "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createApp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="structure.md";s.default=e.exports}}]);
"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[70],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6972:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"native-modules",title:"Native Modules",sidebar_label:"Native Modules"},s=void 0,d={unversionedId:"native-modules",id:"native-modules",isDocsHomePage:!1,title:"Native Modules",description:"This guide covers how to consume native modules. For installing native modules see the module structure docs.",source:"@site/docs/native-modules.md",sourceDirName:".",slug:"/native-modules",permalink:"/docs/native-modules",editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/native-modules.md",tags:[],version:"current",frontMatter:{id:"native-modules",title:"Native Modules",sidebar_label:"Native Modules"},sidebar:"docs",previous:{title:"Adding Dependencies",permalink:"/docs/adding-dependencies"},next:{title:"Styling",permalink:"/docs/styling"}},c=[{value:"What are Native Modules?",id:"what-are-native-modules",children:[],level:2},{value:"Native Modules in electron-react-boilerplate",id:"native-modules-in-electron-react-boilerplate",children:[],level:2},{value:"Main Process Native Modules",id:"main-process-native-modules",children:[],level:2},{value:"Renderer Process Native Modules",id:"renderer-process-native-modules",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide covers how to consume native modules. For installing native modules see the ",(0,a.kt)("a",{parentName:"p",href:"https://electron-react-boilerplate.js.org/docs/adding-dependencies/#module-structure"},"module structure docs"),"."),(0,a.kt)("h2",{id:"what-are-native-modules"},"What are Native Modules?"),(0,a.kt)("p",null,"Native node modules are node dependencies that are written in C++, C, or Rust. Native modules may need to be compiled against a specific version of node. If you change your node version then you'll need to recompile your native modules, which will be done automatically on postinstall."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/electron/electron-rebuild"},"electron-rebuild")," will detect and recompile your native modules against the version of node being used by electron. Changing your electron version will require a recompilation."),(0,a.kt)("h2",{id:"native-modules-in-electron-react-boilerplate"},"Native Modules in electron-react-boilerplate"),(0,a.kt)("p",null,"Native modules in electron-react-boilerplate have special requirements and are thus handled differently than regular modules. Native modules are problematic when bundled with webpack and so electron-react-boilerplate avoids bundling them -- intead they are treated as ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals/"},"webpack externals"),". Native modules in electron-react-boilerplate are installed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"./release/app/node_modules")," directory and are copied into your electron app before it is packaged. This allows root dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"./node_modules")," (such as webpack, babel, and react) to not be packaged with your app, which significantly app bloat."),(0,a.kt)("h2",{id:"main-process-native-modules"},"Main Process Native Modules"),(0,a.kt)("p",null,"You can import native modules as usual in the main process as you would other modules. Types for native module dependencies (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/sqlite"),") should be installed to your root ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," since they are not required in production."),(0,a.kt)("h2",{id:"renderer-process-native-modules"},"Renderer Process Native Modules"),(0,a.kt)("p",null,"Loading remote content in the renderer process with node integration enabled is a security vulnerability and is ",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content"},"discouraged by electron's security documentation"),". Because of this, node integration is disabled by default."),(0,a.kt)("p",null,"Make the following changes to opt in to node integration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="webpack.config.renderer.prod.ts"',title:'"webpack.config.renderer.prod.ts"'},"- target: ['web', 'electron-renderer'],\n+ target: 'electron-renderer',\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="webpack.config.renderer.dev.ts"',title:'"webpack.config.renderer.dev.ts"'},"- target: ['web', 'electron-renderer'],\n+ target: 'electron-renderer',\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="webpack.config.renderer.prod.ts"',title:'"webpack.config.renderer.prod.ts"'},"- library: {\n-  type: 'umd',\n- },\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="webpack.config.renderer.dev.ts"',title:'"webpack.config.renderer.dev.ts"'},"- library: {\n-  type: 'umd',\n- },\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="main.ts"',title:'"main.ts"'},"  webPreferences: {\n+   nodeIntegration: true,\n+   contextIsolation: false,\n-   preload: path.join(__dirname, 'preload.js'),\n  }\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[836],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3584:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"faq",title:"FAQ",sidebar_label:"FAQ"},l=void 0,s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Why is webpack a good idea for electron?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/electron-react-boilerplate/site/edit/master/docs/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"FAQ",sidebar_label:"FAQ"},sidebar:"docs",previous:{title:"DevTools",permalink:"/docs/dev-tools"},next:{title:"Upgrade Guide",permalink:"/docs/upgrade-guide"}},p=[{value:"Why is webpack a good idea for electron?",id:"why-is-webpack-a-good-idea-for-electron",children:[],level:2}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-is-webpack-a-good-idea-for-electron"},"Why is webpack a good idea for electron?"),(0,a.kt)("p",null,"Electron apps face huge hurdles when it comes to matching native performance. There's a number of reasons for that. One of those issues is that a main electron app does not have Ahead-of-Time (AOT) compilation. No optimizations are made to code performance. ",(0,a.kt)("a",{parentName:"p",href:"https://kev.inburke.com/kevin/node-require-is-dog-slow/"},(0,a.kt)("inlineCode",{parentName:"a"},"require()"))," is ",(0,a.kt)("strong",{parentName:"p"},"really")," slow. Webpack helps us reduce the amount of calls made to require by bundling all our code (when possible) into single file. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/atom/atom/issues/9720"},"Atom is slow primarily because it makes so many require statements"),"."))}f.isMDXComponent=!0}}]);
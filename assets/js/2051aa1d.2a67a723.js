"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[658],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),h=i,d=g["".concat(s,".").concat(h)]||g[h]||u[h]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"integration-tests",title:"Integration Tests",sidebar_label:"Integration Tests"},s=void 0,p={unversionedId:"integration-tests",id:"integration-tests",title:"Integration Tests",description:"Integration tests are a way to test the full functionality of the application by simulating the interaction between the application and the user. For Electron applications, this means the browser gets automated. This guide will walk you through the process of writing integration tests with Playwright.",source:"@site/docs/integration-tests.md",sourceDirName:".",slug:"/integration-tests",permalink:"/docs/integration-tests",draft:!1,editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/integration-tests.md",tags:[],version:"current",frontMatter:{id:"integration-tests",title:"Integration Tests",sidebar_label:"Integration Tests"},sidebar:"docs",previous:{title:"Component Tests",permalink:"/docs/component-tests"},next:{title:"Continuous Integration (CI)",permalink:"/docs/ci"}},c={},u=[{value:"What is Playwright?",id:"what-is-playwright",level:2},{value:"Installing Playwright",id:"installing-playwright",level:2},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Running Tests",id:"running-tests",level:2},{value:"More information",id:"more-information",level:2}],g={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Integration tests are a way to test the full functionality of the application by simulating the interaction between the application and the user. For Electron applications, this means the browser gets automated. This guide will walk you through the process of writing integration tests with Playwright."),(0,a.kt)("h2",{id:"what-is-playwright"},"What is Playwright?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev"},"Playwright")," is a framework for writing end-to-end tests, it allows automating Chromium, Firefox, and WebKit with a single API. Since Electron is based on Chromium, Playwright can be used to test Electron as well. Playwright itself provides a whole suite of tools for writing, running and debugging tests. Like an own test-runner ",(0,a.kt)("inlineCode",{parentName:"p"},"@playwright/test"),", ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/trace-viewer"},"Trace Viewer")," or ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/codegen"},"Codegen"),"."),(0,a.kt)("h2",{id:"installing-playwright"},"Installing Playwright"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init playwright@latest\n")),(0,a.kt)("p",null,"This will generate a new Playwright project, including an example test file and a config."),(0,a.kt)("p",null,"Since only Electron is getting tested, the ",(0,a.kt)("inlineCode",{parentName:"p"},"projects")," section inside ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," can be removed. This will result in having a single project by default."),(0,a.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,a.kt)("p",null,"Replace the example end-to-end test ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e/example.spec.ts")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  test,\n  expect,\n  _electron as electron,\n  Page,\n  ElectronApplication,\n} from '@playwright/test';\nimport path from 'path';\n\n/**\n * For Getting started with Playwright, see here:\n * @see https://playwright.dev/docs/intro\n */\n\ntest.describe.serial(() => {\n  let page: Page;\n  let electronApp: ElectronApplication;\n  test.beforeAll(async () => {\n    electronApp = await electron.launch({\n      args: [\n        path.join(__dirname, '..', 'release', 'app', 'dist', 'main', 'main.js'),\n      ],\n    });\n    page = await electronApp.firstWindow();\n    // Direct Electron console to Node terminal.\n    page.on('console', console.log);\n  });\n\n  test.afterAll(async () => {\n    await electronApp.close();\n  });\n\n  test('Electron App has the correct buttons on it', async () => {\n    // Evaluation expression in the Electron context.\n    const appPath = await electronApp.evaluate(async ({ app }) => {\n      // This runs in the main Electron process, parameter here is always\n      // the result of the require('electron') in the main app script.\n      return app.getAppPath();\n    });\n    console.log(appPath);\n\n    // Print the title.\n    console.log(await page.title());\n\n    await expect(page).toHaveTitle('Hello Electron React!');\n    await expect(page.locator('text=\ud83d\udcdaRead our docs')).toBeVisible();\n    await expect(page.locator('text=\ud83d\ude4fDonate')).toBeVisible();\n    await expect(page.locator('text=electron-react-boilerplate')).toBeVisible();\n  });\n});\n")),(0,a.kt)("h2",{id:"running-tests"},"Running Tests"),(0,a.kt)("p",null,"Tests can be run by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,a.kt)("p",null,"Make sure to build your Electron application before running the tests (",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),")."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"here")," for Getting Started with Playwright, which is recommended to learn more about best practises, locators, selectors and assertions."))}h.isMDXComponent=!0}}]);
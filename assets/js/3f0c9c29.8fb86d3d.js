"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[875],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),a=t(7294),o=t(2389),i=t(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3039),s=t(6010),c="tabItem_1uMI";function p(e){var n,t,r,o=e.lazy,i=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),x=y.tabGroupChoices,k=y.setTabGroupChoices,_=(0,a.useState)(h),w=_[0],O=_[1],E=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=x[d];null!=C&&C!==w&&b.some((function(e){return e.value===C}))&&O(C)}var I=function(e){var n=e.currentTarget,t=E.indexOf(n),r=b[t].value;r!==w&&(T(n),O(r),null!=d&&k(d,r))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":w===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:N,onFocus:I,onClick:I},null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},7292:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(5064),l=t(8215),u=["components"],s={id:"ci",title:"Continuous Integration (CI)",sidebar_label:"Continuous Integration (CI)"},c=void 0,p={unversionedId:"ci",id:"ci",isDocsHomePage:!1,title:"Continuous Integration (CI)",description:"All the following configurations work with electron-react-boilerplate.",source:"@site/docs/ci.md",sourceDirName:".",slug:"/ci",permalink:"/docs/ci",editUrl:"https://github.com/electron-react-boilerplate/site/edit/master/docs/ci.md",tags:[],version:"current",frontMatter:{id:"ci",title:"Continuous Integration (CI)",sidebar_label:"Continuous Integration (CI)"},sidebar:"docs",previous:{title:"Component Tests",permalink:"/docs/component-tests"},next:{title:"Electron Store",permalink:"/docs/electron-store"}},m=[],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All the following configurations work with electron-react-boilerplate."),(0,o.kt)(i.Z,{defaultValue:"travis",values:[{label:"Travis CI",value:"travis"},{label:"Azure Pipelines",value:"azure"},{label:"GitHub Actions",value:"gh-actions"},{label:"AppVeyor",value:"appveyor"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"travis",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'matrix:\n  include:\n    - os: osx\n      language: node_js\n      node_js:\n        - node\n      env:\n        - ELECTRON_CACHE=$HOME/.cache/electron\n        - ELECTRON_BUILDER_CACHE=$HOME/.cache/electron-builder\n    - os: linux\n      language: node_js\n      node_js:\n        - node\n      services:\n        - xvfb\n      addons:\n        apt:\n          sources:\n            - sourceline: "ppa:ubuntu-toolchain-r/test"\n          packages:\n            - gcc-multilib\n            - g++-8\n            - g++-multilib\n            - icnsutils\n            - graphicsmagick\n            - xz-utils\n            - xorriso\n            - rpm\n\nbefore_cache:\n  - rm -rf $HOME/.cache/electron-builder/wine\n\ncache:\n  directories:\n    - node_modules\n    - $(npm config get prefix)/lib/node_modules\n    - $HOME/.cache/electron\n    - $HOME/.cache/electron-builder\n\nbefore_install:\n  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then export CXX="g++-8"; fi\n\ninstall:\n  - npm ci\n  # On Linux, initialize "virtual display". See before_script\n  - |\n    if [ "$TRAVIS_OS_NAME" == "linux" ]; then\n      /sbin/start-stop-daemon \\\n      --start \\\n      --quiet \\\n      --pidfile /tmp/custom_xvfb_99.pid \\\n      --make-pidfile \\\n      --background \\\n      --exec /usr/bin/Xvfb \\\n      -- :99 -ac -screen 0 1280x1024x16\n    else\n      :\n    fi\n\nbefore_script:\n  # On Linux, create a "virtual display". This allows browsers to work properly\n  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then export DISPLAY=:99.0; fi\n  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then sleep 3; fi\n\nscript:\n  - npm run package-ci\n  - npm run lint\n  - npm run ts\n  - npm test\n  - npm run build-e2e\n  - npm test-e2e\n'))),(0,o.kt)(l.Z,{value:"azure",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'strategy:\n  matrix:\n    linux:\n      imageName: "ubuntu-16.04"\n      nodeVersion: "13.x"\n    mac:\n      imageName: "macos-10.14"\n      nodeVersion: "13.x"\n    windows:\n      imageName: "windows-2019"\n      nodeVersion: "13.x"\n\npool:\n  vmImage: $(imageName)\n\nsteps:\n  # Set node version\n  - task: NodeTool@0\n    inputs:\n      versionSpec: $(nodeVersion)\n  # Start virtual framebuffer server\n  - bash: |\n      /usr/bin/Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &\n      echo ">>> Started xvfb"\n    displayName: Start xvfb\n    condition: and(succeeded(), eq(variables[\'Agent.OS\'], \'Linux\'))\n  # Install deps and run tests\n  - script: npm ci && npm test-all\n    env:\n      DISPLAY: ":99.0"\n  # Generate coverage report\n  - script: npm test --coverage --coverageReporters=cobertura\n  # Publish coverage report\n  - task: PublishCodeCoverageResults@1\n    inputs:\n      codeCoverageTool: Cobertura\n      summaryFileLocation: $(System.DefaultWorkingDirectory)/coverage/cobertura-coverage.xml\n'))),(0,o.kt)(l.Z,{value:"gh-actions",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"name: Test\n\non: push\n\njobs:\n  release:\n    runs-on: ${{ matrix.os }}\n\n    strategy:\n      matrix:\n        os: [macos-10.14, windows-2019, ubuntu-18.04]\n\n    steps:\n      - name: Check out Git repository\n        uses: actions/checkout@v1\n\n      - name: Install Node.js and NPM\n        uses: actions/setup-node@v1\n        with:\n          node-version: 13\n\n      - name: npm install\n        run: |\n          npm install\n\n      - name: npm test\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        run: |\n          npm run package-ci\n          npm run lint\n          npm run ts\n\n# Failing beacuse virtual framebuffer not installed\n#          npm run build-e2e\n#          npm test-e2e\n"))),(0,o.kt)(l.Z,{value:"appveyor",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"image: Visual Studio 2017\n\nplatform:\n  - x64\n\nenvironment:\n  matrix:\n    - nodejs_version: 13\n\ncache:\n  - node_modules\n  - release/app/node_modules\n  - '%USERPROFILE%\\.electron'\n\nmatrix:\n  fast_finish: true\n\nbuild: off\n\nversion: '{build}'\n\nshallow_clone: true\n\nclone_depth: 1\n\ninstall:\n  - ps: Install-Product node $env:nodejs_version x64\n  - set CI=true\n  - npm ci\n\ntest_script:\n  - npm run package-ci\n  - npm run lint\n  - npm run ts\n  - npm test\n  - npm run build-e2e\n  - npm test-e2e\n\n")))))}f.isMDXComponent=!0}}]);
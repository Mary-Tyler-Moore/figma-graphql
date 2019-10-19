(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/home.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return n});var s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),i={},o="wrapper";function n(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.a)(o,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:""},Object(r.a)("img",Object.assign({parentName:"h1"},{src:"https://raw.githubusercontent.com/braposo/figma-graphql/master/assets/logo.svg?sanitize=true",alt:"figma-graphql logo"}))),Object(r.a)("h1",{id:"figma-graphql"},"figma-graphql"),Object(r.a)("p",null,"The reimagined ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://www.figma.com/developers"}),"Figma API")," (super)powered by GraphQL"),Object(r.a)("p",null,Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://travis-ci.com/braposo/figma-graphql"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/travis/com/braposo/figma-graphql.svg?style=flat-square",alt:"Build Status"})))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://greenkeeper.io/"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://badges.greenkeeper.io/braposo/figma-graphql.svg?style=flat-square",alt:"Greenkeeper badge"})))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://codecov.io/github/braposo/figma-graphql"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/codecov/c/github/braposo/figma-graphql.svg?style=flat-square",alt:"Code Coverage"})))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://snyk.io/test/github/braposo/figma-graphql"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://snyk.io/test/github/braposo/figma-graphql/badge.svg?style=flat-square",alt:"Known Vulnerabilities"})))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"#contributors"}),Object(r.a)("img",{alt:"All Contributors",src:"https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square"}))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"http://makeapullrequest.com"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"})))," ",Object(r.a)("br",null)," ",Object(r.a)("img",Object.assign({parentName:"p"},{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square",alt:"Prettier format"}))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"http://commitizen.github.io/cz-cli/"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square",alt:"Commitizen friendly"})))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://github.com/semantic-release/semantic-release"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square",alt:"semantic-release"})))," ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://github.com/braposo/figma-graphql/blob/master/LICENSE"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/npm/l/figma-graphql.svg?style=flat-square",alt:"MIT License"})))),Object(r.a)("h2",{id:"quick-start"},"Quick start"),Object(r.a)("h3",{id:"1-open-figma-graphql-sandbox-and-fork-it"},"1. Open figma-graphql ",Object(r.a)("a",Object.assign({parentName:"h3"},{href:"https://codesandbox.io/s/github/braposo/figma-graphql/"}),"sandbox")," and fork it"),Object(r.a)("p",null,Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://codesandbox.io/s/github/braposo/figma-graphql/"}),Object(r.a)("img",Object.assign({parentName:"a"},{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Open figma-graphql"})))),Object(r.a)("h3",{id:"2-add-your-figma-api-token-as-figma_token-in-the-codesandbox-secret-keys"},"2. Add your ",Object(r.a)("a",Object.assign({parentName:"h3"},{href:"https://www.figma.com/developers/docs#access-tokens"}),"Figma API Token")," as ",Object(r.a)("inlineCode",{parentName:"h3"},"FIGMA_TOKEN")," in the ",Object(r.a)("a",Object.assign({parentName:"h3"},{href:"https://codesandbox.io/docs/secrets"}),"codesandbox secret keys")),Object(r.a)("h3",{id:"3-try-your-first-query"},"3. Try your first query!"),Object(r.a)("pre",null,Object(r.a)("code",Object.assign({parentName:"pre"},{className:"language-gql"}),'{\n    file(id: "cLp23bR627jcuNSoBGkhL04E") {\n        name\n    }\n}\n')),Object(r.a)("h2",{id:"why-use-figma-graphql"},"Why use figma-graphql?"),Object(r.a)("p",null,"It's great that Figma provides an API allowing anyone to easily get the data from their design files. But that API has two characteristics that make it quite hard for people without a good technical knowledge to access it:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"The file data has a rigid tree-shaped structure that forces people to know the exact structure of the design file and can easily break existing code by just making a small change in the design file (like grouping elements).")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"It requires multiple requests to different endpoints to get data that is related. Want to export specific frames in a file? You need to query the file data first, parse the data to get the frame ids and then make additional requests to a different endpoint to get that data. "))),Object(r.a)("p",null,"This obviously makes things a lot more complex than they need to be so we use the power of GraphQL solve these issues and add a few other features."),Object(r.a)("p",null,"With figma-graphql, we focus on the person using the library, not the machines. We see this as the best way to open your design files to more people, especially to those with minimal technical backround."),Object(r.a)("h2",{id:"examples"},"Examples"),Object(r.a)("p",null,'A good way to understand the different queries that you can build is to use the "Schema" tab on the righ-hand side of the playground and go through the different properties of all the supported types, but we\'ve also selected a few ',Object(r.a)("a",Object.assign({parentName:"p"},{href:"/practical-examples"}),"example scenarios")," that can be used as a reference for common uses of the library."),Object(r.a)("h2",{id:"migrating-to-v2"},"Migrating to v2"),Object(r.a)("p",null,"For v2 we've completely rebuilt the API in a more human-first approach which makes it incompatible with most of the v1 queries. To read more about the motivations and biggest changes please read the ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"/road-to-v2"}),"Road to v2")," section."),Object(r.a)("hr",null),Object(r.a)("p",null,"Brought to you by these awesome contributors:"),Object(r.a)("table",null,Object(r.a)("tr",null,Object(r.a)("td",{align:"center"},Object(r.a)("a",{href:"http://bernardoraposo.com"},Object(r.a)("img",{src:"https://avatars2.githubusercontent.com/u/38172?v=4",width:"100px;",alt:"Bernardo Raposo"}),Object(r.a)("br",null),Object(r.a)("sub",null,Object(r.a)("b",null,"Bernardo Raposo"))),Object(r.a)("br",null),Object(r.a)("a",{href:"#question-braposo",title:"Answering Questions"},"\ud83d\udcac")," ",Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=braposo",title:"Code"},"\ud83d\udcbb")," ",Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=braposo",title:"Documentation"},"\ud83d\udcd6")," ",Object(r.a)("a",{href:"#design-braposo",title:"Design"},"\ud83c\udfa8")," ",Object(r.a)("a",{href:"#ideas-braposo",title:"Ideas, Planning, & Feedback"},"\ud83e\udd14")," ",Object(r.a)("a",{href:"#review-braposo",title:"Reviewed Pull Requests"},"\ud83d\udc40")," ",Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=braposo",title:"Tests"},"\u26a0\ufe0f")),Object(r.a)("td",{align:"center"},Object(r.a)("a",{href:"http://iamsaravieira.com"},Object(r.a)("img",{src:"https://avatars0.githubusercontent.com/u/1051509?v=4",width:"100px;",alt:"Sara Vieira"}),Object(r.a)("br",null),Object(r.a)("sub",null,Object(r.a)("b",null,"Sara Vieira"))),Object(r.a)("br",null),Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=SaraVieira",title:"Code"},"\ud83d\udcbb")," ",Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=SaraVieira",title:"Documentation"},"\ud83d\udcd6")," ",Object(r.a)("a",{href:"#review-SaraVieira",title:"Reviewed Pull Requests"},"\ud83d\udc40")),Object(r.a)("td",{align:"center"},Object(r.a)("a",{href:"http://okonet.ru"},Object(r.a)("img",{src:"https://avatars3.githubusercontent.com/u/11071?v=4",width:"100px;",alt:"Andrey Okonetchnikov"}),Object(r.a)("br",null),Object(r.a)("sub",null,Object(r.a)("b",null,"Andrey Okonetchnikov"))),Object(r.a)("br",null),Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=okonet",title:"Documentation"},"\ud83d\udcd6")," ",Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=okonet",title:"Code"},"\ud83d\udcbb")),Object(r.a)("td",{align:"center"},Object(r.a)("a",{href:"http://travisrayarnold.com"},Object(r.a)("img",{src:"https://avatars1.githubusercontent.com/u/2762082?v=4",width:"100px;",alt:"Travis Arnold"}),Object(r.a)("br",null),Object(r.a)("sub",null,Object(r.a)("b",null,"Travis Arnold"))),Object(r.a)("br",null),Object(r.a)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=souporserious",title:"Documentation"},"\ud83d\udcd6")))),Object(r.a)("p",null,"This project follows the ",Object(r.a)("a",Object.assign({parentName:"p"},{href:"https://github.com/all-contributors/all-contributors"}),"all-contributors")," specification. Contributions of any kind welcome!"))}n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/home.mdx"}}),n.isMDXComponent=!0}}]);
//# sourceMappingURL=home.a5f13e35342d30d8e14d.js.map
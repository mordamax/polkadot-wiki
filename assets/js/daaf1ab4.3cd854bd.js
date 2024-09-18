"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8215],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67141:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(96540);const a=function(e){var t,n=e.message,a=(0,r.useState)(!0),o=a[0],i=a[1];return r.createElement(r.Fragment,null,o&&r.createElement("div",{className:"message-box"},r.createElement("button",{className:"close-button",onClick:function(){i(!1)}},"\u2716 "),r.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},3514:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(96540),a=n(20053),o=n(84142),i=n(75489),s=n(16654),l=n(21312);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){var t=e.href,n=e.children;return r.createElement(i.A,{href:t,className:(0,a.A)("card padding--lg",c.cardContainer)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.A)("text--truncate",c.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.A)("text--truncate",c.cardDescription),title:i},i))}function u(e){var t,n=e.item,a=(0,o._o)(n);return a?r.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function m(e){var t,n,a=e.item,i=(0,s.A)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.cC)(null!=(t=a.docId)?t:void 0);return r.createElement(p,{href:a.href,icon:i,title:a.label,description:null!=(n=a.description)?n:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,n=(0,o.$S)();return r.createElement(f,{items:n.items,className:t})}function f(e){var t=e.items,n=e.className;if(!t)return r.createElement(y,e);var i=(0,o.d1)(t);return r.createElement("section",{className:(0,a.A)("row",n)},i.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e}))})))}},20496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),i=n(3514),s=n(67141),l=["components"],c={id:"funding",title:"Funding Opportunities",sidebar_label:"Funding",description:"An Overview of Funding Opportunities within the Polkadot Ecosystem.",keywords:["funding","grants","decentralized futures","treasury","bounties"],slug:"../funding"},d=void 0,p={unversionedId:"general/funding",id:"general/funding",title:"Funding Opportunities",description:"An Overview of Funding Opportunities within the Polkadot Ecosystem.",source:"@site/../docs/general/funding.md",sourceDirName:"general",slug:"/funding",permalink:"/docs/funding",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/funding.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726574800,formattedLastUpdatedAt:"Sep 17, 2024",frontMatter:{id:"funding",title:"Funding Opportunities",sidebar_label:"Funding",description:"An Overview of Funding Opportunities within the Polkadot Ecosystem.",keywords:["funding","grants","decentralized futures","treasury","bounties"],slug:"../funding"},sidebar:"docs",previous:{title:"Contributors",permalink:"/docs/contributors"},next:{title:"Grants",permalink:"/docs/grants"}},u={},m=[{value:"Funding Opportunities Overview",id:"funding-opportunities-overview",level:2},{value:"Funding FAQ",id:"funding-faq",level:2}],g={toc:m},y="wrapper";function f(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.yg)(y,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(s.A,{message:"For fundraising in a decentralized, transparent, and regulatory compliant manner within the ecosystem, check out the [Polimec parachain](https://www.polimec.org/).",mdxType:"MessageBox"}),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Check out the ",(0,o.yg)("a",{parentName:"p",href:"programs-index"},"programs")," for numerous ecosystem support opportunities.")),(0,o.yg)(i.A,{mdxType:"DocCardList"}),(0,o.yg)("p",null,"If you are certain you want to apply for a W3F grant, head straight to the\n",(0,o.yg)("a",{parentName:"p",href:"https://grants.web3.foundation/docs/Process/how-to-apply"},"application process documentation"),".\nAlternatively, the flowchart below outlines where we think the grants program fits in relation to\nother popular funding opportunities."),(0,o.yg)("h2",{id:"funding-opportunities-overview"},"Funding Opportunities Overview"),(0,o.yg)("mermaid",{value:'flowchart LR\n    A(Project Focus)\n    A --\x3e|Development| B[Stage of Development]\n    A --\x3e|Research| C[Grants Program]\n    A --\x3e|Other| D[Business model exists]\n    B --\x3e|Existing POC| E[Treasury]\n    B --\x3e|No POC| F[Grants Program]\n    D --\x3e|No|H[Treasury]\n    D --\x3e|Yes|J[Venture Capital]\n    style C stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5\n    style E stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5\n    style F stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5\n    style H stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5\n    style J stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5\n\n    click C "https://grants.web3.foundation/docs/Process/how-to-apply" "Apply now"\n    click F "https://grants.web3.foundation/docs/Process/how-to-apply" "Apply now"\n    click H "https://wiki.polkadot.network/docs/en/learn-polkadot-opengov-treasury" "https://wiki.polkadot.network/docs/en/learn-polkadot-opengov-treasury" _blank'}),(0,o.yg)("p",null,"For a longer list and a description of the programs listed below, check out\n",(0,o.yg)("a",{parentName:"p",href:"/docs/grants#alternative-funding-sources"},"our page on alternative funding opportunities"),"."),(0,o.yg)("h2",{id:"funding-faq"},"Funding FAQ"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("em",{parentName:"li"},"Will the grant be awarded to those delivering a complete product that everyone in the ecosystem\ncan use?"))),(0,o.yg)("p",null,"The grant does not necessarily require a finished product. It can be awarded at various stages of a\nproject\u2019s development. The goal is to support ongoing progress, so even partial advancements are\neligible."),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("em",{parentName:"li"},"After receiving a grant, can a team request funds from the treasury to continue development, or\nwill they be advised to opt for other existing funding options, like\n",(0,o.yg)("a",{parentName:"em",href:"https://www.polimec.org/"},"Polimec"),"? Is that possible?"))),(0,o.yg)("p",null,"Teams can indeed request additional funds from the treasury after the initial grant. The grant is a\ngreat way to demonstrate capability and commitment to the community. Continued support would depend\non community approval, but proving the project\u2019s value through initial funding can help."),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("em",{parentName:"li"},"Since the grant will be awarded in stablecoin, why isn\u2019t the bounty requested in stablecoin?"))),(0,o.yg)("p",null,"Grants are not awarded in stablecoin. Grant applications are denominated in USD but will be\nconverted to DOT at the time of payment. Currently, it\u2019s not feasible to fund bounties directly with\nstablecoins. However, as this is programmable, we might explore potentially managing multiple assets\nthrough an AH address controlled by curators in the future, similar to the classic setup on the\nrelay chain."),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("em",{parentName:"li"},"Will there be publicity for the bounty? That is, will social media be created where potential\ncandidates can learn about the requirements, steps to participate, and so on?"))),(0,o.yg)("p",null,"All grant-related information will be available on GitHub for easy access. However, we do not plan a\ndedicated social media presence. Instead, we\u2019ll advertise the bounty individually and rely on word\nof mouth."))}f.isMDXComponent=!0}}]);
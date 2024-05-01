"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},35703:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const i=function(e){var t,a=e.message,i=(0,n.useState)(!0),o=i[0],r=i[1];return n.createElement(n.Fragment,null,o&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},69156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=a(35703),l=["components"],s={id:"learn-guides-vault",title:"Polkadot-JS Guides about the Vault App",sidebar_label:"Polkadot Vault Guides",description:"Polkadot-JS Guides about Polkadot Vault.",keywords:["parity signer","signer","polkadot vault","polkadot-js"],slug:"../learn-guides-vault"},p=void 0,d={unversionedId:"learn/learn-guides-vault",id:"learn/learn-guides-vault",title:"Polkadot-JS Guides about the Vault App",description:"Polkadot-JS Guides about Polkadot Vault.",source:"@site/../docs/learn/learn-guides-vault.md",sourceDirName:"learn",slug:"/learn-guides-vault",permalink:"/docs/learn-guides-vault",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-vault.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-guides-vault",title:"Polkadot-JS Guides about the Vault App",sidebar_label:"Polkadot Vault Guides",description:"Polkadot-JS Guides about Polkadot Vault.",keywords:["parity signer","signer","polkadot vault","polkadot-js"],slug:"../learn-guides-vault"},sidebar:"docs",previous:{title:"Ledger Guides",permalink:"/docs/learn-guides-ledger"},next:{title:"Asset Hub Guides",permalink:"/docs/learn-guides-assets"}},u={},h=[{value:"Sending a Transfer with the Vault App",id:"sending-a-transfer-with-the-vault-app",level:2},{value:"Import Vault Accounts into Polkadot-JS",id:"import-vault-accounts-into-polkadot-js",level:2},{value:"Do Your Own Chain Spec and Metadata Update",id:"do-your-own-chain-spec-and-metadata-update",level:2},{value:"Chain Specification",id:"chain-specification",level:3},{value:"Chain Spec QR",id:"chain-spec-qr",level:4},{value:"Generating Signature",id:"generating-signature",level:4},{value:"Signing Chain Spec",id:"signing-chain-spec",level:4},{value:"Metadata Updates",id:"metadata-updates",level:3},{value:"Metadata QR Fountain",id:"metadata-qr-fountain",level:4},{value:"Generating Signature",id:"generating-signature-1",level:4},{value:"Signing Metadata",id:"signing-metadata",level:4},{value:"Add Chain &amp; Update Metadata",id:"add-chain--update-metadata",level:3},{value:"Metadata Portal",id:"metadata-portal",level:3},{value:"Modify <code>config</code> File",id:"modify-config-file",level:4},{value:"Rename Chain&#39;s Files",id:"rename-chains-files",level:4},{value:"Run Portal",id:"run-portal",level:4}],c={toc:h},m="wrapper";function k(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"These guides apply to both Parity Signer and Polkadot Vault apps.")),(0,o.kt)("h2",{id:"sending-a-transfer-with-the-vault-app"},"Sending a Transfer with the Vault App"),(0,o.kt)("admonition",{title:"Verifying Extrinsics",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Visit the\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179161-how-can-i-verify-what-extrinsic-i-m-signing-#Verify-an-extrinsic-using-Ledger"},(0,o.kt)("strong",{parentName:"a"},"dedicated support page")),"\nand see ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/bxMs-9fBtFk?t=360"},(0,o.kt)("strong",{parentName:"a"},"this video tutorial"))," tutorial to learn about how to\nverify extrinsics before signing them. The video will also mention potential attacks that can happen\nto you while signing for transactions.")),(0,o.kt)("p",null,"General instructions to send a transfer can be found on\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"this support page"),".\nTo sign transactions with the Polkadot Vault app check\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182000-how-to-sign-a-transaction-in-parity-signer"},"this support article"),"\nor see ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/gbvrHzr4EDY?t=281"},"this video tutorial"),"."),(0,o.kt)("h2",{id:"import-vault-accounts-into-polkadot-js"},"Import Vault Accounts into Polkadot-JS"),(0,o.kt)("p",null,"See\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184118-polkadot-vault-how-to-add-your-account-on-polkadot-js-ui"},"this support article"),"\nto import a Polkadot Vault account into the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/polkadotjs#polkadot-js-extension"},"Polkadot-JS Browser Extension")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/parity-signer-companion/damllfnhhcbmclmjilomenbhkappdjgb"},"Parity Signer Companion"),".\nAccounts added to those extensions will be injected into the Polkadot-JS UI."),(0,o.kt)("h2",{id:"do-your-own-chain-spec-and-metadata-update"},"Do Your Own Chain Spec and Metadata Update"),(0,o.kt)("admonition",{title:"This section is for developers and power users only",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"By requesting the chain specification and metadata you trust the specific endpoint you are using\n(unless you are using you own node).")),(0,o.kt)("p",null,"The following guide bases on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer"},"Parity Signer")," Github\npage (to create the Chain Spec QR code and the metadata QR code fountain) and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/metadata-portal"},"Metadata Portal")," Github page (to embed the Chain\nSpec and Metadata into a portal)."),(0,o.kt)("h3",{id:"chain-specification"},"Chain Specification"),(0,o.kt)("h4",{id:"chain-spec-qr"},"Chain Spec QR"),(0,o.kt)("p",null,"To add more chains on the Vault app you can follow the instructions\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/parity-signer/tutorials/Add-New-Network.html#add-network-specs"},"here"),".\nIn this example we will add the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-assets"},"Asset Hub")," system parachain. Briefly,\nfork the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer"},"Parity Signer GitHub repository"),", start the\nterminal within the ",(0,o.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder and type the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo run add-specs -d -u wss://kusama-asset-hub-rpc.polkadot.io --encryption sr25519")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"wss://kusama-asset.hub-rpc.polkadot.io")," is the Parity RPC endpoint for the Asset Hub on\nKusama. This will create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"sign_me_add_specs_statemine_sr25510")," under the\n",(0,o.kt)("inlineCode",{parentName:"p"},"files/in_progress")," folder. See\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/blob/089fd77b14169749e35e073a93f7e7276963009c/packages/apps-config/src/endpoints/productionRelayPolkadot.ts"},"this GitHub page")," for a list of all endpoints listed in the Polkadot-JS UI.",""),(0,o.kt)("h4",{id:"generating-signature"},"Generating Signature"),(0,o.kt)("admonition",{title:"Use a hot account",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that the account used to sign the chain specification is a hot account. Never use a cold\naccount from the Vault app or Ledger, as after typing the seed phrase into the terminal that account\nwill be considered hot.")),(0,o.kt)("p",null,"Start the terminal within the ",(0,o.kt)("inlineCode",{parentName:"p"},"files/in_progress")," folder and type the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'cat sign_me_add_specs_statemine_sr25519 | subkey sign --suri "YOUR SEED PHRASE"')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"')," is the seed phrase of the account that will be used to sign and\nauthenticate both the chain spec and later on the metadata. Running the code above will return a\nsignature similar to that below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"0xc4ce72db959000b6166af96d3bda55a927fd837747bf1bf1ae8a69e57c9ef37c25a88707c47b105a9eb1fbcf9345680eff57eb978cf73919506f6c738834e78a")),(0,o.kt)("h4",{id:"signing-chain-spec"},"Signing Chain Spec"),(0,o.kt)("p",null,"Now, go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder and type the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo run --release make --goal qr --crypto sr25519 --msg add-specs --payload sign_me_add_specs_statemine_sr25519 --verifier-hex PUBLIC KEY --signature-hex SIGNATURE")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"PUBLIC KEY")," is the public key of the account with seed ",(0,o.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"'),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGNATURE"),"\nis the signature generated in the previous step. Running the code above will create the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"add_specs_statemine-sr25519")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"files/completed")," folder."),(0,o.kt)("h3",{id:"metadata-updates"},"Metadata Updates"),(0,o.kt)("p",null,"Similarly to what we did for the chain specification, we now generate and sign the Asset Hub\nmetadata."),(0,o.kt)("h4",{id:"metadata-qr-fountain"},"Metadata QR Fountain"),(0,o.kt)("p",null,"To update the chain metadata for the Asset Hub specs on the Vault app you can follow the\ninstructions\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/parity-signer/tutorials/Add-New-Network.html#add-network-metadata"},"here"),".\nBriefly, in the Parity Signer repository, start the terminal within the ",(0,o.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder\nand type the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo run load-metadata -d -u wss://kusama-asset-hub-rpc.polkadot.io")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"wss://kusama-asset-hub-rpc.polkadot.io")," is the Parity RPC endpoint for the Asset Hub on\nKusama. This will create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"sign_me_load_metadata_statemineV9370")," under the\n",(0,o.kt)("inlineCode",{parentName:"p"},"files/in_progress")," folder. Note that for future metadata updates the file name will change as the\nversion at the time of writing was ",(0,o.kt)("inlineCode",{parentName:"p"},"V9370"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that the name of the file changes according to the network version. That is, ",(0,o.kt)("inlineCode",{parentName:"p"},"????")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"sign_me_load_metadata_statemineV????")," will be the latest version at fetch time.")),(0,o.kt)("h4",{id:"generating-signature-1"},"Generating Signature"),(0,o.kt)("admonition",{title:"Use a hot account",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that the account used to sign the metadata is a hot account. Never use a cold account from\nthe Vault app or Ledger, as after typing the seed phrase into the terminal that account will be\nconsidered hot.")),(0,o.kt)("p",null,"Start the terminal within the ",(0,o.kt)("inlineCode",{parentName:"p"},"files/in_progress")," folder and type the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'cat sign_me_load_metadata_statemineV9370 | subkey sign --suri "YOUR SEED PHRASE"')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"')," is the seed phrase of the account you used to sign the chain\nspecification. Running the code above will return a signature similar to that below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"0xde1ad7aeb252acb3cf42a522dcc8dc3f317a49be2ed636836dd6df8f7e47135f2c712480055822eba87e9ea5ac7d3bba96045992ae795856fdf4eea09a411f85")),(0,o.kt)("admonition",{title:"Do not copy the code lines above",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that the name of the file changes according to the network version. That is, ",(0,o.kt)("inlineCode",{parentName:"p"},"????")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"sign_me_load_metadata_statemineV????")," will be the latest version at fetch time. So, do not copy the\ncode line above, but change the version with the appropriate one saved under the ",(0,o.kt)("inlineCode",{parentName:"p"},"files/in_progress"),"\nfolder. The signature changes as well.")),(0,o.kt)("h4",{id:"signing-metadata"},"Signing Metadata"),(0,o.kt)("p",null,"Now, go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder and type the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo run --release make --goal qr --crypto sr25519 --msg load-metadata --payload sign_me_load_metadata_statemineV9370 --verifier-hex PUBLIC KEY --signature-hex SIGNATURE")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"PUBLIC KEY")," is the public key of the account with seed ",(0,o.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"'),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGNATURE"),"\nis the signature generated in the previous step. Running the code above will create the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"load_metadata_statemineV9370")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"files/completed")," folder."),(0,o.kt)("h3",{id:"add-chain--update-metadata"},"Add Chain & Update Metadata"),(0,o.kt)("p",null,"You can open ",(0,o.kt)("inlineCode",{parentName:"p"},"add_specs_statemine-sr25519")," on your browser (just drag the file on an open tab). This\nis a .png file containing the QR code to add the Asset Hub chain specification into the Vault App.\nYou can do the same with the ",(0,o.kt)("inlineCode",{parentName:"p"},"load_metadata_statemineV9370"),". This is a .apng file containing the QR\ncode fountain to do the metadata update for the Asset Hub on Kusama."),(0,o.kt)("h3",{id:"metadata-portal"},"Metadata Portal"),(0,o.kt)("h4",{id:"modify-config-file"},"Modify ",(0,o.kt)("inlineCode",{parentName:"h4"},"config")," File"),(0,o.kt)("p",null,"Alternatively, you can add the chain specification QR code and the metadata QR code fountain in a\nmetadata portal. Briefly, fork the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/metadata-portal"},"Parity's Metadata Portal GitHub repository"),". You can\nmodify the following fields of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": your name / institution"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key"),": the public key of the account you use to sign the chain spec and the metadata."),(0,o.kt)("li",{parentName:"ul"},"At the bottom of the file add the following information:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[[chains]]\nname = "Statemine"\ntitle = "Kusama Asset Hub"\nrpc_endpoint = "wss://kusama-asset-hub-rpc.polkadot.io"\ncolor = "#f27230"\n\n[chains.github_release]\nowner = "paritytech"\nrepo = "statemint"\ngenesis_hash = "0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"\n')),(0,o.kt)("p",null,"For each additional chain, you need to add the respective information. Information about the genesis\nhash can be found on the Polkadot-JS UI > connect to the relevant chain > Developer > Chain State."),(0,o.kt)("h4",{id:"rename-chains-files"},"Rename Chain's Files"),(0,o.kt)("p",null,"Rename the signed chain specification and metadata files as follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chain specification: ",(0,o.kt)("inlineCode",{parentName:"p"},"add_specs_statemine-sr25519")," --\x3e ",(0,o.kt)("inlineCode",{parentName:"p"},"statemine_specs.png"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Metadata updates: ",(0,o.kt)("inlineCode",{parentName:"p"},"load_metadata_statemineV9370"),"--\x3e ",(0,o.kt)("inlineCode",{parentName:"p"},"statemine_metadata_9370.apng")))),(0,o.kt)("p",null,"Thus, for chain specification the file must be renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"chainName_specs.png")," while for metadata\nthe file must be renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"chainName_metadata_version.apng")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"chainName")," is the name of the\nchain and ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," is the version of the metadata."),(0,o.kt)("p",null,"Add the renamed files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/public/qr folder")," within the Metadata Portal repository."),(0,o.kt)("h4",{id:"run-portal"},"Run Portal"),(0,o.kt)("p",null,"Open the terminal within the Metadata Portal repository and run ",(0,o.kt)("inlineCode",{parentName:"p"},"make updater"),". Then run\n",(0,o.kt)("inlineCode",{parentName:"p"},"make collector"),"; this will create the ",(0,o.kt)("inlineCode",{parentName:"p"},"_latest.apng")," files for each of the chains (removed by the\ncommand ",(0,o.kt)("inlineCode",{parentName:"p"},"make cleaner"),"). Finally, run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to load the metadata portal on your localhost."))}k.isMDXComponent=!0}}]);
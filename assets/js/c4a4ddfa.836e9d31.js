"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[341],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6679:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={sidebar_position:2},u="Spinning Up a Router",s={unversionedId:"Routers/Guides/spinning-up",id:"Routers/Guides/spinning-up",isDocsHomePage:!1,title:"Spinning Up a Router",description:"Minimum Hardware Requirements",source:"@site/docs/Routers/Guides/spinning-up.md",sourceDirName:"Routers/Guides",slug:"/Routers/Guides/spinning-up",permalink:"/Routers/Guides/spinning-up",editUrl:"https://github.com/connext/documentation/docs/Routers/Guides/spinning-up.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"routers",previous:{title:"Checklist for Running a Router",permalink:"/Routers/Guides/checklist"},next:{title:"Providing Liquidity",permalink:"/Routers/Guides/providing-liquidity"}},p=[{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",children:[]},{value:"Required Software",id:"required-software",children:[]},{value:"Network Configuration",id:"network-configuration",children:[]},{value:"Cloning the Repository",id:"cloning-the-repository",children:[]},{value:"Basic Configuration",id:"basic-configuration",children:[{value:"Environment Config",id:"environment-config",children:[]},{value:"Router Config",id:"router-config",children:[]}]},{value:"Running the Router",id:"running-the-router",children:[]},{value:"View Logs",id:"view-logs",children:[]},{value:"Grafana Dashboard",id:"grafana-dashboard",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spinning-up-a-router"},"Spinning Up a Router"),(0,o.kt)("h2",{id:"minimum-hardware-requirements"},"Minimum Hardware Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4GB RAM"),(0,o.kt)("li",{parentName:"ul"},"30GB Storage")),(0,o.kt)("h2",{id:"required-software"},"Required Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"}," Docker CE (Community Edition) ")," version 20.10.5 or higher"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"}," Docker Compose ")," version 1.27.4 or higher")),(0,o.kt)("h2",{id:"network-configuration"},"Network Configuration"),(0,o.kt)("p",null,"The router requires the following ports to be open to the public:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4222"))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do NOT expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"ROUTER_EXTERNAL_PORT")," to anyone untrusted! It should only be accessible by the operator in a trusted environment."))),(0,o.kt)("h2",{id:"cloning-the-repository"},"Cloning the Repository"),(0,o.kt)("p",null,"To spin up a router, first clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/connext/nxtp-router-docker-compose"},(0,o.kt)("inlineCode",{parentName:"a"},"nxtp-router-docker-compose"))," repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/connext/nxtp-router-docker-compose.git\n")),(0,o.kt)("h2",{id:"basic-configuration"},"Basic Configuration"),(0,o.kt)("h3",{id:"environment-config"},"Environment Config"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of the repository based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.example")," file."),(0,o.kt)("p",null,"Modify the following environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ROUTER_VERSION")," - The version of the router to use (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"v0.1.0"),"). See the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/connext/nxtp/releases"},"releases page")," for the latest released version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ROUTER_EXTERNAL_PORT")," - Exposed port of the router. Remember to not expose this port to the public."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GRAFANA_EXTERNAL_PORT")," - Exposed port of the Grafana dashboard.")),(0,o.kt)("h3",{id:"router-config"},"Router Config"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.example.json")," file. At minumum, change the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"adminToken")," - A secret string for performing sensitive operations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chainConfig")," - Add your desired chains and provider URLs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mnemonic")," - Use a unique and secret mnemonic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"swapPools")," - Change to desired assets.")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"../Reference/configuration"},"Configuration")," section for more details."),(0,o.kt)("h2",{id:"running-the-router"},"Running the Router"),(0,o.kt)("p",null,"Run the router with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker-compose up -d\n")),(0,o.kt)("p",null,"Test if it's working by querying the ",(0,o.kt)("inlineCode",{parentName:"p"},"/config")," endpoint. Log into the host or the router container and run the following curl command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# assumes ROUTER_EXTERNAL_PORT is 8000, on the container itself it will be 8000\n$ curl localhost:8000/config\n{"signerAddress":"0x9ADA6aa06eF36977569Dc5b38237809c7DF5082a"}\n')),(0,o.kt)("h2",{id:"view-logs"},"View Logs"),(0,o.kt)("p",null,"Use docker commands to check logs of any of the running containers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker logs router\n# or\n$ docker logs --follow --tail 100 router\n")),(0,o.kt)("h2",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,o.kt)("p",null,"The router runs a Grafana dashboard which is available at the on the configured ",(0,o.kt)("inlineCode",{parentName:"p"},"GRAFANA_EXTERNAL_PORT"),"."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[608],{8617:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},4478:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=(0,r.Z)(e,o);return l.createElement("svg",(0,a.Z)({className:s,width:n,height:i,viewBox:"0 0 30 30","aria-hidden":"true"},u),l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},3575:function(e,t,n){n.d(t,{Z:function(){return Ne}});var a=n(7294),r=n(6010),l=n(5977),o=n(4973),c=n(9306),i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"POP"!==t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,c.nT)(),n=t.isClosed,l=t.close,i=(0,c.LU)().announcementBar;if(!i)return null;var s=i.content,u=i.backgroundColor,h=i.textColor,g=i.isCloseable;return!s||g&&n?null:a.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},a.createElement("div",{className:(0,r.Z)(f,(e={},e[v]=g,e)),dangerouslySetInnerHTML:{__html:s}}),g?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:l,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(7462),E=function(){return null},b=n(2263),p={toggle:"toggle_71bT"},k=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:n},t)},_=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,a.useState)(l),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function N(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,i=(0,b.Z)().isClient;return a.createElement(_,(0,g.Z)({disabled:!i,icons:{checked:a.createElement(k,{icon:n,style:r}),unchecked:a.createElement(Z,{icon:l,style:o})}},e))}var w=n(5350),y=n(7898),C=function(e){var t=(0,l.TH)(),n=(0,a.useState)(e),r=n[0],o=n[1],i=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,y.Z)((function(t,n){var a=t.scrollY,r=n.scrollY;if(e)if(a<u)o(!0);else{if(i.current)return i.current=!1,void o(!1);r&&0===a&&o(!0);var l=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?o(!1):a+c<l&&o(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}},L=n(1839),I=n(3783),T=n(3366),D=n(5525),x=["width","height"],B=function(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=(0,T.Z)(e,x);return a.createElement("svg",(0,g.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},o),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},S=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function A(e){var t=e.mobile,n=e.dropdownItemsBefore,r=e.dropdownItemsAfter,l=(0,T.Z)(e,S),o=(0,b.Z)().i18n,i=o.currentLocale,s=o.locales,u=o.localeConfigs,m=(0,c.l5)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,r),h=t?"Languages":d(i);return a.createElement(D.Z,(0,g.Z)({},l,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(B,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,h)),items:v}))}function M(e){return e.mobile?null:a.createElement(E,null)}var U=["type"],P={default:function(){return D.Z},localeDropdown:function(){return A},search:function(){return M},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function H(e){var t=e.type,n=(0,T.Z)(e,U),r=function(e){void 0===e&&(e="default");var t=P[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return a.createElement(r,n)}var R=n(5537),V=n(4478),W="displayOnlyInLargeViewport_GrZ2",z="navbarHideable_2qcr",F="navbarHidden_3yey",O="right";var G=function(){var e,t=(0,c.LU)(),n=t.navbar,l=n.items,o=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=(0,a.useState)(!1),m=u[0],d=u[1],f=(0,w.Z)(),v=f.isDarkTheme,h=f.setLightTheme,b=f.setDarkTheme,p=C(o),k=p.navbarRef,Z=p.isNavbarVisible;(0,L.Z)(m);var _=(0,a.useCallback)((function(){d(!0)}),[d]),y=(0,a.useCallback)((function(){d(!1)}),[d]),T=(0,a.useCallback)((function(e){return e.target.checked?b():h()}),[h,b]),D=(0,I.Z)();(0,a.useEffect)((function(){D===I.D.desktop&&d(!1)}),[D]);var x=l.some((function(e){return"search"===e.type})),B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:O)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:O)}))}}(l),S=B.leftItems,A=B.rightItems;return a.createElement("nav",{ref:k,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[z]=o,e[F]=o&&!Z,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:_,onKeyDown:_},a.createElement(V.Z,null)),a.createElement(R.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),S.map((function(e,t){return a.createElement(H,(0,g.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,t){return a.createElement(H,(0,g.Z)({},e,{key:t}))})),!s&&a.createElement(N,{className:W,checked:v,onChange:T}),!x&&a.createElement(E,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(R.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!s&&m&&a.createElement(N,{checked:v,onChange:T})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(H,(0,g.Z)({mobile:!0},e,{onClick:y,key:t}))})))))))},q=n(6742),j=n(4996),J=n(3919),K="footerLogoLink_MyFc",Q=n(8465),Y=n(8617),X=["to","href","label","prependBaseUrlToHref"];function $(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,T.Z)(e,X),c=(0,j.Z)(t),i=(0,j.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(q.Z,(0,g.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),n&&!(0,J.Z)(n)?a.createElement("span",null,r,a.createElement(Y.Z,null)):r)}var ee=function(e){var t=e.sources,n=e.alt;return a.createElement(Q.Z,{className:"footer__logo",alt:n,sources:t})};var te=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,i=t.logo,s=void 0===i?{}:i,u={light:(0,j.Z)(s.src),dark:(0,j.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement($,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(q.Z,{href:s.href,className:K},a.createElement(ee,{alt:s.alt,sources:u})):a.createElement(ee,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},ne=n(412),ae=(0,c.WA)("theme"),re="light",le="dark",oe=function(e){return e===le?le:re},ce=function(e){(0,c.WA)("theme").set(oe(e))},ie=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return ne.Z.canUseDOM?oe(document.documentElement.getAttribute("data-theme")):oe(e)}(t)),o=l[0],i=l[1],s=(0,a.useCallback)((function(){i(re),ce(re)}),[]),u=(0,a.useCallback)((function(){i(le),ce(le)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",oe(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=ae.get();null!==e&&i(oe(e))}catch(t){console.error(t)}}),[i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?le:re)}))}),[]),{isDarkTheme:o===le,setLightTheme:s,setDarkTheme:u}},se=n(2924);var ue=function(e){var t=ie(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(se.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},me="docusaurus.tab.",de=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(me)){var n=t.substring(me.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},fe=n(9443);var ve=function(e){var t=de(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(fe.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function he(e){var t=e.children;return a.createElement(ue,null,a.createElement(c.pl,null,a.createElement(ve,null,a.createElement(c.L5,null,t))))}var ge=n(9105);function Ee(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(ge.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var be=n(1217);function pe(){var e=(0,b.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(ge.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ke(e){var t=e.permalink,n=(0,b.Z)().siteConfig.url,r=function(){var e=(0,b.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,j.Z)(t)}(),o=t?""+n+t:r;return a.createElement(ge.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function Ze(e){var t=(0,b.Z)(),n=t.siteConfig,r=n.favicon,l=n.themeConfig,o=l.metadatas,i=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,E=e.searchMetadatas,p=(0,j.Z)(r),k=(0,c.pe)(d),Z=u,_=m[u].direction;return a.createElement(a.Fragment,null,a.createElement(ge.Z,null,a.createElement("html",{lang:Z,dir:_}),r&&a.createElement("link",{rel:"shortcut icon",href:p}),a.createElement("title",null,k),a.createElement("meta",{property:"og:title",content:k}),v||i&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(be.Z,{description:f,keywords:h,image:v}),a.createElement(ke,null),a.createElement(pe,null),a.createElement(Ee,(0,g.Z)({tag:c.HX,locale:u},E)),a.createElement(ge.Z,null,o.map((function(e,t){return a.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}var _e=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ne=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return _e(),a.createElement(he,null,a.createElement(Ze,e),a.createElement(u,null),a.createElement(h,null),a.createElement(G,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(te,null))}},5537:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6742),c=n(8465),i=n(4996),s=n(2263),u=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,g=t.isClient,E=e.imageClassName,b=e.titleClassName,p=(0,r.Z)(e,u),k=(0,i.Z)(h.href||"/"),Z={light:(0,i.Z)(h.src),dark:(0,i.Z)(h.srcDark||h.src)};return l.createElement(o.Z,(0,a.Z)({to:k},p,h.target&&{target:h.target}),h.src&&l.createElement(c.Z,{key:g,className:E,sources:Z,alt:h.alt||f||m}),null!=f&&l.createElement("b",{className:b},f))}},5525:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(9306),m=n(8617),d=n(3919),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],h=["className"],g=["items","className","position"],E=["className"],b=["mobile"],p="dropdown__link--active";function k(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,E=(0,r.Z)(e,f),b=(0,i.Z)(o),k=(0,i.Z)(t),Z=(0,i.Z)(s,{forcePrependBaseUrl:!0}),_=u&&s&&!(0,d.Z)(s),N=h===p;return l.createElement(c.Z,(0,a.Z)({},s?{href:g?Z:s}:Object.assign({isNavLink:!0,activeClassName:h,to:b},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),E),_?l.createElement("span",null,u,l.createElement(m.Z,N&&{width:12,height:12})):u)}function Z(e){var t,n=e.items,c=e.position,i=e.className,s=(0,r.Z)(e,v),u=(0,l.useRef)(null),m=(0,l.useRef)(null),d=(0,l.useState)(!1),f=d[0],g=d[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var E=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":f})},l.createElement(k,(0,a.Z)({className:E(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!f))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,r.Z)(e,h);return l.createElement("li",{key:t},l.createElement(k,(0,a.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:p,className:E(o,!0)},c)))})))):l.createElement(k,(0,a.Z)({className:E(i)},s))}function _(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,r.Z)(e,g)),f=(0,l.useRef)(null),v=(0,s.TH)().pathname,h=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,v)}))))||e})),b=h[0],p=h[1],Z=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(k,(0,a.Z)({className:Z(m)},d)));var _=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(k,(0,a.Z)({role:"button",className:Z(m,!0)},d,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),l.createElement("ul",{className:"menu__list",ref:f,style:{height:b?void 0:_}},i.map((function(e,t){var n=e.className,o=(0,r.Z)(e,E);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(k,(0,a.Z)({activeClassName:"menu__link--active",className:Z(n)},o,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,b),o=n?_:Z;return l.createElement(o,a)}},6400:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),c=n(907),i=n(6010),s=n(9306),u=n(8780),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,m),g=(0,c.Iw)(v),E=g.activeVersion,b=g.activeDoc,p=(0,s.J)(v).preferredVersion,k=(0,c.yW)(v),Z=function(e,t){var n,a=(n=[]).concat.apply(n,e.map((function(e){return e.docs}))),r=a.find((function(e){return e.id===t}));if(!r){var l=a.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+l)}return r}((0,u.uniq)([E,p,k].filter(Boolean)),n);return l.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[d]=b&&b.sidebar===Z.sidebar,t)),label:null!=f?f:Z.id,to:Z.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),c=n(907),i=n(9306),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,r.Z)(e,s),E=(0,c.Iw)(d),b=(0,c.gB)(d),p=(0,c.yW)(d),k=(0,i.J)(d),Z=k.preferredVersion,_=k.savePreferredVersionName;var N=function(){var e=b.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){_(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),w=null!=(t=null!=(n=E.activeVersion)?n:Z)?t:p,y=m&&N?"Versions":w.label,C=m&&N?void 0:u(w).path;return l.createElement(o.Z,(0,a.Z)({},g,{mobile:m,label:y,to:C,items:N,isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),c=n(907),i=n(9306),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),g=null!=(t=null!=f?f:v)?t:h,E=null!=n?n:g.label,b=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:E,to:b}))}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(3575),l=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},8465:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),c=n(2263),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,c.Z)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1839:function(e,t,n){var a=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){var a=n(7294),r=n(412),l=function(){return{scrollX:r.Z.canUseDOM?window.pageXOffset:0,scrollY:r.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(l()),r=function(){var t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:function(e,t,n){n.d(t,{D:function(){return l}});var a=n(7294),r=n(412),l={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=r.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}var n=(0,a.useState)(t),o=n[0],c=n[1];return(0,a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}}}]);
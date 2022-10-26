
  
  let _ENTRIES = {};
/**/;/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			993: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;
//# sourceMappingURL=edge-runtime-webpack.js.map
/**/;(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{9289:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ei});class s extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class i extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class n extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}function o(e){let t=new Headers;for(let[r,s]of Object.entries(e)){let i=Array.isArray(s)?s:[s];for(let n of i)void 0!==n&&t.append(r,n)}return t}function a(e){var t,r,s,i,n,o=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,n=!1;l();)if(","===(r=e.charAt(a))){for(s=a,a+=1,l(),i=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(n=!0,a=i,o.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!n||a>=e.length)&&o.push(e.substring(t,e.length))}return o}function l(e){let t={};if(e)for(let[r,s]of e.entries())t[r]=s,"set-cookie"===r.toLowerCase()&&(t[r]=a(s));return t}function h(e){try{return String(new URL(String(e)))}catch(t){throw Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t})}}let u=Symbol("response"),d=Symbol("passThrough"),c=Symbol("waitUntil");class p{[c]=[];[d]=!1;constructor(e){}respondWith(e){this[u]||(this[u]=Promise.resolve(e))}passThroughOnException(){this[d]=!0}waitUntil(e){this[c].push(e)}}class f extends p{constructor(e){super(e.request),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}}function g(e,t,r){let s;if(e)for(let i of(r&&(r=r.toLowerCase()),e)){var n,o;let a=null==(n=i.domain)?void 0:n.split(":")[0].toLowerCase();if(t===a||r===i.defaultLocale.toLowerCase()||(null==(o=i.locales)?void 0:o.some(e=>e.toLowerCase()===r))){s=i;break}}return s}function m(e){return e.replace(/\/$/,"")||"/"}function w(e){let t=e.indexOf("#"),r=e.indexOf("?"),s=r>-1&&(t<0||r<t);return s||t>-1?{pathname:e.substring(0,s?r:t),query:s?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}function x(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:i}=w(e);return`${t}${r}${s}${i}`}function b(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:i}=w(e);return`${r}${t}${s}${i}`}function y(e,t){if("string"!=typeof e)return!1;let{pathname:r}=w(e);return r===t||r.startsWith(t+"/")}function v(e,t,r,s){return t&&t!==r&&(s||!y(e.toLowerCase(),`/${t.toLowerCase()}`)&&!y(e.toLowerCase(),"/api"))?x(e,`/${t}`):e}function _(e){let t=v(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=m(t)),e.buildId&&(t=b(x(t,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),t=x(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:b(t,"/"):m(t)}function S(e,t){var r;return null==(r=!Array.isArray(null==t?void 0:t.host)&&(null==t?void 0:t.host)||e.hostname)?void 0:r.split(":")[0].toLowerCase()}function L(e,t){let r;let s=e.split("/");return(t||[]).some(t=>!!s[1]&&s[1].toLowerCase()===t.toLowerCase()&&(r=t,s.splice(1,1),e=s.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}function E(e,t){if(y(e,t)){let r=e.slice(t.length);return r.startsWith("/")?r:`/${r}`}return e}function P(e,t){var r;let{basePath:s,i18n:i,trailingSlash:n}=null!=(r=t.nextConfig)?r:{},o={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):n};if(s&&y(o.pathname,s)&&(o.pathname=E(o.pathname,s),o.basePath=s),!0===t.parseData&&o.pathname.startsWith("/_next/data/")&&o.pathname.endsWith(".json")){let a=o.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),l=a[0];o.pathname="index"!==a[1]?`/${a.slice(1).join("/")}`:"/",o.buildId=l}if(i){let h=L(o.pathname,i.locales);o.locale=null==h?void 0:h.detectedLocale,o.pathname=(null==h?void 0:h.pathname)||o.pathname}return o}let C=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;function j(e,t){return new URL(String(e).replace(C,"localhost"),t&&String(t).replace(C,"localhost"))}let k=Symbol("NextURLInternal");class q{constructor(e,t,r){let s,i;"object"==typeof t&&"pathname"in t||"string"==typeof t?(s=t,i=r||{}):i=r||t||{},this[k]={url:j(e,s??i.base),options:i,basePath:""},this.analyzeUrl()}analyzeUrl(){var e,t,r,s,i;let n=P(this[k].url.pathname,{nextConfig:this[k].options.nextConfig,parseData:!0});this[k].domainLocale=g(null==(e=this[k].options.nextConfig)?void 0:null==(t=e.i18n)?void 0:t.domains,S(this[k].url,this[k].options.headers));let o=(null==(r=this[k].domainLocale)?void 0:r.defaultLocale)||(null==(s=this[k].options.nextConfig)?void 0:null==(i=s.i18n)?void 0:i.defaultLocale);this[k].url.pathname=n.pathname,this[k].defaultLocale=o,this[k].basePath=n.basePath??"",this[k].buildId=n.buildId,this[k].locale=n.locale??o,this[k].trailingSlash=n.trailingSlash}formatPathname(){return _({basePath:this[k].basePath,buildId:this[k].buildId,defaultLocale:this[k].options.forceLocale?void 0:this[k].defaultLocale,locale:this[k].locale,pathname:this[k].url.pathname,trailingSlash:this[k].trailingSlash})}formatSearch(){return this[k].url.search}get buildId(){return this[k].buildId}set buildId(e){this[k].buildId=e}get locale(){return this[k].locale??""}set locale(e){var t,r;if(!this[k].locale||!(null==(t=this[k].options.nextConfig)?void 0:null==(r=t.i18n)?void 0:r.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[k].locale=e}get defaultLocale(){return this[k].defaultLocale}get domainLocale(){return this[k].domainLocale}get searchParams(){return this[k].url.searchParams}get host(){return this[k].url.host}set host(e){this[k].url.host=e}get hostname(){return this[k].url.hostname}set hostname(e){this[k].url.hostname=e}get port(){return this[k].url.port}set port(e){this[k].url.port=e}get protocol(){return this[k].url.protocol}set protocol(e){this[k].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[k].url=j(e),this.analyzeUrl()}get origin(){return this[k].url.origin}get pathname(){return this[k].url.pathname}set pathname(e){this[k].url.pathname=e}get hash(){return this[k].url.hash}set hash(e){this[k].url.hash=e}get search(){return this[k].url.search}set search(e){this[k].url.search=e}get password(){return this[k].url.password}set password(e){this[k].url.password=e}get username(){return this[k].url.username}set username(e){this[k].url.username=e}get basePath(){return this[k].basePath}set basePath(e){this[k].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new q(String(this),this[k].options)}}var $=r(9802),I=r.n($);let U=e=>((e=Object.assign({},e)).maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),null==e.path&&(e.path="/"),e),T=e=>"object"==typeof e?`j:${JSON.stringify(e)}`:String(e),R=(e,t={})=>I().serialize(e,"",{expires:new Date(0),path:"/",...t}),O=e=>{let t=e.headers.get("set-cookie");return null!=t?t.split(", "):[]},A=e=>e.join(", ");class N extends Map{constructor(e){let t="string"==typeof e?I().parse(e):{};super(Object.entries(t))}set(e,t,r={}){return super.set(e,I().serialize(e,T(t),U(r)))}[Symbol.for("edge-runtime.inspect.custom")](){return Object.fromEntries(this.entries())}}class W extends N{constructor(e){super(e.headers.get("cookie")),this.response=e}get=(...e)=>this.getWithOptions(...e).value;getWithOptions=(...e)=>{let t=super.get(...e);if("string"!=typeof t)return{value:t,options:{}};let{[e[0]]:r,...s}=I().parse(t);return{value:r,options:s}};set=(...e)=>{let t=super.has(e[0]);super.set(...e);let r=super.get(e[0]);if("string"!=typeof r)throw Error(`Invariant: failed to generate cookie for ${JSON.stringify(e)}`);if(t){let s=A(O(this.response).filter(t=>!t.startsWith(`${e[0]}=`)));s?this.response.headers.set("set-cookie",[r,s].join(", ")):this.response.headers.set("set-cookie",r)}else this.response.headers.append("set-cookie",r);return this};delete=(e,t={})=>{let r=super.delete(e);if(r){let s=A(O(this.response).filter(t=>!t.startsWith(`${e}=`))),i=R(e,t);this.response.headers.set("set-cookie",[i,s].join(", "))}return r};clear=(e={})=>{let t=Array.from(super.keys()).map(t=>R(t,e)).join(", ");return t&&this.response.headers.set("set-cookie",t),super.clear()}}let D=Symbol("internal request");class H extends Request{constructor(e,t={}){let r="string"!=typeof e&&"url"in e?e.url:String(e);h(r),super(r,t),this[D]={cookies:new W(this),geo:t.geo||{},ip:t.ip,url:new q(r,{headers:l(this.headers),nextConfig:t.nextConfig})}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[D].cookies}get geo(){return this[D].geo}get ip(){return this[D].ip}get nextUrl(){return this[D].url}get page(){throw new i}get ua(){throw new n}get url(){return this[D].url.toString()}}let z=Symbol("internal response"),F=new Set([301,302,303,307,308]);function M(e,t){var r;if(null==e?void 0:null==(r=e.request)?void 0:r.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let s=[];for(let[i,n]of e.request.headers)t.set("x-middleware-request-"+i,n),s.push(i);t.set("x-middleware-override-headers",s.join(","))}}class J extends Response{constructor(e,t={}){super(e,t),this[z]={cookies:new W(this),url:t.url?new q(t.url,{headers:l(this.headers),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[z].cookies}static json(e,t){let r=Response.json(e,t);return new J(r.body,r)}static redirect(e,t){let r="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!F.has(r))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let s="object"==typeof t?t:{},i=new Headers(null==s?void 0:s.headers);return i.set("Location",h(e)),new J(null,{...s,headers:i,status:r})}static rewrite(e,t){let r=new Headers(null==t?void 0:t.headers);return r.set("x-middleware-rewrite",h(e)),M(t,r),new J(null,{...t,headers:r})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),M(e,t),new J(null,{...e,headers:t})}}function B(e,t){let r="string"==typeof t?new URL(t):t,s=new URL(e,t),i=`${r.protocol}//${r.host}`;return`${s.protocol}//${s.host}`===i?s.toString().replace(i,""):s.toString()}let G=["__nextFallback","__nextLocale","__nextDefaultLocale","__nextIsNotFound","__rsc__","__next_router_state_tree__","__next_router_prefetch__"],K=["__nextDataReq"];function Q(e,t){for(let r of G)e.delete(r);if(t)for(let s of K)e.delete(s);return e}function V(e,t){return t?e.replace(/\.rsc($|\?)/,""):e}class X extends H{constructor(e){super(e.input,e.init),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}waitUntil(){throw new s({page:this.sourcePage})}}let Y=["__rsc__","__next_router_state_tree__","__next_router_prefetch__"];async function Z(e){let t=void 0!==self.__BUILD_MANIFEST;e.request.url=V(e.request.url,!0);let r=new q(e.request.url,{headers:e.request.headers,nextConfig:e.request.nextConfig}),s=r.buildId;r.buildId="";let i=e.request.headers["x-nextjs-data"];i&&"/index"===r.pathname&&(r.pathname="/");let n=o(e.request.headers);if(!t)for(let a of Y)n.delete(a);Q(r.searchParams,!0);let l=new X({page:e.page,input:String(r),init:{body:e.request.body,geo:e.request.geo,headers:n,ip:e.request.ip,method:e.request.method,nextConfig:e.request.nextConfig}});i&&Object.defineProperty(l,"__isData",{enumerable:!1,value:!0});let h=new f({request:l,page:e.page}),u=await e.handler(l,h);if(u&&!(u instanceof Response))throw TypeError("Expected an instance of Response to be returned");let d=null==u?void 0:u.headers.get("x-middleware-rewrite");if(u&&d){let p=new q(d,{forceLocale:!0,headers:e.request.headers,nextConfig:e.request.nextConfig});p.host===l.nextUrl.host&&(p.buildId=s||p.buildId,u.headers.set("x-middleware-rewrite",String(p))),i&&u.headers.set("x-nextjs-rewrite",B(String(p),String(r)))}let g=null==u?void 0:u.headers.get("Location");if(u&&g){let m=new q(g,{forceLocale:!1,headers:e.request.headers,nextConfig:e.request.nextConfig});u=new Response(u.body,u),m.host===l.nextUrl.host&&(m.buildId=s||m.buildId,u.headers.set("Location",String(m))),i&&(u.headers.delete("Location"),u.headers.set("x-nextjs-redirect",B(String(m),String(r))))}return{response:u||J.next(),waitUntil:Promise.all(h[c])}}function ee(e){return`The edge runtime does not support Node.js '${e}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`}function et(e){let t=new Proxy(function(){},{get(t,r){if("then"===r)return{};throw Error(ee(e))},construct(){throw Error(ee(e))},apply(r,s,i){if("function"==typeof i[0])return i[0](t);throw Error(ee(e))}});return new Proxy({},{get:()=>t})}process!==r.g.process&&(process.env=r.g.process.env,r.g.process=process),Object.defineProperty(globalThis,"__import_unsupported",{value:et,enumerable:!1,configurable:!1});var er=r(737),es=er.middleware||er.default;if("function"!=typeof es)throw Error('The Edge Function "pages/api/hello" must export a `default` function');function ei(e){return Z({...e,page:"/api/hello",handler:es})}},737(e,t,r){"use strict";r.r(t),r.d(t,{config:()=>s,default:()=>i});let s={runtime:"experimental-edge"};function i(e,t){t.status(200).json({name:"John Doe"})}},9802(e){var t,r,s,i,n,o;"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab="//"),/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ (r=t={}).parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},i=e.split(n),o=(t||{}).decode||s,a=0;a<i.length;a++){var l=i[a],h=l.indexOf("=");if(!(h<0)){var u=l.substr(0,h).trim(),d=l.substr(++h,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==r[u]&&(r[u]=function(e,t){try{return t(e)}catch(r){return e}}(d,o))}}return r},r.serialize=function(e,t,r){var s=r||{},n=s.encode||i;if("function"!=typeof n)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var a=n(t);if(a&&!o.test(a))throw TypeError("argument val is invalid");var l=e+"="+a;if(null!=s.maxAge){var h=s.maxAge-0;if(isNaN(h)||!isFinite(h))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(h)}if(s.domain){if(!o.test(s.domain))throw TypeError("option domain is invalid");l+="; Domain="+s.domain}if(s.path){if(!o.test(s.path))throw TypeError("option path is invalid");l+="; Path="+s.path}if(s.expires){if("function"!=typeof s.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(l+="; HttpOnly"),s.secure&&(l+="; Secure"),s.sameSite){var u="string"==typeof s.sameSite?s.sameSite.toLowerCase():s.sameSite;switch(u){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}}return l},s=decodeURIComponent,i=encodeURIComponent,n=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,e.exports=t}},e=>{var t=e(e.s=9289);(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_pages/api/hello"]=t}]);
//# sourceMappingURL=hello.js.map;
  export default (function () {
    const module = { exports: {}, loaded: false };
    const fn = (function(module,exports) {var d=Object.defineProperty;var m=e=>d(e,"__esModule",{value:!0});var y=(e,r)=>{m(e);for(var t in r)d(e,t,{get:r[t],enumerable:!0})};y(exports,{default:()=>x});function h(e){let r={};return e&&e.forEach((t,i)=>{r[i]=t,i.toLowerCase()==="set-cookie"&&(r[i]=C(t))}),r}function C(e){let r=[],t=0,i,a,p,n,s;function c(){for(;t<e.length&&/\s/.test(e.charAt(t));)t+=1;return t<e.length}function o(){return a=e.charAt(t),a!=="="&&a!==";"&&a!==","}for(;t<e.length;){for(i=t,s=!1;c();)if(a=e.charAt(t),a===","){for(p=t,t+=1,c(),n=t;t<e.length&&o();)t+=1;t<e.length&&e.charAt(t)==="="?(s=!0,t=n,r.push(e.substring(i,p)),i=t):t=p+1}else t+=1;(!s||t>=e.length)&&r.push(e.substring(i,e.length))}return r}function x(e){let r=e.staticRoutes.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page})),t=e.dynamicRoutes?.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page}))||[];return async function(a,p){let n=new URL(a.url).pathname,s={};if(e.nextConfig?.basePath&&n.startsWith(e.nextConfig.basePath)&&(n=n.replace(e.nextConfig.basePath,"")||"/"),e.nextConfig?.i18n)for(let o of e.nextConfig.i18n.locales){let g=new RegExp(`^/${o}($|/)`,"i");if(n.match(g)){n=n.replace(g,"/")||"/";break}}for(let o of r)if(o.regexp.exec(n)){s.name=o.page;break}if(!s.name){let o=R(n);for(let g of t||[]){if(o&&!R(g.page))continue;let f=g.regexp.exec(n);if(f){s={name:g.page,params:f.groups};break}}}let c=await _ENTRIES[`middleware_${e.name}`].default.call({},{request:{url:a.url,method:a.method,headers:h(a.headers),ip:u(a.headers,l.Ip),geo:{city:u(a.headers,l.City,!0),country:u(a.headers,l.Country,!0),latitude:u(a.headers,l.Latitude),longitude:u(a.headers,l.Longitude),region:u(a.headers,l.Region,!0)},nextConfig:e.nextConfig,page:s,body:a.body}});return p.waitUntil(c.waitUntil),c.response}}function u(e,r,t=!1){let i=e.get(r)||void 0;return t&&i?decodeURIComponent(i):i}function R(e){return e==="/api"||e.startsWith("/api/")}var l;(function(n){n.City="x-vercel-ip-city",n.Country="x-vercel-ip-country",n.Ip="x-real-ip",n.Latitude="x-vercel-ip-latitude",n.Longitude="x-vercel-ip-longitude",n.Region="x-vercel-ip-country-region"})(l||(l={}));

});
    fn(module, module.exports);
    return module.exports;
  }).call({}).default(
    {"name":"pages/api/hello","staticRoutes":[{"page":"/","regex":"^/(?:/)?$","routeKeys":{},"namedRegex":"^/(?:/)?$"}],"dynamicRoutes":[],"nextConfig":{"basePath":""}}
  )
var Et=Object.defineProperty;var ke=n=>{throw TypeError(n)};var bt=(n,e,t)=>e in n?Et(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>bt(n,typeof e!="symbol"?e+"":e,t),me=(n,e,t)=>e.has(n)||ke("Cannot "+t);var h=(n,e,t)=>(me(n,e,"read from private field"),t?t.call(n):e.get(n)),P=(n,e,t)=>e.has(n)?ke("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),S=(n,e,t,s)=>(me(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t),q=(n,e,t)=>(me(n,e,"access private method"),t);import{d as St,u as oe,r as _t,a as Tt,b as Ze,c as se,o as At,_ as Ct,e as Rt,f as ee,g as ce,h as je,n as Mt,F as $t,i as N,w as Le,T as Ie,j as De,k as te,t as Ot,l as Pt,m as Je,p as Nt,q as We,s as Ye,v as kt,x as jt,y as Lt,z as It}from"./BQPupdX1.js";import{loadDatabaseAdapter as J}from"./HVOT7GNq.js";import{r as Dt}from"./Dw0R1dOc.js";const Wt={nuxt:{}},zt=St(Wt);function Qe(){const n=oe();return n._appConfig||(n._appConfig=_t(zt)),n._appConfig}const Ft={key:0},qt={key:0},Bt={id:"__preview_loader"},Vt=Tt({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},api:{type:String,required:!0},initializePreview:{type:Function,required:!0}},setup(n){const e=n,t=["__nuxt_preview","__preview_enabled"],s=oe(),r=Ze(),i=se(!0),o=se(!1),a=se(!1),c=se("");let l;const p=async()=>{De("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await r.replace({query:{preview:void 0}}),window.location.reload()},d=async g=>{await e.initializePreview(g),De("previewToken").value&&(a.value=!0,await r.replace({query:{}}),s.callHook("nuxt-content:preview:ready"),window.parent&&window.self!==window.parent&&l.disconnect())};return At(async()=>{l=(await Ct(()=>import("./DHS7FQ5J.js"),[],import.meta.url)).connect(`${e.api}/preview`,{transports:["websocket","polling"],auth:{token:e.previewToken}});let m;l.on("connect",()=>{m=setTimeout(()=>{a.value||(m=setTimeout(()=>{c.value="Preview sync timed out",a.value=!1},3e4),l.emit("draft:requestSync"))},3e4)});const w=()=>{m&&(clearTimeout(m),m=null)};l.on("draft:sync",async u=>{if(w(),!u){try{l.once("draft:ready",()=>{l.emit("draft:requestSync")}),await $fetch("api/projects/preview/sync",{baseURL:e.api,method:"POST",params:{token:e.previewToken}})}catch(f){switch(w(),f.response.status){case 404:c.value="Preview draft not found",a.value=!1;break;default:c.value="An error occurred while syncing preview",a.value=!1}}return}d(u)}),l.on("draft:unauthorized",()=>{w(),c.value="Unauthorized preview",a.value=!1}),l.on("disconnect",()=>{w()}),document.body.classList.add(...t)}),Rt(()=>{document.body.classList.remove(...t)}),(g,m)=>(te(),ee("div",null,[i.value?(te(),ee("div",{key:0,id:"__nuxt_preview",class:Mt({__preview_ready:a.value,__preview_refreshing:o.value})},[a.value?(te(),ee($t,{key:0},[m[0]||(m[0]=N("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),m[1]||(m[1]=N("span",null,"Preview enabled",-1)),N("button",{onClick:p}," Close ")],64)):ce("",!0)],2)):ce("",!0),je(Ie,{name:"preview-loading"},{default:Le(()=>[i.value&&!a.value&&!c.value?(te(),ee("div",Ft,[m[4]||(m[4]=N("div",{id:"__preview_background"},null,-1)),N("div",{id:"__preview_loader"},[m[2]||(m[2]=N("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[N("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),m[3]||(m[3]=N("p",null,"Initializing the preview...",-1)),N("button",{onClick:p}," Cancel ")])])):ce("",!0)]),_:1}),je(Ie,{name:"preview-loading"},{default:Le(()=>[c.value?(te(),ee("div",qt,[m[5]||(m[5]=N("div",{id:"__preview_background"},null,-1)),N("div",Bt,[N("p",null,Ot(c.value),1),N("button",{onClick:p}," Exit preview ")])])):ce("",!0)]),_:1})]))}}),Ut=Object.assign(Pt(Vt,[["__scopeId","data-v-92901af0"]]),{__name:"ContentPreviewMode"}),Ht=/^[A-Za-z]:\//;function de(n=""){return n&&n.replace(/\\/g,"/").replace(Ht,e=>e.toUpperCase())}const Kt=/^[/\\]{2}/,Gt=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,et=/^[A-Za-z]:$/,Xt=/.(\.[^./]+|\.)$/,Zt=/^[/\\]|^[a-zA-Z]:[/\\]/,Jt=function(n){if(n.length===0)return".";n=de(n);const e=n.match(Kt),t=be(n),s=n[n.length-1]==="/";return n=Yt(n,!t),n.length===0?t?"/":s?"./":".":(s&&(n+="/"),et.test(n)&&(n+="/"),e?t?`//${n}`:`//./${n}`:t&&!be(n)?`/${n}`:n)},tt=function(...n){let e="";for(const t of n)if(t)if(e.length>0){const s=e[e.length-1]==="/",r=t[0]==="/";s&&r?e+=t.slice(1):e+=s||r?t:`/${t}`}else e+=t;return Jt(e)};function Yt(n,e){let t="",s=0,r=-1,i=0,o=null;for(let a=0;a<=n.length;++a){if(a<n.length)o=n[a];else{if(o==="/")break;o="/"}if(o==="/"){if(!(r===a-1||i===1))if(i===2){if(t.length<2||s!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const c=t.lastIndexOf("/");c===-1?(t="",s=0):(t=t.slice(0,c),s=t.length-1-t.lastIndexOf("/")),r=a,i=0;continue}else if(t.length>0){t="",s=0,r=a,i=0;continue}}e&&(t+=t.length>0?"/..":"..",s=2)}else t.length>0?t+=`/${n.slice(r+1,a)}`:t=n.slice(r+1,a),s=a-r-1;r=a,i=0}else o==="."&&i!==-1?++i:i=-1}return t}const be=function(n){return Gt.test(n)},Qt=function(n){if(n==="..")return"";const e=Xt.exec(de(n));return e&&e[1]||""},nt=function(n){const e=de(n).replace(/\/$/,"").split("/").slice(0,-1);return e.length===1&&et.test(e[0])&&(e[0]+="/"),e.join("/")||(be(n)?"/":".")},en=function(n,e){const t=de(n).split("/");let s="";for(let r=t.length-1;r>=0;r--){const i=t[r];if(i){s=i;break}}return e&&s.endsWith(e)?s.slice(0,-e.length):s},tn=function(n){var r,i;const e=((i=(r=Zt.exec(n))==null?void 0:r[0])==null?void 0:i.replace(/\\/g,"/"))||"",t=en(n),s=Qt(t);return{root:e,dir:nt(n),base:t,ext:s,name:t.slice(0,t.length-s.length)}},F={appConfig:"app.config.ts",appConfigV4:"app/app.config.ts",nuxtConfig:"nuxt.config.ts"};function ue(n){return n!=null&&n.startsWith("content/")?n.split("/").slice(1).join("/"):Je(n)}function we(n){const e=ue(n);return tt(nt(e),tn(e).name)}function nn(n=[],e,t){const s=[...e||[]],r=[...t||[]],i=JSON.parse(JSON.stringify(n));for(const a of s)if(a.new)i.push({path:a.path,parsed:a.parsed});else if(a.oldPath)if(r.splice(r.findIndex(l=>l.path===a.oldPath),1),s.find(l=>l.path===a.oldPath))i.push({path:a.path,parsed:a.parsed});else{const l=i.find(p=>p.path===a.oldPath);l&&(l.path=a.path,a.parsed?l.parsed=a.parsed:a.pathMeta&&["_file","_path","_id","_locale"].forEach(p=>{l.parsed[p]=a.pathMeta[p]}))}else{const c=i.find(l=>l.path===a.path);c?Object.assign(c,{path:a.path,parsed:a.parsed}):i.push({path:a.path,parsed:a.parsed})}for(const a of r)i.splice(i.findIndex(c=>c.path===a.path),1);const o=new Intl.Collator(void 0,{numeric:!0});return i.sort((a,c)=>o.compare(a.path,c.path)),i}const sn=Nt((n,e,t)=>{if(Array.isArray(n[e])&&Array.isArray(t))return n[e]=t,!0}),rn=n=>{let e;return t=>(e||(e=n()),e)};function st(n,e){for(const t in n){const s=e[t];t in e||delete n[t],s!==null&&typeof s=="object"&&st(n[t],e[t])}}function it(n,e){for(const t in e){const s=e[t];s!==null&&typeof s=="object"?Array.isArray(s)&&Array.isArray(n[t])?n[t]=s:(n[t]=n[t]||{},it(n[t],s)):n[t]=s}}function rt(n){const[e,...t]=n.include.includes("*")?n.include.split("*"):["",n.include];return{fixed:e||"",dynamic:"*"+t.join("*")}}const ot=(n,e,t)=>{const{fixed:s}=rt(t),r=n.parsed._path.substring(s.length),i=tt((t==null?void 0:t.prefix)||"",r),o={id:n.parsed._id,stem:n.parsed._stem,meta:{},extension:n.parsed._extension,path:i},a=e.schema.definitions[e.name].properties;return Object.keys(n.parsed).forEach(c=>{c in a?o[c]=n.parsed[c]:o.meta[c]=n.parsed[c]}),o};function on(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ye,ze;function an(){if(ze)return ye;ze=1,ye=n;function n(s,r,i){s instanceof RegExp&&(s=e(s,i)),r instanceof RegExp&&(r=e(r,i));var o=t(s,r,i);return o&&{start:o[0],end:o[1],pre:i.slice(0,o[0]),body:i.slice(o[0]+s.length,o[1]),post:i.slice(o[1]+r.length)}}function e(s,r){var i=r.match(s);return i?i[0]:null}n.range=t;function t(s,r,i){var o,a,c,l,p,d=i.indexOf(s),g=i.indexOf(r,d+1),m=d;if(d>=0&&g>0){if(s===r)return[d,g];for(o=[],c=i.length;m>=0&&!p;)m==d?(o.push(m),d=i.indexOf(s,m+1)):o.length==1?p=[o.pop(),g]:(a=o.pop(),a<c&&(c=a,l=g),g=i.indexOf(r,m+1)),m=d<g&&d>=0?d:g;o.length&&(p=[c,l])}return p}return ye}var ve,Fe;function cn(){if(Fe)return ve;Fe=1;var n=an();ve=p;var e="\0SLASH"+Math.random()+"\0",t="\0OPEN"+Math.random()+"\0",s="\0CLOSE"+Math.random()+"\0",r="\0COMMA"+Math.random()+"\0",i="\0PERIOD"+Math.random()+"\0";function o(f){return parseInt(f,10)==f?parseInt(f,10):f.charCodeAt(0)}function a(f){return f.split("\\\\").join(e).split("\\{").join(t).split("\\}").join(s).split("\\,").join(r).split("\\.").join(i)}function c(f){return f.split(e).join("\\").split(t).join("{").split(s).join("}").split(r).join(",").split(i).join(".")}function l(f){if(!f)return[""];var y=[],x=n("{","}",f);if(!x)return f.split(",");var v=x.pre,M=x.body,k=x.post,b=v.split(",");b[b.length-1]+="{"+M+"}";var I=l(k);return k.length&&(b[b.length-1]+=I.shift(),b.push.apply(b,I)),y.push.apply(y,b),y}function p(f){return f?(f.substr(0,2)==="{}"&&(f="\\{\\}"+f.substr(2)),u(a(f),!0).map(c)):[]}function d(f){return"{"+f+"}"}function g(f){return/^-?0\d/.test(f)}function m(f,y){return f<=y}function w(f,y){return f>=y}function u(f,y){var x=[],v=n("{","}",f);if(!v)return[f];var M=v.pre,k=v.post.length?u(v.post,!1):[""];if(/\$$/.test(v.pre))for(var b=0;b<k.length;b++){var I=M+"{"+v.body+"}"+k[b];x.push(I)}else{var gt=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(v.body),Ce=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(v.body),ae=gt||Ce,mt=v.body.indexOf(",")>=0;if(!ae&&!mt)return v.post.match(/,.*\}/)?(f=v.pre+"{"+v.body+s+v.post,u(f)):[f];var $;if(ae)$=v.body.split(/\.\./);else if($=l(v.body),$.length===1&&($=u($[0],!1).map(d),$.length===1))return k.map(function(xt){return v.pre+$[0]+xt});var H;if(ae){var Re=o($[0]),Me=o($[1]),wt=Math.max($[0].length,$[1].length),$e=$.length==3?Math.abs(o($[2])):1,Oe=m,yt=Me<Re;yt&&($e*=-1,Oe=w);var vt=$.some(g);H=[];for(var Q=Re;Oe(Q,Me);Q+=$e){var D;if(Ce)D=String.fromCharCode(Q),D==="\\"&&(D="");else if(D=String(Q),vt){var Pe=wt-D.length;if(Pe>0){var Ne=new Array(Pe+1).join("0");Q<0?D="-"+Ne+D.slice(1):D=Ne+D}}H.push(D)}}else{H=[];for(var K=0;K<$.length;K++)H.push.apply(H,u($[K],!1))}for(var K=0;K<H.length;K++)for(var b=0;b<k.length;b++){var I=M+H[K]+k[b];(!y||ae||I)&&x.push(I)}}return x}return ve}var ln=cn();const hn=on(ln),un=1024*64,pe=n=>{if(typeof n!="string")throw new TypeError("invalid pattern");if(n.length>un)throw new TypeError("pattern is too long")},pn={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},ne=n=>n.replace(/[[\]\\-]/g,"\\$&"),fn=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),qe=n=>n.join(""),dn=(n,e)=>{const t=e;if(n.charAt(t)!=="[")throw new Error("not in a brace expression");const s=[],r=[];let i=t+1,o=!1,a=!1,c=!1,l=!1,p=t,d="";e:for(;i<n.length;){const u=n.charAt(i);if((u==="!"||u==="^")&&i===t+1){l=!0,i++;continue}if(u==="]"&&o&&!c){p=i+1;break}if(o=!0,u==="\\"&&!c){c=!0,i++;continue}if(u==="["&&!c){for(const[f,[y,x,v]]of Object.entries(pn))if(n.startsWith(f,i)){if(d)return["$.",!1,n.length-t,!0];i+=f.length,v?r.push(y):s.push(y),a=a||x;continue e}}if(c=!1,d){u>d?s.push(ne(d)+"-"+ne(u)):u===d&&s.push(ne(u)),d="",i++;continue}if(n.startsWith("-]",i+1)){s.push(ne(u+"-")),i+=2;continue}if(n.startsWith("-",i+1)){d=u,i+=2;continue}s.push(ne(u)),i++}if(p<i)return["",!1,0,!1];if(!s.length&&!r.length)return["$.",!1,n.length-t,!0];if(r.length===0&&s.length===1&&/^\\?.$/.test(s[0])&&!l){const u=s[0].length===2?s[0].slice(-1):s[0];return[fn(u),!1,p-t,!1]}const g="["+(l?"^":"")+qe(s)+"]",m="["+(l?"":"^")+qe(r)+"]";return[s.length&&r.length?"("+g+"|"+m+")":s.length?g:m,a,p-t,!0]},ie=(n,{windowsPathsNoEscape:e=!1}={})=>e?n.replace(/\[([^\/\\])\]/g,"$1"):n.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1"),gn=new Set(["!","?","+","*","@"]),Be=n=>gn.has(n),mn="(?!(?:^|/)\\.\\.?(?:$|/))",xe="(?!\\.)",wn=new Set(["[","."]),yn=new Set(["..","."]),vn=new Set("().*{}+?[]^$\\!"),xn=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Ae="[^/]",Ve=Ae+"*?",Ue=Ae+"+?";var C,R,z,E,T,B,G,V,W,X,re,Z,at,U,le,Se,ct;const O=class O{constructor(e,t,s={}){P(this,Z);A(this,"type");P(this,C);P(this,R);P(this,z,!1);P(this,E,[]);P(this,T);P(this,B);P(this,G);P(this,V,!1);P(this,W);P(this,X);P(this,re,!1);this.type=e,e&&S(this,R,!0),S(this,T,t),S(this,C,h(this,T)?h(h(this,T),C):this),S(this,W,h(this,C)===this?s:h(h(this,C),W)),S(this,G,h(this,C)===this?[]:h(h(this,C),G)),e==="!"&&!h(h(this,C),V)&&h(this,G).push(this),S(this,B,h(this,T)?h(h(this,T),E).length:0)}get hasMagic(){if(h(this,R)!==void 0)return h(this,R);for(const e of h(this,E))if(typeof e!="string"&&(e.type||e.hasMagic))return S(this,R,!0);return h(this,R)}toString(){return h(this,X)!==void 0?h(this,X):this.type?S(this,X,this.type+"("+h(this,E).map(e=>String(e)).join("|")+")"):S(this,X,h(this,E).map(e=>String(e)).join(""))}push(...e){for(const t of e)if(t!==""){if(typeof t!="string"&&!(t instanceof O&&h(t,T)===this))throw new Error("invalid part: "+t);h(this,E).push(t)}}toJSON(){var t;const e=this.type===null?h(this,E).slice().map(s=>typeof s=="string"?s:s.toJSON()):[this.type,...h(this,E).map(s=>s.toJSON())];return this.isStart()&&!this.type&&e.unshift([]),this.isEnd()&&(this===h(this,C)||h(h(this,C),V)&&((t=h(this,T))==null?void 0:t.type)==="!")&&e.push({}),e}isStart(){var t;if(h(this,C)===this)return!0;if(!((t=h(this,T))!=null&&t.isStart()))return!1;if(h(this,B)===0)return!0;const e=h(this,T);for(let s=0;s<h(this,B);s++){const r=h(e,E)[s];if(!(r instanceof O&&r.type==="!"))return!1}return!0}isEnd(){var t,s,r;if(h(this,C)===this||((t=h(this,T))==null?void 0:t.type)==="!")return!0;if(!((s=h(this,T))!=null&&s.isEnd()))return!1;if(!this.type)return(r=h(this,T))==null?void 0:r.isEnd();const e=h(this,T)?h(h(this,T),E).length:0;return h(this,B)===e-1}copyIn(e){typeof e=="string"?this.push(e):this.push(e.clone(this))}clone(e){const t=new O(this.type,e);for(const s of h(this,E))t.copyIn(s);return t}static fromGlob(e,t={}){var r;const s=new O(null,void 0,t);return q(r=O,U,le).call(r,e,s,0,t),s}toMMPattern(){if(this!==h(this,C))return h(this,C).toMMPattern();const e=this.toString(),[t,s,r,i]=this.toRegExpSource();if(!(r||h(this,R)||h(this,W).nocase&&!h(this,W).nocaseMagicOnly&&e.toUpperCase()!==e.toLowerCase()))return s;const a=(h(this,W).nocase?"i":"")+(i?"u":"");return Object.assign(new RegExp(`^${t}$`,a),{_src:t,_glob:e})}get options(){return h(this,W)}toRegExpSource(e){var c;const t=e??!!h(this,W).dot;if(h(this,C)===this&&q(this,Z,at).call(this),!this.type){const l=this.isStart()&&this.isEnd(),p=h(this,E).map(w=>{var v;const[u,f,y,x]=typeof w=="string"?q(v=O,U,ct).call(v,w,h(this,R),l):w.toRegExpSource(e);return S(this,R,h(this,R)||y),S(this,z,h(this,z)||x),u}).join("");let d="";if(this.isStart()&&typeof h(this,E)[0]=="string"&&!(h(this,E).length===1&&yn.has(h(this,E)[0]))){const u=wn,f=t&&u.has(p.charAt(0))||p.startsWith("\\.")&&u.has(p.charAt(2))||p.startsWith("\\.\\.")&&u.has(p.charAt(4)),y=!t&&!e&&u.has(p.charAt(0));d=f?mn:y?xe:""}let g="";return this.isEnd()&&h(h(this,C),V)&&((c=h(this,T))==null?void 0:c.type)==="!"&&(g="(?:$|\\/)"),[d+p+g,ie(p),S(this,R,!!h(this,R)),h(this,z)]}const s=this.type==="*"||this.type==="+",r=this.type==="!"?"(?:(?!(?:":"(?:";let i=q(this,Z,Se).call(this,t);if(this.isStart()&&this.isEnd()&&!i&&this.type!=="!"){const l=this.toString();return S(this,E,[l]),this.type=null,S(this,R,void 0),[l,ie(this.toString()),!1,!1]}let o=!s||e||t?"":q(this,Z,Se).call(this,!0);o===i&&(o=""),o&&(i=`(?:${i})(?:${o})*?`);let a="";if(this.type==="!"&&h(this,re))a=(this.isStart()&&!t?xe:"")+Ue;else{const l=this.type==="!"?"))"+(this.isStart()&&!t&&!e?xe:"")+Ve+")":this.type==="@"?")":this.type==="?"?")?":this.type==="+"&&o?")":this.type==="*"&&o?")?":`)${this.type}`;a=r+i+l}return[a,ie(i),S(this,R,!!h(this,R)),h(this,z)]}};C=new WeakMap,R=new WeakMap,z=new WeakMap,E=new WeakMap,T=new WeakMap,B=new WeakMap,G=new WeakMap,V=new WeakMap,W=new WeakMap,X=new WeakMap,re=new WeakMap,Z=new WeakSet,at=function(){if(this!==h(this,C))throw new Error("should only call on root");if(h(this,V))return this;this.toString(),S(this,V,!0);let e;for(;e=h(this,G).pop();){if(e.type!=="!")continue;let t=e,s=h(t,T);for(;s;){for(let r=h(t,B)+1;!s.type&&r<h(s,E).length;r++)for(const i of h(e,E)){if(typeof i=="string")throw new Error("string part in extglob AST??");i.copyIn(h(s,E)[r])}t=s,s=h(t,T)}}return this},U=new WeakSet,le=function(e,t,s,r){var m,w;let i=!1,o=!1,a=-1,c=!1;if(t.type===null){let u=s,f="";for(;u<e.length;){const y=e.charAt(u++);if(i||y==="\\"){i=!i,f+=y;continue}if(o){u===a+1?(y==="^"||y==="!")&&(c=!0):y==="]"&&!(u===a+2&&c)&&(o=!1),f+=y;continue}else if(y==="["){o=!0,a=u,c=!1,f+=y;continue}if(!r.noext&&Be(y)&&e.charAt(u)==="("){t.push(f),f="";const x=new O(y,t);u=q(m=O,U,le).call(m,e,x,u,r),t.push(x);continue}f+=y}return t.push(f),u}let l=s+1,p=new O(null,t);const d=[];let g="";for(;l<e.length;){const u=e.charAt(l++);if(i||u==="\\"){i=!i,g+=u;continue}if(o){l===a+1?(u==="^"||u==="!")&&(c=!0):u==="]"&&!(l===a+2&&c)&&(o=!1),g+=u;continue}else if(u==="["){o=!0,a=l,c=!1,g+=u;continue}if(Be(u)&&e.charAt(l)==="("){p.push(g),g="";const f=new O(u,p);p.push(f),l=q(w=O,U,le).call(w,e,f,l,r);continue}if(u==="|"){p.push(g),g="",d.push(p),p=new O(null,t);continue}if(u===")")return g===""&&h(t,E).length===0&&S(t,re,!0),p.push(g),g="",t.push(...d,p),l;g+=u}return t.type=null,S(t,R,void 0),S(t,E,[e.substring(s-1)]),l},Se=function(e){return h(this,E).map(t=>{if(typeof t=="string")throw new Error("string type in extglob ast??");const[s,r,i,o]=t.toRegExpSource(e);return S(this,z,h(this,z)||o),s}).filter(t=>!(this.isStart()&&this.isEnd())||!!t).join("|")},ct=function(e,t,s=!1){let r=!1,i="",o=!1;for(let a=0;a<e.length;a++){const c=e.charAt(a);if(r){r=!1,i+=(vn.has(c)?"\\":"")+c;continue}if(c==="\\"){a===e.length-1?i+="\\\\":r=!0;continue}if(c==="["){const[l,p,d,g]=dn(e,a);if(d){i+=l,o=o||p,a+=d-1,t=t||g;continue}}if(c==="*"){s&&e==="*"?i+=Ue:i+=Ve,t=!0;continue}if(c==="?"){i+=Ae,t=!0;continue}i+=xn(c)}return[i,ie(e),!!t,o]},P(O,U);let fe=O;const En=(n,{windowsPathsNoEscape:e=!1}={})=>e?n.replace(/[?*()[\]]/g,"[$&]"):n.replace(/[?*()[\]\\]/g,"\\$&");var Ee={};const _=(n,e,t={})=>(pe(e),!t.nocomment&&e.charAt(0)==="#"?!1:new ge(e,t).match(n)),bn=/^\*+([^+@!?\*\[\(]*)$/,Sn=n=>e=>!e.startsWith(".")&&e.endsWith(n),_n=n=>e=>e.endsWith(n),Tn=n=>(n=n.toLowerCase(),e=>!e.startsWith(".")&&e.toLowerCase().endsWith(n)),An=n=>(n=n.toLowerCase(),e=>e.toLowerCase().endsWith(n)),Cn=/^\*+\.\*+$/,Rn=n=>!n.startsWith(".")&&n.includes("."),Mn=n=>n!=="."&&n!==".."&&n.includes("."),$n=/^\.\*+$/,On=n=>n!=="."&&n!==".."&&n.startsWith("."),Pn=/^\*+$/,Nn=n=>n.length!==0&&!n.startsWith("."),kn=n=>n.length!==0&&n!=="."&&n!=="..",jn=/^\?+([^+@!?\*\[\(]*)?$/,Ln=([n,e=""])=>{const t=lt([n]);return e?(e=e.toLowerCase(),s=>t(s)&&s.toLowerCase().endsWith(e)):t},In=([n,e=""])=>{const t=ht([n]);return e?(e=e.toLowerCase(),s=>t(s)&&s.toLowerCase().endsWith(e)):t},Dn=([n,e=""])=>{const t=ht([n]);return e?s=>t(s)&&s.endsWith(e):t},Wn=([n,e=""])=>{const t=lt([n]);return e?s=>t(s)&&s.endsWith(e):t},lt=([n])=>{const e=n.length;return t=>t.length===e&&!t.startsWith(".")},ht=([n])=>{const e=n.length;return t=>t.length===e&&t!=="."&&t!==".."},ut=typeof process=="object"&&process?typeof Ee=="object"&&Ee&&Ee.__MINIMATCH_TESTING_PLATFORM__||process.platform:"posix",He={win32:{sep:"\\"},posix:{sep:"/"}},zn=ut==="win32"?He.win32.sep:He.posix.sep;_.sep=zn;const L=Symbol("globstar **");_.GLOBSTAR=L;const Fn="[^/]",qn=Fn+"*?",Bn="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",Vn="(?:(?!(?:\\/|^)\\.).)*?",Un=(n,e={})=>t=>_(t,n,e);_.filter=Un;const j=(n,e={})=>Object.assign({},n,e),Hn=n=>{if(!n||typeof n!="object"||!Object.keys(n).length)return _;const e=_;return Object.assign((s,r,i={})=>e(s,r,j(n,i)),{Minimatch:class extends e.Minimatch{constructor(r,i={}){super(r,j(n,i))}static defaults(r){return e.defaults(j(n,r)).Minimatch}},AST:class extends e.AST{constructor(r,i,o={}){super(r,i,j(n,o))}static fromGlob(r,i={}){return e.AST.fromGlob(r,j(n,i))}},unescape:(s,r={})=>e.unescape(s,j(n,r)),escape:(s,r={})=>e.escape(s,j(n,r)),filter:(s,r={})=>e.filter(s,j(n,r)),defaults:s=>e.defaults(j(n,s)),makeRe:(s,r={})=>e.makeRe(s,j(n,r)),braceExpand:(s,r={})=>e.braceExpand(s,j(n,r)),match:(s,r,i={})=>e.match(s,r,j(n,i)),sep:e.sep,GLOBSTAR:L})};_.defaults=Hn;const pt=(n,e={})=>(pe(n),e.nobrace||!/\{(?:(?!\{).)*\}/.test(n)?[n]:hn(n));_.braceExpand=pt;const Kn=(n,e={})=>new ge(n,e).makeRe();_.makeRe=Kn;const Gn=(n,e,t={})=>{const s=new ge(e,t);return n=n.filter(r=>s.match(r)),s.options.nonull&&!n.length&&n.push(e),n};_.match=Gn;const Ke=/[?*]|[+@!]\(.*?\)|\[|\]/,Xn=n=>n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");class ge{constructor(e,t={}){A(this,"options");A(this,"set");A(this,"pattern");A(this,"windowsPathsNoEscape");A(this,"nonegate");A(this,"negate");A(this,"comment");A(this,"empty");A(this,"preserveMultipleSlashes");A(this,"partial");A(this,"globSet");A(this,"globParts");A(this,"nocase");A(this,"isWindows");A(this,"platform");A(this,"windowsNoMagicRoot");A(this,"regexp");pe(e),t=t||{},this.options=t,this.pattern=e,this.platform=t.platform||ut,this.isWindows=this.platform==="win32",this.windowsPathsNoEscape=!!t.windowsPathsNoEscape||t.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!t.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!t.nonegate,this.comment=!1,this.empty=!1,this.partial=!!t.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=t.windowsNoMagicRoot!==void 0?t.windowsNoMagicRoot:!!(this.isWindows&&this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(const e of this.set)for(const t of e)if(typeof t!="string")return!0;return!1}debug(...e){}make(){const e=this.pattern,t=this.options;if(!t.nocomment&&e.charAt(0)==="#"){this.comment=!0;return}if(!e){this.empty=!0;return}this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],t.debug&&(this.debug=(...i)=>console.error(...i)),this.debug(this.pattern,this.globSet);const s=this.globSet.map(i=>this.slashSplit(i));this.globParts=this.preprocess(s),this.debug(this.pattern,this.globParts);let r=this.globParts.map((i,o,a)=>{if(this.isWindows&&this.windowsNoMagicRoot){const c=i[0]===""&&i[1]===""&&(i[2]==="?"||!Ke.test(i[2]))&&!Ke.test(i[3]),l=/^[a-z]:/i.test(i[0]);if(c)return[...i.slice(0,4),...i.slice(4).map(p=>this.parse(p))];if(l)return[i[0],...i.slice(1).map(p=>this.parse(p))]}return i.map(c=>this.parse(c))});if(this.debug(this.pattern,r),this.set=r.filter(i=>i.indexOf(!1)===-1),this.isWindows)for(let i=0;i<this.set.length;i++){const o=this.set[i];o[0]===""&&o[1]===""&&this.globParts[i][2]==="?"&&typeof o[3]=="string"&&/^[a-z]:$/i.test(o[3])&&(o[2]="?")}this.debug(this.pattern,this.set)}preprocess(e){if(this.options.noglobstar)for(let s=0;s<e.length;s++)for(let r=0;r<e[s].length;r++)e[s][r]==="**"&&(e[s][r]="*");const{optimizationLevel:t=1}=this.options;return t>=2?(e=this.firstPhasePreProcess(e),e=this.secondPhasePreProcess(e)):t>=1?e=this.levelOneOptimize(e):e=this.adjascentGlobstarOptimize(e),e}adjascentGlobstarOptimize(e){return e.map(t=>{let s=-1;for(;(s=t.indexOf("**",s+1))!==-1;){let r=s;for(;t[r+1]==="**";)r++;r!==s&&t.splice(s,r-s)}return t})}levelOneOptimize(e){return e.map(t=>(t=t.reduce((s,r)=>{const i=s[s.length-1];return r==="**"&&i==="**"?s:r===".."&&i&&i!==".."&&i!=="."&&i!=="**"?(s.pop(),s):(s.push(r),s)},[]),t.length===0?[""]:t))}levelTwoFileOptimize(e){Array.isArray(e)||(e=this.slashSplit(e));let t=!1;do{if(t=!1,!this.preserveMultipleSlashes){for(let r=1;r<e.length-1;r++){const i=e[r];r===1&&i===""&&e[0]===""||(i==="."||i==="")&&(t=!0,e.splice(r,1),r--)}e[0]==="."&&e.length===2&&(e[1]==="."||e[1]==="")&&(t=!0,e.pop())}let s=0;for(;(s=e.indexOf("..",s+1))!==-1;){const r=e[s-1];r&&r!=="."&&r!==".."&&r!=="**"&&(t=!0,e.splice(s-1,2),s-=2)}}while(t);return e.length===0?[""]:e}firstPhasePreProcess(e){let t=!1;do{t=!1;for(let s of e){let r=-1;for(;(r=s.indexOf("**",r+1))!==-1;){let o=r;for(;s[o+1]==="**";)o++;o>r&&s.splice(r+1,o-r);let a=s[r+1];const c=s[r+2],l=s[r+3];if(a!==".."||!c||c==="."||c===".."||!l||l==="."||l==="..")continue;t=!0,s.splice(r,1);const p=s.slice(0);p[r]="**",e.push(p),r--}if(!this.preserveMultipleSlashes){for(let o=1;o<s.length-1;o++){const a=s[o];o===1&&a===""&&s[0]===""||(a==="."||a==="")&&(t=!0,s.splice(o,1),o--)}s[0]==="."&&s.length===2&&(s[1]==="."||s[1]==="")&&(t=!0,s.pop())}let i=0;for(;(i=s.indexOf("..",i+1))!==-1;){const o=s[i-1];if(o&&o!=="."&&o!==".."&&o!=="**"){t=!0;const c=i===1&&s[i+1]==="**"?["."]:[];s.splice(i-1,2,...c),s.length===0&&s.push(""),i-=2}}}}while(t);return e}secondPhasePreProcess(e){for(let t=0;t<e.length-1;t++)for(let s=t+1;s<e.length;s++){const r=this.partsMatch(e[t],e[s],!this.preserveMultipleSlashes);if(r){e[t]=[],e[s]=r;break}}return e.filter(t=>t.length)}partsMatch(e,t,s=!1){let r=0,i=0,o=[],a="";for(;r<e.length&&i<t.length;)if(e[r]===t[i])o.push(a==="b"?t[i]:e[r]),r++,i++;else if(s&&e[r]==="**"&&t[i]===e[r+1])o.push(e[r]),r++;else if(s&&t[i]==="**"&&e[r]===t[i+1])o.push(t[i]),i++;else if(e[r]==="*"&&t[i]&&(this.options.dot||!t[i].startsWith("."))&&t[i]!=="**"){if(a==="b")return!1;a="a",o.push(e[r]),r++,i++}else if(t[i]==="*"&&e[r]&&(this.options.dot||!e[r].startsWith("."))&&e[r]!=="**"){if(a==="a")return!1;a="b",o.push(t[i]),r++,i++}else return!1;return e.length===t.length&&o}parseNegate(){if(this.nonegate)return;const e=this.pattern;let t=!1,s=0;for(let r=0;r<e.length&&e.charAt(r)==="!";r++)t=!t,s++;s&&(this.pattern=e.slice(s)),this.negate=t}matchOne(e,t,s=!1){const r=this.options;if(this.isWindows){const u=typeof e[0]=="string"&&/^[a-z]:$/i.test(e[0]),f=!u&&e[0]===""&&e[1]===""&&e[2]==="?"&&/^[a-z]:$/i.test(e[3]),y=typeof t[0]=="string"&&/^[a-z]:$/i.test(t[0]),x=!y&&t[0]===""&&t[1]===""&&t[2]==="?"&&typeof t[3]=="string"&&/^[a-z]:$/i.test(t[3]),v=f?3:u?0:void 0,M=x?3:y?0:void 0;if(typeof v=="number"&&typeof M=="number"){const[k,b]=[e[v],t[M]];k.toLowerCase()===b.toLowerCase()&&(t[M]=k,M>v?t=t.slice(M):v>M&&(e=e.slice(v)))}}const{optimizationLevel:i=1}=this.options;i>=2&&(e=this.levelTwoFileOptimize(e)),this.debug("matchOne",this,{file:e,pattern:t}),this.debug("matchOne",e.length,t.length);for(var o=0,a=0,c=e.length,l=t.length;o<c&&a<l;o++,a++){this.debug("matchOne loop");var p=t[a],d=e[o];if(this.debug(t,p,d),p===!1)return!1;if(p===L){this.debug("GLOBSTAR",[t,p,d]);var g=o,m=a+1;if(m===l){for(this.debug("** at the end");o<c;o++)if(e[o]==="."||e[o]===".."||!r.dot&&e[o].charAt(0)===".")return!1;return!0}for(;g<c;){var w=e[g];if(this.debug(`
globstar while`,e,g,t,m,w),this.matchOne(e.slice(g),t.slice(m),s))return this.debug("globstar found match!",g,c,w),!0;if(w==="."||w===".."||!r.dot&&w.charAt(0)==="."){this.debug("dot detected!",e,g,t,m);break}this.debug("globstar swallow a segment, and continue"),g++}return!!(s&&(this.debug(`
>>> no match, partial?`,e,g,t,m),g===c))}let u;if(typeof p=="string"?(u=d===p,this.debug("string match",p,d,u)):(u=p.test(d),this.debug("pattern match",p,d,u)),!u)return!1}if(o===c&&a===l)return!0;if(o===c)return s;if(a===l)return o===c-1&&e[o]==="";throw new Error("wtf?")}braceExpand(){return pt(this.pattern,this.options)}parse(e){pe(e);const t=this.options;if(e==="**")return L;if(e==="")return"";let s,r=null;(s=e.match(Pn))?r=t.dot?kn:Nn:(s=e.match(bn))?r=(t.nocase?t.dot?An:Tn:t.dot?_n:Sn)(s[1]):(s=e.match(jn))?r=(t.nocase?t.dot?In:Ln:t.dot?Dn:Wn)(s):(s=e.match(Cn))?r=t.dot?Mn:Rn:(s=e.match($n))&&(r=On);const i=fe.fromGlob(e,this.options).toMMPattern();return r&&typeof i=="object"&&Reflect.defineProperty(i,"test",{value:r}),i}makeRe(){if(this.regexp||this.regexp===!1)return this.regexp;const e=this.set;if(!e.length)return this.regexp=!1,this.regexp;const t=this.options,s=t.noglobstar?qn:t.dot?Bn:Vn,r=new Set(t.nocase?["i"]:[]);let i=e.map(c=>{const l=c.map(p=>{if(p instanceof RegExp)for(const d of p.flags.split(""))r.add(d);return typeof p=="string"?Xn(p):p===L?L:p._src});return l.forEach((p,d)=>{const g=l[d+1],m=l[d-1];p!==L||m===L||(m===void 0?g!==void 0&&g!==L?l[d+1]="(?:\\/|"+s+"\\/)?"+g:l[d]=s:g===void 0?l[d-1]=m+"(?:\\/|"+s+")?":g!==L&&(l[d-1]=m+"(?:\\/|\\/"+s+"\\/)"+g,l[d+1]=L))}),l.filter(p=>p!==L).join("/")}).join("|");const[o,a]=e.length>1?["(?:",")"]:["",""];i="^"+o+i+a+"$",this.negate&&(i="^(?!"+i+").+$");try{this.regexp=new RegExp(i,[...r].join(""))}catch{this.regexp=!1}return this.regexp}slashSplit(e){return this.preserveMultipleSlashes?e.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(e)?["",...e.split(/\/+/)]:e.split(/\/+/)}match(e,t=this.partial){if(this.debug("match",e,this.pattern),this.comment)return!1;if(this.empty)return e==="";if(e==="/"&&t)return!0;const s=this.options;this.isWindows&&(e=e.split("\\").join("/"));const r=this.slashSplit(e);this.debug(this.pattern,"split",r);const i=this.set;this.debug(this.pattern,"set",i);let o=r[r.length-1];if(!o)for(let a=r.length-2;!o&&a>=0;a--)o=r[a];for(let a=0;a<i.length;a++){const c=i[a];let l=r;if(s.matchBase&&c.length===1&&(l=[o]),this.matchOne(l,c,t))return s.flipNegate?!0:!this.negate}return s.flipNegate?!1:this.negate}static defaults(e){return _.defaults(e).Minimatch}}_.AST=fe;_.Minimatch=ge;_.escape=En;_.unescape=ie;function Zn(n){const e=new Set([n.id?"id":void 0,n.title?"title":void 0,...Object.keys(n).sort()].filter(Boolean));return Array.from(e)}const he=(n,e)=>{let t;return{collection:Object.values(e).find(r=>{if(!r.source||r.source.length===0)return;const i=ue(n);return(i==="/"?["index.yml","index.yaml","index.md","index.json"]:[i]).some(a=>(t=r.source.find(c=>{var l;return _(a,c.include)&&!((l=c.exclude)!=null&&l.some(p=>_(a,p)))}),t))}),matchedSource:t}},Jn=(n,e)=>{let t;return{collection:Object.values(e).find(r=>{if(!(!r.source||r.source.length===0))return t=r.source.find(i=>{var p;if(!n.startsWith(i.prefix))return;if(n==="/"||n===i.prefix){const d=["index.yml","index.yaml","index.md","index.json"];return(n==="/"?d:d.map(m=>Je(We(i.prefix,m)))).some(m=>r.source.find(w=>{var u;return _(m,w.include)&&!((u=w.exclude)!=null&&u.some(f=>_(m,f)))}))}const o=n.substring(i.prefix.length),{fixed:a}=rt(i),c=We(a,o),l=d=>d.replace(/\.[^/.]+$/,"");return _(c,l(i.include))&&!((p=i.exclude)!=null&&p.some(d=>_(c,l(d))))}),t}),matchedSource:t}};function ft(n,e){const t=Qn(n,e);let s=0;return`INSERT INTO ${n.tableName} VALUES (${"?, ".repeat(t.length).slice(0,-2)})`.replace(/\?/g,()=>t[s++])}function Yn(n,e,t){const s=dt(n,e),r=ft(n,t);return`${s}; ${r}`}function dt(n,e){return`DELETE FROM ${n.tableName} WHERE stem = '${e}';`}function Ge(n,e,t){return`SELECT * FROM ${n.tableName} WHERE ${e} = '${t}';`}function Qn(n,e){const t=[],s=n.schema.definitions[n.name].properties;return Zn(s).forEach(i=>{const o=s[i],a=o.type,c=o.default!==void 0?o.default:"NULL",l=typeof e[i]<"u"?e[i]:c;n.fields[i]==="json"?t.push(`'${JSON.stringify(l).replace(/'/g,"''")}'`):["string","enum"].includes(a)?t.push(`'${String(l).replace(/\n/g,"\\n").replace(/'/g,"''")}'`):t.push(l)}),t}const es=["https://nuxt.studio","https://dev.nuxt.studio"],Y={content:{name:"content",pascalName:"Content",tableName:"_content_content",source:[{_resolved:!0,prefix:"/",include:"**",cwd:"/home/runner/work/nuxt-studio-starter/nuxt-studio-starter/content"}],type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"},schema:{$ref:"#/definitions/content",definitions:{content:{type:"object",properties:{id:{type:"string"},stem:{type:"string"},extension:{type:"string",enum:["md","yaml","yml","json","csv","xml"]},meta:{type:"object",additionalProperties:{}},path:{type:"string"},title:{type:"string"},description:{type:"string"},seo:{allOf:[{type:"object",properties:{title:{type:"string"},description:{type:"string"}}},{type:"object",additionalProperties:{}}],default:{}},body:{type:"object",properties:{type:{type:"string"},children:{},toc:{}},required:["type"],additionalProperties:!1},navigation:{anyOf:[{type:"boolean"},{type:"object",properties:{title:{type:"string"},description:{type:"string"},icon:{type:"string"}},required:["title","description","icon"],additionalProperties:!1}],default:!0}},required:["id","stem","extension","meta","path","title","description","body"],additionalProperties:!1}},$schema:"http://json-schema.org/draft-07/schema#"},tableDefinition:`CREATE TABLE IF NOT EXISTS _content_content (id TEXT PRIMARY KEY, "title" VARCHAR, "body" TEXT, "description" VARCHAR, "extension" VARCHAR, "meta" TEXT, "navigation" TEXT DEFAULT true, "path" VARCHAR, "seo" TEXT DEFAULT '{}', "stem" VARCHAR);`},info:{name:"info",pascalName:"Info",tableName:"_content_info",type:"data",fields:{},schema:{$ref:"#/definitions/info",definitions:{info:{type:"object",properties:{id:{type:"string"},version:{type:"string"}},required:["id","version"],additionalProperties:!1}},$schema:"http://json-schema.org/draft-07/schema#"},tableDefinition:'CREATE TABLE IF NOT EXISTS _content_info (id TEXT PRIMARY KEY, "version" VARCHAR);'}},_e=se(!1),Xe=rn(()=>JSON.parse(JSON.stringify(Qe()))),ts=async n=>{const e=nn(n.files,n.additions,n.deletions),t=e.filter(r=>![F.appConfig,F.appConfigV4,F.nuxtConfig].includes(r.path));for(const r of Object.values(Y))await J(r.name).exec(r.tableDefinition);for(const r of t)await ns(Y,r);const s=e.find(r=>[F.appConfig,F.appConfigV4].includes(r.path));s&&Te(s.parsed),Dt(),_e.value=!0},ns=async(n,e)=>{const{collection:t,matchedSource:s}=he(e.path,n);if(!t){console.warn(`Content Preview: collection not found for file: ${e.path}, skipping insertion.`);return}const r=J(t.name),i=ot(e,t,s),o=ft(t,i);await r.exec(o)},Te=n=>{const e=oe(),t=It(e,Qe);it(t,sn(n||{},Xe)),n||st(t,Xe)};function hs(){const n=Ye().public.preview||{},e=window.sessionStorage.getItem("previewToken"),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),kt(Ut,{previewToken:e,api:window.sessionStorage.getItem("previewAPI")||(n==null?void 0:n.api),initializePreview:ts}).mount(t)}function us(){const n=oe(),e=Ye().public.preview;if(!window.parent||window.self===window.parent)return;const t=Ze(),s=jt();window.addEventListener("keydown",i=>{(i.metaKey||i.ctrlKey||i.altKey||i.shiftKey)&&window.parent.postMessage({type:"nuxt-content:preview:keydown",payload:{key:i.key,metaKey:i.metaKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,altKey:i.altKey}},"*")}),window.addEventListener("message",async i=>{var m;if(!_e.value)return;const o=((m=e==null?void 0:e.iframeMessagingAllowedOrigins)==null?void 0:m.split(",").map(w=>w.trim()))||[];if(!["http://localhost:3000",...es,...o].includes(i.origin))return;const{type:a,payload:c={},navigate:l}=i.data||{};switch(a){case"nuxt-content:editor:file-selected":{await p(c.path);break}case"nuxt-content:editor:file-changed":case"nuxt-content:editor:media-changed":{const{additions:w=[],deletions:u=[]}=c;for(const f of w)await d(f,l);for(const f of u)await g(f.path);ss();break}case"nuxt-content:config:file-changed":{const{additions:w=[],deletions:u=[]}=c,f=w.find(x=>[F.appConfig,F.appConfigV4].includes(x.path));f&&Te(f==null?void 0:f.parsed),u.find(x=>[F.appConfig,F.appConfigV4].includes(x.path))&&Te(void 0)}}async function p(w){if(!w)return;const{collection:u}=he(ue(w),Y);if(!u){console.warn(`Content Preview: collection not found for file: ${w}, skipping navigation.`);return}if(u.type!=="page")return;const f=J(u.name),y=we(w),x=Ge(u,"stem",y),v=await f.first(x);if(!v||!v.path)return;const M=t.resolve(v.path);!M||!M.matched||M.matched.length===0||v.path!==s.path&&t.push(v.path)}async function d(w,u){const{collection:f,matchedSource:y}=he(w.path,Y);if(!f){console.warn(`Content Preview: collection not found for file: ${w.path}, skipping update.`);return}const x=we(w.path),v=ot({path:w.path,parsed:w.parsed},f,y),M=Yn(f,x,v);if(await J(f.name).exec(M),f.type!=="page"||!w.pathRoute)return;const b=Lt(w.pathRoute);if(u&&b!==s.path){const I=t.resolve(b);if(!I||!I.matched||I.matched.length===0)return;t.push(b)}}async function g(w){const{collection:u}=he(ue(w),Y);if(!u){console.warn(`Content Preview: collection not found for file: ${w}, skipping deletion.`);return}const f=we(w),y=dt(u,f);await J(u.name).exec(y)}});async function r(){if(!_e.value)return;const i=s.path,{collection:o}=Jn(i,Y);if(!o||o.type!=="page"){window.sendNavigateMessageInPreview(i,!1);return}const a=J(o.name),c=Ge(o,"path",i),l=await a.first(c);window.sendNavigateMessageInPreview(i,!!(l!=null&&l.path))}n.hook("page:finish",()=>{r()}),n.hook("nuxt-content:preview:ready",()=>{window.parent.postMessage({type:"nuxt-content:preview:ready"},"*")}),window.sendNavigateMessageInPreview=(i,o)=>{window.parent.postMessage({type:"nuxt-content:preview:navigate",payload:{path:i,navigate:o}},"*")}}async function ss(){await oe().hooks.callHookParallel("app:data:refresh")}export{us as initIframeCommunication,hs as mountPreviewUI};

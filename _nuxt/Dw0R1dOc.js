import{$ as j,u as P,a0 as d,c as D,a1 as B,a2 as M,I as H,a3 as R,e as V,D as E,a4 as v,a5 as K,Z as N,V as w}from"./BQPupdX1.js";const S=s=>s==="defer"||s===!1;function T(...s){var p;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,f,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=P(),b=f,C=()=>d.value,O=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??C,a.getCachedData=a.getCachedData??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const u=a.getCachedData(e,t),_=u!=null;if(!t._asyncData[e]||!a.immediate){(p=t.payload._errors)[e]??(p[e]=d.errorValue);const o=a.deep?D:B;t._asyncData[e]={data:o(_?u:a.default()),pending:D(!_),error:M(t.payload._errors,e),status:D("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(o={})=>{if(t._asyncDataPromises[e]){if(S(o.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(o._initial||t.isHydrating&&o._initial!==!1){const c=o._initial?u:a.getCachedData(e,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,i)=>{try{c(b(t))}catch(y){i(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=I(i,a.pick)),t.payload.data[e]=i,n.data.value=i,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=N(c),n.data.value=w(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>z(t,e);const h=()=>n.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const o=H();if(o&&m&&a.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;R(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),V(()=>i.splice(0,i.length))}m&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=K();if(a.watch){const i=E(a.watch,()=>n.refresh());l&&v(i)}const c=t.hook("app:data:refresh",async i=>{(!i||i.includes(e))&&await n.refresh()});l&&v(c)}const g=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(g,n),g}async function q(s){await new Promise(e=>j(e)),await P().hooks.callHookParallel("app:data:refresh",void 0)}function z(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=w(s._asyncData[r]._default()),s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function I(s,r){const e={};for(const f of r)e[f]=s[f];return e}const F={content:"b3K4KqIx7G"},G={content:"_content_content",info:"_content_info"},U={content:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{fields:{}}};export{U as a,F as c,q as r,G as t,T as u};

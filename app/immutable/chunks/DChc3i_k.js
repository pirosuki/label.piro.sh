import{n as i,u as a,O as p,I as d,G as l,P as m}from"./BrUV4KTp.js";function g(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function h(e,n,s){if(e==null)return n(void 0),i;const u=a(()=>e.subscribe(n,s));return u.unsubscribe?()=>u.unsubscribe():u}const c=[];function q(e,n=i){let s=null;const u=new Set;function r(o){if(p(e,o)&&(e=o,s)){const f=!c.length;for(const t of u)t[1](),c.push(t,e);if(f){for(let t=0;t<c.length;t+=2)c[t][0](c[t+1]);c.length=0}}}function b(o){r(o(e))}function _(o,f=i){const t=[o,f];return u.add(t),u.size===1&&(s=n(r,b)||i),o(e),()=>{u.delete(t),u.size===0&&s&&(s(),s=null)}}return{set:r,update:b,subscribe:_}}function k(e){let n;return h(e,s=>n=s)(),n}function x(e){l===null&&g(),m&&l.l!==null?w(l).m.push(e):d(()=>{const n=a(e);if(typeof n=="function")return n})}function w(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{k as g,x as o,h as s,q as w};

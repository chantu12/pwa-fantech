if(!self.define){let e,t={};const o=(o,i)=>(o=new URL(o+".js",i).href,t[o]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}else e=o,importScripts(o),t()})).then((()=>{let e=t[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const c=e=>o(e,r),u={module:{uri:r},exports:s,require:c};t[r]=Promise.all(i.map((e=>u[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-54b97830"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"main.js",revision:"93ef49852cf9d4b3a24abae2d0e82f8e"}],{})}));

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3965],{71880:function(n,t,i){"use strict";i.d(t,{U:function(){return r}});var e=i(82006),c=(i(95087),i(81020)),a=i(81018),r=function(n){var t=n.collectionData,i=n.noIndex;return(0,a.jsx)(e.U,{title:"".concat(t.name," ").concat(t.artistName?"by ".concat(t.artistName," - Illustrations on Blush"):""),noIndex:i,description:t.description,ogImage:(0,c.NW)(t.id,null,t.banners[0])||void 0})}},33974:function(n,t,i){"use strict";i.d(t,{O:function(){return o}});i(95087);var e=i(30837),c=i(4420),a=i(81018),r=(0,e.ZP)(c.He).withConfig({displayName:"EmptyScreen__Container",componentId:"sc-j5uqpf-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:calc(100vh - 56px);padding-bottom:20vh;"]),o=function(n){var t=n.title,i=n.description,e=n.src;return(0,a.jsxs)(r,{style:{marginTop:0},children:[(0,a.jsx)("img",{src:e,alt:t,style:{height:"50vh",margin:"24px 0",maxHeight:300}}),(0,a.jsx)("h1",{children:t}),i&&(0,a.jsx)("div",{children:i})]})}},97406:function(n,t,i){"use strict";i.d(t,{m:function(){return l}});i(95087);var e=i(21245),c=i(60017),a=i(33974),r=i(82802),o=i(75099),s=i(81018),l=function(n){var t=n.message,i=(0,e.useRouter)(),l=(0,o.GI)();return(0,s.jsx)(r.Z,{flagBag:l,children:(0,s.jsx)(a.O,{src:"/illustrations/sad-blushy.svg",title:t,description:(0,s.jsx)(c.m,{className:"inline underline",onClick:i.back,children:"Go Back"})})})}},1815:function(n,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return h}});i(95087);var e=i(21245),c=i(57535),a=i(97406),r=i(82006),o=i(82802),s=i(71880),l=i(27767),u=i(75099),d=i(92803),f=i(81018),h=!0;t.default=function(n){var t=n.collectionId,i=n.collectionData,h=n.initialThumbnailImageData,x=(0,e.useRouter)().isFallback,m=(0,u.GI)(),g=(0,l.Kx)(i?null:t),j=g.data,v=g.error,p=g.loading;if(x)return null;var _=null!==j&&void 0!==j?j:i;return p?(0,f.jsxs)(o.Z,{flagBag:m,children:[(0,f.jsx)(c.Q,{}),(0,f.jsx)(r.U,{noIndex:!0})]}):!_||v?(0,f.jsx)(a.m,{message:"Collection not found"}):(0,f.jsx)(d.ZP,{initialImageData:h,children:(0,f.jsxs)(o.Z,{flagBag:m,children:[(0,f.jsx)(s.U,{collectionData:_}),(0,f.jsx)(c.s,{collectionData:_})]})})}},25738:function(n,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections/[...collectionId]",function(){return i(1815)}])}},function(n){n.O(0,[3684,9426,402,6962,7535,9774,2888,179],(function(){return t=25738,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
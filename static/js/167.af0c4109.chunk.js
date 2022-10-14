"use strict";(self.webpackChunkmoviesapp=self.webpackChunkmoviesapp||[]).push([[167],{916:function(n,e,t){t.d(e,{Z:function(){return A}});var r=t(885),o=t(2791),i=t(7689),s=t(2542),l=t(6015),c=t(6970),a=t(199),d=t(5194),u=t(6875),x=t(3811),h=t(4565),f=t(580),v=t(7237);var p=t(7431),g=t(5700),j=t(2982),m=t(1206),Z=function(n,e){var t=(0,o.useState)(),i=(0,r.Z)(t,2),s=i[0],l=i[1];return(0,o.useEffect)((function(){e&&m.m.get("movie/".concat(n,"/videos")).then((function(n){l.apply(void 0,(0,j.Z)(n.data.results.filter((function(n){return"Trailer"===n.type}))))}))}),[n,e]),{trailer:s}},b=t(184),y=function(n){var e=n.open,t=n.setOpen,r=n.id,o=Z(r,e).trailer;return(0,b.jsx)(g.Z,{open:e,onClick:function(){t(!1)},sx:{color:"#fff",zIndex:function(n){return n.zIndex.drawer+1}},children:e&&(0,b.jsx)(l.Z,{sx:{width:{xs:"90%",md:"60%"}},children:(0,b.jsx)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/".concat(null===o||void 0===o?void 0:o.key),title:"YouTube video player",frameBorder:"0",allowFullScreen:!0,style:{borderRadius:"15px",border:"none"}})})})},w=t(1647),k=t(9434),C=function(){return{position:"relative",overflow:"hidden","&:hover":{"& .MuiBox-root":{transform:"scale(1)"},"& .MuiCardMedia-root":{transform:"scale(1.1)"}}}},I=function(){return{backgroundPosition:"top",transition:"ease-in-out .3s"}},R=function(){return{transformOrigin:"bottom",transition:"ease-in-out .3s",position:"absolute",top:0,left:0,height:"100%",width:"100%",transform:"scale(0)",background:"rgba(0, 0, 0,.6)",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start",color:"#ffff",cursor:"pointer"}},S=function(){return{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}},P=function(n){return{display:"flex",alignItems:"center",color:n,justifyContent:"start",width:"100%",height:"auto",marginTop:1,paddingInline:1,overflow:"auto",msOverflowStyle:"none",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"}}},M=t(3922),A=function(n){var e,t,g=n.data,j=n.refer,m=void 0===j?null:j,Z=(0,i.s0)(),A=(0,k.I0)(),B=(0,k.v9)((function(n){return n.AuthReducer})),z=(0,o.useState)(!1),F=(0,r.Z)(z,2),O=F[0],T=F[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{setOpen:T,open:O,id:null===g||void 0===g?void 0:g.id}),(0,b.jsxs)(s.Z,{sx:{minWidth:300,marginInline:1,background:M.n[B.theme].background,userSelect:"none",boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"},ref:m,children:[(0,b.jsxs)(l.Z,{sx:C,onClick:function(){return T(!0)},children:[(0,b.jsx)(a.Z,{loading:"lazy",component:"img",sx:I,height:"300",image:"".concat("https://image.tmdb.org/t/p/w400").concat(g.backdrop_path),alt:"".concat(null===g||void 0===g?void 0:g.title,"'s image")}),(0,b.jsxs)(l.Z,{sx:R,children:[(0,b.jsxs)(l.Z,{sx:S,children:[(0,b.jsx)(x.Z,{"aria-label":"share",onClick:function(n){return n.stopPropagation()},children:(0,b.jsx)(f.Z,{sx:{color:"#fff"}})}),(0,b.jsx)(x.Z,{"aria-label":"like",onClick:function(n){n.stopPropagation(),null!==B&&void 0!==B&&B.user?A((0,w.ZU)(null===g||void 0===g?void 0:g.id)):Z("/moviesApp")},children:(0,b.jsx)(v.Z,{sx:{color:null!==B&&void 0!==B&&B.likes.find((function(n){return(null===g||void 0===g?void 0:g.id)===n}))?"red":"#fff"}})})]}),(0,b.jsx)(l.Z,{sx:P,children:(0,b.jsx)(h.Z,{children:null===g||void 0===g?void 0:g.overview})})]})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(p.Z,{title:null===g||void 0===g?void 0:g.title,children:(0,b.jsx)(h.Z,{sx:{fontWeight:"bold",cursor:"pointer",color:M.n[B.theme].textColor},variant:"body1",children:(e=null===g||void 0===g?void 0:g.title,t=25,e.length>t?"".concat(e.substr(0,t),"..."):e)})}),(0,b.jsxs)(h.Z,{variant:"body2",sx:{color:M.n[B.theme].textColor},children:["released: ",(0,b.jsx)("span",{style:{opacity:.7},children:null===g||void 0===g?void 0:g.release_date})]})]}),(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(c.Z,{name:"read-only",value:null===g||void 0===g?void 0:g.vote_average,precision:.5,max:10,readOnly:!0}),(0,b.jsxs)(h.Z,{sx:{opacity:.6,fontStyle:"italic",color:M.n[B.theme].textColor},variant:"body2",children:["(",null===g||void 0===g?void 0:g.vote_count,")"]})]})]})]})}},869:function(n,e,t){var r=t(7689),o=(t(2791),t(9434)),i=t(184);e.Z=function(n){return function(){var e;return(null===(e=(0,o.v9)((function(n){return null===n||void 0===n?void 0:n.AuthReducer})))||void 0===e?void 0:e.user)?(0,i.jsx)(n,{}):(0,i.jsx)(r.Fg,{to:"/moviesApp/login"})}}},3167:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});t(2791);var r=t(6015),o=t(4565),i=t(5953),s=t(9434),l=t(916),c=t(1441),a=t(184),d=function(n){for(var e=n.count,t=void 0===e?9:e,r=[],o=0;o<t;o++)r.push((0,a.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:6,lg:4,children:[(0,a.jsx)("h1",{children:(0,a.jsx)(c.Z,{variant:"rectangular",width:"100%",height:300})}),(0,a.jsx)(c.Z,{width:267,height:20}),(0,a.jsx)(c.Z,{width:267,height:50})]},o));return(0,a.jsx)(i.ZP,{container:!0,spacing:1,style:{marginTop:0},children:r})},u=function(){var n=(0,s.v9)((function(n){return n.MoviesReducer})),e=n.searchResults,t=n.searchLoading;return(0,a.jsx)(i.ZP,{container:!0,spacing:2,children:t?(0,a.jsx)(d,{count:20}):(0,a.jsx)(a.Fragment,{children:null===e||void 0===e?void 0:e.map((function(n,e){return(0,a.jsx)(i.ZP,{xs:12,md:6,lg:4,item:!0,children:(0,a.jsx)(l.Z,{data:n})},e)}))})})},x=t(2041),h=t(5366),f=t(4585),v=t(4948),p=t(3922),g=function(){var n,e,t=(0,s.I0)(),r=(0,s.v9)((function(n){return n.MoviesReducer})),o=r.searchCount,i=r.searchPage,l=(0,s.v9)((function(n){return n.AuthReducer})).theme,c=Math.floor(o/20),d=o%9>0?c+1:c+0;return(0,a.jsx)(f.Z,{onChange:function(n,e){t((0,v.Zr)(e))},count:d,variant:"outlined",color:"success",page:i,sx:(n=p.n[l].background,e=p.n[l].textColor,{"& .MuiPagination-ul button":{color:e,border:"2px solid ".concat(n),background:"#db60151a",opacity:"0.5","&:hover":{background:"#db60151a",opacity:"1"}}})})},j=function(){return{width:"100%",display:"flex",alignItems:"center",justifyContent:"start",pb:1}},m=function(){return{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBlock:10}},Z=function(){var n=(0,s.v9)((function(n){return n.MoviesReducer})),e=n.searchKeyWord,t=n.searchLoading,i=n.searchCount,l=(0,s.v9)((function(n){return n.AuthReducer})).theme;return(0,a.jsx)(r.Z,{sx:{paddingBlock:10},children:(0,a.jsxs)(r.Z,{sx:{background:p.n[l].childrenBackgrounds,color:p.n[l].textColor,padding:4},children:[t&&0===i?(0,a.jsx)(r.Z,{sx:j,children:(0,a.jsx)(h.Z,{})}):(0,a.jsxs)(o.Z,{sx:{pb:1,fontSize:{xs:20,md:30}},children:["Results (",i,') For "',e,'"']}),0!==i||t?(0,a.jsx)(u,{}):(0,a.jsxs)(r.Z,{sx:m,children:[(0,a.jsx)(x.Z,{sx:{width:100,height:100}}),(0,a.jsx)(o.Z,{sx:{fontSize:{xs:25,md:35}},children:"Sorry, no results were found"})]}),(0,a.jsx)(r.Z,{sx:{paddingBlock:4,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(g,{})})]})})},b=(0,t(869).Z)((function(){return(0,a.jsx)(Z,{})}))}}]);
//# sourceMappingURL=167.af0c4109.chunk.js.map
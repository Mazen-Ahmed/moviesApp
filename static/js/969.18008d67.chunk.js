"use strict";(self.webpackChunkmoviesapp=self.webpackChunkmoviesapp||[]).push([[969],{916:function(e,n,t){t.d(n,{Z:function(){return _}});var i=t(885),r=t(2791),o=t(7689),a=t(2542),s=t(6015),l=t(6970),u=t(199),d=t(5194),c=t(6875),f=t(3811),p=t(4565),v=t(580),x=t(7237);var h=t(7431),g=t(5700),m=t(2982),j=t(1206),Z=function(e,n){var t=(0,r.useState)(),o=(0,i.Z)(t,2),a=o[0],s=o[1];return(0,r.useEffect)((function(){n&&j.m.get("movie/".concat(e,"/videos")).then((function(e){s.apply(void 0,(0,m.Z)(e.data.results.filter((function(e){return"Trailer"===e.type}))))}))}),[e,n]),{trailer:a}},b=t(184),y=function(e){var n=e.open,t=e.setOpen,i=e.id,r=Z(i,n).trailer;return(0,b.jsx)(g.Z,{open:n,onClick:function(){t(!1)},sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},children:n&&(0,b.jsx)(s.Z,{sx:{width:{xs:"90%",md:"60%"}},children:(0,b.jsx)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/".concat(null===r||void 0===r?void 0:r.key),title:"YouTube video player",frameBorder:"0",allowFullScreen:!0,style:{borderRadius:"15px",border:"none"}})})})},w=t(1647),k=t(9434),I=function(){return{position:"relative",overflow:"hidden","&:hover":{"& .MuiBox-root":{transform:"scale(1)"},"& .MuiCardMedia-root":{transform:"scale(1.1)"}}}},C=function(){return{backgroundPosition:"top",transition:"ease-in-out .3s"}},S={transformOrigin:"bottom",transition:"ease-in-out .3s",position:"absolute",top:0,left:0,height:"100%",width:"100%",transform:"scale(0)",background:"rgba(0, 0, 0,.6)",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start",color:"#ffff",cursor:"pointer"},R=function(){return{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}},M=function(){return{display:"flex",alignItems:"center",justifyContent:"start",width:"100%",height:"auto",marginTop:1,paddingInline:1,overflow:"auto",msOverflowStyle:"none",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"}}},_=function(e){var n,t,g=e.data,m=e.refer,j=void 0===m?null:m,Z=(0,o.s0)(),_=(0,k.I0)(),z=(0,k.v9)((function(e){return e.AuthReducer})),P=(0,r.useState)(!1),B=(0,i.Z)(P,2),L=B[0],O=B[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{setOpen:O,open:L,id:null===g||void 0===g?void 0:g.id}),(0,b.jsxs)(a.Z,{sx:{minWidth:300,marginInline:1,userSelect:"none",boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"},ref:j,children:[(0,b.jsxs)(s.Z,{sx:I,onClick:function(){return O(!0)},children:[(0,b.jsx)(u.Z,{loading:"lazy",component:"img",sx:C,height:"300",image:"".concat("https://image.tmdb.org/t/p").concat(g.backdrop_path),alt:"".concat(null===g||void 0===g?void 0:g.title,"'s image")}),(0,b.jsxs)(s.Z,{sx:S,children:[(0,b.jsxs)(s.Z,{sx:R,children:[(0,b.jsx)(f.Z,{"aria-label":"share",onClick:function(e){return e.stopPropagation()},children:(0,b.jsx)(v.Z,{sx:{color:"#fff"}})}),(0,b.jsx)(f.Z,{"aria-label":"like",onClick:function(e){e.stopPropagation(),null!==z&&void 0!==z&&z.user?_((0,w.fe)(null===g||void 0===g?void 0:g.id)):Z("/moviesApp")},children:(0,b.jsx)(x.Z,{sx:{color:null!==z&&void 0!==z&&z.likes.find((function(e){return(null===g||void 0===g?void 0:g.id)===e}))?"red":"#fff"}})})]}),(0,b.jsx)(s.Z,{sx:M,children:(0,b.jsx)(p.Z,{children:null===g||void 0===g?void 0:g.overview})})]})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(h.Z,{title:null===g||void 0===g?void 0:g.title,children:(0,b.jsx)(p.Z,{sx:{fontWeight:"bold",cursor:"pointer"},variant:"body1",color:"text.primary",children:(n=null===g||void 0===g?void 0:g.title,t=25,n.length>t?"".concat(n.substr(0,t),"..."):n)})}),(0,b.jsxs)(p.Z,{variant:"body2",children:["released: ",(0,b.jsx)("span",{style:{opacity:.7},children:null===g||void 0===g?void 0:g.release_date})]})]}),(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(l.Z,{name:"read-only",value:null===g||void 0===g?void 0:g.vote_average,precision:.5,max:10,readOnly:!0}),(0,b.jsxs)(p.Z,{sx:{opacity:.6,fontStyle:"italic"},variant:"body2",children:["(",null===g||void 0===g?void 0:g.vote_count,")"]})]})]})]})}},869:function(e,n,t){var i=t(7689),r=(t(2791),t(9434)),o=t(184);n.Z=function(e){return function(){var n;return(null===(n=(0,r.v9)((function(e){return null===e||void 0===e?void 0:e.AuthReducer})))||void 0===n?void 0:n.user)?(0,o.jsx)(e,{}):(0,o.jsx)(i.Fg,{to:"/moviesApp/login"})}}},4969:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(2791),r=t(869),o=t(6015),a=t(4565),s=function(){return{position:"relative",maxWidth:"100%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"space-between"}},l=function(e){return{position:"absolute",top:"50%",right:"right"===e&&0,left:"left"===e&&0,background:"#000",color:"#fff",borderRadius:"50%",padding:1,display:"flex",alignItems:"center",justifyContent:"center",marginInline:1,cursor:"pointer",zIndex:999,"&:hover":{opacity:"0.8"}}},u=function(){return{width:"100%",minHeight:300,position:"relative","&::before":{position:"absolute",content:"''",left:0,top:0,zIndex:99,height:"100%",width:{xs:20,md:100},backgroundImage:"linear-gradient(90deg,rgba(223, 230, 233,.9), transparent)"},"&::after":{position:"absolute",content:"''",right:0,top:0,zIndex:99,height:"100%",width:{xs:20,md:100},backgroundImage:"linear-gradient(-90deg,rgba(223, 230, 233,.9), transparent)"}}},d=function(){return{width:"100%",height:"auto",display:"flex",justifyContent:"left",alignItems:"center",overflow:"auto",position:"relative",scrollBehavior:"smooth",msOverflowStyle:"none",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},paddingBlock:2}},c=t(3385),f=t(260),p=t(9434),v=t(916),x=t(5366),h=t(4948),g=t(184),m=function(e){var n=e.type,t=e.loading,r=e.data,a=(0,p.I0)(),m=(0,p.v9)((function(e){return e.MoviesReducer})),j="top_rated"===n?m.topRatedCount:m.popularCount,Z=(0,i.useRef)(null),b=function(e){Z.current.scrollLeft+="right"===e?1e3:-1e3},y=!!(j>(null===r||void 0===r?void 0:r.length)),w=(0,i.useRef)(),k=(0,i.useCallback)((function(e){t||(w.current&&w.current.disconnect(),w.current=new IntersectionObserver((function(e){e[0].isIntersecting&&y&&("top_rated"===n?a((0,h.Sl)(m.topRatedPage+=1)):(0,h.fW)(a((0,h.fW)(m.popularPage+=1))))})),e&&w.current.observe(e))}),[t,y]);return(0,g.jsxs)(o.Z,{sx:s,children:[(0,g.jsx)(o.Z,{onClick:function(){return b("left")},sx:l("left"),children:(0,g.jsx)(f.Z,{})}),(0,g.jsx)(o.Z,{sx:u,children:(0,g.jsx)(o.Z,{ref:Z,sx:d,children:r&&r.map((function(e,n){return r.length===n+1?(0,g.jsx)(v.Z,{refer:k,data:e},n):(0,g.jsx)(v.Z,{ref:null,data:e},n)}))})}),(0,g.jsx)(o.Z,{sx:l("right"),onClick:function(){return b("right")},children:t?(0,g.jsx)(x.Z,{primaryColor:"#000",customSize:25}):(0,g.jsx)(c.Z,{})})]})},j=t(2982),Z=t(885),b=t(1206),y=function(){var e=(0,p.v9)((function(e){return e.MoviesReducer})).topRatedPage,n=(0,p.I0)(),t=(0,i.useState)(1),r=(0,Z.Z)(t,2),o=r[0],a=r[1],s=(0,i.useState)([]),l=(0,Z.Z)(s,2),u=l[0],d=l[1];return(0,i.useEffect)((function(){a(!0),b.m.get("movie/top_rated",{params:{page:e}}).then((function(e){d((function(n){return[].concat((0,j.Z)(n),(0,j.Z)(e.data.results))})),a(!1),n((0,h.jF)(e.data.total_results))})).finally((function(){a(!1)}))}),[e]),{moviesList:u,loading:o}},w=function(){var e=y(),n=e.moviesList,t=e.loading;return(0,g.jsxs)(o.Z,{sx:{marginBlock:10},children:[(0,g.jsx)(a.Z,{sx:{paddingInline:2},variant:"h4",children:"Top Rated Movies"}),(0,g.jsx)(m,{data:n,loading:t,type:"top_rated"})]})},k=function(){var e=(0,p.v9)((function(e){return e.MoviesReducer})).popularPage,n=(0,p.I0)(),t=(0,i.useState)(1),r=(0,Z.Z)(t,2),o=r[0],a=r[1],s=(0,i.useState)([]),l=(0,Z.Z)(s,2),u=l[0],d=l[1];return(0,i.useEffect)((function(){a(!0),b.m.get("movie/popular",{params:{page:e}}).then((function(e){d((function(n){return[].concat((0,j.Z)(n),(0,j.Z)(e.data.results))})),n((0,h.ag)(e.data.total_results))})).finally((function(){a(!1)}))}),[e]),{moviesList:u,loading:o}},I=function(){var e=k(),n=e.moviesList,t=e.loading;return(0,g.jsxs)(o.Z,{sx:{marginBlock:10},children:[(0,g.jsx)(a.Z,{sx:{paddingInline:2},variant:"h4",children:"Popular Movies"}),(0,g.jsx)(m,{data:n,loading:t,type:"popular"})]})},C=(0,r.Z)((function(){return(0,g.jsxs)("div",{children:[(0,g.jsx)(w,{}),(0,g.jsx)(I,{})]})}))},260:function(e,n,t){var i=t(4836);n.Z=void 0;var r=i(t(5649)),o=t(184),a=(0,r.default)((0,o.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");n.Z=a},3385:function(e,n,t){var i=t(4836);n.Z=void 0;var r=i(t(5649)),o=t(184),a=(0,r.default)((0,o.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");n.Z=a}}]);
//# sourceMappingURL=969.18008d67.chunk.js.map
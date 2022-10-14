"use strict";(self.webpackChunkmoviesapp=self.webpackChunkmoviesapp||[]).push([[282],{5282:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var o=r(2791),t=r(885),s=r(6015),a=r(4565),i=r(7689),u=r(9952),l=r(165),d=r(3579),c=r(1413),p=r(5987),v=r(1898),x=r(1708),f=r(8254),h=r(3811),m=r(7924),Z=r(3922),g=r(9434),w=r(184),b=["label","error","type","value","Icon","onIconeKeyDown","onIconeKeyUp","errorMessage"],y=function(e){var n,r=e.label,o=e.error,t=e.type,s=e.value,a=e.Icon,i=e.onIconeKeyDown,u=e.onIconeKeyUp,l=e.errorMessage,d=(0,p.Z)(e,b),y=(0,g.v9)((function(e){return e.AuthReducer})).theme;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v.Z,{sx:{mb:!o&&2,width:"100%",background:Z.n[y].inputs},variant:"outlined",error:!!o,children:(0,w.jsx)(x.Z,(0,c.Z)({sx:(n=!!o,{"&:focus-within fieldset, &:focus-visible fieldset":{border:!n&&"2px solid #00cec9!important"}}),id:r,autoComplete:"new-password",type:t,value:s,endAdornment:(0,w.jsx)(f.Z,{position:"end",children:(0,w.jsx)(h.Z,{onMouseDown:i,onMouseUp:u,"aria-label":"toggle password visibility",edge:"end",children:a})}),placeholder:r},d))}),o&&(0,w.jsx)(m.Z,{sx:{marginBottom:2},error:!0,children:l})]})},j=r(7205),I=["text","type","color","styles"],k=function(e){var n=e.text,r=e.type,o=e.color,t=e.styles,s=(0,p.Z)(e,I);return(0,w.jsx)(j.Z,(0,c.Z)((0,c.Z)({variant:r,sx:(0,c.Z)({backgroundColor:"contained"===r&&o,color:"contained"===r?"#fff":o,border:"1px solid ".concat(o),"&: hover":{backgroundColor:"contained"===r&&o,color:"contained"===r?"#fff":o,border:"1px solid ".concat(o)}},t)},s),{},{children:n}))},C=r(1647),A=r(4942),K=r(2797),M=(0,K.Ry)().shape({username:(0,K.Z_)().required(),password:(0,K.Z_)().min(8).required()}),R=function(e,n,r){r((0,c.Z)((0,c.Z)({},n),{},{values:(0,c.Z)((0,c.Z)({},n.values),{},(0,A.Z)({},e.name,e.value))})),function(e,n){return function(e,n){return e.isValid(n,(function(e){return e}))}(K.Ry().shape((0,A.Z)({},e.name,n.fields[e.name])),(0,A.Z)({},e.name,e.value))}(e,M).then((function(o){r((function(r){return(0,c.Z)((0,c.Z)({},r),{},{errors:(0,c.Z)((0,c.Z)({},n.errors),{},(0,A.Z)({},e.name,!o))})}))}))},U=function(e){var n,r,o,t;if(null!==(n=e.errors)&&void 0!==n&&n.password||null!==(r=e.errors)&&void 0!==r&&r.username||null===(o=e.values)||void 0===o||!o.username||null===(t=e.values)||void 0===t||!t.password)return!0},D=r(8824),P=function(){return{width:"100%",height:600,display:"flex",alignItems:"center",justifyContent:"center"}},S=function(){var e,n,r,c,p=(0,o.useState)(!1),v=(0,t.Z)(p,2),x=v[0],f=v[1],h=(0,g.I0)(),m=(0,g.v9)((function(e){return null===e||void 0===e?void 0:e.AuthReducer})),b=(0,o.useState)({}),j=(0,t.Z)(b,2),I=j[0],A=j[1],K=(0,i.s0)();return(0,o.useEffect)((function(){if(m.user)return K("/moviesApp")}),[]),(0,w.jsx)(s.Z,{sx:P,children:(0,w.jsxs)(s.Z,{sx:(r=Z.n[m.theme].childrenBackgrounds,c=Z.n[m.theme].textColor,{background:r,color:c,borderRadius:1,width:400,padding:7,boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}),children:[(0,w.jsx)(a.Z,{textAlign:"center",variant:"h6",children:"Login Form"}),(0,w.jsx)(y,{label:"Username",error:!(null===(e=I.errors)||void 0===e||!e.username),Icon:(0,w.jsx)(u.Z,{}),type:"text",id:"username",name:"username",errorMessage:"Please enter a valid username",onChange:function(e){return R(e.target,I,A)}}),(0,w.jsx)(y,{label:"Password",error:!(null===(n=I.errors)||void 0===n||!n.password),onIconeKeyDown:function(){return f(!0)},onIconeKeyUp:function(){return f(!1)},Icon:x?(0,w.jsx)(d.Z,{}):(0,w.jsx)(l.Z,{}),type:x?"text":"password",onChange:function(e){return R(e.target,I,A)},errorMessage:"Please enter a stronger password",id:"password",name:"password"}),(0,w.jsx)(k,{text:"Login",type:"contained",color:"#00cec9",styles:{width:"100%"},onClick:function(){var e,n;(0,D.t8)("user",null===(e=I.values)||void 0===e?void 0:e.username),(0,D.t8)("likes",[]),h((0,C.av)(null===(n=I.values)||void 0===n?void 0:n.username)),K("/moviesApp")},disabled:U(I)})]})})},q=function(){return(0,w.jsx)(S,{})}}}]);
//# sourceMappingURL=282.3f7e1514.chunk.js.map
var L=Object.defineProperty,H=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(o,r,n)=>r in o?L(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,x=(o,r)=>{for(var n in r||(r={}))y.call(r,n)&&f(o,n,r[n]);if(h)for(var n of h(r))b.call(r,n)&&f(o,n,r[n]);return o},_=(o,r)=>H(o,j(r));var C=(o,r)=>{var n={};for(var a in o)y.call(o,a)&&r.indexOf(a)<0&&(n[a]=o[a]);if(o!=null&&h)for(var a of h(o))r.indexOf(a)<0&&b.call(o,a)&&(n[a]=o[a]);return n};import{j as e,T as g,H as R,L as S,a as M,B as F,b as B,c as l,d as I,r as i,F as N,e as A,M as E,u as D,f as d,g as q,h as T,i as W,k as G,l as z,D as u,C as O,m as P,n as V,O as $,I as K,V as J,o as Z,p as Q,R as U,q as X,s as ee}from"./vendor.a4503f25.js";const re=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};re();const te=()=>e(g,{}),w=()=>window.innerWidth,oe=()=>e(R,{as:"h2",fontSize:"lg",fontWeight:"bold",fontFamily:"heading",color:"white",display:"flex",variant:"page-title",sx:{"user-select":"none"},children:"<Christian Alvarenga />"}),c=({target:o,title:r})=>e(S,{children:e(M,{href:`/${o}`,color:"white",children:r==="Download Resume"?e(F,{bgColor:"purpleColor.100",w:"100%",color:"white",children:r}):r})}),ae=()=>e(B,{children:l(I,{children:[e(c,{target:"about-me",title:"About Me"}),e(c,{target:"experience",title:"Experience"}),e(c,{target:"projects",title:"Projects"}),e(c,{target:"resume",title:"Resume"})]})}),m=new i.exports.createContext,ne=({children:o})=>{const[r,n]=i.exports.useState(!1);return e(m.Provider,{value:{openModal:r,setOpenModal:n},children:o})},se=()=>e(N,{p:2,justifyContent:"center",alignItems:"center",rounded:"lg",bgColor:"transparent",border:"1px",borderColor:"white",children:e(A,{w:4,h:4,color:"white"})}),v=()=>e(E,{bg:"blackAlpha.300",backdropFilter:"blur(10px) hue-rotate(90deg)"}),le=()=>{const{isOpen:o,onOpen:r,onClose:n}=D(),[a,t]=i.exports.useState(e(v,{})),{openModal:s,setOpenModal:p}=i.exports.useContext(m),Y=()=>{p(!s)};return i.exports.useEffect(()=>{s&&(t(e(v,{})),r())},[s]),e(d,{children:l(q,{isOpen:o,onClose:n,closeOnOverlayClick:!1,children:[a,l(T,{display:"flex",borderRadius:"10px",border:"1px",borderColor:"white",bg:"backgroundColorBody",w:["90%","80%","70%"],children:[l(W,{w:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",children:[e(g,{as:"span",color:"white",children:"Where do you want to go?"}),e(G,{onClick:Y,color:"white",position:"static"})]}),e(z,{p:5,children:e(I,{children:l(B,{w:"100%",children:[e(c,{target:"",title:"Home"}),e(u,{h:"2px",bgColor:"white",w:"100%",mb:2}),e(c,{target:"about-me",title:"About Me"}),e(u,{h:"2px",bgColor:"white",w:"100%",mb:2}),e(c,{target:"experience",title:"Experience"}),e(u,{h:"2px",bgColor:"white",w:"100%",mb:2}),e(c,{target:"projects",title:"Projects"}),e(u,{h:"2px",bgColor:"white",w:"100%",mb:2}),e(c,{target:"resume",title:"Download Resume"})]})})})]})]})})},ie=()=>{const{openModal:o,setOpenModal:r}=i.exports.useContext(m);return l(d,{children:[e(d,{onClick:()=>{r(!o)},children:e(se,{})}),o&&e(le,{})]})},ce=()=>{const[o,r]=i.exports.useState(),n=1024;return i.exports.useEffect(()=>{w()<=n?r(!0):r(!1),window.addEventListener("resize",()=>{w()<=n?r(!0):r(!1)})},[]),e(d,{as:"header",w:"100%",py:["30px","20px","20px"],position:"fixed",bgColor:"backgroundColorHeader",backdropFilter:"blur(13.4px)",zIndex:1,children:l(O,{as:"nav",maxW:"2xl",display:"flex",justifyContent:"space-between",alignItems:"center",children:[e(M,{href:"/",children:e(oe,{})}),o?e(ie,{}):e(ae,{})]})})};var de="/assets/hand_2.5f7a4ac7.svg";function pe(r){var o=C(r,[]);const n=i.exports.useRef(),{nodes:a,materials:t}=P("/grogu.gltf");return e("group",_(x({ref:n},o),{dispose:null,children:e("group",{rotation:[-Math.PI/2.7,0,0],scale:.01,children:l("group",{rotation:[Math.PI/2,0,0],scale:10,style:{position:"relative",top:"20px"},children:[e("group",{rotation:[-Math.PI/2,0,0],children:e("mesh",{geometry:a.BY_fur_fur_0.geometry,material:t.material})}),l("group",{rotation:[-Math.PI/2,0,0],children:[e("mesh",{geometry:a.BY_skin_skin_0.geometry,material:t.skin}),e("mesh",{geometry:a.BY_skin_nail_0.geometry,material:t.nail}),e("mesh",{geometry:a.BY_skin_oral_0.geometry,material:t.oral}),e("mesh",{geometry:a.BY_skin_pupil_0.geometry,material:t.pupil}),e("mesh",{geometry:a.BY_skin_eyes_b_0.geometry,material:t.eyes_b}),e("mesh",{geometry:a.BY_skin_eyes_w_0.geometry,material:t.eyes_w}),e("mesh",{geometry:a.BY_skin_lens_0.geometry,material:t.lens})]}),e("group",{rotation:[-Math.PI/2,0,0],children:e("mesh",{geometry:a.cloth_shape_001_BY_cloth3_0.geometry,material:t.BY_cloth3})}),l("group",{rotation:[-Math.PI/2,0,0],children:[e("mesh",{geometry:a.cloth_shape_002_BY_cloth2_0.geometry,material:t.BY_cloth2}),e("mesh",{geometry:a.cloth_shape_002_BY_cloth1_0.geometry,material:t.BY_cloth1})]}),e("group",{rotation:[-Math.PI/2,0,0],children:e("mesh",{geometry:a.cloth_shape_003_BY_cloth4_0.geometry,material:t.BY_cloth4})}),l("group",{position:[-9.95,27.72,17.37],rotation:[-Math.PI/2,0,0],children:[e("mesh",{geometry:a.Sphere_sphere1_0.geometry,material:t.sphere1}),e("mesh",{geometry:a.Sphere_sphere2_0.geometry,material:t.sphere2})]})]})})}))}P.preload("/grogu.gltf");const he="_canvas_1y67m_1",ue="_suspense_1y67m_15";var k={canvas:he,suspense:ue};const ge=()=>e(d,{h:"200px",display:"flex",justifyContent:"center",alignItems:"center",children:l(V,{className:k.canvas,children:[e($,{enableZoom:!1}),e("ambientLight",{intensity:.5}),e("directionalLight",{position:[-2,5,-2],intensity:1}),e(i.exports.Suspense,{fallback:null,className:k.suspense,children:e(pe,{})})]})}),me=()=>e(O,{as:"main",children:l(d,{mt:["100px","100px","calc(64px - 0.5rem)"],children:[e(ge,{}),e(d,{bg:"whiteAlpha.200",borderRadius:"lg",py:[6],px:[7,3,3],display:"flex",alignItems:"center",justifyContent:"center",children:e(g,{as:"h3",color:"white",children:"Hi, I'm a Jr. Front-End developer based in Paraguay!"})}),e(K,{src:de,position:"relative",sx:{transform:"rotate(20deg)"},w:["120px","200px","270px"],h:["120px","200px","270px"],top:["-35px","-50px","-90px"],left:["60%","-50px","340px"]})]})}),fe=()=>l(J,{w:"100%",children:[e(ce,{}),e(me,{}),e(te,{})]});function ye(){return e(Z,{children:e(fe,{})})}var be={backgroundColorBody:"#1a1a1a",backgroundColorHeader:"rgba(26, 26, 26, 0.35)",whiteColor:"#ffffff",purpleColor:{100:"#a2e",200:"#b90fff",300:"#8808ff"},turquoiseColor:{100:"#00acff"},blueColor:{100:"#3019ff"},gradient:{purpleColor:"linear-gradient(90deg, rgba(170,34,238,1) 0%, rgba(185,15,255,1) 50%, rgba(136,8,255,1) 100%)",turquoisePurpleColor:"linear-gradient(90deg, rgba(170,34,238,1) 0%, rgba(185,15,255,1) 50%, rgba(8,255,244,1) 100%)",turquoiseColor:"linear-gradient(90deg, rgba(34,100,238,1) 0%, rgba(15,190,255,1) 50%, rgba(8,255,244,1) 100%)"},backgroundGradient:{purpleColor:"linear(to-r, rgba(170,34,238,1), rgba(185,15,255,1), rgba(136,8,255,1) 100%))"}},xe=Q({colors:be});U.render(e(X.StrictMode,{children:e(ne,{children:e(ee,{theme:xe,children:e(ye,{})})})}),document.getElementById("root"));

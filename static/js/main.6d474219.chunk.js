(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t.n(r),a=t(10),o=t.n(a),c=t(2),l=t(3);function u(){var n=Object(c.a)(["\n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    font-family: 'Fira Sans Condensed', sans-serif;    \n    color: #333333;\n    background-color: #fff;\n    padding: 0;\n    margin: 0;\n  }\n  \n  body * {\n    box-sizing: border-box;\n    &::selection {\n      background-color: rgba(79,192,141,0.5);\n    }\n  }\n  \n  ul, ol, li {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  dl, dt, dd {\n    margin: 0;\n    padding: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    color: #333;\n  }\n  \n  button {\n    border: none;\n    cursor: pointer;\n    outline: none;\n  }\n"]);return u=function(){return n},n}var m=Object(l.a)(u()),d=t(7),s=t(4),f=t(16);function p(){var n=Object(c.a)(["\n  &:hover {\n    ",";\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:first-child::after{\n    content: '/';\n    margin: 0 0.3em;\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(c.a)(["\n    animation-name: appear;\n    animation-duration: 1s;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n  "]);return b=function(){return n},n}function g(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding-left: 1.5625rem;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  ","\n  @keyframes appear {\n    0% {\n      opacity: 0;\n    }\n    5% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(c.a)(["\n    width: 280px;\n    @media screen and (min-width: 768px) {\n    width: 310px;\n    }\n  "]);return v=function(){return n},n}function w(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  ","\n  border-radius: 30px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: #333333;\n  background-color: #fff;\n  transition: width 250ms ease-in-out;\n  @media screen and (min-width: 768px) {\n    width: 50px;\n    height: 50px;\n    font-size: 0.9375rem;\n  }\n  ","\n"]);return w=function(){return n},n}function j(){var n=Object(c.a)(["\n    border: 1px solid ",";\n  "]);return j=function(){return n},n}function E(){var n=Object(c.a)(["\n  ","  \n"]);return E=function(){return n},n}function x(){var n=Object(c.a)(["\n    color: ",";\n  "]);return x=function(){return n},n}function O(){var n=Object(c.a)(["\n  ","\n"]);return O=function(){return n},n}var y=Object(l.b)(O(),(function(n){var e=n.mainColor;return Object(l.b)(x(),e)})),C=Object(l.b)(E(),(function(n){var e=n.mainColor;return Object(l.b)(j(),e)})),k=l.c.div(w(),C,(function(n){return n.open&&Object(l.b)(v())})),S=l.c.dl(g(),(function(n){return n.open&&Object(l.b)(b())})),z=l.c.li(h()),L=l.c.a(p(),y);var A=function(n){var e=n.open,t=n.mainColor;return console.log(t),i.a.createElement(k,{open:e,mainColor:t},i.a.createElement(S,{open:e},i.a.createElement(z,null,i.a.createElement(L,{href:"https://www.linkedin.com/in/haileychoi15",target:"_blank",title:"Move to Hailey's linkedin profile",mainColor:t},"Linkedin")),i.a.createElement(z,null,i.a.createElement(L,{href:"mailto:imdud0612@gmail.com",title:"Send email to this address",mainColor:t},"imdud0612@gmail.com"))))};function I(){var n=Object(c.a)(["\n     color: ",";\n     background-color: #fff;\n     border: 1px solid ",";\n  "]);return I=function(){return n},n}function J(){var n=Object(c.a)(["\n    transform: rotate(45deg);\n  "]);return J=function(){return n},n}function F(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  font-size: 1.25rem;\n  color: #fff;\n  background-color: #333;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n  & .plus-icon {\n    transition: all 150ms ease-in-out;\n    ","\n  }\n  @media screen and (min-width: 768px) {\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n  }\n  ","\n"]);return F=function(){return n},n}var N=l.c.button(F(),(function(n){return n.open&&Object(l.b)(J())}),(function(n){return!n.popup&&Object(l.b)(I(),n.mainColor,n.mainColor)}));function T(n){var e=n.children,t=n.popup,a=n.mainColor,o=Object(f.a)(n,["children","popup","mainColor"]),c=Object(r.useState)(!1),l=Object(s.a)(c,2),u=l[0],m=l[1];return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(A,{open:u,mainColor:a}),i.a.createElement(N,Object.assign({},o,{onClick:function(){return t&&m(!u)},open:u,popup:t,mainColor:a}),e))}T.defaultProps={color:"white",backgroundColor:"black",border:!1,popup:!1};var D=T;function H(n,e,t,i){void 0===n&&(n="up"),void 0===i&&(i="1"),void 0===t&&(t="0"),void 0===e&&(e=40);var a=Object(r.useRef)(),o=Object(r.useCallback)((function(n){var e=Object(s.a)(n,1)[0],r=a.current;e.isIntersecting&&(r.style.transitionProperty="opacity transform",r.style.transitionDuration="".concat(i,"s"),r.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",r.style.transitionDelay="".concat(t,"s"),r.style.opacity=1,r.style.transform="translate3d(0, 0, 0)")}),[t,i]);return Object(r.useEffect)((function(){var n,e=a.current;return e&&(n=new IntersectionObserver(o,{threshold:.7})).observe(e),function(){return n&&n.disconnect()}}),[o]),{ref:a,style:{opacity:0,transform:function(n,e){switch(n){case"up":return"translate3d(0, ".concat(e,"%, 0)");case"down":return"translate3d(0, -".concat(e,"%, 0)");case"left":return"translate3d(".concat(e,"%, 0, 0)");case"right":return"translate3d(-".concat(e,"%, 0, 0)");default:return"translate3d(0, 0, 0)"}}(n,e)}}}var P=[{direction:"up",distance:300,delay:"2",href:"home",active:!0,scrolling:!1,text:"home"},{direction:"up",distance:300,delay:"2.2",href:"first",active:!1,scrolling:!1,text:"01"},{direction:"up",distance:300,delay:"2.4",href:"second",active:!1,scrolling:!1,text:"02"},{direction:"up",distance:300,delay:"2.6",href:"third",active:!1,scrolling:!1,text:"03"}],R=Object(r.createContext)(P);function B(n){void 0===n&&(n="home");var e=Object(r.useRef)(),t=Object(r.useCallback)((function(e){Object(s.a)(e,1)[0].isIntersecting&&document.querySelectorAll(".nav-item").forEach((function(e){e.classList.contains("scrolling")||(e.classList.remove("active"),e.classList.contains(n)&&e.classList.add("active"))}))}),[]);return Object(r.useEffect)((function(){var n,r=e.current;return r&&(n=new IntersectionObserver(t,{threshold:.7})).observe(r),function(){return n&&n.disconnect()}}),[t]),{ref:e}}function G(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n"]);return G=function(){return n},n}function X(){var n=Object(c.a)(["\n  font-size: 1.25rem;\n  font-weight: 400;\n  margin-right: 1em;\n"]);return X=function(){return n},n}function U(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 1.25em;\n  right: 1.25em;\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    bottom: 3.125em;\n    right: 3.125em;\n  }\n"]);return U=function(){return n},n}function M(){var n=Object(c.a)(["\n  position: absolute;\n  top: 1.25em;\n  right: 1.25em;\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    top: 3.125em;\n    right: 3.125em;\n  }\n"]);return M=function(){return n},n}function W(){var n=Object(c.a)(["\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 300;\n  line-height: 1.4em;\n  & + & {\n    margin-top: 0.6em;\n  }\n  @media screen and (min-width: 480px) {\n    font-size: 1.375rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 1.5rem;\n  }\n"]);return W=function(){return n},n}function _(){var n=Object(c.a)(["\n  margin-bottom: 1em;\n  font-size: 1.5rem;\n  font-weight: 400;\n  @media screen and (min-width: 480px) {\n    font-size: 1.75rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 1.875rem;\n  }\n  ","\n"]);return _=function(){return n},n}function q(){var n=Object(c.a)(["\n  font-size: 2.25rem;\n  font-weight: 900;\n  @media screen and (min-width: 480px) {\n    font-size: 2.625rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 3.25rem;\n  }\n"]);return q=function(){return n},n}function K(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  margin: 6.25rem 0;\n  @media screen and (min-width: 768px) {\n    width: 70%;\n    padding-left: 1em;\n    margin: 0;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 50%;\n    margin: 0;\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(c.a)(["\n  position: relative;\n  padding: 1.25em;\n  width: 100vw;\n  min-height: 100vh;\n  @media screen and (min-width: 768px) {\n    padding: 3.125em;\n  }\n"]);return Q=function(){return n},n}function Y(){var n=Object(c.a)(["\n    color: ",";\n  "]);return Y=function(){return n},n}function V(){var n=Object(c.a)(["\n  ","\n"]);return V=function(){return n},n}var Z=Object(l.b)(V(),(function(n){var e=n.mainColor;return Object(l.b)(Y(),e)})),$=l.c.div(Q()),nn=l.c.div(K()),en=l.c.div(q()),tn=l.c.div(_(),Z),rn=l.c.p(W()),an=l.c.div(M()),on=l.c.div(U()),cn=l.c.span(X()),ln=l.c.a(G());var un=function(n){var e=n.mainColor,t="Hailey Choi",r="front-end web developer",a=["Hello, I am a front-end web developer based in Seoul, South Korea. I enjoy making things that enhance people's lives with my codes. Especially I focus on well crafted code and minimal UI/UX design to deliver simplicity and clarity.","I spend my time learning new things about development, reviewing codes, and building web applications to bring my work to life."];return i.a.createElement($,{id:"home"},i.a.createElement(nn,B("home"),i.a.createElement(en,H("right",35),t),i.a.createElement(tn,Object.assign({},H("right",35,"0.4"),{mainColor:e}),r),i.a.createElement(rn,H("right",35,"0.8"),a[0]),i.a.createElement(rn,H("right",35,"1.2"),a[1])),i.a.createElement(an,H("left",40,"1.6"),i.a.createElement(cn,null,"Contact"),i.a.createElement(D,{popup:!0,mainColor:e},i.a.createElement(d.a,{className:"plus-icon"}))),i.a.createElement(on,H("left",40,"1.6"),i.a.createElement(cn,null,"Github"),i.a.createElement(ln,{href:"https://github.com/haileychoi15",target:"_blank"},i.a.createElement(D,{color:"green",backgroundColor:"white",border:!0,mainColor:e},i.a.createElement(d.b,null)))))};function mn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 40px;\n  margin-bottom: 30px;\n  font-size: 1.625rem;\n  font-weight: 500;\n  color: #333;\n  @media screen and (min-width: 768px) {\n     justify-content: flex-start;\n     opacity: 0;\n  }\n"]);return mn=function(){return n},n}var dn=l.c.div(mn());var sn=function(n){var e=n.name;return i.a.createElement(dn,null,e)};function fn(){var n=Object(c.a)(["\n  margin: 0.625rem 0 1.25rem;\n  font-size: 1.125rem;\n  font-weight: 300;\n  line-height: 1.4em;\n  color: #333;\n  @media screen and (min-width: 768px) {\n    margin: 1.125rem 0;\n  }\n"]);return fn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  font-size: 1.25rem;\n  font-weight: 400;\n  color: #cacaca;\n  @media screen and (min-width: 768px) {\n    font-size: 1.375rem;\n  }\n"]);return pn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  display: block;\n  margin-bottom: 1.25rem;\n  font-size: 1.375rem;\n  font-weight: 400;\n  ","\n  @media screen and (min-width: 768px) {\n    font-size: 1.625rem;\n  }\n"]);return hn=function(){return n},n}function bn(){var n=Object(c.a)(["\n  border-radius: 6px;\n  width: 100%;\n  padding: 1rem 0 1.25rem 3.125rem;\n  color: #333;\n  & + & {\n    margin-top: 1.875rem;\n    margin-left: 0;\n  }\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n    width: 30%;\n    & + & {\n    margin-top: 0;\n    margin-left: 6.25rem;\n    }\n  }\n"]);return bn=function(){return n},n}function gn(){var n=Object(c.a)(["\n    color: ",";\n  "]);return gn=function(){return n},n}function vn(){var n=Object(c.a)(["\n  ","\n"]);return vn=function(){return n},n}var wn=Object(l.b)(vn(),(function(n){var e=n.mainColor;return Object(l.b)(gn(),e)})),jn=l.c.div(bn()),En=l.c.strong(hn(),wn),xn=l.c.div(pn()),On=l.c.p(fn());var yn=function(n){var e=n.data,t=n.animationDirection,r=n.mainColor,a=e.subject,o=e.first,c=e.second;return i.a.createElement(jn,H(t,40),i.a.createElement(En,{mainColor:r},a),i.a.createElement(xn,null,o.title),i.a.createElement(On,null,o.description),i.a.createElement(xn,null,c.title),i.a.createElement(On,null,c.description))};function Cn(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1],a=Object(r.useCallback)((function(n){i(n<768)}),[]);return Object(r.useEffect)((function(){window.addEventListener("load",(function(n){a(n.currentTarget.innerWidth)})),window.addEventListener("resize",(function(n){a(n.target.innerWidth)}))}),[a]),t}function kn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  padding: 0 10% 100px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    width: 100%;\n    padding: 100px 0 80px;\n    margin-bottom: 120px;\n  }\n"]);return kn=function(){return n},n}function Sn(){var n=Object(c.a)(["\n  width: 100vw;\n  background-color: #fafafa;\n"]);return Sn=function(){return n},n}var zn=l.c.div(Sn()),Ln=l.c.div(kn());var An=function(n){var e=n.mainColor,t=Cn(),r={0:{subject:"SKILLSET",first:{title:"Front-end",description:"HTML5, CSS3, SASS (SCSS), Styled-Components, JavaScript/ES6, jQuery, ReactJS, Firebase, Git, Github"},second:{title:"Back-end",description:"Java, JSP/Servlet, Oracle, Git, Github"}},1:{subject:"EDUCATION",first:{title:"2015 - 2020",description:"Bachelor of Arts in Arabic, Bachelor of Arts in Economics at HUFS (Hankuk University of Foreign Studies), Seoul"},second:{title:"2020",description:"Self-taught"}}};return i.a.createElement(zn,Object.assign({id:"about"},B("home")),t&&i.a.createElement(sn,{name:"About"}),i.a.createElement(Ln,null,i.a.createElement(yn,{data:r[0],animationDirection:"right",mainColor:e}),i.a.createElement(yn,{data:r[1],animationDirection:"left",mainColor:e})))},In=t(14);function Jn(){var n=Object(c.a)(["\n  position: absolute;\n  top: 25%;\n  right: 0;\n  width: 1.875rem;\n  height: 1.875rem;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  background-color: #fff;\n  transition: transform 250ms ease-in-out;\n  & .github-icon {\n    width: 100%;\n    height: 100%;\n  }\n  &:hover {\n    transform: translateX(-50%) scale(1.06);\n  }\n  @media screen and (min-width: 768px) {\n    top: 60%;\n    left: 50%;\n  }\n"]);return Jn=function(){return n},n}function Fn(){var n=Object(c.a)(["\n  margin-left: 0;\n  font-size: 1.125rem;\n  font-weight: 400;\n  color: #333;\n"]);return Fn=function(){return n},n}function Nn(){var n=Object(c.a)(["\n      color: ",";\n  "]);return Nn=function(){return n},n}function Tn(){var n=Object(c.a)(["\n  margin-bottom: 1.6rem;\n  font-size: 1.125rem;\n  font-weight: 400;\n  ","\n  @media screen and (min-width: 768px) {\n    margin-bottom: 1.25rem;\n  }\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(c.a)(["\n  &.github-group {\n    position: relative;\n  }\n  & + & {\n    margin-left: 2.5rem;\n  }\n"]);return Dn=function(){return n},n}function Hn(){var n=Object(c.a)(["\n   position: absolute;\n   top: 1.25rem;\n   left: 0;\n   width: 100%;\n   display: flex;\n   justify-content: space-between;\n   margin: 0;\n   @media screen and (min-width: 768px) {\n      top: 1.875rem;\n   }\n   @media screen and (min-width: 1024px) {\n      top: 2.5rem;\n   }\n"]);return Hn=function(){return n},n}function Pn(){var n=Object(c.a)(["\n    width: 90%;\n    min-height: 10%;\n    position: absolute; \n    left: 50%; \n    bottom: 0;\n    transform: translateX(-50%);\n    @media screen and (min-width: 768px) {\n      width: 80%;\n      height: 20%;\n    }\n    @media screen and (min-width: 1024px) {\n      width: 60%;\n      height: 40%;\n    }\n"]);return Pn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n    width: 95%;\n    height: 95%;\n    transition: transform 250ms ease-in-out;\n    &:hover {\n        transform: scale(1.05);\n    }\n"]);return Rn=function(){return n},n}function Bn(){var n=Object(c.a)(["\n    position: absolute; \n    top: 0; \n    left: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 90%;\n    border: 1px solid #e9e9e9;\n    border-top: none;\n    background-color: #ffffff;\n    transform: translateX(-50%);\n    overflow: hidden;\n    @media screen and (min-width: 768px) {\n      width: 80%;\n      height: 80%;\n    }\n    @media screen and (min-width: 1024px) {\n      width: 60%;\n      height: 60%;\n    }\n"]);return Bn=function(){return n},n}function Gn(){var n=Object(c.a)(["\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background-color: #e9e9e9;\n  & + & {\n    margin-left: 7px;\n  }\n"]);return Gn=function(){return n},n}function Xn(){var n=Object(c.a)(["\n    position: absolute; \n    top: -25px; \n    left: 50%;\n    display: flex;\n    align-items: center;\n    padding: 0 1.6rem;\n    width: 90%;\n    height: 25px;\n    border: 1px solid #e9e9e9;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    transform: translateX(-50%);\n    @media screen and (min-width: 768px) {\n      width: 80%;\n    }\n    @media screen and (min-width: 1024px) {\n      width: 60%;\n    }\n"]);return Xn=function(){return n},n}function Un(){var n=Object(c.a)(["\n  position: absolute;\n  top: -6.25rem;\n  left: 0;\n  width: 100%;\n  height: 7.5rem;\n  @media screen and (min-width: 1024px) {\n      top: -7.5rem;\n  }\n"]);return Un=function(){return n},n}function Mn(){var n=Object(c.a)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%; \n    padding-top: 55.4%; /* 8:5 Aspect Ratio => 62.5% */\n    margin-bottom: 9.375rem; // \ud504\ub85c\uc81d\ud2b8 \uac04 \uc138\ub85c \uac04\uaca9\n    @media screen and (min-width: 768px) {\n      margin-bottom: 7.5rem;\n    }\n    @media screen and (min-width: 1024px) {\n      margin-bottom: 0;\n    }\n"]);return Mn=function(){return n},n}var Wn=l.c.div(Mn()),_n=l.c.div(Un()),qn=l.c.div(Xn()),Kn=l.c.div(Gn()),Qn=l.c.div(Bn()),Yn=l.c.img(Rn()),Vn=l.c.div(Pn()),Zn=l.c.dl(Hn()),$n=l.c.div(Dn()),ne=l.c.dt(Tn(),(function(n){return n.mainColor&&Object(l.b)(Nn(),n.mainColor)})),ee=l.c.dd(Fn()),te=l.c.a(Jn());var re=function(n){var e=n.project,t=n.type,r=n.languages,a=n.github,o=n.image,c=n.id,l=n.mainColor,u=Cn();return i.a.createElement(Wn,null,i.a.createElement(_n,{id:c}),i.a.createElement(qn,null,i.a.createElement(Kn,null),i.a.createElement(Kn,null),i.a.createElement(Kn,null)),i.a.createElement(Qn,B(c),i.a.createElement(Yn,{src:o,alt:e})),i.a.createElement(Vn,null,i.a.createElement(Zn,H("up",100),i.a.createElement($n,null,i.a.createElement(ne,{mainColor:l},"Project"),i.a.createElement(ee,null,e)),!u&&i.a.createElement(i.a.Fragment,null,i.a.createElement($n,null,i.a.createElement(ne,{mainColor:l},"Type"),i.a.createElement(ee,null,t)),i.a.createElement($n,null,i.a.createElement(ne,{mainColor:l},"Languages"),i.a.createElement(ee,null,r))),i.a.createElement($n,{className:"github-group"},!u&&i.a.createElement(ne,{mainColor:l},"Github"),i.a.createElement(ee,null,i.a.createElement(te,{href:a,target:"_blank"},i.a.createElement(In.a,{className:"github-icon"})))))))};function ie(){var n=Object(c.a)(["\n  width: 100%;\n  color: #333;\n  background-color: #fff;\n  @media screen and (min-width: 768px) {\n     min-height: 100vh;\n  }\n"]);return ie=function(){return n},n}var ae=l.c.div(ie());var oe=function(n){var e=n.mainColor,t=Cn();return i.a.createElement(ae,null,t&&i.a.createElement(sn,{name:"portfolio"}),i.a.createElement("ul",null,[{id:"first",project:"Hello Arabic",type:"Arabic Dictionary and Wordbook",language:"ReactJS & Firebase",github:"https://github.com/haileychoi15/hello-arabic",image:"/portfolio/hello-arabic.png"},{id:"second",project:"Movie App",type:"Movie Recommendation Service",language:"ReactJS",github:"https://github.com/haileychoi15/movie-app",image:"/portfolio/movie-app.png"},{id:"third",project:"Paint Board",type:"Experiments",language:"JavaScript",github:"https://github.com/haileychoi15/PaintJS",image:"/portfolio/paint-js.png"},{id:"fourth",project:"Ticket24",type:"Performance Booking Service",language:"JavaScript",github:"https://github.com/haileychoi15/ticket24",image:"https://user-images.githubusercontent.com/60546778/91707600-01cf5c80-ebbb-11ea-89cc-7e381bb864df.png"}].map((function(n){return i.a.createElement("li",{key:n.id},i.a.createElement(re,{id:n.id,project:n.project,type:n.type,languages:n.language,github:n.github,image:n.image,mainColor:e}))}))))},ce=t(15);function le(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 400;\n  transition: color 150ms ease-in-out;\n  &.active,\n  &:hover {\n    ","\n  }\n  & .menu-icon {\n    font-size: 1.25rem;\n  }\n"]);return le=function(){return n},n}function ue(){var n=Object(c.a)(["\n  & + & {\n    margin-top: 1.875em;\n  }\n"]);return ue=function(){return n},n}function me(){var n=Object(c.a)(["\n  position: fixed;\n  top: 50%;\n  left: 1.25em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  border-radius: 6px;\n  background: none;\n  z-index: 1000;\n"]);return me=function(){return n},n}function de(){var n=Object(c.a)(["\n    color: ",";\n  "]);return de=function(){return n},n}function se(){var n=Object(c.a)(["\n  ","\n"]);return se=function(){return n},n}var fe=Object(l.b)(se(),(function(n){var e=n.mainColor;return Object(l.b)(de(),e)})),pe=l.c.div(me()),he=l.c.li(ue()),be=l.c.a(le(),fe);var ge=function(n){var e=n.mainColor,t=Object(r.useContext)(R),a=Object(s.a)(t,2),o=a[0],c=a[1];console.log(o,c);var l=function(n){!function(n){if(n&&"function"===typeof n){var e;window.addEventListener("scroll",(function(t){window.clearTimeout(e),e=setTimeout((function(){n()}),66)}),!1)}}((function(){n.forEach((function(n){return n.classList.remove("scrolling")}))}))},u=function(n,e){var t=document.querySelectorAll(".nav-item");t.forEach((function(n){n.classList.add("scrolling"),n.classList.remove("active")})),n.currentTarget.classList.add("active"),l(t)};return i.a.createElement(pe,null,i.a.createElement("ul",null,i.a.createElement(he,H("up",300,"2"),i.a.createElement(be,{href:"#home",className:"nav-item home active",onClick:u,mainColor:e},i.a.createElement(ce.a,{className:"menu-icon"}))),i.a.createElement(he,H("up",300,"2.2"),i.a.createElement(be,{href:"#first",className:"nav-item first",onClick:u,mainColor:e},"01")),i.a.createElement(he,H("up",300,"2.4"),i.a.createElement(be,{href:"#second",className:"nav-item second",onClick:u,mainColor:e},"02")),i.a.createElement(he,H("up",300,"2.6"),i.a.createElement(be,{href:"#third",className:"nav-item third",onClick:u,mainColor:e},"03")),i.a.createElement(he,H("up",300,"2.8"),i.a.createElement(be,{href:"#third",className:"nav-item fourth",onClick:u,mainColor:e},"04"))))};var ve=function(){var n=Cn();return i.a.createElement(r.Fragment,null,i.a.createElement(m,null),!n&&i.a.createElement(ge,{mainColor:"#4fc08d"}),i.a.createElement("div",{style:{overflow:"hidden"}},i.a.createElement(un,{mainColor:"#4fc08d"}),i.a.createElement(An,{mainColor:"#4fc08d"}),i.a.createElement(oe,{mainColor:"#4fc08d"})))};o.a.render(i.a.createElement(ve,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6d474219.chunk.js.map
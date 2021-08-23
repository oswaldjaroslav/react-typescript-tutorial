(this["webpackJsonptypescript-tutorial"]=this["webpackJsonptypescript-tutorial"]||[]).push([[0],{20:function(e,n,t){},39:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var i,r,o,c,a,d,l,u,s,p,b,f,h,j,x,m,g,O,y,v,w,T,k,C,S,z,E,A,P,F,I,D,L=t(0),N=t.n(L),R=t(11),J=t.n(R),B=(t(39),t(33)),U=t(10),M=t(4),H=(t(20),["priority1","priority2","priority3","priority4"]),Y={blueTheme:{header:"#2979ff",footer:"#2979ff",title:"blue",buttonTheme:"#2962ff",appTheme:"#bbdefb",itemTheme:"#bbdefb"},redTheme:{header:"#ff1744",footer:"#ff1744",title:"red",buttonTheme:"#d50000",itemTheme:"#ffcdd2",appTheme:"#ffcdd2"},orangeTheme:{header:"#ff9100",footer:"#ff9100",title:"orange",buttonTheme:"#ff6d00",appTheme:"#ffcc80",itemTheme:"#ffcc80"},yellowTheme:{header:"#fbc02d",footer:"#fbc02d",title:"yellow",buttonTheme:"#f57f17",appTheme:"#fff176",itemTheme:"#fff176"},purpleTheme:{header:"#d500f9",footer:"#d500f9",title:"purple",buttonTheme:"#aa00ff",appTheme:"#ce93d8",itemTheme:"#ede7f6"},greenTheme:{header:"#00e676",footer:"#00e676",title:"green",buttonTheme:"#00c853",appTheme:"#a5d6a7",itemTheme:"#e8f5e9"}},q={All:function(){return!0},Active:function(e){return!e.complete},Completed:function(e){return e.complete},Priority1:function(e){return"priority1"===e.priority},Priority2:function(e){return"priority2"===e.priority},Priority3:function(e){return"priority3"===e.priority},Priority4:function(e){return"priority4"===e.priority}},G=Object.keys(q),K=t(3),Q=t(2),V=Q.b.div(i||(i=Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),W=Q.b.button(r||(r=Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 700;\n  margin-left: 3px;\n"]))),X=Q.b.div(o||(o=Object(K.a)(["\n  font-size: 15px;\n  font-weight: 700;\n"]))),Z=Q.b.div(c||(c=Object(K.a)(["\n  border: 1px solid grey;\n  border-radius: 5px;\n  width: 250px;\n  height: 150px;\n  position: absolute;\n  margin-top: -200px;\n  display: flex;\n  flex-wrap: wrap;\n  background: white;\n"]))),$=Q.b.span(a||(a=Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50%;\n  font-size: 12px;\n"]))),_=Q.b.div(d||(d=Object(K.a)(["\n  flex: 1 0 33%;\n  margin: 3px;\n  border: 1px solid grey;\n  width: 100%;\n  border-radius: 5px;\n  cursor: pointer;\n"]))),ee=Q.b.div(l||(l=Object(K.a)(["\n  width: 100%;\n  height: 50%;\n"]))),ne=Q.b.div(u||(u=Object(K.a)(["\n  margin: 5px;\n  width: 750px;\n  height: 50px;\n  display: flex;\n  border: 1px solid transparent;\n  box-shadow: 0px 0px 10px 0px black;\n  border-radius: 5px;\n  cursor: pointer;\n  @media (max-width: 768px) {\n    display: flex;\n    width: 450px;\n  }\n  background-color: whitesmoke;\n"]))),te=Q.b.div(s||(s=Object(K.a)(["\n  width: 10%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 768px) {\n    width: 15%;\n  }\n"]))),ie=Q.b.div(p||(p=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 10%;\n  margin-right: 10px;\n  @media (max-width: 768px) {\n    display: flex;\n    margin-right: 25px;\n  }\n"]))),re=Q.b.div(b||(b=Object(K.a)(["\n  width: 70%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  @media (max-width: 768px) {\n    display: flex;\n    width: 60%;\n  }\n"]))),oe=Q.b.div(f||(f=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 10%;\n  height: 100%;\n  margin-right: 10px;\n  @media (max-width: 768px) {\n    display: flex;\n    width: 15%;\n  }\n"]))),ce=Q.b.div(h||(h=Object(K.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),ae=Q.b.div(j||(j=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 86vh;\n  margin-top: 10px;\n  overflow: scroll;\n  @media (max-width: 768px) {\n    display: flex;\n  }\n  background-color: transparent;\n"]))),de=Q.b.input(x||(x=Object(K.a)(["\n  background: transparent;\n  outline: none;\n  border-width: 0px 0px 1px;\n  font-size: 16px;\n  width: 100%;\n"]))),le=Q.b.button(m||(m=Object(K.a)(["\n  width: 35px;\n  height: 35px;\n  box-shadow: 0px 0px 10px 0px ",";\n  background: ",";\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  color: whitesmoke;\n  font-size: 15px;\n  cursor: pointer;\n  margin-left: 25%;\n"])),(function(e){return e.theme.buttonTheme}),(function(e){return e.theme.buttonTheme})),ue=Q.b.form(g||(g=Object(K.a)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  margin-top: 10px;\n"]))),se=Q.b.div(O||(O=Object(K.a)(["\n  background: ",";\n  width: 100%;\n  height: 7%;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"])),(function(e){return e.theme.header})),pe=(Q.b.textarea(y||(y=Object(K.a)(["\n  height: 50px;\n  border: 1px solid grey;\n  outline: none;\n  border-radius: 5px;\n  font-size: 15px;\n  padding: 5px;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,\n    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n"]))),Q.b.button(v||(v=Object(K.a)(["\n  border: none;\n  outline: none;\n  background: ",";\n  padding: 10px;\n  margin-right: 5px;\n  border-radius: 5px;\n  color: white;\n  font-size: 15px;\n  cursor: pointer;\n"])),(function(e){return e.theme.buttonTheme}))),be=Q.b.button(w||(w=Object(K.a)(["\n  border: none;\n  outline: none;\n  background: transparent;\n  color: grey;\n  font-size: 15px;\n  cursor: pointer;\n"]))),fe=Q.b.div(T||(T=Object(K.a)(["\n  display: flex;\n  margin-top: 10px;\n"]))),he=Q.b.div(k||(k=Object(K.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n"])),(function(e){return e.theme.appTheme})),je=Q.b.div(C||(C=Object(K.a)(["\n  width: fit-content;\n  display: flex;\n  justify-content: space-between;\n"]))),xe=Q.b.button(S||(S=Object(K.a)(["\n  margin-left: 7px;\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 700;\n"]))),me=Q.b.div(z||(z=Object(K.a)([""]))),ge=Q.b.div(E||(E=Object(K.a)(["\n  border: 1px solid grey;\n  width: fit-content;\n  height: 20px;\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  :hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.appTheme})),Oe=Q.b.div(A||(A=Object(K.a)(["\n  border: 1px solid grey;\n  border-radius: 5px;\n  position: fixed;\n  margin-top: 2px;\n  background: white;\n  cursor: pointer;\n  width: fit - content;\n  z-index: 1;\n"]))),ye=Q.b.div(P||(P=Object(K.a)(["\n  padding: 10px;\n  border-radius: 3px;\n  background: ",";\n  :hover {\n    background: ",";\n  }\n"])),(function(e){return e.isSelected&&e.theme.appTheme}),(function(e){return e.theme.appTheme})),ve=Q.b.div(F||(F=Object(K.a)(["\n  margin-top: 10px;\n"]))),we=Q.b.div(I||(I=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background: ",";\n  height: 7%;\n  position: fixed;\n  bottom: 0;\n"])),(function(e){return e.theme.footer})),Te=Q.b.span(D||(D=Object(K.a)(["\n  font-size: 20px;\n  text-align: center;\n  padding: 15px;\n  font-weight: 600;\n"]))),ke=t(29),Ce=t.n(ke),Se=t(28),ze=t.n(Se),Ee=t(27),Ae=t.n(Ee),Pe=t(18),Fe=t.n(Pe),Ie=t(30),De=t.n(Ie),Le=t(1),Ne=function(e){var n=e.onChange,t=e.value,i=N.a.useState(!1),r=Object(M.a)(i,2),o=r[0],c=r[1],a=N.a.useRef(null),d=N.a.useCallback((function(){c((function(e){return!e}))}),[c]),l=N.a.useCallback((function(){c(!1)}),[c]),u=N.a.useCallback((function(e){n(e),d()}),[n,d]),s=N.a.useCallback((function(){return H.map((function(e){return Object(Le.jsx)(ye,{onClick:function(){return u(e)},isSelected:e===t,children:e})}))}),[t,u]),p=N.a.useCallback((function(e){var n=e.currentTarget;n instanceof Node&&a.current&&!a.current.contains(n)&&l()}),[l]);return N.a.useEffect((function(){return document.addEventListener("mousedown",p),function(){document.removeEventListener("mousedown",p)}}),[p]),Object(Le.jsxs)(me,{ref:a,children:[Object(Le.jsx)(ge,{onClick:d,children:t||H[3]}),o&&Object(Le.jsx)(Oe,{children:s()})]})},Re=function(e){var n=e.todo,t=e.completeTodo,i=e.removeTodo,r=e.editTodo,o=N.a.useState(!1),c=Object(M.a)(o,2),a=(c[0],c[1]),d=N.a.useState(!1),l=Object(M.a)(d,2),u=l[0],s=l[1],p=N.a.useState(n.title),b=Object(M.a)(p,2),f=b[0],h=b[1],j=N.a.useState(n.priority),x=Object(M.a)(j,2),m=x[0],g=x[1],O=function(){s((function(e){return!e}))},y=function(e){t(e),a((function(e){return!e}))};return Object(Le.jsx)(me,{children:Object(Le.jsxs)(ne,{children:[Object(Le.jsx)(te,{children:n.complete?Object(Le.jsx)(Fe.a,{onClick:function(){return y(n)}}):Object(Le.jsx)(Ae.a,{style:{color:"priority4"===n.priority?"black":"priority3"===n.priority?"red":"priority2"===n.priority?"orange":"priority1"===n.priority?"green":void 0},onClick:function(){return y(n)}})}),Object(Le.jsx)(re,{children:u?Object(Le.jsx)(me,{style:{width:"90%",display:"flex",textDecoration:n.complete&&"3px line-through"},children:Object(Le.jsx)(de,{type:"text",value:f,onChange:function(e){h(e.target.value)},style:{textDecoration:n.complete&&"3px line-through"}})}):Object(Le.jsx)(me,{style:{textDecoration:n.complete&&"3px line-through"},children:n.title})}),Object(Le.jsx)(ie,{children:u?Object(Le.jsx)(Ne,{onChange:function(e){g(e)},value:m}):null}),Object(Le.jsxs)(oe,{children:[Object(Le.jsx)(ce,{children:u?Object(Le.jsx)(Fe.a,{style:{color:"green"},onClick:function(){return function(e){r(Object(U.a)(Object(U.a)({},e),{},{title:f,complete:e.complete,priority:m})),O()}(n)}}):Object(Le.jsx)(ze.a,{color:"primary",onClick:O})}),Object(Le.jsx)(ce,{children:u?Object(Le.jsx)(De.a,{color:"secondary",onClick:O}):Object(Le.jsx)(Ce.a,{color:"secondary",onClick:function(){return i(n.id)}})})]})]})})},Je=function(e){var n=e.todos,t=e.completeTodo,i=e.removeTodo,r=e.editTodo,o=e.filter,c=N.a.useCallback((function(){return Object(Le.jsx)(me,{children:n.filter(q[o]).map((function(e){return Object(Le.jsx)(Re,{todo:e,completeTodo:t,removeTodo:i,editTodo:r})}))})}),[o,n,t,i,r]);return N.a.useEffect((function(){c()}),[c]),Object(Le.jsx)(me,{children:n&&n.filter(q[o]).length?Object(Le.jsx)(ae,{children:c()}):Object(Le.jsx)(Te,{children:Object(Le.jsx)("div",{children:'"You have no tasks!"'})})})};function Be(e,n){var t=Object(L.useState)((function(){var t=localStorage.getItem(e);return t?JSON.parse(t).value:n})),i=Object(M.a)(t,2),r=i[0],o=i[1];return Object(L.useEffect)((function(){localStorage.setItem(e,JSON.stringify({value:r}))}),[r,e]),[r,o]}var Ue=function(e){var n=e.item,t=e.isPressed,i=e.setFilter;return Object(Le.jsx)(xe,{style:{background:t?"white":"transparent"},type:"button","aria-pressed":t,onClick:function(){return i(n)},children:n})},Me=t(31),He=t.n(Me),Ye=function(e){var n=e.theme,t=e.setTheme,i=N.a.useState(!1),r=Object(M.a)(i,2),o=r[0],c=r[1],a=N.a.useRef(null),d=N.a.useCallback((function(){c(!1)}),[]),l=N.a.useCallback((function(e){var n=e.currentTarget;n instanceof Node&&a.current&&!a.current.contains(n)&&d()}),[d]);return N.a.useEffect((function(){return document.addEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}}),[l]),Object(Le.jsxs)(V,{ref:a,children:[o?Object(Le.jsx)(Z,{children:Object.values(Y).map((function(e){return Object(Le.jsxs)(_,{style:{background:e.itemTheme},onClick:function(){return function(e){setTimeout((function(){d()}),200),t(e)}(e)},children:[Object(Le.jsx)(ee,{style:{background:e.buttonTheme}}),Object(Le.jsx)($,{children:e.title})]})}))}):null,Object(Le.jsxs)(W,{onClick:function(){c((function(e){return!e}))},style:{background:o?n.itemTheme:null},children:[Object(Le.jsx)(He.a,{}),Object(Le.jsx)(X,{children:"Themes"})]})]})},qe=t(32),Ge=t.n(qe),Ke={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:10,overflow:"visible"}},Qe=function(e){var n=e.addTodo,t=N.a.useState(!1),i=Object(M.a)(t,2),r=i[0],o=i[1],c=N.a.useState(""),a=Object(M.a)(c,2),d=a[0],l=a[1],u=N.a.useState(H[3]),s=Object(M.a)(u,2),p=s[0],b=s[1],f=function(){o((function(e){return!e}))},h=function(e){var t=p;e.preventDefault(),n(d,t),f(),l(""),b(H[3])};return Object(Le.jsxs)(me,{children:[Object(Le.jsx)(le,{onClick:f,children:"+"}),Object(Le.jsx)(Ge.a,{isOpen:r,style:Ke,overlayClassName:"overlay",children:Object(Le.jsxs)(ue,{children:[Object(Le.jsx)(de,{value:d,onChange:function(e){l(e.target.value)},placeholder:"Add task"}),Object(Le.jsx)(ve,{children:Object(Le.jsx)(Ne,{onChange:function(e){b(e)},value:p})}),Object(Le.jsxs)(fe,{children:[d?Object(Le.jsx)(pe,{onClick:h,children:"Add task"}):Object(Le.jsx)(pe,{onClick:h,disabled:!0,style:{opacity:.3},children:"Add task"}),Object(Le.jsx)(be,{onClick:f,children:"Cancel"})]})]})})]})},Ve=function(e){var n=e.children,t=e.theme;return Object(Le.jsx)(Q.a,{theme:t,children:n})},We=[{title:"todo 1",id:1,complete:!1,priority:"priority4"},{title:"todo 2",id:2,complete:!1,priority:"priority1"},{title:"todo 3",id:3,complete:!1,priority:"priority3"},{title:"todo 4",id:4,complete:!1,priority:"priority2"},{title:"todo 5",id:5,complete:!1,priority:"priority3"}],Xe=function(){var e=Be("todos",We),n=Object(M.a)(e,2),t=n[0],i=n[1],r=N.a.useState("Active"),o=Object(M.a)(r,2),c=o[0],a=o[1],d=Be("themes",Y.blueTheme),l=Object(M.a)(d,2),u=l[0],s=l[1],p=N.a.useCallback((function(){return G.map((function(e){return Object(Le.jsx)(Ue,{item:e,isPressed:e===c,setFilter:a},e)}))}),[c]),b=function(e,n){var t={title:e,id:Date.now(),complete:!1,priority:n};i((function(e){return[].concat(Object(B.a)(e),[t])}))};return Object(Le.jsx)(Ve,{theme:u,children:Object(Le.jsxs)(he,{children:[Object(Le.jsx)(se,{children:Object(Le.jsx)(Qe,{addTodo:b})}),Object(Le.jsx)(Je,{todos:t,completeTodo:function(e){i((function(n){return n.map((function(n){return n===e?Object(U.a)(Object(U.a)({},n),{},{complete:!n.complete}):n}))}))},addTodo:b,removeTodo:function(e){i((function(n){return n.filter((function(n){return n.id!==e}))}))},editTodo:function(e){i((function(n){return n.map((function(n){return n.id===e.id?e:n}))}))},filter:c}),Object(Le.jsxs)(we,{children:[Object(Le.jsx)(je,{children:p()}),Object(Le.jsx)(Ye,{theme:u,setTheme:s})]})]})})},Ze=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),o(e),c(e)}))};J.a.render(Object(Le.jsx)(N.a.StrictMode,{children:Object(Le.jsx)(Xe,{})}),document.getElementById("root")),Ze()}},[[58,1,2]]]);
//# sourceMappingURL=main.c5d5a167.chunk.js.map
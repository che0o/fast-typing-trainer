(this["webpackJsonpfast-typing-trainer"]=this["webpackJsonpfast-typing-trainer"]||[]).push([[0],{15:function(t,e,n){t.exports={text:"TextField_text__1PKp_",inputedText:"TextField_inputedText__grbCE"}},26:function(t,e,n){t.exports={logo:"Logo_logo__2LJZK"}},28:function(t,e,n){t.exports={btn:"ResetButton_btn__137xP"}},5:function(t,e,n){t.exports={header:"Layout_header__1kwmh",main_wrap:"Layout_main_wrap__1TiWp",content:"Layout_content__nl06j",result:"Layout_result__2RrI4"}},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(9),i=n.n(a),s=n(6),u=n(4),o="USER_INPUT_KEY_PRESSED",j="USER_INPUT_RESET",l={typesCount:0,startTime:null},b="TEXT_DATA_TEXT_TO_INPUT_FETCHED",d="TEXT_DATA_CORRECT_SYMBOL_ADDED",O="TEXT_DATA_INCORRECT_SYMBOL_ADDED",p="TEXT_DATA_RESET",x={inputedText:"",textToInput:"",error:!1},_=Object(s.b)({userInput:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(u.a)(Object(u.a)({},t),{},{typesCount:t.typesCount+1,startTime:t.startTime?t.startTime:new Date});case j:return l;default:return t}},textData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(u.a)(Object(u.a)({},t),{},{textToInput:e.payload});case d:var n=t.textToInput.split("");return Object(u.a)(Object(u.a)({},t),{},{inputedText:t.inputedText+n[0],textToInput:n.slice(1).join(""),error:!1});case O:return Object(u.a)(Object(u.a)({},t),{},{error:!0});case p:return x;default:return t}}}),f=n(24),T=n(2),h=n.p+"static/media/logo.6bddf015.png",v=n(26),E=n.n(v),m=n(1),y=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:h,alt:"logo",className:E.a.logo})})},g=n(5),w=n.n(g),D=n(29),N=function(t){return t.textData},I=function(t){return N(t).inputedText},C=function(t){return N(t).textToInput},S=function(t){return N(t).error},R=n(27),L=n.n(R),A=function(){var t=Object(T.b)();return{fetchText:Object(c.useCallback)((function(){L.a.get("https://fish-text.ru/get?format=json&number3").then((function(e){return t((n=e.data.text,{type:b,payload:n}));var n}))}),[t]),inputedText:Object(T.c)(I),textToInput:Object(T.c)(C)}},k=n(15),X=n.n(k),P=function(t){var e=Object(T.b)();function n(n){var c=t[0];e({type:o}),n.key===c?e({type:d}):e({type:O})}Object(c.useEffect)((function(){return window.addEventListener("keypress",n),function(){window.removeEventListener("keypress",n)}}),[n])},M=function(){var t=A(),e=t.inputedText,n=t.textToInput,r=t.fetchText;Object(c.useEffect)((function(){r()}),[r]);var a=Object(D.a)(n),i=a[0],s=a.slice(1);P(n);var u=Object(T.c)(S);return Object(m.jsxs)("div",{className:X.a.text,children:[Object(m.jsx)("span",{className:X.a.inputedText,children:e}),Object(m.jsx)("span",{style:{backgroundColor:u?"red":"green",color:"white"},children:i}),s.join("")]})},U=n(30),F=function(t){return t.userInput},B=function(t){return F(t).typesCount},J=function(t){var e;return null!==(e=F(t).startTime)&&void 0!==e?e:new Date},K=function(){var t=function(){var t=Object(c.useState)(0),e=Object(U.a)(t,2),n=e[0],r=e[1],a=Object(T.c)(I).length,i=Object(T.c)(J);return Object(c.useEffect)((function(){var t=setInterval((function(){var t=new Date;r(a/((t-i)/6e4))}),300);return function(){clearInterval(t)}}),[a,i]),Math.floor(n)}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"}),Object(m.jsxs)("span",{children:[t," \u0437\u043d./\u043c\u0438\u043d."]})]})},Y=n(28),V=n.n(Y),H=function(){var t=Object(T.b)(),e=A().fetchText;return Object(c.useCallback)((function(n){n.target.blur(),t({type:j}),t({type:p}),e()}),[t,e])},W=function(){var t=H();return Object(m.jsx)("button",{onClick:t,className:V.a.btn,children:"\u0417\u0430\u043d\u043e\u0432\u043e"})},Z=function(){var t=function(){var t=Object(T.c)(B),e=Object(T.c)(I).length;return 0===t?100:Math.floor(e/t*100)}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c"}),Object(m.jsxs)("span",{children:[t," %"]})]})},q=function(t){t.dispatch,t.state;return Object(m.jsxs)("div",{className:w.a.wrap,children:[Object(m.jsx)("div",{className:w.a.header,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(y,{}),Object(m.jsx)("div",{children:"Fast Typing Trainer"})]})}),Object(m.jsx)("main",{className:w.a.main,children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:w.a.main_wrap,children:Object(m.jsxs)("div",{className:w.a.content,children:[Object(m.jsx)(M,{}),Object(m.jsxs)("div",{className:w.a.result,children:[Object(m.jsx)(K,{}),Object(m.jsx)(Z,{}),Object(m.jsx)(W,{})]})]})})})})]})},z=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(q,{})})},G=(n(60),function(){var t=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.c)(Object(s.a)(f.a));return Object(s.d)(_,t)}());var Q=function(){return Object(m.jsx)(T.a,{store:G,children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(z,{})})})};n(61);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.672feeca.chunk.js.map
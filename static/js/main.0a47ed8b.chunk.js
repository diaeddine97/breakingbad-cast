(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(14),i=c.n(s),j=c(5),d=c.n(j),b=c(15),o=c(3),u=c(16),l=c.n(u),O=(c(40),c.p+"static/media/logo.e6ecab44.png"),h=function(){return Object(n.jsx)("header",{className:"center",children:Object(n.jsx)("img",{src:O,alt:""})})},x=function(e){var t=e.item;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-inner",children:[Object(n.jsx)("div",{className:"card-front",children:Object(n.jsx)("img",{src:t.img})}),Object(n.jsxs)("div",{className:"card-back",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},m=c.p+"static/media/spinner.11d9cde8.gif",p=function(){return Object(n.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},f=function(e){var t=e.items;return e.isLoading?Object(n.jsx)(p,{}):Object(n.jsx)("section",{className:"cards",children:t.map((function(e){return Object(n.jsx)(x,{item:e,children:" "},e.char_id)}))})},g=function(e){var t=e.getQuery,c=Object(r.useState)(""),a=Object(o.a)(c,2),s=a[0],i=a[1];return Object(n.jsx)("section",{className:"search",children:Object(n.jsx)("form",{children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:s,onChange:function(e){return c=e.target.value,i(c),void t(c);var c},autoFocus:!0})})})},v=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!0),i=Object(o.a)(s,2),j=i[0],u=i[1],O=Object(r.useState)(""),x=Object(o.a)(O,2),m=x[0],p=x[1];return Object(r.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://www.breakingbadapi.com/api/characters?name=".concat(m));case 2:t=e.sent,a(t.data),u(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(h,{}),Object(n.jsx)(g,{getQuery:function(e){return p(e)}}),Object(n.jsx)(f,{isLoading:j,items:c})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0a47ed8b.chunk.js.map
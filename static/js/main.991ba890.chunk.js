(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),s=n.n(a),o=(n(36),n(37),n(9)),i=(n(43),n(44),n(1)),u=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"header__container",children:Object(i.jsx)("img",{src:"./image/International_Pok\xe9mon_logo.svg.png",alt:"logo-pockemon",className:"header__logo-image"})})})},l=n(2),p=n.n(l),m=n(4),j=n(5),b=n(30),f=n.n(b),d=n(18),h=n.n(d),O=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v="SET_POCKEMONS",k=(n(71),n(72),function(e){var t=e.pockemon;return Object(i.jsxs)("div",{className:"pockemon-info",children:[Object(i.jsx)("h3",{className:"pockemon-info__title",children:"Pockemon details:"}),Object(i.jsx)("section",{className:"pockemon-info__post",children:Object(i.jsx)("h2",{children:t.name})}),Object(i.jsx)("section",{children:Object(i.jsx)("img",{src:t.info.sprites,alt:"pockemon"})}),Object(i.jsxs)("section",{className:"pockemon-info__type",children:[Object(i.jsx)("h3",{className:"pockemon-info__type-title",children:"Type:"}),t.info.types.map((function(e){return Object(i.jsx)("p",{className:"pockemon-info__type-name button is-warning",children:e.type.name},e.type.name)}))]}),Object(i.jsxs)("section",{className:"pockemon-info__comments",children:[Object(i.jsx)("p",{className:"pockemon-info__stat",children:"Stats:"}),Object(i.jsx)("ol",{children:t.info.stats.map((function(e){return Object(i.jsx)("li",{className:"pockemon-info__stats",children:"".concat(e.stat.name," - ").concat(e.base_stat)},e.stat.name)}))})]}),Object(i.jsxs)("section",{className:"pockemon-info__moves",children:[Object(i.jsx)("p",{className:"pockemon-info__moves-title",children:"Moves:"}),Object(i.jsx)("ol",{children:t.info.moves.map((function(e){return Object(i.jsx)("li",{children:e.move.name},e.move.name)}))})]})]})}),y=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),u=Object(j.a)(s,2),l=u[0],b=u[1],d=Object(c.useState)(""),h=Object(j.a)(d,2),y=h[0],_=h[1],N=Object(c.useState)(""),w=Object(j.a)(N,2),g=w[0],C=w[1],S=Object(c.useState)([]),P=Object(j.a)(S,2),E=P[0],L=P[1],M=Object(c.useState)(null),T=Object(j.a)(M,2),I=T[0],J=T[1],q=Object(o.c)(function(e,t){return function(n){return n.pockemons.filter((function(n){return t?n.name.toLowerCase().includes(e.toLowerCase())&&n.info.types.some((function(e){return e.type.name===t})):n.name.toLowerCase().includes(e.toLowerCase())}))}}(r,l));Object(c.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("https://pokeapi.co/api/v2/pokemon/");case 3:return t=e.sent,_(t.next),C(t.previous),e.next=8,B(t.results);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Eror try later");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var B=function(){var t=Object(m.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(n.map(function(){var e=Object(m.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.url);case 2:return n=e.sent,c={name:t.name,url:t.url,info:{sprites:n.sprites.front_default,moves:n.moves,stats:n.stats,types:n.types}},e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return c=t.sent,e({type:v,payload:c}),t.next=6,D(c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.forEach((function(e){e.info.types.forEach((function(e){n.includes(e.type.name)||n.push(e.type.name)}))})),L(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,O(y);case 4:return t=e.sent,e.next=7,B(t.results);case 7:_(t.next),C(t.previous),b("");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,O(g);case 4:return t=e.sent,e.next=7,B(t.results);case 7:_(t.next),C(t.previous),b("");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"pockemon-container",children:[Object(i.jsxs)("div",{className:"pockemon-list",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{type:"button",className:"button is-link",onClick:K,disabled:""===g,children:"Previous Page"}),Object(i.jsx)("button",{type:"button",className:"button is-primary",onClick:F,disabled:""===y,children:"Next Page"})]}),Object(i.jsxs)("div",{className:"option-container",children:[Object(i.jsx)("input",{type:"text",name:"query",className:"input",placeholder:"Type search word",value:r,onChange:function(e){return a(e.target.value)}}),Object(i.jsxs)("select",{className:"input",value:l,onChange:function(e){return b(e.target.value)},children:[Object(i.jsx)("option",{value:"",children:"Chose type to sort Pockemons"}),E.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))]})]}),Object(i.jsx)("ul",{className:"pockemon-list__list",children:q.map((function(e){return Object(i.jsxs)("li",{className:"pockemon-list__item",children:[Object(i.jsxs)("div",{className:"pockemon-list__title",children:["Pockemon name:",Object(i.jsx)("b",{className:"pockemon-list__name",children:" ".concat(e.name)})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"button",className:f()("button is-primary",{"is-danger":(null===I||void 0===I?void 0:I.name)===e.name}),onClick:function(){!function(e){e.name===(null===I||void 0===I?void 0:I.name)?J(null):J(e)}(e)},children:(null===I||void 0===I?void 0:I.name)===e.name?"Close":"More Details"})})]},e.name)}))})]}),I&&Object(i.jsx)(k,{pockemon:I})]})},_=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(y,{})]})},N=n(13),w=n(7),g=n(31),C={pockemons:[]},S=Object(g.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(w.a)(Object(w.a)({},e),{},{pockemons:Object(N.a)(t.payload)});default:return e}}));s.a.render(Object(i.jsx)(o.a,{store:S,children:Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(_,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.991ba890.chunk.js.map
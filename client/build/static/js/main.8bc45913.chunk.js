(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{83:function(e,t,a){"use strict";a.r(t);var n,i,r,c=a(1),s=a.n(c),o=a(62),l=a.n(o),u=a(8),j=a(23),d=a(5),m=a(70),b=a(96),p=a(98),O=a(95),h=a(68),g=a(50),x=a(3),v={body:{background:"#EE4E34"},card:{margin:20,background:"#e8eaf6"},heading:{background:"#3f51b5",minHeight:50,lineHeight:3.5,fontSize:"1.2rem",color:"white",padding:"0 20px"},content:{padding:20}},f=function(){return Object(x.jsx)("main",{children:Object(x.jsxs)("div",{style:v.card,children:[Object(x.jsx)("div",{style:v.heading,children:"Lorem ipsum dolor"}),Object(x.jsx)("div",{style:v.content,children:"`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`"})]})})},k=a(100),y=a(38),w=a(97),N=Object(w.a)(n||(n=Object(y.a)(["\nquery Me {\n  me {\n    _id\n    username\n    email\n  }\n}\n"]))),q=function(){var e=Object(k.a)(N),t=e.loading,a=e.data;if(t)return Object(x.jsx)(x.Fragment,{children:"Loading..."});var n=(null===a||void 0===a?void 0:a.me)||{};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{children:"Profile Page"}),"Id: ",n._id,Object(x.jsx)("br",{}),"Email: ",n.email,Object(x.jsx)("br",{}),"Username: ",n.username]})},S=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:"Page not found"})})},L=a(33),I=a(44),$=a(15),_=a(11),F=a(93),E=Object(w.a)(i||(i=Object(y.a)(["\nmutation AddUser($username: String!, $email: String!, $password: String!) {\n  addUser(username: $username, email: $email, password: $password) {\n    token\n    user {\n      _id\n      username\n      email\n    }\n  }\n}"]))),C=Object(w.a)(r||(r=Object(y.a)(["\nmutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      _id\n      username\n      email\n    }\n  }\n}"]))),U=a(64),P=a(65),T=a(55),Y=new(function(){function e(){Object(U.a)(this,e)}return Object(P.a)(e,[{key:"getProfile",value:function(){return Object(T.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(T.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),D=function(e){var t=Object(c.useState)({email:"",password:""}),a=Object(_.a)(t,2),n=a[0],i=a[1],r=Object(F.a)(C),s=Object(_.a)(r,2),o=s[0],l=s[1],d=l.error,m=l.data,b=function(e){var t=e.target,a=t.name,r=t.value;i(Object(u.a)(Object(u.a)({},n),{},Object($.a)({},a,r)))},p=function(){var e=Object(I.a)(Object(L.a)().mark((function e(t){var a,r;return Object(L.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,o({variables:Object(u.a)({},n)});case 5:a=e.sent,r=a.data,Y.login(r.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:i({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(x.jsx)("div",{className:"col-12 col-lg-10",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Login"}),Object(x.jsxs)("div",{className:"card-body",children:[m?Object(x.jsxs)("p",{children:["Success! You may now head"," ",Object(x.jsx)(j.b,{to:"/",children:"back to the homepage."})]}):Object(x.jsxs)("form",{onSubmit:p,children:[Object(x.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:b}),Object(x.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:n.password,onChange:b}),Object(x.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),d&&Object(x.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:d.message})]})]})})})},H=function(){var e=Object(c.useState)({username:"",email:"",password:""}),t=Object(_.a)(e,2),a=t[0],n=t[1],i=Object(F.a)(E),r=Object(_.a)(i,2),s=r[0],o=r[1],l=o.error,d=o.data,m=function(e){var t=e.target,i=t.name,r=t.value;n(Object(u.a)(Object(u.a)({},a),{},Object($.a)({},i,r)))},b=function(){var e=Object(I.a)(Object(L.a)().mark((function e(t){var n,i;return Object(L.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,s({variables:Object(u.a)({},a)});case 5:n=e.sent,i=n.data,Y.login(i.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(x.jsx)("div",{className:"col-12 col-lg-10",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Sign Up"}),Object(x.jsxs)("div",{className:"card-body",children:[d?Object(x.jsxs)("p",{children:["Success! You may now head"," ",Object(x.jsx)(j.b,{to:"/",children:"back to the homepage."})]}):Object(x.jsxs)("form",{onSubmit:b,children:[Object(x.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"text",value:a.name,onChange:m}),Object(x.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:a.email,onChange:m}),Object(x.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:a.password,onChange:m}),Object(x.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),l&&Object(x.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:l.message})]})]})})})},z=a(19),B={Nav:{background:"#f3233a"},NavLink:{color:"#F5F8F7"}},J=function(){return Object(x.jsxs)(z.a,{style:B.Nav,className:"justify-content-end me-auto",expand:"lg",children:[Object(x.jsx)(z.a.Item,{children:Object(x.jsx)(z.a.Link,{style:B.NavLink,as:j.b,to:"/",children:"Home"})}),Object(x.jsx)(z.a.Item,{children:Object(x.jsx)(z.a.Link,{style:B.NavLink,as:j.b,to:"/profile",children:"Profile"})}),Y.loggedIn()?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(z.a.Item,{children:Object(x.jsx)(z.a.Link,{style:B.NavLink,onClick:function(e){e.preventDefault(),Y.logout()},children:"Logout"})})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z.a.Item,{children:Object(x.jsx)(z.a.Link,{style:B.NavLink,as:j.b,to:"/login",children:"Login"})}),Object(x.jsx)(z.a.Item,{children:Object(x.jsx)(z.a.Link,{style:B.NavLink,as:j.b,to:"/signup",children:"Signup"})})]})]})},M=Object(m.a)({uri:"/graphql"}),A=Object(h.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(u.a)(Object(u.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),Q=new b.a({link:A.concat(M),cache:new p.a});var G=function(){return Object(x.jsx)(O.a,{client:Q,children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(J,{}),Object(x.jsx)(g.a,{children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",element:Object(x.jsx)(f,{})}),Object(x.jsx)(d.a,{path:"/profile",element:Object(x.jsx)(q,{})}),Object(x.jsx)(d.a,{path:"/login",element:Object(x.jsx)(D,{})}),Object(x.jsx)(d.a,{path:"/signup",element:Object(x.jsx)(H,{})}),Object(x.jsx)(d.a,{path:"*",element:Object(x.jsx)(S,{})})]})})]})})};a(82);l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(G,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.8bc45913.chunk.js.map
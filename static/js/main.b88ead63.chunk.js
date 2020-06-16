(this["webpackJsonpecommerce-front-end"]=this["webpackJsonpecommerce-front-end"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=a(4),s=a(5),i=a(9),m=a(1),u=a(2),d="http://localhost:8000/api",p=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},f=function(e,t){return e.location.pathname==t?{color:"#cc5939"}:{color:"#ffffff"}},E=Object(s.g)((function(e){var t=e.history;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-dark"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/onlineshopping"),to:"/onlineshopping"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/onlineshopping/shop"),to:"/onlineshopping/shop"},"Shop")),p()&&0===p().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/onlineshopping/user/dashboard"),to:"/onlineshopping/user/dashboard"},"Dashboard")),p()&&1===p().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/onlineshopping/admin/dashboard"),to:"/onlineshopping/admin/dashboard"},"Dashboard")),!p()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/onlineshopping/Signin"),to:"/onlineshopping/Signin"},"Signin")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/onlineshopping/Signup"),to:"/onlineshopping/Signup"},"Signup"))),p()&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(d,"/signout"),{method:"GET"}).then((function(e){console.log("signout",e)})).catch((function(e){return console.log(e)}))}((function(){t.push("/onlineshopping/")}))}},"Signout"))))})),b=(a(36),function(e){var t=e.title,a=void 0===t?"Title":t,n=e.description,c=void 0===n?"description":n,o=e.className,l=e.children;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h2",null,a),r.a.createElement("p",{className:"lead"},c)),r.a.createElement("div",{className:o},l))}),h=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.name,s=a.email,p=a.password,f=a.success,E=a.error,h=function(e){return function(t){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({error:!1},e,t.target.value)))}},g=function(e){var t;e.preventDefault(),c(Object(m.a)(Object(m.a)({},a),{},{error:!1})),(t={name:o,email:s,password:p},fetch("".concat(d,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error,success:!1})):c(Object(m.a)(Object(m.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0}))}))};return r.a.createElement(b,{title:"Sign Up",description:"Create your account to Sign up Today!",className:"container col-md-8 offset-md-2"},r.a.createElement("div",{className:"alert alert-danger",style:{display:f?"":"none"}},"New account is created. Please ",r.a.createElement(l.b,{to:"/onlineshopping/signin"},"Sign In")," with your new login!"),r.a.createElement("div",{className:"alert alert-danger",style:{display:E?"":"none"}},E),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:h("name"),type:"text",className:"form-control",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:h("email"),type:"email",className:"form-control",value:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:h("password"),type:"password",className:"form-control",value:p})),r.a.createElement("button",{onClick:g,className:"btn btn-primary"},"Submit")))},g=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,redirectToReferrer:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.email,l=a.password,f=a.loading,E=a.error,h=a.redirectToReferrer,g=p().user,N=function(e){return function(t){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({error:!1},e,t.target.value)))}},v=function(e){e.preventDefault(),c(Object(m.a)(Object(m.a)({},a),{},{error:!1,loading:!0})),function(e){return fetch("".concat(d,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({email:o,password:l}).then((function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){c(Object(m.a)(Object(m.a)({},a),{},{redirectToReferrer:!0}))}))}))};return r.a.createElement(b,{title:"Sign In",description:"Sign into your existing E-Commerce Account!",className:"container col-md-8 offset-md-2"},f&&r.a.createElement("div",{className:"alert alert-info"},r.a.createElement("h2",null,"Loading ...")),r.a.createElement("div",{className:"alert alert-danger",style:{display:E?"":"none"}},E),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:N("email"),type:"email",className:"form-control",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:N("password"),type:"password",className:"form-control",value:l})),r.a.createElement("button",{onClick:v,className:"btn btn-primary"},"Submit")),h?g&&1===g.role?r.a.createElement(s.a,{to:"/onlineshopping/admin/dashboard"}):r.a.createElement(s.a,{to:"/onlineshopping/user/Dashboard"}):p()?r.a.createElement(s.a,{to:"/"}):void 0)},N=a(24),v=a.n(N),y=function(e){return fetch("".concat(d,"/products?sortBy=").concat(e,"&order=desc&limit=6"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},j=function(){return fetch("".concat(d,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},O=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={limit:t,skip:e,filters:a};return fetch("".concat(d,"/products/by/search"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},S=function(e){var t=e.item,a=e.url;return r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:"".concat(d,"/").concat(a,"/photo/").concat(t._id),alt:t.name,className:"mb-3",style:{maxHeight:"100%",maxWidth:"100%"}}))},w=function(e){var t=e.product;return r.a.createElement("div",{className:"col-4 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},t.name),r.a.createElement("div",{className:"card-body"},r.a.createElement(S,{item:t,url:"product"}),r.a.createElement("p",null,t.description.substring(0,100)),r.a.createElement("p",null,"$",t.price),r.a.createElement(l.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-primary mt-2 mb-2 mr-2"},"View Product")),r.a.createElement("button",{className:"btn btn-outline-warning mt-2 mb-2"},"Add Product to Cart"))))},C=function(){var e=Object(n.useState)({categories:[],category:"",search:"",results:[],searched:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.categories,l=a.category,s=a.search,p=a.results;a.searched;Object(n.useEffect)((function(){j().then((function(e){e.error?console.log(e.error):c(Object(m.a)(Object(m.a)({},e),{},{categories:e}))}))}),[]);var f=function(){s&&function(e){var t=v.a.stringify(e);return console.log("query",t),fetch("".concat(d,"/products/search?").concat(t),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({search:s||void 0,category:l}).then((function(e){e.error?console.log(e.error):c(Object(m.a)(Object(m.a)({},a),{},{results:e,searched:!0}))}))},E=function(e){e.preventDefault(),f()},b=function(e){return function(t){var n;c(Object(m.a)(Object(m.a)({},a),{},(n={},Object(i.a)(n,e,t.target.value),Object(i.a)(n,"searched",!1),n)))}};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container mb-3"},r.a.createElement("form",{onSubmit:E},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("select",{className:"btn mr-2",onChange:b("category")},r.a.createElement("option",{value:"All"},"All"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)})))),r.a.createElement("input",{type:"search",className:"form-control",onChange:b("search"),placeholder:"Search by Name"})),r.a.createElement("div",{className:"btn input-group-append",style:{border:"none"}},r.a.createElement("button",{className:"input-group-text"},"Search"))))),r.a.createElement("div",{className:"container-fluid mb-3"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.a.createElement("div",{className:"row"},e.map((function(e,t){return r.a.createElement(w,{key:t,product:e})})))}(p)))},k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),s=l[0],i=l[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=(d[0],d[1]);return Object(n.useEffect)((function(){y("sold").then((function(e){e.error?p(e.error):c(e)})),y("createdAt").then((function(e){e.error?p(e.error):i(e)}))}),[]),r.a.createElement(b,{title:"Home Page",description:"Node React E-commerce App",className:"container-fluid"},r.a.createElement(C,null),r.a.createElement("h2",{className:"mb-4"},"New Arrivals"),r.a.createElement("div",{className:"row"},s.map((function(e,t){return r.a.createElement(w,{key:t,product:e})}))),r.a.createElement("h2",{className:"mb-4"},"Best Sellers"),r.a.createElement("div",{className:"row"},a.map((function(e,t){return r.a.createElement(w,{key:t,product:e})}))))},x=a(15),P=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return p()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},A=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return p()&&1==p().user.role?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},T=function(){var e=p().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(b,{title:"Dashboard",description:"Hey ".concat(t),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"User Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/cart"},"My Cart")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/profile/update"},"Update Profile"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"User Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))),r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Purchase History"),r.a.createElement("ul",{className:"list-group-item"},r.a.createElement("li",{className:"list-group-item"},"history"))))))},_=function(){var e=p().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(b,{title:"Admin Dashboard",description:"Hey ".concat(t),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Admin Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/create/category"},"Create Category")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/create/product"},"Create Product"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Admin Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))))))},D=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],f=Object(n.useState)(!1),E=Object(u.a)(f,2),h=E[0],g=E[1],N=p(),v=N.user,y=N.token,j=function(e){m(""),g(""),c(e.target.value)},O=function(e){e.preventDefault(),m(""),g(!1),function(e,t,a){return fetch("".concat(d,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(v._id,y,{name:a}).then((function(e){e.error?m(!0):(m(""),g(!0))}))};return r.a.createElement(b,{title:"Add a new Category",description:"Hey ".concat(v.name,", ready to add a new category?"),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(h)return r.a.createElement("h3",{className:"text-success"},a," is created")}(),function(){if(i)return r.a.createElement("h3",{className:"text-danger"},"Category is not unique")}(),r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",onChange:j,value:a,autoFocus:!0,required:!0})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Create Category")),r.a.createElement("div",{className:"mt-5"},r.a.createElement(l.b,{to:"/admin/dashboard",className:"text-warning"},"Back to Dashboard")))))},I=function(){var e=Object(n.useState)({name:"",description:"",price:"",categories:[],category:"",shipping:"",quantity:"",photo:"",loading:!1,error:"",createdProduct:"",redirectToProfile:!1,formData:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=p(),l=o.user,s=o.token,f=a.name,E=a.description,h=a.price,g=a.categories,N=(a.category,a.shipping,a.quantity),v=a.loading,y=a.error,j=a.createdProduct,O=(a.redirectToProfile,a.formData),S=function(){fetch("".concat(d,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error})):c(Object(m.a)(Object(m.a)({},a),{},{categories:e,formData:new FormData}))}))};Object(n.useEffect)((function(){S()}),[]);var w=function(e){return function(t){var n="photo"===e?t.target.files[0]:t.target.value;O.set(e,n),c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e,n)))}},C=function(e){e.preventDefault(),c(Object(m.a)(Object(m.a)({},a),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(d,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(l._id,s,O).then((function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error})):c(Object(m.a)(Object(m.a)({},a),{},{name:"",description:"",photo:"",price:"",quantity:"",loading:!1,createdProduct:e.name}))}))};return r.a.createElement(b,{title:"Add a new Product",description:"Hey ".concat(l.name,", ready to add a new Product?"),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},v&&r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"alert alert-success",style:{display:j?"":"none"}},r.a.createElement("h2",null,"".concat(j)," has been created!!")),r.a.createElement("div",{className:"alert alert-danger",style:{display:y?"":"none"}},y),r.a.createElement("form",{className:"mb=3",onSubmit:C},r.a.createElement("h4",null,"Post Photo"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"btn btn-secondary"},r.a.createElement("input",{onChange:w("photo"),type:"file",name:"photo",accept:"image/*"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:w("name"),type:"text",className:"form-control",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Description"),r.a.createElement("textarea",{onChange:w("description"),className:"form-control",value:E})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Price"),r.a.createElement("input",{onChange:w("price"),type:"number",className:"form-control",value:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Category"),r.a.createElement("select",{onChange:w("category"),className:"form-control"},r.a.createElement("option",null," --Please Select Category--"),g&&g.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Shipping"),r.a.createElement("select",{onChange:w("shipping"),className:"form-control"},r.a.createElement("option",null,"--Please Select--"),r.a.createElement("option",{value:"0"},"No"),r.a.createElement("option",{value:"1"},"Yes"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Quantity"),r.a.createElement("input",{onChange:w("quantity"),type:"number",className:"form-control",value:N})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Create Product")))))},F=a(13),$=function(e){var t=e.categories,a=e.handleFilters,c=Object(n.useState)([]),o=Object(u.a)(c,2),l=o[0],s=o[1],i=function(e){return function(){var t=l.indexOf(e),n=Object(F.a)(l);-1===t?n.push(e):n.splice(t,1),s(n),a(n)}};return t.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-unstyled"},r.a.createElement("input",{onChange:i(e._id),value:l.indexOf(-1===e._id),type:"checkbox",className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label"},e.name))}))},H=function(e){var t=e.prices,a=e.handleFilters,c=Object(n.useState)(0),o=Object(u.a)(c,2),l=(o[0],o[1]),s=function(e){a(e.target.value),l(e.target.value)};return t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("input",{onChange:s,value:"".concat(e._id),name:e,type:"radio",className:"mr-2 ml-4"}),r.a.createElement("label",{className:"form-check-label"},e.name))}))},J=[{_id:0,name:"Any",array:[]},{_id:1,name:"$0 to $49",array:[0,49]},{_id:2,name:"$50 to 99",array:[50,99]},{_id:3,name:"$100 to $149",array:[100,149]},{_id:4,name:"$150 to $200",array:[150,200]},{_id:5,name:"More than $200",array:[200,1e4]}],q=a(40),B=function(){var e=Object(n.useState)({filters:{category:[],price:[]}}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),s=l[0],i=l[1],d=Object(n.useState)(!1),p=Object(u.a)(d,2),f=(p[0],p[1]),E=Object(n.useState)(6),h=Object(u.a)(E,2),g=h[0],N=(h[1],Object(n.useState)(0)),v=Object(u.a)(N,2),y=v[0],S=v[1],C=Object(n.useState)(0),k=Object(u.a)(C,2),x=k[0],P=k[1],A=Object(n.useState)([]),T=Object(u.a)(A,2),_=T[0],D=T[1];Object(n.useEffect)((function(){I(),R(y,g,a.filters)}),[]);var I=function(){j().then((function(e){e.error?f(e.error):i(e)}))},B=function(e){var t=y+g;O(t,g,a.filters).then((function(e){e.error?f(e.error):(D([].concat(Object(F.a)(_),Object(F.a)(e.data))),P(e.size),S(t))}))},R=function(e){O(y,g,e).then((function(e){e.error?f(e.error):(D(e.data),P(e.size),S(0))}))},U=function(e,t){var n=Object(m.a)({},a);if(n.filters[t]=e,"price"==t){var r=z(e);n.filters[t]=r}R(a.filters),c(n)},z=function(e){var t=J,a=[];for(var n in t)t[n]._id===parseInt(e)&&(a=t[n].array);return a};return r.a.createElement(b,{title:"Shop Page",description:"Search and find books of your choice",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("h4",null,"Filter by Categories"),r.a.createElement("ul",null,r.a.createElement($,{categories:s,handleFilters:function(e){return U(e,"category")}})),r.a.createElement("h4",null,"Filter by Price"),r.a.createElement("div",null,r.a.createElement(H,{prices:J,handleFilters:function(e){return U(e,"price")}}))),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"mb-4"},"Products"),r.a.createElement("div",{className:"row"},_.map((function(e,t){return r.a.createElement(w,{key:t,product:e})}))),r.a.createElement("hr",null),x>0&&x>=g&&r.a.createElement(q.a,{onClick:B,variant:"primary",size:"lg",className:"btn btn-warning mb-5",block:!0},"Load More"))))},R=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/onlineshopping",exact:!0,component:k}),r.a.createElement(s.b,{path:"/onlineshopping/shop",exact:!0,component:B}),r.a.createElement(s.b,{path:"/onlineshopping/signin",exact:!0,component:g}),r.a.createElement(s.b,{path:"/onlineshopping/signup",exact:!0,component:h}),r.a.createElement(P,{path:"/onlineshopping/user/dashboard",exact:!0,component:T}),r.a.createElement(A,{path:"/onlineshopping/admin/dashboard",exact:!0,component:_}),r.a.createElement(A,{path:"/onlineshopping/create/category",exact:!0,component:D}),r.a.createElement(A,{path:"/onlineshopping/create/product",exact:!0,component:I}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b88ead63.chunk.js.map
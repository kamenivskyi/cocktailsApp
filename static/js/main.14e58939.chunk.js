(this["webpackJsonpcocktail-app"]=this["webpackJsonpcocktail-app"]||[]).push([[0],{25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEhElEQVRYR+1XbUzVZRT/nf/9X+69IHBBkHcB402D0qJcuWWsmqvNPqQRA6tFdW8txc21cUFLMhOSGptvgMpaIi/hctRqs7m1FdkHhsswRDAgJSjkRV7v+/9/2r28BEjcC0WfeL6e5znnd37nnN/zPIQlWLo1fqvB9KUMHD3dMVA2XwhagvjQRfmXgSiTGfmnfuvP/V8B6Nf4xDIrrwG4DZLXnWy/M7QkAJhZAOBgkIlIngzyevTKswRkMPiFUx0DNa4YnrMEdY2NfmpxRTLAiQTEAohgIJgAPwA+YHiBIE4CAMMGYKyvrXn4/O6Xo8PWP2R75uCx04IgtMigXzTSWENiYuLoXGCmADgyutzckQnwayBKBrPCFfrZ9ouHDOhs+BHPF1fDOyh0utkG0CWCXPLgupjPphumADQ03dgDEj5WCAIC/XxgtFgxajRBlnleHJJsR9dgC0Z7/8QP2XuxccdbuH/7i84zHkoRXhoVvNQq9A2NwmyxQganPTwNxBSAb76rj2CFoi46PDgyLnIcPTPDbLHBZLHCbLXBarPDLkmQZNlps8s2fN9SAbN9CN4aPwTYtdiUnAZPTw3UKiVExd8k3vyjF9fbO38ymu1PPffkxv7JrGb0wMHjVREqlXAxKiwoPjkpAYH+vtCoVBCEhU+rxWpzsjg4PIqGxuvo7L5dZ5Ow1aBPnTEVd3kuLD6zSiLxgtJD3HDf2lj4a32dVKo8RHiIIkRRAUeZiAjdg63o7G+G2WbEiGkIg8Z+aNVheGD1s87SjRlNuNLUArPZcsGEkW15er1xdj3nTC2v6BOtSqP+SiFgU0JsNEKDAufsg57hdlTXHwDz1BTiibWvICk8BQODw2hsboXdLtV6WvrSsrKyLPNOwWxjYeEZL8lX/ByMLZHhIYiJinBmPXudO7oT0gZ/iGo14oMfQVL44+ju6UPzjQ4HC1WW+JCX8lJS7P/UyfMWd9eRI6owVUAFgG0B/lokJsTMaKyuK/VorK3C03lFE00LtN/6HR23ugCisstahf5caqr0r5SwpqZG0XbHfpKATC9PDdbfGweNWu30+fXenXgsK9c587Iso6m1HT29/ZCZj+fo03cR0fwzPKFkrvWGmQpKKw+D6G2lUoSjOVd4iLhZX4eYzVtgtdrw87VWDI2MAiQcNujSDI4pdu14XMvdXvklZ3OIhA+IiGKiIxCyKgBjYyY0tbaNiwzjQO4b6fvddug2A9M85pdU6IjoBIDpUs0MZOfo0wsXEtyxd0EMTDovKK5MhYByh9oCkAm8O1ufcWyhwRcNwHGwoLTyEoBHGejK0aeHLyb4MoBlBpYZWGZgUQy8X1p9jyjL75CADMD5NHc8D2uJ5P0G/Y6rCxUkt6W4qLQ8xErCu8x4FSDlHIEkZi6XWLlv35upXe4CcQmAHVdxSeV7pKA9zg+J6zUG4jyDLuMj11vduIw+LCvzZrumE4CvOw7H9/CvBl16HP6rB8mhT8+vFIzm7aTAZmaKBzgUYB8QiRPfsiEGHCCvgvGthby/yNNvvesFPFcCfwGX7ugw13DavgAAAABJRU5ErkJggg=="},26:function(e,t,a){e.exports=a(42)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),i=a(9),l=a(5),o=a(1),m=a(12),u=function(e){var t=e.type,a=e.children,n=Object(m.a)(e,["type","children"]);return r.a.createElement("button",Object.assign({type:t},n),a)};u.defaultProps={type:"button"};var d=a(4),g=a.n(d),p=a(11),f=a(13),E=a(14),v=new(function(){function e(){var t=this;Object(f.a)(this,e),this._apiBase="https://www.thecocktaildb.com/api/json/v1/1",this.getRandom=Object(p.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._getResource("/random.php");case 2:return a=e.sent,e.abrupt("return",t._normalizeDrinkObject(a.drinks[0]));case 4:case"end":return e.stop()}}),e)}))),this.getDrinkById=function(){var e=Object(p.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._getResource("/lookup.php?i=".concat(a));case 2:return n=e.sent,e.abrupt("return",t._normalizeDrinkObject(n.drinks[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getDrinksByName=function(){var e=Object(p.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._getResource("/search.php?s=".concat(a));case 2:return n=e.sent,e.abrupt("return",n.drinks.map((function(e){return t._normalizeDrinkObject(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCategories=Object(p.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._getResource("/list.php?c=list");case 2:return a=e.sent,e.abrupt("return",a.drinks.map((function(e){return t._normalizeCategory(e)})));case 4:case"end":return e.stop()}}),e)}))),this.getCategoryDrinks=function(){var e=Object(p.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._getResource("/filter.php?c=".concat(a));case 2:return n=e.sent,e.abrupt("return",n.drinks.map((function(e){return t._normalizeDrinkObject(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._normalizeCategory=function(e){return{category:e.strCategory}},this._normalizeDrinkObject=function(e){var a=e.idDrink,n=e.strDrink,r=e.strInstructions,c=e.strDrinkThumb,s=e.strAlcoholic,i=e.strGlass,l=e.strCategory,o=e.strIBA,u=Object(m.a)(e,["idDrink","strDrink","strInstructions","strDrinkThumb","strAlcoholic","strGlass","strCategory","strIBA"]),d=t._getCorrectProps(u,"strIngredient"),g=t._getCorrectProps(u,"strMeasure");return{id:a,imgUrl:c,name:n,instructions:r,type:s,glass:i,category:l,iba:o,ingredsAndMeasures:t._getIngredientsWithMeasures(d,g)}},this._getIngredientsWithMeasures=function(e,t){return e.map((function(a,n){var r=t[n]?t[n]:"";return{ingredient:e[n],measure:r}}))},this._getCorrectProps=function(e,t){return Object.keys(e).filter((function(a){return a.includes(t)&&e[a]})).map((function(t){return e[t]}))}}return Object(E.a)(e,[{key:"_getResource",value:function(){var e=Object(p.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch: ".concat(t," , received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),h=function(e){var t=e.getDrinks,a=e.generateAlert,c=Object(n.useState)(""),s=Object(i.a)(c,2),l=s[0],o=s[1],m=v.getDrinksByName;return r.a.createElement("form",{className:"form-group col-md-6",onSubmit:function(e){e.preventDefault(),l.trim()?(t(m,l),o("")):a("This field can not be empty! Enter the name of the drink!","warning")}},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter the name of the drink","aria-label":"Search cocktails",onChange:function(e){var t=e.target.value;return o(t)},value:l}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement(u,{type:"submit",className:"btn btn-outline-primary btn-sm"},"Search"))))},b=function(e){var t=e.onFilterChange,a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],l=c[1];return r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Type the name of the drink to filter",onChange:function(e){var a=e.target.value;l(a),t(a)},value:s})))},N=function(e){var t=e.item,a=t.name,n=t.imgUrl,c=t.id,s=t.category,i=a.length>19?a.substring(0,16)+"..":a;return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n,className:"card-img-top",alt:a}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},i),s&&r.a.createElement("p",{className:"card-text"},"Category: ",s),r.a.createElement(l.b,{to:"/drink/".concat(c),className:"btn btn-outline-primary btn-sm"},"More details"))))},y=a(16),k=a(15),j=a(17),A=function(){return r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("div",{className:"spinner-border",style:{width:"3.5rem",height:"3.5rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},C=function(e){return function(t){var a=t.loading,n=Object(m.a)(t,["loading"]);return a?r.a.createElement(A,null):r.a.createElement(e,n)}},w=a(2),x=a.n(w),O=(x.a.shape({id:x.a.oneOfType([x.a.string,x.a.number]).isRequired,name:x.a.string.isRequired,imgUrl:x.a.string.isRequired,category:x.a.string,glass:x.a.string,iba:x.a.string,type:x.a.string,instructions:x.a.string,ingredsAndMeasures:x.a.arrayOf(x.a.shape({ingredient:x.a.string,measure:x.a.string}))}),C((function(e){var t=e.items;return r.a.createElement("div",{className:"row"},t&&t.map((function(e){return r.a.createElement(N,{item:e,key:e.name})})))}))),D=(a(37),function(){return r.a.createElement("div",{className:"error-fallback"},r.a.createElement("h1",{className:"text-danger"},"Oops! Error! Something went wrong!"))}),B=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,errorInfo:null},a}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.hasError,a=e.errorInfo;return t?r.a.createElement(D,{errorInfo:a}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),I=function(e){var t=e.getDrinks,a=e.generateAlert,n=e.onFilterChange,c=e.items,s=e.loading,i=!s&&!c;return r.a.createElement(B,null,r.a.createElement("div",{className:"form-row"},r.a.createElement(h,{getDrinks:t,generateAlert:a}),r.a.createElement(b,{onFilterChange:n})),i?r.a.createElement("p",{className:"text-center",style:{fontSize:"1.5rem"}},"Drinks not found"):r.a.createElement(O,{items:c,loading:s}))},P=C((function(e){var t=e.data;if(!t)return null;var a=t.name,n=t.imgUrl,c=t.instructions,s=t.type,i=t.glass,o=t.category,m=t.iba,u=t.ingredsAndMeasures,d=function(e,t){var a=["badge","mr-3"];return a.push(e===t?"badge-danger":"badge-success"),a.join(" ")}(s,"Alcoholic"),g=u&&r.a.createElement("ul",null,u.map((function(e){var t=e.ingredient,a=e.measure;return r.a.createElement("li",{key:Math.random()},r.a.createElement("span",null,t," ",a?"(".concat(a,")"):""))})));return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{className:"card-img",src:n,alt:a})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-info font-weight-bold"},"Instruction:")," ",c),r.a.createElement("p",{className:"card-text"},"Category: ",r.a.createElement("span",{className:"badge badge-primary"},o)),r.a.createElement("p",{className:"card-text"},"Type: ",r.a.createElement("span",{className:d},s)),m&&r.a.createElement("p",{className:"card-text"},"IBA: "," ",r.a.createElement("span",{className:"badge badge-success mr-3"}," ",m)),r.a.createElement("p",{className:"card-text"},"Glass:"," ",r.a.createElement("span",{className:"badge badge-info mr-3"},i)),r.a.createElement("div",null,"Ingredients:",g),r.a.createElement(l.c,{className:"btn btn-primary btn-sm my-3",to:"/"},"Back to home")))))})),R=function(e,t){var a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(!1),g=Object(i.a)(d,2),p=g[0],f=g[1],E=Object(n.useCallback)((function(e,t){u(!0),e(t).then((function(e){s(e)})).catch((function(e){f(!0),s(null)})).finally((function(){u(!1)}))}),[]);return Object(n.useEffect)((function(){E(e,t)}),[E,e,t]),{data:c,loading:m,error:p,doFetch:E}},L=function(e){var t=e.match,a=v.getDrinkById,n=R(a,t.params.id),c=n.data,s=n.loading,i=n.error;return r.a.createElement(B,null,r.a.createElement(P,{data:c,loading:s,error:i}))},G=function(e){var t=v.getRandom,a=R(t),n=a.data,c=a.loading;return r.a.createElement(B,null,r.a.createElement(P,{data:n,loading:c}))},H=function(e,t,a){return e.split("").map((function(e){return e===t?a:e})).join("")},M=C((function(e){var t=e.items;return r.a.createElement("div",{className:"list-group"},t&&t.map((function(e){var t=e.category,a=H(t,"/","_");return r.a.createElement(l.b,{to:"/category/".concat(a),className:"list-group-item list-group-item-action",key:t},t)})))})),S=function(){var e=v.getCategories,t=R(e),a=t.data,n=t.loading;return r.a.createElement(B,null,r.a.createElement(M,{items:a,loading:n}))},T=function(e){var t=e.match,a=H(t.params.name,"_","/"),n=v.getCategoryDrinks,c=R(n,a),s=c.data,i=c.loading;return r.a.createElement(B,null,r.a.createElement(O,{items:s,loading:i}))},X=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",{className:"lead"},"this is simple react application"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"Version: 1.01"))},z=(a(38),function(){return r.a.createElement("section",{className:"not-found-page"},r.a.createElement("h1",{className:"title"},"The page you are looking for does not exist!"),r.a.createElement("div",{className:"error-code"},"404 ",r.a.createElement("span",{className:"sad-smile"},"\u2639")))}),W=a(25),U=a.n(W),Z=(a(39),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm sticky-top navbar-dark bg-primary"},r.a.createElement(l.c,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:U.a,alt:"Drink"}),"Drink searcher"),r.a.createElement(u,{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{to:"/",exact:!0,className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{to:"/random",className:"nav-link"},"Random")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{to:"/categories",className:"nav-link"},"Categories")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{to:"/about",className:"nav-link"},"About")))))}),K=function(e){var t=e.alert;return null!==t&&r.a.createElement("div",{className:"alert alert-".concat(t.type),role:"alert"},t.msg)},F=(a(40),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),u=m[0],d=m[1],g=v.getDrinksByName,p=R(g,"martini"),f=p.data,E=p.loading,h=p.error,b=p.doFetch,N=function(e){return c(e)},y=function(e,t){d({msg:e,type:t}),setTimeout((function(){return d(null)}),4e3)},k=function(e,t){return t.length&&e?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}(f,a);return r.a.createElement(B,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Z,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"pt-4"},r.a.createElement(K,{alert:u}),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(I,Object.assign({getDrinks:b,generateAlert:y,onFilterChange:N,items:k,error:h,loading:E},e))}}),r.a.createElement(o.a,{exact:!0,path:"/random",component:G}),r.a.createElement(o.a,{exact:!0,path:"/categories",component:S}),r.a.createElement(o.a,{exact:!0,path:"/category/:name",component:T}),r.a.createElement(o.a,{exact:!0,path:"/drink/:id",component:L}),r.a.createElement(o.a,{exact:!0,path:"/about",component:X}),r.a.createElement(o.a,{component:z})))))))});a(41);s.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.14e58939.chunk.js.map
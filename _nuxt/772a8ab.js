(window.webpackJsonp=window.webpackJsonp||[]).push([[21,5,6,8,9,11,12,13,14],{326:function(t,e,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("173259b0",content,!0,{sourceMap:!1})},327:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("be9d419e",content,!0,{sourceMap:!1})},328:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("0d387d86",content,!0,{sourceMap:!1})},329:function(t,e,r){"use strict";r.r(e);var o=r(325),n=r.n(o),c={name:"BreadcrumbItem",props:{to:{type:[String,Object],default:function(){}}},computed:{classes:function(){return{active:n.a.has(this.$attrs,"active")}},isLink:function(){return n.a.isString(this.to)&&""!==this.to||n.a.isObject(this.to)&&!n.a.isEmpty(this.to)}}},l=(r(331),r(47)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"breadcrumb-item",class:t.classes},[t.isLink?r("nuxt-link",t._b({attrs:{to:t.to}},"nuxt-link",t.$attrs,!1),[t._t("default")],2):t._t("default",null,null,t.$attrs)],2)}),[],!1,null,"f1bc17fe",null);e.default=component.exports},330:function(t,e,r){"use strict";var o=r(90);e.a={getAnnouncement:function(t,e){return o.a.get("/announcement/"+e+"/"+t+".md")},getRepos:function(){return o.a.get("/repos.json")},getBuilds:function(t){return o.a.get("/f/".concat(t,"/builds.json"))}}},331:function(t,e,r){"use strict";r(326)},332:function(t,e,r){var o=r(88)((function(i){return i[1]}));o.push([t.i,'.breadcrumb-item[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.breadcrumb-item[data-v-f1bc17fe]:not(:first-child){padding-left:0.5rem}.breadcrumb-item.active[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (prefers-color-scheme: dark){.breadcrumb-item.active[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}}.breadcrumb-item[data-v-f1bc17fe]:not(:first-child):before{content:"/";padding-right:0.25rem}',""]),o.locals={},t.exports=o},333:function(t,e,r){"use strict";r(327)},334:function(t,e,r){var o=r(88)((function(i){return i[1]}));o.push([t.i,".card[data-v-7cb9daae]{margin-left:0.5rem;margin-right:0.5rem;border-radius:1rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.25rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.card[data-v-7cb9daae]{margin-left:0px;margin-right:0px}}@media (prefers-color-scheme: dark){.card[data-v-7cb9daae]{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.card .card-title[data-v-7cb9daae]{margin-bottom:1rem;font-size:1.125rem;line-height:1.75rem;font-weight:700}",""]),o.locals={},t.exports=o},335:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("64db52dc",content,!0,{sourceMap:!1})},336:function(t,e,r){var content=r(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("eb113c5e",content,!0,{sourceMap:!1})},337:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("134c10e1",content,!0,{sourceMap:!1})},338:function(t,e,r){"use strict";r.r(e);r(139);var o=r(325),n=r.n(o),c={name:"FaIcon",props:{type:{type:String,default:"regular"},icon:{type:String,default:""}},computed:{iconClass:function(){var t=["fa-"+this.icon];switch(this.type){case"solid":t.push("fas");break;case"regular":t.push("far");break;case"light":t.push("fal");break;case"duotone":t.push("fad");break;case"brands":t.push("fab")}return n.a.join(t," ")}}},l=r(47),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"fa-icon",class:t.iconClass})}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,r){"use strict";r.r(e);var o={name:"Card",props:{title:{type:String,default:""}},computed:{hasTitle:function(){return""!==this.title||!!this.$slots.title}}},n=(r(333),r(47)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t.hasTitle?r("h2",{staticClass:"card-title"},[t._t("title",(function(){return[t._v("\n                "+t._s(t.title)+"\n            ")]}))],2):t._e()]),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,"7cb9daae",null);e.default=component.exports},340:function(t,e,r){"use strict";r(14),r(20),r(72),r(34),r(48);var o=r(325),n=r.n(o),c=r(330);e.a={loadRepos:function(t){return new Promise((function(e,r){n.a.isNil(t.$store.getters["repos/getRepos"])?c.a.getRepos().then((function(r){var o=[],n=[],c={};for(var l in r.data){var d;o.push(l),c[l]=r.data[l];var f=l.split("/")[0];null!==(d=c[l].options)&&void 0!==d&&d.hidden||"redirect"===c[l].type||(f in n?n[f]++:n[f]=1)}t.$store.commit("repos/setRepos",o),t.$store.commit("repos/setReposInfo",c),t.$store.commit("repos/setUsers",n),e()})):e()}))},getRepos:function(t){return t.$store.getters["repos/getRepos"]},getUsers:function(t){return t.$store.getters["repos/getUsers"]},getInfoByRepoStr:function(t){var e=t.split(":"),r=e[0].split("/");return{user:r[0],repo:r[1],branch:e[1]}},exists:function(t,e){var r=this,o=!1;return n.a.forEach(t,(function(t){var c=r.getInfoByRepoStr(t),l=c.user,d=c.repo,f=c.branch;return!n.a.isNil(e.user)&&e.user!==l||(!n.a.isNil(e.repo)&&e.repo!==d||(!n.a.isNil(e.branch)&&e.branch!==f||(o=!0,!1)))})),o},getRepoInfo:function(t,e){return t.$store.getters["repos/getReposInfo"][e]},getDir:function(t,e){var r,o=null===(r=this.getRepoInfo(t,e).options)||void 0===r?void 0:r.customDir;if(n.a.isNil(o)){var c=this.getInfoByRepoStr(e),l=c.user,d=c.repo,f=c.branch;return"".concat(l,"/").concat(d,"/").concat(f)}return o}}},341:function(t,e,r){"use strict";r(328)},342:function(t,e,r){var o=r(88)((function(i){return i[1]}));o.push([t.i,".breadcrumb-wrapper[data-v-6c55211c]{width:100%;padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem}.breadcrumb[data-v-6c55211c]{display:flex;list-style-type:none}",""]),o.locals={},t.exports=o},343:function(t,e,r){"use strict";r.r(e);var o={name:"Breadcrumb",props:{breadcrumbs:{type:Array,default:function(){return[]}}},computed:{}},n=(r(341),r(47)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"breadcrumb-wrapper"},[r("ol",{staticClass:"breadcrumb"},[t._t("default",(function(){return t._l(t.breadcrumbs,(function(e,o){return r("breadcrumb-item",{key:o},[t._v("\n                "+t._s(e.text)+"\n            ")])}))}))],2)])}),[],!1,null,"6c55211c",null);e.default=component.exports;installComponents(component,{BreadcrumbItem:r(329).default})},344:function(t,e,r){"use strict";r.r(e);var o={name:"BuildStatus",props:{dir:{type:String,default:""}},data:function(){return{imgSource:""}},computed:{source:function(){return"/f/"+this.dir+"/badge.svg"}},mounted:function(){this.imgSource=this.source},methods:{imageLoaded:function(){this.$el.classList.contains("isLoading")&&(this.$el.classList.contains("isLoaded")||this.$el.width<=1&&(this.imgSource="/images/default_badge.svg"))}}},n=r(47),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.imgSource,alt:"Build status"},on:{load:t.imageLoaded}})}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,r){"use strict";r(335)},346:function(t,e,r){var o=r(88)((function(i){return i[1]}));o.push([t.i,".datatable[data-v-1dbc89b2]{overflow-x:auto;overflow-y:hidden;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.datatable[data-v-1dbc89b2]{border-radius:0.75rem}}.datatable table[data-v-1dbc89b2]{min-width:100%}.datatable table[data-v-1dbc89b2] > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity:1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}@media (prefers-color-scheme: dark){.datatable table[data-v-1dbc89b2] > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}}.datatable table thead[data-v-1dbc89b2]{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}@media (prefers-color-scheme: dark){.datatable table thead[data-v-1dbc89b2]{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}}.datatable table thead th[data-v-1dbc89b2]{white-space:nowrap;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:left;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media (min-width: 768px){.datatable table thead th[data-v-1dbc89b2]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.datatable table thead th[data-v-1dbc89b2]{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.datatable table tbody tr[data-v-1dbc89b2]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}@media (prefers-color-scheme: dark){.datatable table tbody tr[data-v-1dbc89b2]{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}}.datatable table tbody td[data-v-1dbc89b2]{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem}@media (min-width: 768px){.datatable table tbody td[data-v-1dbc89b2]{padding-left:1.5rem;padding-right:1.5rem}}",""]),o.locals={},t.exports=o},347:function(t,e,r){"use strict";r(336)},348:function(t,e,r){var o=r(88)((function(i){return i[1]}));o.push([t.i,".list-group-item[data-v-4669ccc8]{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}@media (prefers-color-scheme: dark){.list-group-item[data-v-4669ccc8]{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.list-group-item[data-v-4669ccc8]{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.list-group-item[data-v-4669ccc8]:not(:last-child){border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}@media (prefers-color-scheme: dark){.list-group-item[data-v-4669ccc8]:not(:last-child){--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}}.list-group-item[data-v-4669ccc8]:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}@media (prefers-color-scheme: dark){.list-group-item[data-v-4669ccc8]:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}}.list-group-item[data-v-4669ccc8] .fa-icon{margin-right:0.5rem}",""]),o.locals={},t.exports=o},349:function(t,e,r){"use strict";r(337)},350:function(t,e,r){var o=r(88)((function(i){return i[1]}));o.push([t.i,".list-group[data-v-297fec12]{display:flex;flex-direction:column}",""]),o.locals={},t.exports=o},351:function(t,e,r){"use strict";r.r(e);var o={name:"DataTable",props:{fields:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{tableContent:function(){return this.data}}},n=(r(345),r(47)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"datatable"},[r("table",[r("thead",[r("tr",t._l(t.fields,(function(e){return r("th",{key:e.key,class:e.class,attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t(e.label))+"\n                ")])})),0)]),t._v(" "),r("tbody",t._l(t.tableContent,(function(e,o){return r("tr",{key:"row#"+o},t._l(t.fields,(function(o){return r("td",{key:o.key},[t._t("cell("+o.key+")",(function(){return[t._v("\n                        "+t._s(e[o.key])+"\n                    ")]}),{row:e,value:e[o.key]})],2)})),0)})),0)])])}),[],!1,null,"1dbc89b2",null);e.default=component.exports},352:function(t,e,r){"use strict";r.r(e);var o=r(325),n=r.n(o),c={name:"ListGroupItem",props:{to:{type:[String,Object],default:function(){}},href:{type:String,default:""}},data:function(){return{itemClass:""}},computed:{isNuxtLink:function(){return n.a.isString(this.to)&&""!==this.to||n.a.isObject(this.to)&&!n.a.isEmpty(this.to)}},created:function(){this.itemClass=this.$parent.itemClass}},l=(r(347),r(47)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isNuxtLink?r("nuxt-link",{staticClass:"list-group-item",class:t.itemClass,attrs:{to:t.to}},[t._t("default")],2):r("a",{staticClass:"list-group-item",class:t.itemClass,attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,"4669ccc8",null);e.default=component.exports},353:function(t,e,r){"use strict";r.r(e);var o={name:"ListGroup",props:{itemClass:{type:[String,Object],default:""}}},n=(r(349),r(47)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"list-group"},[t._t("default")],2)}),[],!1,null,"297fec12",null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);var o=r(340),n={layout:"main",data:function(){return{user:this.$route.params.user,repo:this.$route.params.repo,repos:null,branchesFields:[{key:"branch",label:"labels.branch",sortable:!0},{key:"status",label:"labels.status"}]}},head:function(){return{title:this.repo+" - "+this.$t("title")}},computed:{repoInfo:function(){try{for(var t in this.repos){var e=this.repos[t],r=o.a.getInfoByRepoStr(e),n=o.a.getRepoInfo(this,e);if(r.dir=o.a.getDir(this,e),r.user===this.user&&r.repo===this.repo&&"redirect"!==n.type)return r}return null}catch(t){return null}},listBranches:function(){var t=[];for(var e in this.repos){var r,n=this.repos[e],c=o.a.getInfoByRepoStr(n),l=o.a.getRepoInfo(this,n);c.dir=o.a.getDir(this,n),c.user===this.user&&(c.repo===this.repo&&(null!==(r=l.options)&&void 0!==r&&r.hidden||t.push(c)))}return t}},mounted:function(){var t=this;o.a.loadRepos(this).then((function(){t.repos=o.a.getRepos(t),o.a.exists(t.repos,{user:t.user,repo:t.repo})||t.$nuxt.error({statusCode:404,message:"Not found"})}))}},c=r(47),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumb",{staticClass:"mt-2"},[r("breadcrumb-item",{attrs:{to:"/"}},[r("fa-icon",{attrs:{icon:"home","aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("nav.home"))+"\n        ")],1),t._v(" "),r("breadcrumb-item",{attrs:{to:"/"+t.user}},[t._v("\n            "+t._s(t.user)+"\n        ")]),t._v(" "),r("breadcrumb-item",{attrs:{active:""}},[t._v("\n            "+t._s(t.repo)+"\n        ")])],1),t._v(" "),r("div",{staticClass:"grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-12"},[r("div",{staticClass:"col-span-3 xl:col-span-3 m-4"},[r("card",[r("list-group",{attrs:{"item-class":"flex items-center"}},[r("list-group-item",{attrs:{to:"/?tab=repos"}},[r("fa-icon",{attrs:{icon:"arrow-left"}}),t._v("\n                        "+t._s(t.$t("pages.repo.back"))+"\n                    ")],1),t._v(" "),r("list-group-item",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo,target:"_blank"}},[r("fa-icon",{attrs:{icon:"github",type:"brands"}}),t._v("\n                        "+t._s(t.$t("pages.repo.github"))+"\n                    ")],1),t._v(" "),r("list-group-item",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo+"/issues",target:"_blank"}},[r("fa-icon",{attrs:{icon:"bug"}}),t._v("\n                        "+t._s(t.$t("pages.repo.issues"))+"\n                    ")],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"col-span-7 xl:col-span-9 m-4 lg:ml-0"},[r("card",{attrs:{title:t.$t("pages.repo.branches",{repo:t.repo})}},[r("data-table",{attrs:{data:t.listBranches,fields:t.branchesFields},scopedSlots:t._u([{key:"cell(branch)",fn:function(data){return[r("nuxt-link",{attrs:{to:"/"+t.user+"/"+t.repo+"/"+data.value}},[t._v("\n                            "+t._s(data.value)+"\n                        ")])]}},{key:"cell(status)",fn:function(data){return[r("build-status",{attrs:{dir:data.row.dir}})]}}])})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FaIcon:r(338).default,BreadcrumbItem:r(329).default,Breadcrumb:r(343).default,ListGroupItem:r(352).default,ListGroup:r(353).default,Card:r(339).default,BuildStatus:r(344).default,DataTable:r(351).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{271:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("be9d419e",content,!0,{sourceMap:!1})},277:function(t,e,r){"use strict";r(271)},278:function(t,e,r){var o=r(62)((function(i){return i[1]}));o.push([t.i,".card[data-v-7cb9daae]{margin-left:0.5rem;margin-right:0.5rem;border-radius:1rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.25rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.card[data-v-7cb9daae]{margin-left:0px;margin-right:0px}}@media (prefers-color-scheme: dark){.card[data-v-7cb9daae]{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.card[data-v-7cb9daae]{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.card .card-title[data-v-7cb9daae]{margin-bottom:1rem;font-size:1.125rem;line-height:1.75rem;font-weight:700}",""]),o.locals={},t.exports=o},283:function(t,e,r){"use strict";r.r(e);var o={name:"Card",props:{title:{type:String,default:""}},computed:{hasTitle:function(){return""!==this.title||!!this.$slots.title}}},l=(r(277),r(26)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t.hasTitle?r("h2",{staticClass:"card-title"},[t._t("title",(function(){return[t._v("\n                "+t._s(t.title)+"\n            ")]}))],2):t._e()]),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,"7cb9daae",null);e.default=component.exports},309:function(t,e,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("b6963f20",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";r(309)},321:function(t,e,r){var o=r(62)((function(i){return i[1]}));o.push([t.i,".collapsable[data-v-01f077da]{overflow-y:auto}",""]),o.locals={},t.exports=o},327:function(t,e,r){"use strict";r.r(e);var o={name:"CollapsableCard",props:{title:{type:String,default:""}},computed:{hasTitle:function(){return""!==this.title||!!this.$slots.title}}},l=(r(320),r(26)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("card",{staticClass:"collapsable",attrs:{title:t.title},scopedSlots:t._u([t.$slots.title?{key:"title",fn:function(){return[t._t("title")]},proxy:!0}:null],null,!0)},[t._v(" "),t._t("default")],2)}),[],!1,null,"01f077da",null);e.default=component.exports;installComponents(component,{Card:r(283).default})}}]);
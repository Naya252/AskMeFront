"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[720],{2102:function(t,e,s){s(7273);var n=s(144),l=s(6290),i=s(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),r=(()=>o.reduce(((t,e)=>(t["offset"+(0,i.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,i.jC)(e)]={type:[String,Number],default:null},t)),{}))(),p={col:Object.keys(a),offset:Object.keys(r),order:Object.keys(c)};function u(t,e,s){let n=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");n+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(n+=`-${s}`,n.toLowerCase()):n.toLowerCase()}}const d=new Map;e["Z"]=n.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:n,parent:i}){let o="";for(const l in e)o+=String(e[l]);let a=d.get(o);if(!a){let t;for(t in a=[],p)p[t].forEach((s=>{const n=e[s],l=u(t,s,n);l&&a.push(l)}));const s=a.some((t=>t.startsWith("col-")));a.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,l.ZP)(s,{class:a}),n)}})},5615:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"mx-auto px-0",staticStyle:{"max-width":"1200px"}},[s("v-row",{staticClass:"ma-0"},[s("v-col",{staticClass:"pb-5 pt-0 pseudocontainer mt-5 px-0",attrs:{cols:"12","align-center":""}},[s("h1",{staticClass:"noBreak",staticStyle:{"font-size":"2em","line-height":"110%"}},[t._v("Anna")]),s("h2",{staticClass:"noBreak",staticStyle:{"font-size":"2em","line-height":"110%",color:"#0097a7"}},[t._v(" Frontend developer ")])]),s("v-col",{staticClass:"pb-5 pt-0 pseudocontainer mt-5 px-0",attrs:{cols:"12"}},t._l(t.faqs,(function(e,n){return s("v-row",{key:n,staticClass:"mb-5 ma-0",attrs:{justify:"space-around"}},[s("v-col",{attrs:{cols:"12",sm:"3"}},[s("h3",{staticClass:"text-left",staticStyle:{"font-weight":"normal","font-size":"1.5em","border-left":"3px solid #0097a7","padding-top":"5px","padding-left":"5px"}},[t._v(" "+t._s(e.topic)+" ")])]),s("v-col",{attrs:{cols:"12",sm:"9"}},t._l(e.asks,(function(e,n){return s("v-row",{key:n,staticClass:"ma-0"},[s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-list-group",{staticStyle:{"border-top":"1px solid lightgrey"},attrs:{color:"#0097A7",id:e.id},scopedSlots:t._u([{key:"activator",fn:function(){return[s("v-list-item-title",{staticClass:"pb-2 pt-1",staticStyle:{"font-size":"inherit","font-family":"inherit","white-space":"pre-line","text-align":"left","font-weight":"400"},domProps:{innerHTML:t._s(e.question)}})]},proxy:!0}],null,!0)},[s("v-list-item",{},[s("div",{staticClass:"mb-5",staticStyle:{"font-size":"inherit","font-family":"inherit","text-align":"justify","padding-top":"3px","margin-left":"10px"},domProps:{innerHTML:t._s(e.answer)}})])],1)],1)],1)})),1)],1)})),1)],1)],1)},l=[],i={name:"FaqView",components:{},data:()=>({faqs:[{topic:"Personal information",asks:[{id:0,question:"Address",answer:"Saint Petersburg, Russia"},{id:1,question:"Email",answer:"naya252naya@gmail.com"},{id:2,question:"LinkedIn",answer:'<a href="hhttps://www.linkedin.com/in/anna-sch-899217203/" target="_blank">Link on LinkedIn</a>'},{id:3,question:"Github",answer:'<a href="https://github.com/Naya252" target="_blank">Link on Github</a>'}]},{topic:"Work Experience",asks:[{id:4,question:'<p class="my-2">Frontend developer (Vue)</p> <span style="color: #999999; font-size: 0.85em" class="mt-1">May 2020 - Present</span>',answer:'<ul style="color: #0097a7">\n                            <li ><span style="color: #212229">Development of a large B2B product with a complex interface.</span></li>\n                            <li ><span style="color: #212229">Migration of the project to Vue.</span></li>\n                            <li ><span style="color: #212229">Writing cross-browser components.</span></li>\n                            <li ><span style="color: #212229">Development of new and improvement of existing functionality.</span></li>\n                            <li ><span style="color: #212229">Creating layouts in Figma for some pages.</span></li>\n                          \n                        </ul>'},{id:5,question:'<p class="my-2">SEO specialist</p> <span style="color: #999999; font-size: 0.85em" class="mt-1">February 2020 - May 2020</span>',answer:'<ul style="color: #0097a7">\n                            <li ><span style="color: #212229">Develop research on targeted keywords.</span></li>\n                            <li ><span style="color: #212229">Authoring clear and concise content with a focus on ranking for search and/or performing in paid search campaigns.</span></li>\n                            <li ><span style="color: #212229">Implement SEO strategies to improve a website\'s organic rankings to grow site traffic.</span></li>\n                          \n                          \n                        </ul>'}]},{topic:"Education",asks:[{id:6,question:"ITMO University",answer:'<p class="mb-2">Web Developer (Node.js)</p><p class="mb-2">Professional retraining</p><p style="font-size: 0.85em">2019-2020</p>'},{id:7,question:"Saint-Petersburg State University of Industrial Technologies and Design",answer:'<p class="mb-2">Economics and management at the enterprise</p><p style="font-size: 0.85em">2010-2016</p>'}]},{topic:"Skills",asks:[{id:8,question:"Hard skills",answer:'<ul style="color: #0097a7">\n                            <li ><span style="color: #212229">Vue</span></li>\n                            <li ><span style="color: #212229">Vuex</span></li>\n                            <li ><span style="color: #212229">Vuetify</li>\n                            <li ><span style="color: #212229">JavaScript</li>\n                            <li ><span style="color: #212229">HTML</li>\n                            <li ><span style="color: #212229">CSS</li>\n                            <li ><span style="color: #212229">SCSS</li>\n                            <li ><span style="color: #212229">Git</li>\n                            <li ><span style="color: #212229">Node.js</li>\n                            <li ><span style="color: #212229">MongoDB</li>\n                            <li ><span style="color: #212229">Mongoose</li>\n                            <li ><span style="color: #212229">Express</li>\n                        </ul>'},{id:9,question:"Soft skills",answer:'<ul style="color: #0097a7">\n                            <li ><span style="color: #212229">Teamwork</span></li>\n                            <li ><span style="color: #212229">Patience</span></li>\n                            <li ><span style="color: #212229">Adaptability</li>\n                            <li ><span style="color: #212229">Problem-solving</li>\n                            <li ><span style="color: #212229">Critical thinking</li>\n                            <li ><span style="color: #212229">Creativity</li>\n                        </ul>'}]}]}),mounted:function(){if(this.$route.hash){let t=document.getElementById(this.$route.hash.slice(1));t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),t.__vue__.click())}},created(){},computed:{},methods:{}},o=i,a=s(3736),r=s(3453),c=s.n(r),p=s(2102),u=s(4228),d=s(9443),f=s(7620),y=s(6147),m=s(2877),g=(0,a.Z)(o,n,l,!1,null,null,null),h=g.exports;c()(g,{VCol:p.Z,VContainer:u.Z,VListGroup:d.Z,VListItem:f.Z,VListItemTitle:y.V9,VRow:m.Z})}}]);
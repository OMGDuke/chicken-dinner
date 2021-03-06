webpackJsonp([0],[,,,function(e,t,a){"use strict";var s=a(1),n=a(23),r=a(16),i=a.n(r),o=a(17),c=a.n(o);s.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"home",component:i.a},{path:"/player/:playerName",name:"results",component:c.a}]})},function(e,t,a){function s(e){a(15)}var n=a(0)(a(8),a(22),s,null,null);e.exports=n.exports},,function(e,t){e.exports={PUBG_TRACKER_API_KEY:"920b509a-aba0-4e9c-9b45-99f76d1d6049"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),n=a(5),r=a(2),i=a.n(r),o=a(4),c=a.n(o),l=a(3);s.a.config.productionTip=!1,s.a.use(n.a),s.a.use(i.a),new s.a({el:"#app",router:l.a,template:"<App/>",components:{App:c.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(18),n=a.n(s);t.default={name:"app",components:{Search:n.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"home"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"results",data:function(){return{playerName:"",wins:0,loading:!0,playerFound:!1,playerAvatar:""}},created:function(){this.searchForPlayer()},watch:{$route:function(){this.searchForPlayer()}},methods:{searchForPlayer:function(){if(this.playerName=this.$route.params.playerName,this.loading=!0,this.playerName){var e="https://pubgtracker.com/api/profile/pc/"+this.playerName;this.httpRequest(e)}},httpRequest:function(e){var t=this.$env.get("PUBG_TRACKER_API_KEY");this.$http.get(e,{headers:{"TRN-API-KEY":t}}).then(this.calculateDinners)},calculateDinners:function(e){var t=this;this.loading=!1,e.body.error?this.playerFound=!1:(this.playerAvatar=e.body.Avatar,this.playerFound=!0,this.wins=0,e.body.Stats.forEach(function(e){"agg"===e.Region&&(t.wins+=+e.Stats[4].value)}))}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"search",data:function(){return{playerName:""}},methods:{goToResults:function(){if(this.playerName){var e={playerName:this.playerName};this.$router.push({name:"results",params:e})}}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){function s(e){a(14)}var n=a(0)(a(9),a(21),s,"data-v-4d169e36",null);e.exports=n.exports},function(e,t,a){function s(e){a(12)}var n=a(0)(a(10),a(19),s,"data-v-360f2e22",null);e.exports=n.exports},function(e,t,a){function s(e){a(13)}var n=a(0)(a(11),a(20),s,"data-v-4111eebf",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center-align"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.playerFound,expression:"!loading && playerFound"}]},[a("h1",[e._v("RESULTS")]),e._v(" "),a("h3",[a("img",{attrs:{id:"player-avatar",src:e.playerAvatar}}),e._v(" "+e._s(e.playerName))]),e._v(" "),a("h5",[e._v(e._s(e.wins)+" Chicken Dinners")]),e._v(" "),a("div",[e._l(e.wins,function(t){return a("img",{directives:[{name:"show",rawName:"v-show",value:e.wins>0,expression:"wins > 0"}],attrs:{id:"chicken-image",src:"https://www.pressurecookerpros.com/wp-content/uploads/2016/03/Chicken-Dinner.jpg?x64511"}})}),e._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:0===e.wins,expression:"wins === 0"}],staticClass:"responsive-img",attrs:{src:"http://www.furrytips.com/wp-content/uploads/2015/09/can-cats-eat-chicken-bones.png"}})],2)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.playerFound,expression:"!loading && !playerFound"}]},[e._v("\n    Player not found\n  ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"preloader-wrapper big active"},[e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner-layer spinner-blue-only"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"search"}},[a("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.goToResults(t)}}},[a("div",{staticClass:"row"}),e._v(" "),a("div",{staticClass:"input-field col offset-l2 l8 m12 s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"}],attrs:{id:"username",name:"search-box",type:"text"},domProps:{value:e.playerName},on:{input:function(t){t.target.composing||(e.playerName=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"username"}},[e._v("Enter Steam username")])]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row center-align"},[a("button",{staticClass:"waves-effect waves-light btn",attrs:{type:"submit"}},[a("i",{staticClass:"material-icons left"},[e._v("search")]),e._v("Search")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("HOME")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"section"},[a("search")],1),e._v(" "),a("router-view")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"light-blue lighten-1",attrs:{role:"navigation"}},[a("div",{staticClass:"nav-wrapper container"},[a("a",{staticClass:"brand-logo",attrs:{id:"logo-container",href:"#"}},[e._v("🍗")]),e._v(" "),a("ul",{staticClass:"right hide-on-med-and-down"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("About")])])]),e._v(" "),a("ul",{staticClass:"side-nav",attrs:{id:"nav-mobile"}},[a("li",[a("a",{attrs:{href:"#"}},[e._v("About")])])]),e._v(" "),a("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"nav-mobile"}},[a("i",{staticClass:"material-icons"},[e._v("menu")])])])])}]}},,,,function(e,t){function a(e){throw new Error("Cannot find module '"+e+"'.")}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=26},function(e,t){}],[7]);
//# sourceMappingURL=app.02d65c2e6aa56b44efaa.js.map
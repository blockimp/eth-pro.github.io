(window.webpackJsonp=window.webpackJsonp||[]).push([["EPRO"],{"136a":function(t,e,n){"use strict";var a=n("852a");n.n(a).a},"2dc3":function(t,e,n){"use strict";var a=n("dccd");n.n(a).a},"32de":function(t,e,n){"use strict";var a=n("bbf5");n.n(a).a},3563:function(t,e,n){"use strict";var a=n("7670");n.n(a).a},"3a0f":function(t,e,n){"use strict";var a=n("f43c");n.n(a).a},7670:function(t,e,n){},"83bc":function(t,e,n){},"852a":function(t,e,n){},"877d":function(t,e,n){"use strict";var a=n("d8bd");n.n(a).a},ba70:function(t,e,n){"use strict";n.r(e);var a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=(n("96cf"),n("3b8d")),o=n("2f62"),i=n("1576"),r=n("9fb0"),c=n("ea7f"),l=n.n(c),u=n("22b3"),d=n("9e99"),f=n.n(d),p=n("f545"),m=n.n(p),v=(n("7514"),n("768b")),h=n("d225"),b=n("b0b4"),g=n("2ef0"),O=n.n(g),C=n("4360"),y=n("f325"),w=n.n(y),$=(n("9ba9"),n("ab36")),j=function(){function t(){Object(h.a)(this,t),this.instance=null,this.web3=i.u}return Object(b.a)(t,[{key:"init",value:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.update_timer=new w.a({tick:300,ontick:O.a.throttle((function(){e.update()}),3e5)}),t.next=3,this.update();case 3:this.update_timer.start(3600);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){var e,n,a,s,o,c,l,d,f,p,m,_,h,b,g,y,w,j,k,P,x,D,E,R,H,T;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.estimatBlockHeight();case 2:return e=t.sent,n=Object(v.a)(e,2),a=n[0],n[1],t.next=8,u.a.eventList(Object(i.h)($.b),a,"0xfaadf08c2c8671e36d7e9aa9e1873fc9b16bea4e73be146c2f84213f043db629");case 8:for(s=t.sent,o=s.data.result,c=[],l=0;l<o.length;l++)d=$.a[$.b],f=O.a.find(d.abi,{type:"event",name:"Price"}),p=this.web3.eth.abi.decodeLog(f.inputs,o[l].data),m=1e3*this.web3.utils.hexToNumber(o[l].timeStamp),_=p._price,c.push({timestamp:m,price:_});for(h=new Date((new Date).toLocaleDateString()).getTime()+3600*(new Date).getHours()*1e3,b=h-6048e5,new Date("2019-08-29 00:00").getTime(),g=[],y=0,j=0,0,P=w=.01,x=999999,console.log(c),D=0;b+3600*D*1e3<=h;D++){if(E=b+3600*D*1e3,void 0!==c[y])for(;void 0!==c[y]&&E>=c[y].timestamp;)(w=parseFloat(O.a.floor(Object(i.e)(c[y].price),8)))>P&&(P=w),x>w&&(x=w),y++;E+864e5>=h&&E+828e5<=h&&(j=w),g.push([E,w])}c.length>0&&g[g.length-1][0]<c[c.length-1].timestamp&&(w=parseFloat(O.a.floor(Object(i.e)(c[c.length-1].price),8))),k=g[0][1],R=0==j?0:(w-j)/j,H=0==k?0:(w-k)/k,T=1e3*parseInt(Date.now()/1e3),console.log(g),C.a.commit(r.s,{chart_data:g,last_price:w,price_24h:j,price_7days:k,block_increase:R,block_increase7_day:H,last_update:T,max_price:P,min_price:x});case 33:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"estimatBlockHeight",value:function(){var t=this;return new Promise((function(e,n){t.web3.eth.getBlockNumber().then((function(t){e([O.a.floor(t-60480),t])})).catch(n)}))}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new t),this.instance}}]),t}();function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var P={components:{},filters:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return null==C.a.state.wallet.address?"-":0==t?0:_.floor(t,e)}},mounted:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{this.init(),this.update_timer=setInterval((function(){e.update()}),5e3)}catch(t){console.log(t)}case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(n,!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({increase:function(){return 0==this.price_24h?0:(this.last_price-this.price_24h)/this.price_24h},increase7_day:function(){return 0==this.price_7days?0:(this.last_price-this.price_7days)/this.price_7days},last_update_date:function(){return isNaN(parseInt(this.last_update))?this.last_update:this.last_update>0?f.a.format(this.last_update,"YYYY-MM-DD HH:mm:ss"):"-"},increase_format:function(){return isNaN(parseInt(this.increase))?this.increase:0==this.increase?"-":(100*this.increase).toFixed(2)},increase_serven_format:function(){return isNaN(parseInt(this.increase7_day))?this.increase7_day:0==this.increase7_day?"-":(100*this.increase7_day).toFixed(2)}},Object(o.b)({rate:function(t){return t.base.rate},chart_data:function(t){return t.statistic.chart_data},price_24h:function(t){return t.statistic.price_24h},price_7days:function(t){return t.statistic.price_7days},last_price:function(t){return Object(i.e)(t.wallet.price)},last_update:function(t){return t.statistic.last_update},max_price:function(t){return t.statistic.max_price},min_price:function(t){return t.statistic.min_price}})),data:function(){return{chart:null,update_timer:null}},created:function(){j.getInstance().init()},beforeDestroy:function(){clearInterval(this.update_timer)},methods:{init:function(){l.a.setOptions({global:{useUTC:!1}}),this.chart=l.a.chart("chart-content",{chart:{spacing:[10,0,15,0],backgroundColor:"rgba(0,0,0,0)"},title:{text:null},subtitle:{text:null},xAxis:{type:"datetime",tickInterval:864e5,tickPosition:"inside",dateTimeLabelFormats:{millisecond:"%H:00:00",second:"%H:00",minute:"%H:00",hour:"%H:00",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},lineColor:"rgba(255,255,255,0.1)"},tooltip:{dateTimeLabelFormats:{millisecond:"%Y-%m-%d %H:00",second:"%Y-%m-%d %H:00",minute:"%Y-%m-%d %H:00",hour:"%Y-%m-%d %H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:{title:{text:null},min:0,gridLineColor:"rgba(255,255,255,0.1)",opposite:!0,labels:{formatter:function(){return _.floor(this.value,3).toFixed(3)}},minRange:.001},legend:{enabled:!1},credits:{enabled:!1},plotOptions:{area:{color:"#1b7bff",fillColor:{linearGradient:[0,0,0,.1],stops:[[0,"rgba(27,123,255,1)"],[1,"rgba(27,123,255,0)"]]},fillOpacity:.3,marker:{radius:0},lineWidth:2,states:{hover:{lineWidth:1}},threshold:null}},series:[{type:"area",name:"EPRO",data:this.chart_data}]})},update:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{this.chart.series[0].update({data:this.chart_data})}catch(t){console.log(t)}case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}},x=(n("877d"),n("2877")),D=Object(x.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dashboard"}},[n("div",{staticClass:"chart"},[n("div",{staticClass:"detail"},[n("div",{staticClass:"price"},[n("span",[t._v(t._s(t._f("floor")(t.last_price,4)))]),n("br"),t._v("EPRO/ETH\n      ")]),null==t.$store.state.wallet.address?n("div",{staticClass:"increase"},[n("span",[t._v("-%")]),n("br"),t._v(t._s(t.$t("dialog.dashboard.content_0"))+"\n      ")]):n("div",{staticClass:"increase"},[n("span",[t._v(t._s(t.increase_format>=0?"+"+t.increase_format:t.increase_format)+"%")]),n("br"),t._v(t._s(t.$t("dialog.dashboard.content_0"))+"\n      ")]),null==t.$store.state.wallet.address?n("div",{staticClass:"seven-increase"},[n("span",[t._v("-%")]),n("br"),t._v(t._s(t.$t("dialog.dashboard.content_1"))+"\n      ")]):n("div",{staticClass:"seven-increase"},[n("span",[t._v(t._s(t.increase_serven_format>=0?"+"+t.increase_serven_format:t.increase_serven_format)+"%")]),n("br"),t._v(t._s(t.$t("dialog.dashboard.content_1"))+"\n      ")])]),n("div",{staticClass:"content",attrs:{id:"chart-content"}}),n("div",{staticClass:"tip"},[n("div",[t._v(t._s(t.$t("dialog.dashboard.content_3"))+":0.01")]),n("div",[t._v(t._s(t.$t("dialog.dashboard.content_2"))+":"+t._s(t._f("floor")(t.max_price)))])])])])}),[],!1,null,"19a8800d",null).exports,E=(n("ac1e"),n("543e")),R=n("60b1");function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}n("3c12");var T={components:{Dialog:R.a,Loading:E.a},filters:{format:function(t,e){return isNaN(parseInt(t))?t:e==CROPTY_MSI?accounting.accounting.formatNumber(t,0):0==t?0:accounting.accounting.formatNumber(_.floor(Wallet.getInstance().formatWei(t),2),2)},fee_format:function(t){return 0==t?"-":accounting.accounting.formatNumber(_.floor(Wallet.getInstance().formatWei(t),6),6)},date:function(t){return f.a.format(1e3*t,"YYYY/MM/DD HH:mm:ss")},full_date:function(t){return f.a.format(1e3*t,"YYYY/MM/DD HH:mm:ss")},format_wei:function(t){return Object(i.e)(t)},time_ago:function(t){return TimeAgo.locale(en),new TimeAgo("en-US").format(1e3*t)}},watch:{history_list:function(){this.is_loading=!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(n,!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({all:{cache:!1,get:function(){return _.concat(this.pending_history_list,this.history_list)}}},Object(o.b)({pending_history_list:function(t){return t.wallet.pending_history_list},history_list:function(t){return t.wallet.history_list}})),data:function(){return{processing_page:1,finish_page:1,all_page:1,per_page:999999,is_loading:!0}},beforeDestroy:function(){},mounted:function(){},methods:{open:function(){this.$refs.dialog.open()},close:function(){this.$refs.dialog.close()},closed:function(){},getTxUrl:function(t){return"zh-TW"==this.$i18n.locale?"https://cn.etherscan.com/tx/"+t:"https://etherscan.io/tx/"+t},gotoDetail:function(t){window.open(this.getTxUrl(t))}}},Y=(n("3a0f"),Object(x.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.all.length>0?n("div",{ref:"history_root",attrs:{id:"history"}},[n("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("van-list",{staticClass:"list",attrs:{"finished-text":""}},[n("table",[n("tr",{staticClass:"item header"},[n("th",{staticClass:"amount"},[t._v(t._s(t.$t("epro.history.content_0")))]),n("th",{staticClass:"amount"},[t._v(t._s(t.$t("epro.history.content_1")))]),n("th",{staticClass:"address"},[t._v(t._s(t.$t("epro.history.content_2")))])]),t._l(t.all,(function(e,a){return n("tr",{key:a,staticClass:"item",on:{click:function(n){return t.gotoDetail(e.hash)}}},[n("td",{staticClass:"amount"},[t._v(t._s(t.$t("ACTION."+e.method.toLowerCase())))]),n("td",{staticClass:"amount"},[t._v(t._s(t.$t("epro.history.content_3")))]),n("td",{staticClass:"address"},[t._v(t._s(t._f("date")(e.timestamp)))])])}))],2)])],1)]):t._e()}),[],!1,null,"099e6be8",null)).exports,N={components:{Dialog:R.a},data:function(){return{amount:""}},mounted:function(){},asyncComputed:{calcData:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.amount){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,Object(i.b)(this.amount);case 4:return e=t.sent,n=e.value_,e.price_,a=e.tax_,t.abrupt("return",{amount:Object(i.e)(n),tax:Object(i.e)(a)});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},computed:{},methods:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return _.floor(t,e)},open:function(){var t=this;return this.amount="",this.$refs.dialog.open(),new Promise((function(e){t.resolve=e}))},close:function(){this.$refs.dialog.close()},closed:function(){this.resolve()},confirm:function(){return parseFloat(this.amount)!=this.amount?(this.$toast(this.$t("dialog.redeem.content_3")),!1):this.amount<=0?(this.$toast(this.$t("dialog.redeem.content_4")),!1):(Object(i.p)(this.amount),void this.close())}}},S=(n("32de"),Object(x.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{ref:"dialog",attrs:{id:"redeem",title:t.$t("dialog.redeem.content_0"),closeable:!0},on:{closed:t.closed}},[n("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"form"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:t.$t("dialog.redeem.content_1")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("div",{staticClass:"symbol"},[t._v("EPRO")])])]),n("div",{staticClass:"tips-group"},[n("div",{staticClass:"tip"},[t._v(t._s(t.$t("dialog.redeem.content_5"))+": "+t._s(t._f("floor")(null==t.calcData?0:t.calcData.amount))+" ETH")])]),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn confirm",on:{click:t.confirm}},[t._v(t._s(t.$t("dialog.redeem.content_2")))])])])])}),[],!1,null,"33a7e727",null)).exports,I={components:{Dialog:R.a},data:function(){return{amount:""}},mounted:function(){},asyncComputed:{calcData:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.amount){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,Object(i.a)(this.amount);case 4:return e=t.sent,n=e.amount,e.price_,a=e.tax_,t.abrupt("return",{amount:Object(i.e)(n),tax:Object(i.e)(a)});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},computed:{},methods:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return 0==t?0:_.floor(t,e)},open:function(){var t=this;return this.amount="",this.$refs.dialog.open(),new Promise((function(e){t.resolve=e}))},close:function(){this.$refs.dialog.close()},closed:function(){this.resolve()},confirm:function(){return parseFloat(this.amount)!=this.amount?(this.$toast(this.$t("dialog.purchase.content_3")),!1):this.amount<=0?(this.$toast(this.$t("dialog.purchase.content_4")),!1):(Object(i.n)(this.amount),void this.close())}}},F=(n("ca4d"),Object(x.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{ref:"dialog",attrs:{id:"redeem",title:t.$t("dialog.purchase.content_0"),closeable:!0},on:{closed:t.closed}},[n("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"form"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:t.$t("dialog.purchase.content_1")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("div",{staticClass:"symbol"},[t._v("ETH")])])]),n("div",{staticClass:"tips-group"},[n("div",{staticClass:"tip"},[t._v(t._s(t.$t("dialog.redeem.content_6"))+": "+t._s(t._f("floor")(null==t.calcData?0:t.calcData.amount))+" EPRO")])]),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn confirm",on:{click:t.confirm}},[t._v(t._s(t.$t("dialog.purchase.content_2")))])])])])}),[],!1,null,"0be9de13",null)).exports,L={components:{Dialog:R.a},data:function(){return{amount:""}},mounted:function(){},computed:{},methods:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return 0==t?0:_.floor(t,e)},open:function(){var t=this;return this.amount="",this.$refs.dialog.open(),new Promise((function(e){t.resolve=e}))},close:function(){this.$refs.dialog.close()},closed:function(){this.resolve()},confirm:function(){return parseFloat(this.amount)!=this.amount?(this.$toast(this.$t("dialog.stake.content_3")),!1):this.amount<=0?(this.$toast(this.$t("dialog.stake.content_4")),!1):(Object(i.r)(this.amount),void this.close())}}},M=(n("cc53"),Object(x.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{ref:"dialog",attrs:{id:"redeem",title:t.$t("dialog.stake.content_0"),closeable:!0},on:{closed:t.closed}},[n("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"form"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:t.$t("dialog.stake.content_1")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("div",{staticClass:"symbol"},[t._v("EPRO")])])]),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn confirm",on:{click:t.confirm}},[t._v(t._s(t.$t("dialog.stake.content_2")))])])])])}),[],!1,null,"b9985468",null)).exports,W={components:{Dialog:R.a},data:function(){return{amount:""}},mounted:function(){},computed:{},methods:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return 0==t?0:_.floor(t,e)},open:function(){var t=this;return this.amount="",this.$refs.dialog.open(),new Promise((function(e){t.resolve=e}))},close:function(){this.$refs.dialog.close()},closed:function(){this.resolve()},confirm:function(){return parseFloat(this.amount)!=this.amount?(this.$toast(this.$t("dialog.unstake.content_3")),!1):this.amount<=0?(this.$toast(this.$t("dialog.unstake.content_4")),!1):(Object(i.t)(this.amount),void this.close())}}},U=(n("3563"),Object(x.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{ref:"dialog",attrs:{id:"redeem",title:t.$t("dialog.unstake.content_0"),closeable:!0},on:{closed:t.closed}},[n("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"form"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:t.$t("dialog.unstake.content_1")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("div",{staticClass:"symbol"},[t._v("EPRO")])])]),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn confirm",on:{click:t.confirm}},[t._v(t._s(t.$t("dialog.unstake.content_2")))])])])])}),[],!1,null,"275ceffc",null)).exports,A={components:{Dialog:R.a},data:function(){return{address:"",amount:""}},mounted:function(){},computed:{},methods:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return 0==t?0:_.floor(t,e)},open:function(){var t=this;return this.amount="",this.$refs.dialog.open(),new Promise((function(e){t.resolve=e}))},close:function(){this.$refs.dialog.close()},closed:function(){this.resolve()},confirm:function(){return parseFloat(this.amount)!=this.amount?(this.$toast(this.$t("dialog.transfer.content_4")),!1):Object(i.l)(this.address)?(Object(i.q)(this.address,this.amount),void this.close()):(this.$toast(this.$t("dialog.transfer.content_5")),!1)}}};function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var J={name:"EPRO",components:{Dashboard:D,Redeem:S,Purchase:F,Stake:M,Unstake:U,Transfer:(n("2dc3"),Object(x.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{ref:"dialog",attrs:{id:"redeem",title:t.$t("dialog.transfer.content_0"),closeable:!0},on:{closed:t.closed}},[n("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"form"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{placeholder:t.$t("dialog.transfer.content_1")},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:t.$t("dialog.transfer.content_2")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("div",{staticClass:"symbol"},[t._v("EPRO")])])]),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn confirm",on:{click:t.confirm}},[t._v(t._s(t.$t("dialog.transfer.content_3")))])])])])}),[],!1,null,"d0ba65d4",null)).exports,History:Y},created:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),data:function(){return{}},mounted:function(){this.init()},filters:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return null==C.a.state.wallet.address?"-":0==t?0:m.a.accounting.formatNumber(_.floor(t,e),e)}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(n,!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({total_dig:function(){return parseFloat(this.totalDestroyed)+parseFloat(this.m_totalSupply)}},Object(o.b)({totalInvestment:function(t){return Object(i.e)(t.wallet.totalInvestment)},m_totalSupply:function(t){return Object(i.e)(t.wallet.m_totalSupply)},totalDestroyed:function(t){return Object(i.e)(t.wallet.totalDestroyed)},reserve:function(t){return Object(i.e)(t.wallet.reserve)},profitPool:function(t){return Object(i.e)(t.wallet.profitPool)},stakingOf:function(t){return Object(i.e)(t.wallet.stakingOf)},profitedOf:function(t){return Object(i.e)(t.wallet.profitedOf)},totalProfited:function(t){return Object(i.e)(t.wallet.totalProfited)},price:function(t){return Object(i.e)(t.wallet.price)},totalStaking:function(t){return Object(i.e)(t.wallet.totalStaking)},profitingOf:function(t){return Object(i.e)(t.wallet.profitingOf)},balanceOfToken:function(t){return Object(i.e)(t.wallet.balanceOfToken)}})),methods:{init:function(){},divideProfit:function(){Object(i.d)()}}},q=(n("136a"),Object(x.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"epro"}},[n("Dashboard"),n("div",{staticClass:"box yellow"},[n("div",{staticClass:"left"},[n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_0"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.total_dig)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_1"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.totalDestroyed)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_2"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.reserve)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_3"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.m_totalSupply)))])])]),n("div",{staticClass:"right"},[n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_4"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.totalStaking)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_5"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(.025*parseFloat(t.totalInvestment)))+"ETH")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_6"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.totalProfited))+"ETH")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_7"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(.025*parseFloat(t.totalInvestment)-parseFloat(t.totalProfited)))+"ETH")])])])]),n("div",{staticClass:"box blue"},[n("div",{staticClass:"left"},[n("div",{staticClass:"epro-label"},[t._v("\n        "+t._s(t.$t("epro.content_8"))+":\n      ")]),n("div",{staticClass:"epro-summary"},[n("span",{staticClass:"amount"},[t._v(t._s(t._f("floor")(t.balanceOfToken)))]),n("span",{staticClass:"symbol"},[t._v("EPRO")])])]),n("div",{staticClass:"right"},[n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn",on:{click:function(e){return t.$refs.redeem.open()}}},[t._v(t._s(t.$t("epro.content_9")))]),n("div",{staticClass:"btn",on:{click:function(e){return t.$refs.transfer.open()}}},[t._v(t._s(t.$t("epro.content_10")))])]),n("div",{staticClass:"btn btn-primary",on:{click:function(e){return t.$refs.purchase.open()}}},[t._v(t._s(t.$t("epro.content_11"))+" ")])])]),n("div",{staticClass:"box red"},[n("div",{staticClass:"left"},[n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_12"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.stakingOf)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_13"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.profitedOf)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("epro.content_14"))+":")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("floor")(t.profitingOf)))])])]),n("div",{staticClass:"right"},[n("div",{staticClass:"btn-group"},[n("div",{staticClass:"btn",on:{click:function(e){return t.$refs.stake.open()}}},[t._v(t._s(t.$t("epro.content_15")))]),n("div",{staticClass:"btn",on:{click:function(e){return t.$refs.unstake.open()}}},[t._v(t._s(t.$t("epro.content_16")))])]),n("div",{staticClass:"btn btn-primary",on:{click:t.divideProfit}},[t._v(t._s(t.$t("epro.content_17")))])])]),n("div",{staticClass:"box green"},[n("h2",[t._v(t._s(t.$t("epro.content_18")))]),n("History",{staticClass:"history"})],1),n("Redeem",{ref:"redeem"}),n("Purchase",{ref:"purchase"}),n("Stake",{ref:"stake"}),n("Unstake",{ref:"unstake"}),n("Transfer",{ref:"transfer"})],1)}),[],!1,null,"5abd7d88",null));e.default=q.exports},bbf5:function(t,e,n){},bed5:function(t,e,n){},ca4d:function(t,e,n){"use strict";var a=n("bed5");n.n(a).a},cc53:function(t,e,n){"use strict";var a=n("83bc");n.n(a).a},d8bd:function(t,e,n){},dccd:function(t,e,n){},f43c:function(t,e,n){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56f048b5"],{"341e":function(t,s,e){"use strict";e("e502")},5497:function(t,s,e){"use strict";e("6ff0")},5653:function(t,s,e){"use strict";e("cbc8")},"6ff0":function(t,s,e){},"8bc9":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"root"},[e("div",{staticClass:"container"},[e("div",{staticStyle:{"text-align":"center"}},[e("div",{staticClass:"title q-my-lg"},[t._v("How to Play the BloqBall Lotto")]),e("div",{staticClass:"q-my-lg q-mx-lg"},[t._v("If at least three numbers on your tickets match the winning balls, you win!")])]),e("div",{staticClass:"cards"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card__item card__item--step"},[t._v("1")]),e("div",{staticClass:"card__item card__item--title"},[t._v("Get your tickets")]),e("div",{staticClass:"card__item card__item--des"},[t._v("Price for one ticket is 100 BQB. You can buy any number of tickets!")])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card__item card__item--step"},[t._v("2")]),e("div",{staticClass:"card__item card__item--title"},[t._v("Wait for Results")]),e("div",{staticClass:"card__item card__item--des"},[t._v("Bloq Ball Lotto results are announced at 23:59:59 GMT+4.00 every day!")])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card__item card__item--step"},[t._v("3")]),e("div",{staticClass:"card__item card__item--title"},[t._v("Check for matches")]),e("div",{staticClass:"card__item card__item--des"},[t._v("Once the winning balls are picked, check it with your ticket and see if at least 3 numbers match.")])])]),e("hr",{staticClass:"q-my-xl"}),e("div",{staticClass:"des"},[e("div",{staticClass:"des__item"},[e("div",{staticClass:"title q-my-sm"},[t._v("Bloq Ball Lotto Game Specifications")]),e("div",{staticClass:"sub-title q-my-sm"},[t._v("You win if at least 3 numbers in your ticket match with the winning balls.")]),e("p",{staticClass:"q-my-md"}),e("div",{staticClass:"sub-title q-my-sm"},[t._v("Prizes and winnings")]),e("p",{staticClass:"q-my-md"}),e("ul",[e("li",[t._v("First Prize: Whoever matches all six balls wins the first prize. First prize is 50% of the winnings pool.")]),e("li",[t._v("Second Prize: Whoever matches any five balls wins the second prize. Second prize is 25% of the winnings pool.")]),e("li",[t._v("Third Prize: Whoever matches any four balls wins the third prize. Third prize is 15% of the winnings pool.")]),e("li",[t._v("Fourth Prize: Whoever matches any three balls wins the fourth prize. Fourth prize is 10% of the winnings pool.")])]),e("p",[t._v("If there are no winners in any section, that prize money will be added to the next draw. If more than one winners are there in any section, the prize amount will be shared equally among the winners.")])]),e("div",{staticClass:"des__item des__item--small"})]),e("hr",{staticClass:"q-my-xl"}),e("div",{staticClass:"des"},[e("div",{staticClass:"des__item"},[e("div",{staticClass:"title q-my-sm"},[t._v("Why Bloq Ball Lotto is Unique?")]),e("p",{staticClass:"q-my-md"}),e("div",{staticClass:"sub-title q-my-sm"},[t._v("You get 100% of the winnings pool")]),e("ul",[e("li",[t._v("100% of the BQB tokens added to the smart contract goes straight into the winnings pool. No platform fee or developer fee.")])]),e("div",{staticClass:"sub-title q-my-sm"},[t._v("Rollover winnings")]),e("ul",[e("li",[t._v("In any game, if there are no winners in any section of the prizes, that amount of BQB rolls over into the next lotto and added to the winnings pool.")])]),e("div",{staticClass:"sub-title q-my-sm"},[t._v("Fair Play - 100%")]),e("ul",[e("li",[t._v("BloqBall DeFi lotto uses ChainLink's Random numbers. So there's no foul play, and your tickets are created as an NFT for verification.")])])]),e("div",{staticClass:"des__item des__item--small"},[e("div")])]),e("hr",{staticClass:"q-my-xl"}),e("div",{staticClass:"footer"},[e("div",{staticClass:"footer__item"}),e("div",{staticClass:"footer__item"},[e("div",[e("div",{staticClass:"sub-title"},[t._v("Do you want to know more?")]),e("p",[t._v("Check our FAQ or join our awesome communities to learn more about Bloq Ball Lotto!")])])])])])])}],n={},r=n,l=(e("5653"),e("2877")),o=e("b498"),c=e("93dc"),d=e.n(c),u=Object(l["a"])(r,i,a,!1,null,"468bba77",null);s["a"]=u.exports;d()(u,"components",{QColor:o["a"]})},cbc8:function(t,s,e){},e010:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("unlock-wallet"),e("finished-rounds"),e("how-to-play")],1)},a=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"root"},[e("div",{staticClass:"unlock"},[t.isMetaMaskConnected?t._e():e("div",{staticClass:"unlock__item"},[e("div",{staticClass:"text-area"},[t._v("Connect wallet to check the results!")])]),e("div",{staticClass:"unlock__item"},[t.isMetaMaskConnected?t._e():e("button",{on:{click:t.connectWallet}},[t._v("Check Your Winnings - Connect Wallet")]),t.isMetaMaskConnected&&t.myWinning?e("button",{on:{click:t.claim}},[t._v("CLAIM YOUR "+t._s(t.myWinning)+"BQB")]):t._e(),t.isMetaMaskConnected&&!t.myWinning?e("button",[t._v("NO WINNINGS")]):t._e()])])])},r=[],l=e("901e"),o=e.n(l),c={computed:{isMetaMaskConnected:function(){return null!=this.$store.state.account},myWinning:function(){return null!=this.$store.state.lottery.myWinning&&o()(this.$store.state.lottery.myWinning.pendingRewards).isGreaterThan(0)?o()(this.$store.state.lottery.myWinning.pendingRewards).shiftedBy(-18).toFormat(2):null}},methods:{connectWallet:function(){this.$store.dispatch("connect")},claim:function(){this.$store.dispatch("claim")}}},d=c,u=(e("5497"),e("2877")),_=e("b498"),m=e("93dc"),v=e.n(m),h=Object(u["a"])(d,n,r,!1,null,"62e426e3",null),b=h.exports;v()(h,"components",{QColor:_["a"]});var y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"root"},[e("div",{staticClass:"finish"},[t._m(0),e("div",{staticClass:"finish__item"},[e("div",{staticClass:"btn-group"},[e("button",{class:"your history"==t.tab?"btn btn--active":"btn",on:{click:function(s){t.tab="your history"}}},[t._v("Your Ticket History")]),e("button",{class:"all history"==t.tab?"btn btn--active":"btn",attrs:{disabled:null==t.resultAll},on:{click:function(s){t.tab="all history"}}},[t._v("All History")])])]),e("div",{staticClass:"finish__item"},["your history"==t.tab?e("div",{staticClass:"card"},[e("div",{staticClass:"card__item card__item--header"},[e("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v(" Daily Lottos "),t.isMetaMaskConnected&&t.resultIndex?e("span",{staticStyle:{padding:"5px 15px","border-radius":"20px","background-color":"#99999950"}},[t._v(t._s(t.resultIndex))]):t._e(),t.isMetaMaskConnected&&t.result?e("div",{staticStyle:{"font-size":".8rem",color:"#999",margin:"5px 0"}},[t._v(t._s(t.resultDate))]):t._e()]),t.isMetaMaskConnected&&t.resultIndex?e("div",[e("q-btn",{staticClass:"q-mx-sm",attrs:{round:"",dense:"",flat:"",icon:"arrow_back"},on:{click:t.goBack}}),e("q-btn",{staticClass:"q-mx-sm",attrs:{round:"",dense:"",flat:"",icon:"arrow_forward"},on:{click:t.goNext}}),e("q-btn",{staticClass:"q-mx-sm",attrs:{round:"",dense:"",flat:"",icon:"keyboard_tab"},on:{click:t.goEnd}})],1):t._e()]),t.isMetaMaskConnected?t._e():e("div",{staticClass:"card__item",staticStyle:{padding:"70px"}},[e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center",width:"100%"}},[e("div",{staticStyle:{padding:"10px"}},[t._v("Connect wallet to check your tickets")]),e("div",{staticStyle:{padding:"10px"}},[e("button",{staticClass:"button",on:{click:t.connectWallet}},[t._v("Unlock Wallet")])])])]),t.isMetaMaskConnected&&t.result?[3==t.result.status?e("div",{staticClass:"card__item"},[t._m(1),e("div",{staticClass:"number"},[e("div",{staticClass:"number__item",staticStyle:{"background-color":"#b434b9"}},[t._v(t._s(t.winningNumber[0]))]),e("div",{staticClass:"number__item",staticStyle:{"background-color":"#6734b9"}},[t._v(t._s(t.winningNumber[1]))]),e("div",{staticClass:"number__item",staticStyle:{"background-color":"#347db9"}},[t._v(t._s(t.winningNumber[2]))]),e("div",{staticClass:"number__item",staticStyle:{"background-color":"#34b4b9"}},[t._v(t._s(t.winningNumber[3]))]),e("div",{staticClass:"number__item",staticStyle:{"background-color":"#34b99c"}},[t._v(t._s(t.winningNumber[4]))]),e("div",{staticClass:"number__item",staticStyle:{"background-color":"#b9a534"}},[t._v(t._s(t.winningNumber[5]))])])]):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cardExpand,expression:"cardExpand"}],staticClass:"card__item",staticStyle:{"border-top":"1px solid #ddd","align-items":"flex-start"}},[e("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold",width:"200px"}},[e("div",{},[t._v("Winning Pool")]),e("div",{staticStyle:{"font-size":"2rem",color:"var(--q-color-primary)"}},[t._v(t._s(t.winningPool)+" BQB")])]),e("div",{staticClass:"match-items"},[e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match all 6")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[5])+" BQB")])]),e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match any 5")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[4])+" BQB")])]),e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match any 4")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[3])+" BQB")])]),e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match any 3")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[2])+" BQB")])])])]),t.myNumbers.length&&t.cardExpand?t._l(t.myNumbers,(function(s,i){return e("div",{key:i,staticClass:"card__item",staticStyle:{"padding-bottom":"0px"}},[e("div",{staticClass:"item"},[0==i?e("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v("Your Balls")]):t._e()]),e("div",{staticClass:"number my-number"},t._l([0,1,2,3,4,5],(function(i){return e("div",{key:i,class:["number__item","number"+t.isWinningNumber(s,i)]},[t._v(t._s(t.getNumber(s,i)))])})),0)])})):t._e(),3==t.result.status?e("div",{directives:[{name:"show",rawName:"v-show",value:t.cardExpand,expression:"cardExpand"}],staticClass:"card__item"},[e("div",[e("div",{staticStyle:{"font-size":"1rem"}},[t._v("Your rewards: "),e("span",{staticStyle:{"font-size":"2rem",color:"var(--q-color-primary)"}},[t._v(" "+t._s(t.winningMine))]),t._v(" BQB ")])])]):t._e()]:t._e(),t.isMetaMaskConnected?e("div",{staticClass:"card__item",staticStyle:{"justify-content":"center"}},[t.cardExpand&&t.result?e("div",{staticClass:"card__expand__switcher",on:{click:function(s){t.cardExpand=!t.cardExpand}}},[t._v("Hide "),e("q-icon",{attrs:{name:"expand_less",color:"info"}})],1):t._e(),!t.cardExpand&&t.result?e("div",{staticClass:"card__expand__switcher",on:{click:function(s){t.cardExpand=!t.cardExpand}}},[t._v("Show "),e("q-icon",{attrs:{name:"expand_more",color:"info"}})],1):t._e()]):t._e()],2):t._e(),"all history"==t.tab?e("div",{staticClass:"card"},[e("div",{staticClass:"card__item card__item--header"},[e("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v(" Bloq Ball Lotto "),e("span",{staticStyle:{padding:"5px 15px","border-radius":"20px","background-color":"#99999950"}},[t._v(t._s(t.$store.state.lottery.lastAllResultId))]),e("div",{staticStyle:{"font-size":".8rem",color:"#999",margin:"5px 0"}},[t._v(t._s(t.resultDate))])]),e("div",[e("q-btn",{staticClass:"q-mx-sm",attrs:{round:"",dense:"",flat:"",icon:"arrow_back"},on:{click:t.goBack}}),e("q-btn",{staticClass:"q-mx-sm",attrs:{round:"",dense:"",flat:"",icon:"arrow_forward"},on:{click:t.goNext}}),e("q-btn",{staticClass:"q-mx-sm",attrs:{round:"",dense:"",flat:"",icon:"keyboard_tab"},on:{click:t.goEnd}})],1)]),t.result?[3==t.result.status?e("div",{staticClass:"card__item item-label"},[t._m(2),e("div",{staticClass:"number"},[e("div",{staticClass:"number__item number1"},[t._v(t._s(t.winningNumber[0]))]),e("div",{staticClass:"number__item number2"},[t._v(t._s(t.winningNumber[1]))]),e("div",{staticClass:"number__item number3"},[t._v(t._s(t.winningNumber[2]))]),e("div",{staticClass:"number__item number4"},[t._v(t._s(t.winningNumber[3]))]),e("div",{staticClass:"number__item number5"},[t._v(t._s(t.winningNumber[4]))]),e("div",{staticClass:"number__item number6"},[t._v(t._s(t.winningNumber[5]))])])]):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cardExpand,expression:"cardExpand"}],staticClass:"card__item",staticStyle:{"border-top":"1px solid #ddd","align-items":"flex-start"}},[e("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold",width:"200px"}},[e("div",{},[t._v("Winning Pool")]),e("div",{staticStyle:{"font-size":"2rem",color:"var(--q-color-primary)"}},[t._v(t._s(t.winningPool)+" BQB")])]),e("div",{staticClass:"match-items"},[e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match all 6")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[5])+" BQB")]),e("div",{staticClass:"sub-value"},[t._v(t._s(t.winner[5]))])]),e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match any 5")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[4])+" BQB")]),e("div",{staticClass:"sub-value"},[t._v(t._s(t.winner[4]))])]),e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match any 4")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[3])+" BQB")]),e("div",{staticClass:"sub-value"},[t._v(t._s(t.winner[3]))])]),e("div",{staticClass:"match-items__item"},[e("div",{staticClass:"title"},[t._v("Match any 3")]),e("div",{staticClass:"value"},[t._v(t._s(t.bracketBQB[2])+" BQB")]),e("div",{staticClass:"sub-value"},[t._v(t._s(t.winner[2]))])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cardExpand,expression:"cardExpand"}],staticClass:"card__item"},[e("div",{staticStyle:{width:"200px"}},[e("div",{staticStyle:{"font-size":"1rem"}},[t._v("Total Players Today: "),e("span",[t._v(" "+t._s(t.result.amountOfPurchasedPeople))])])])])]:t._e(),e("div",{staticClass:"card__item",staticStyle:{"justify-content":"center"}},[t.cardExpand&&t.result?e("div",{staticClass:"card__expand__switcher",on:{click:function(s){t.cardExpand=!t.cardExpand}}},[t._v("Hide "),e("q-icon",{attrs:{name:"expand_less",color:"info"}})],1):t._e(),!t.cardExpand&&t.result?e("div",{staticClass:"card__expand__switcher",on:{click:function(s){t.cardExpand=!t.cardExpand}}},[t._v("Show "),e("q-icon",{attrs:{name:"expand_more",color:"info"}})],1):t._e()])],2):t._e()])])])},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"finish__item"},[e("div",{staticClass:"title"},[t._v("Lotto Results")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v("Winning Balls")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticStyle:{"font-size":"1.2rem","font-weight":"bold"}},[t._v("Winning Balls")])])}],C=(e("d3b7"),e("25f0"),{data:function(){return{tab:"your history",cardExpand:!1}},computed:{isMetaMaskConnected:function(){return null!=this.$store.state.account},resultAll:function(){return this.$store.state.lottery.lastAllResult},resultIndex:function(){return this.$store.state.lottery.myResultIds?this.$store.state.lottery.myResultIds[this.$store.state.lottery.myResultIds.length-this.$store.state.lottery.myResultIndex-1]:""},result:function(){return"all history"==this.tab?this.$store.state.lottery.lastAllResult:"your history"==this.tab?this.$store.state.lottery.lastMyResult:null},bracketBQB:function(){var t=["-","-","-","-","-","-"];if(null!=this.result)for(var s=2;s<6;s++)t[s]=o()(this.result.amountCollectedInBQB).times(this.result.rewardsBreakdown[s]).div(1e4).shiftedBy(-18).toFormat(2);return t},winner:function(){var t=["-","-","-","-","-","-"];if(null!=this.result)for(var s=2;s<6;s++){var e=parseInt(this.result.countWinnersPerBracket[s]);1==e?t[s]=e+" ticket":e>1&&(t[s]=e+" tickets")}return t},winningPool:function(){return null!=this.result?o()(this.result.amountCollectedInBQB).shiftedBy(-18).toFormat(2):"-"},winningMine:function(){return this.resultIndex==this.$store.state.lottery.currentLotteryId&&null!=this.$store.state.lottery.myWinning&&o()(this.$store.state.lottery.myWinning.pendingRewards).isGreaterThan(0)?o()(this.$store.state.lottery.myWinning.pendingRewards).shiftedBy(-18).toFormat(2):null!=this.result&&this.$store.state.lottery.winningMine?o()(this.$store.state.lottery.winningMine).shiftedBy(-18).toFormat(2):0},winningNumber:function(){var t=this.result,s=[0,0,0,0,0,0];return null!=t&&(s[0]=this.getNumber(t.finalNumber,0),s[1]=this.getNumber(t.finalNumber,1),s[2]=this.getNumber(t.finalNumber,2),s[3]=this.getNumber(t.finalNumber,3),s[4]=this.getNumber(t.finalNumber,4),s[5]=this.getNumber(t.finalNumber,5)),s},myNumbers:function(){return this.$store.state.lottery.lastMyNumbers?this.$store.state.lottery.lastMyNumbers:[]},resultDate:function(){var t=new Date(1e3*this.result.endTime),s={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},e=new Intl.DateTimeFormat("en-US",s);return e.format(t)}},methods:{connectWallet:function(){this.$store.dispatch("connect")},goBack:function(){"all history"==this.tab?this.$store.commit("read_history",{id:this.$store.state.lottery.lastAllResultId-1,tab:this.tab}):this.$store.commit("read_history",{id:this.$store.state.lottery.myResultIndex+1,tab:this.tab})},goNext:function(){"all history"==this.tab?this.$store.commit("read_history",{id:this.$store.state.lottery.lastAllResultId+1,tab:this.tab}):this.$store.commit("read_history",{id:this.$store.state.lottery.myResultIndex-1,tab:this.tab})},goEnd:function(){"all history"==this.tab?this.$store.commit("read_history",{id:this.$store.state.lottery.currentLotteryId,tab:this.tab}):this.$store.commit("read_history",{id:0,tab:this.tab})},getNumber:function(t,s){return o()(t).shiftedBy(2*s-10).mod(100).mod(22).integerValue().toString()},isWinningNumber:function(t,s){var e=this.getNumber(t,s);return this.winningNumber.indexOf(e)+1}}}),p=C,g=(e("341e"),e("9c40")),w=e("0016"),k=Object(u["a"])(p,y,f,!1,null,"be388678",null),x=k.exports;v()(k,"components",{QBtn:g["a"],QColor:_["a"],QIcon:w["a"]});var B=e("8bc9"),N={components:{UnlockWallet:b,FinishedRounds:x,HowToPlay:B["a"]},mounted:function(){this.$store.commit("read_lottery")}},q=N,$=Object(u["a"])(q,i,a,!1,null,"5eb2d995",null);s["default"]=$.exports},e502:function(t,s,e){}}]);
//# sourceMappingURL=chunk-56f048b5.085f9508.js.map
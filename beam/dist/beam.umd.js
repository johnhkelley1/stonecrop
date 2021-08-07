!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@sedum/beam"]={},e.Vue)}(this,(function(e,t){"use strict";const o={name:"Navbar",methods:{handlePrimaryAction(){this.$emit("click")}}},n={class:"beam__navbar"},a=t.createVNode("span",{class:"home-icon"},"⬣",-1),r=t.createVNode("h1",{class:"nav-title"},"TITLE",-1),l={class:"navbar-action-wrapper"},c=t.createTextVNode("Action");o.render=function(e,o,d,i,s,u){return t.openBlock(),t.createBlock("nav",n,[t.renderSlot(e.$slots,"icon",{},(()=>[a])),t.renderSlot(e.$slots,"title",{},(()=>[r])),t.createVNode("div",l,[t.createVNode("button",{class:"navbar-action",onClick:o[1]||(o[1]=(...e)=>u.handlePrimaryAction&&u.handlePrimaryAction(...e))},[t.renderSlot(e.$slots,"navbaraction",{},(()=>[c]))])])])};const d={name:"ListAnchor",props:{to:{type:String,required:!1,default:""}}},i=t.withScopeId("data-v-42112fee")(((e,o,n,a,r,l)=>(t.openBlock(),t.createBlock("a",{href:n.to,class:"beam__listanchor"},[t.renderSlot(e.$slots,"default",{},void 0,!0)],8,["href"]))));d.render=i,d.__scopeId="data-v-42112fee";const s={name:"ItemCount",props:{value:{type:Number,required:!1,default:0},denominator:{type:Number,required:!0},uom:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!1}},data(){return{count:this.value}},methods:{handleInput(e){e.preventDefault(),e.stopPropagation(),this.count=Number(e.target.innerHTML.replace(/[^0-9]/g,"")),this.$emit("input",this.count)}},computed:{countColor(){return this.count===this.denominator}},watch:{value(){this.count=this.value}}},u={class:"beam__itemcount"},m={key:0};s.render=function(e,o,n,a,r,l){return t.openBlock(),t.createBlock("div",u,[t.createVNode("span",{contenteditable:n.editable,style:{color:!0===l.countColor?"#3c5014":"#e63c28"},onInput:o[1]||(o[1]=e=>l.handleInput(e)),onClick:o[2]||(o[2]=e=>l.handleInput(e))},t.toDisplayString(r.count),45,["contenteditable"]),t.createVNode("span",null,"/"+t.toDisplayString(n.denominator),1),n.uom?(t.openBlock(),t.createBlock("span",m,"  "+t.toDisplayString(n.uom),1)):t.createCommentVNode("",!0)])};const p={name:"ItemCheck",props:{value:{type:Boolean,required:!1,default:!1}},data(){return{checked:this.value}},methods:{handleInput(e){this.$emit("input",this.checked)}}},h=t.withScopeId("data-v-2ef8a7b8");t.pushScopeId("data-v-2ef8a7b8");const f={class:"container"},v=t.createVNode("span",{class:"checkmark",tabindex:"0"},null,-1);t.popScopeId();const k=h(((e,o,n,a,r,l)=>(t.openBlock(),t.createBlock("label",f,[t.createVNode("input",{type:"checkbox",checked:n.value,onInput:o[1]||(o[1]=(...e)=>l.handleInput&&l.handleInput(...e)),tabindex:"-1"},null,40,["checked"]),v]))));p.render=k,p.__scopeId="data-v-2ef8a7b8";const b={name:"ListItem",components:{ItemCount:s,ItemCheck:p},props:{item:{type:Object,required:!0}}},y={tabindex:"0",class:"beam__listitem"};b.render=function(e,o,n,a,r,l){const c=t.resolveComponent("ItemCount"),d=t.resolveComponent("ItemCheck");return t.openBlock(),t.createBlock("li",y,[t.createVNode("span",null,[t.createVNode("label",null,t.toDisplayString(n.item.label),1),t.createVNode("p",null,t.toDisplayString(n.item.description),1)]),n.item.count?(t.openBlock(),t.createBlock(c,{key:0,modelValue:n.item.count.count,"onUpdate:modelValue":o[1]||(o[1]=e=>n.item.count.count=e),denominator:n.item.count.of,uom:n.item.count.uom,editable:!0},null,8,["modelValue","denominator","uom"])):t.createCommentVNode("",!0),n.item.hasOwnProperty("checked")?(t.openBlock(),t.createBlock(d,{key:1,modelValue:n.item.checked,"onUpdate:modelValue":o[2]||(o[2]=e=>n.item.checked=e)},null,8,["modelValue"])):t.createCommentVNode("",!0)])};const I={name:"ListView",components:{ListItem:b,ListAnchor:d},props:{items:{type:Array,required:!0}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){document.documentElement.scrollHeight-window.innerHeight-document.documentElement.scrollTop<=2&&this.$emit("scrollbottom")}}},g={class:"beam__listview"};I.render=function(e,o,n,a,r,l){const c=t.resolveComponent("ListItem");return t.openBlock(),t.createBlock("ul",g,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(n.items,((e,o)=>(t.openBlock(),t.createBlock("li",{key:o},[e.linkComponent?(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.linkComponent),{key:0,to:e.route,tabindex:"-1"},{default:t.withCtx((()=>[t.createVNode(c,{item:e},null,8,["item"])])),_:2},1032,["to"])):(t.openBlock(),t.createBlock(c,{key:1,item:e},null,8,["item"]))])))),128))])};const B={name:"ScanInput",data:()=>({barcode:""}),methods:{handleScanInput(e){"INPUT"!==e.target.tagName&&("Enter"!==e.key?this.barcode+=`${e.key}`:(this.$emit("scaninput",this.barcode),this.barcode=""))}},mounted(){document.addEventListener("keypress",(e=>{this.handleScanInput(e)}))},destroyed(){window.removeEventListener("keypress",(e=>{this.handleScanInput(e)}))}},S=t.withScopeId("data-v-3c9499ea");t.pushScopeId("data-v-3c9499ea");const w={id:"scan_input"};t.popScopeId();const C=S(((e,o,n,a,r,l)=>(t.openBlock(),t.createBlock("div",w))));B.render=C,B.__scopeId="data-v-3c9499ea";const N={name:"ActionFooter",methods:{handleFooterAction(){this.$emit("click")}}},_={class:"beam__actionfooter"},V={class:"footer-action-wrapper"};N.render=function(e,o,n,a,r,l){return t.openBlock(),t.createBlock("footer",_,[t.createVNode("span",V,[t.createVNode("button",{class:"footer-action",onClick:o[1]||(o[1]=(...e)=>l.handleFooterAction&&l.handleFooterAction(...e))},[t.renderSlot(e.$slots,"default")])])])};const M={name:"BeamModal",props:["showModal"]},L=t.withScopeId("data-v-3a0a4124");t.pushScopeId("data-v-3a0a4124");const $={class:"beam__modal"};t.popScopeId();const A=L(((e,o,n,a,r,l)=>{const c=t.resolveComponent("portal");return t.openBlock(),t.createBlock(c,{to:"beam__modal_outlet"},{default:L((()=>[t.withDirectives(t.createVNode("div",$,[t.createVNode("button",{onClick:o[1]||(o[1]=t=>e.$emit("closemodal"))},"Close Modal"),t.renderSlot(e.$slots,"default",{onClosemodal:o[2]||(o[2]=t=>e.$emit("closemodal")),onConfirmmodal:o[3]||(o[3]=t=>e.$emit("confirmmodal"))},void 0,!0)],512),[[t.vShow,n.showModal]])])),_:3})}));M.render=A,M.__scopeId="data-v-3a0a4124";const T={name:"BeamModalOutlet"};T.render=function(e,o,n,a,r,l){const c=t.resolveComponent("portal-target");return t.openBlock(),t.createBlock(c,{name:"beam__modal_outlet"})};const D={name:"ConfirmDialog",methods:{confirmModal(){this.$emit("confirmmodal")},closeModal(){this.$emit("closemodal")}}},P=t.withScopeId("data-v-71fb1c50");t.pushScopeId("data-v-71fb1c50");const E=t.createTextVNode(" Would you like to continue?"),x=t.createVNode("br",null,null,-1),F=t.createVNode("br",null,null,-1);t.popScopeId();const q=P(((e,o,n,a,r,l)=>(t.openBlock(),t.createBlock("div",null,[E,x,t.createVNode("button",{onClick:o[1]||(o[1]=(...e)=>l.confirmModal&&l.confirmModal(...e))},"Yes"),F,t.createVNode("button",{onClick:o[2]||(o[2]=(...e)=>l.closeModal&&l.closeModal(...e))},"No")]))));D.render=q,D.__scopeId="data-v-71fb1c50";
/**
   *  Copyright 2021 Thorsten Luenborg 
   *  @license MIT
   */
const O=Symbol("wormhole");function j(){const e=t.inject(O);if(!e)throw new Error("\n    [portal-vue]: Necessary Injection not found. Make sur you installed the plugin properly.");return e}const U="undefined"!=typeof window;var H=t.defineComponent({compatConfig:{MODE:3},name:"portal",props:{disabled:{type:Boolean},name:{type:[String,Symbol],default:()=>Symbol()},order:{type:Number},slotProps:{type:Object,default:()=>({})},to:{type:String,default:()=>String(Math.round(1e7*Math.random()))}},setup:(e,{slots:o})=>(function(e,o){const n=j();function a(){if(!U)return;const{to:t,name:a,order:l}=e;o.default?n.open({to:t,from:a,order:l,content:o.default}):r()}function r(t){n.close({to:null!=t?t:e.to,from:e.name})}t.onMounted((()=>{e.disabled||a()})),t.onUpdated((()=>{e.disabled?r():a()})),t.onBeforeUnmount((()=>{r()})),t.watch((()=>e.to),((t,o)=>{e.disabled||(o&&o!==t&&r(o),a())}))}(e,o),()=>e.disabled&&o.default?o.default(e.slotProps):null)});const z=(e,{slots:t})=>{var o;return null===(o=t.default)||void 0===o?void 0:o.call(t)};var W=t.defineComponent({compatConfig:{MODE:3},name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slotProps:{type:Object,default:()=>({})}},emits:["change"],setup(e,{emit:o,slots:n}){const a=j(),r=t.computed((()=>{const t=a.getContentForTarget(e.name,e.multiple),o=n.wrapper,r=t.map((t=>t.content(e.slotProps))),l=o?r.flatMap((e=>e.length?o(e):[])):r.flat(1);return{vnodes:l,vnodesFn:()=>l}}));return t.watch(r,(({vnodes:t})=>{const n=t.length>0,r=a.transports.get(e.name),l=r?[...r.keys()]:[];o("change",{hasContent:n,sources:l})}),{flush:"post"}),()=>{var e;return r.value.vnodes.length?[t.h("div",{style:"display: none",key:"__portal-vue-hacky-scoped-slot-repair__"}),t.h(z,r.value.vnodesFn)]:null===(e=n.default)||void 0===e?void 0:e.call(n)}}});const Y=function(e=!0){const o=t.reactive(new Map),n={open:function(e){if(!U)return;const{to:t,from:n,content:a,order:r=1/0}=e;if(!t||!n||!a)return;o.has(t)||o.set(t,new Map);const l={to:t,from:n,content:a,order:r};o.get(t).set(n,l)},close:function(e){const{to:t,from:n}=e;if(!t||!n)return;const a=o.get(t);a&&(a.delete(n),a.size||o.delete(t))},transports:o,getContentForTarget:function(e,t){const n=o.get(e);if(!n)return[];const a=Array.from((null==n?void 0:n.values())||[]);return t?(r=(e,t)=>e.order-t.order,a.map(((e,t)=>[t,e])).sort((function(e,t){return r(e[1],t[1])||e[0]-t[0]})).map((e=>e[1]))):[a.pop()];var r}};return e?t.readonly(n):n}();function G(e,t={}){var o;!1!==t.portalName&&e.component(t.portalName||"Portal",H),!1!==t.portalTargetName&&e.component(t.portalTargetName||"PortalTarget",W);const n=null!==(o=t.wormhole)&&void 0!==o?o:Y;e.provide(O,n)}const J=[o,I,b,d,s,p,B,N,M,D,T],K=function(e,t={}){e.use(G),J.forEach((t=>{e.component(t.name,t)}))};"undefined"!=typeof window&&window.Vue&&K(window.Vue);var Q={version:"0.1.0",install:K,Navbar:o,ListView:I,ListItem:b,ListAnchor:d,ItemCount:s,ItemCheck:p,ScanInput:B,ActionFooter:N,BeamModal:M,ConfirmDialog:D,BeamModalOutlet:T};e.ActionFooter=N,e.BeamModal=M,e.BeamModalOutlet=T,e.ConfirmDialog=D,e.ItemCheck=p,e.ItemCount=s,e.ListAnchor=d,e.ListItem=b,e.ListView=I,e.Navbar=o,e.ScanInput=B,e.default=Q,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));

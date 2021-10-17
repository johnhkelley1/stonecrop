import{reactive as e,computed as t,defineComponent as n,inject as o,withDirectives as a,openBlock as l,createBlock as r,toDisplayString as d,createCommentVNode as i,renderSlot as s,vShow as c,ref as p,watch as u,resolveDynamicComponent as f,withKeys as g,withScopeId as w,pushScopeId as m,popScopeId as b,createVNode as h,Fragment as x,renderList as v,createTextVNode as I,provide as y,nextTick as T,resolveComponent as $}from"vue";var D,C=new Uint8Array(16);function E(){if(!D&&!(D="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(C)}var A=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function R(e){return"string"==typeof e&&A.test(e)}for(var N=[],O=0;O<256;++O)N.push((O+256).toString(16).substr(1));function k(e,t,n){var o=(e=e||{}).random||(e.rng||E)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=o[a];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(N[e[t+0]]+N[e[t+1]]+N[e[t+2]]+N[e[t+3]]+"-"+N[e[t+4]]+N[e[t+5]]+"-"+N[e[t+6]]+N[e[t+7]]+"-"+N[e[t+8]]+N[e[t+9]]+"-"+N[e[t+10]]+N[e[t+11]]+N[e[t+12]]+N[e[t+13]]+N[e[t+14]]+N[e[t+15]]).toLowerCase();if(!R(n))throw TypeError("Stringified UUID is invalid");return n}(o)}class V{constructor(t,n=[],o=[],a={},l,r){this.id=void 0===t?k():t,this.rows=o,this.columns=e(n),this.config=e(a),this.table=void 0===l?e(this.createTableObject()):l,this.display=this.createDisplayObject(r),this.modal=e({visible:!1,rowIndex:void 0,colIndex:void 0,event:void 0,top:void 0,left:void 0,width:void 0})}createTableObject(){let e={};for(const[t,n]of this.columns.entries())for(const[o,a]of this.rows.entries())e[`${t}:${o}`]=a[n.name];return e}createDisplayObject(t){let n=Object.assign({},{modified:!1});if(void 0!==t&&t.hasOwnProperty("0:0"))return t;void 0!==t&&t.hasOwnProperty("default")&&(n=t.default);let o=new Set;for(let e=this.rows.length-1;e>=0;e--){let t=this.rows[e];t.parent&&o.add(t.parent),n[e]={modified:!1,open:null===t.parent||void 0===t.parent,isParent:!!o.has(e),parent:t.parent,isRoot:null===t.parent||void 0===t.parent,indent:t.indent||null,childrenOpen:!1}}return e(n)}get zeroColumn(){return!(!this.config.numberedRows&&!this.config.treeView)}get numberedRowWidth(){t((()=>String(Math.ceil(this.rows.length/100)+1)+"ch"))}cellData(e,t){return this.table[`${e}:${t}`]}setCellData(e,t,n){return this.table[`${t}:${e}`]!==n&&(this.display[`${t}:${e}`].modified=!0),this.table[`${t}:${e}`]=n,this.table[`${t}:${e}`]}toggleRowExpand(e){if(this.config.treeView){this.display[e].childrenOpen=!this.display[e].childrenOpen;for(let t=this.rows.length-1;t>=0;t--)this.display[t].parent===e&&(this.display[t].open=!this.display[t].open,this.display[t].childrenOpen&&this.toggleRowExpand(t))}}}const M=n({name:"ARow",props:{row:{type:Object,required:!0,default:()=>({})},rowIndex:{type:Number,required:!0,default:0},tableid:{type:String,required:!0,default:()=>{}}},setup(e){const t=o(e.tableid);return{TableData:t,getRowExpandSymbol:function(){return t.config.treeView?t.display[e.rowIndex].isRoot&&!t.display[e.rowIndex].childrenOpen?"+":t.display[e.rowIndex].isRoot&&t.display[e.rowIndex].childrenOpen?"-":t.display[e.rowIndex].isParent&&!t.display[e.rowIndex].childrenOpen?"+":t.display[e.rowIndex].isParent&&t.display[e.rowIndex].childrenOpen?"-":"":""},toggleRowExpand:function(e){t.toggleRowExpand(e)},rowVisible:function(){return!t.config.treeView||(!!t.display[e.rowIndex].isRoot||t.display[e.rowIndex].open)}}}});M.render=function(e,t,n,o,p,u){return a((l(),r("tr",null,[e.TableData.config.numberedRows?(l(),r("td",{key:0,style:{width:"TableData.numberedRowWidth","text-align":"center","background-color":"var(--brand-color)",color:"var(--header-text-color)","font-weight":"bold","border-color":"var(--header-border-color)","user-select":"none"}},d(e.rowIndex+1),5)):i("",!0),e.TableData.config.treeView?(l(),r("td",{key:1,style:{width:"2ch","text-align":"center","background-color":"var(--brand-color)",color:"var(--header-text-color)","font-weight":"bold","border-color":"var(--header-border-color)","user-select":"none"},onClick:t[1]||(t[1]=t=>e.toggleRowExpand(e.rowIndex))},d(e.getRowExpandSymbol()),5)):i("",!0),e.TableData.config.numberedRows||e.TableData.config.treeView?i("",!0):s(e.$slots,"indexCell",{key:2}),s(e.$slots,"default")],512)),[[c,e.rowVisible()]])};const P=n({name:"ACell",props:{colIndex:{type:Number,required:!0,default:0},rowIndex:{type:Number,required:!0,default:0},tableid:{type:String,required:!0,default:()=>{}}},setup(e){const n=o(e.tableid);let a=p(!1);const l=t((()=>void 0!==n.columns[e.colIndex].format?n.columns[e.colIndex].format(n.cellData(e.colIndex,e.rowIndex)):n.cellData(e.colIndex,e.rowIndex))),r=t((()=>void 0!==n.columns[e.colIndex].align?n.columns[e.colIndex].align.toLowerCase():"center")),d=t((()=>void 0!==n.columns[e.colIndex].width?n.columns[e.colIndex].width:"40ch"));let i="";return u(a,(()=>{console.log(i)})),{TableData:n,updateData:function(t){t&&(void 0===n.columns[e.colIndex].component&&n.setCellData(e.rowIndex,e.colIndex,t.target.innerHTML),a=!0)},displayValue:l,handleInput:function(t){if(void 0!==n.columns[e.colIndex].mask&&console.log("masking function"),n.columns[e.colIndex].hasOwnProperty("component")){if(f(n.columns[e.colIndex].component)){const o=t.target.getBoundingClientRect();n.modal.visible=!0,n.modal.colIndex=e.colIndex,n.modal.rowIndex=e.rowIndex,n.modal.parent=t.target,n.modal.top=o.top+o.height,n.modal.left=o.left,n.modal.width=d,n.modal.component=n.columns[e.colIndex].component}console.log(t.target)}return t},cellModified:a,textAlign:r,cellWidth:d,onFocus:function(e){i=e.target.innerText},onChange:function(e){e.target.innerHTML!==i&&(i=e.target.innerText,e.target.dispatchEvent(new Event("change")),a=!0),console.log("cellModified",a)},getIndent:function(e,t){return t&&0===e&&t>0?1*t+"ch":"inherit"}}}}),S=w("data-v-f81c70ec")(((e,t,n,o,a,d)=>{var i;return l(),r("td",{ref:"colIndex + ':' + rowIndex",contenteditable:!0===e.TableData.columns[e.colIndex].edit,tabindex:0,spellcheck:!1,style:{"text-align":e.textAlign,width:e.cellWidth,"background-color":!1===e.cellModified?"inherit":"var(--cell-modified-color)","font-weight":!1===e.cellModified?"inherit":"bold","padding-left":e.getIndent(e.colIndex,null==(i=e.TableData.display[e.rowIndex])?void 0:i.indent)},onFocus:t[1]||(t[1]=t=>e.onFocus(t)),onPaste:t[2]||(t[2]=t=>e.onChange(t)),onBlur:t[3]||(t[3]=t=>e.onChange(t)),onInput:t[4]||(t[4]=t=>e.onChange(t)),onKeydown:[t[5]||(t[5]=g(((...t)=>e.$parent.$parent.enterNav&&e.$parent.$parent.enterNav(...t)),["enter"])),t[6]||(t[6]=g(((...t)=>e.$parent.$parent.tabNav&&e.$parent.$parent.tabNav(...t)),["tab"])),t[7]||(t[7]=g(((...t)=>e.$parent.$parent.endNav&&e.$parent.$parent.endNav(...t)),["end"])),t[8]||(t[8]=g(((...t)=>e.$parent.$parent.homeNav&&e.$parent.$parent.homeNav(...t)),["home"])),t[9]||(t[9]=g(((...t)=>e.$parent.$parent.downArrowNav&&e.$parent.$parent.downArrowNav(...t)),["down"])),t[10]||(t[10]=g(((...t)=>e.$parent.$parent.upArrowNav&&e.$parent.$parent.upArrowNav(...t)),["up"])),t[11]||(t[11]=g(((...t)=>e.$parent.$parent.leftArrowNav&&e.$parent.$parent.leftArrowNav(...t)),["left"])),t[12]||(t[12]=g(((...t)=>e.$parent.$parent.rightArrowNav&&e.$parent.$parent.rightArrowNav(...t)),["right"]))],onClick:t[13]||(t[13]=(...t)=>e.handleInput&&e.handleInput(...t)),innerHTML:e.displayValue},null,44,["contenteditable","innerHTML"])}));P.render=S,P.__scopeId="data-v-f81c70ec";const q=n({name:"ATableHeader",props:{columns:{type:Array,required:!0},config:{type:Object,default:()=>({})},tableid:{type:String,required:!0,default:()=>{}}},setup:e=>({TableData:o(e.tableid)})}),L=w("data-v-bf1b4a04");m("data-v-bf1b4a04");const H={key:0},_={tabindex:"-1"};b();const j=L(((e,t,n,o,a,c)=>e.columns.length?(l(),r("thead",H,[h("tr",_,[e.TableData.zeroColumn?(l(),r("th",{key:0,style:{"min-width":e.TableData.numberedRowWidth}},null,4)):i("",!0),(l(!0),r(x,null,v(e.columns,((t,n)=>(l(),r("th",{key:n,tabindex:"-1",style:{"text-align":void 0!==t.align?t.align.toLowerCase():"center","min-width":void 0!==t.width?t.width:"40ch"}},[s(e.$slots,"default",{},(()=>[I(d(void 0!==t.label?t.label:String.fromCharCode(n+97).toUpperCase()),1)]),{},!0)],4)))),128))])])):i("",!0)));q.render=j,q.__scopeId="data-v-bf1b4a04";const z=n({name:"ATableModal",props:{colIndex:{type:Number,required:!1,default:0},rowIndex:{type:Number,required:!1,default:0},tableid:{type:String,required:!1}},setup:e=>({TableData:o(e.tableid),handleInput:function(e){e.stopPropagation()}})}),K=w("data-v-5e464449")(((e,t,n,o,a,d)=>(l(),r("div",{ref:"amodal",class:"amodal",tabindex:"-1",onClick:t[1]||(t[1]=(...t)=>e.handleInput&&e.handleInput(...t)),onInput:t[2]||(t[2]=(...t)=>e.handleInput&&e.handleInput(...t))},[s(e.$slots,"default",{},void 0,!0)],544))));z.render=K,z.__scopeId="data-v-5e464449";const W=n({name:"ATable",components:{ATableModal:z,ARow:M,ATableHeader:q,ACell:P},props:{columns:{type:Array,required:!0},rows:{type:Array,required:!1,default:()=>[]},config:{type:Object,default:()=>({})},tableid:{type:String,default:()=>{}}},setup(e){let t=new V(e.id,e.columns,e.rows,e.config);y(t.id,t);function n(e){const n=e.target.cellIndex,o=e.target.parentElement.rowIndex,a=e.target.parentElement.parentElement;let l;a.rows.length!==o?(l=a.rows[o].cells[n],!0===t.config.treeView&&!1===t.display[o].open&&t.toggleRowExpand(o-1)):l=e.target,T((function(){l.focus()}))}function o(e){const n=e.target.cellIndex,o=e.target.parentElement.rowIndex,a=e.target.parentElement.parentElement;let l;1!==o?(l=a.rows[o-2].cells[n],!0===t.config.treeView&&!1===t.display[o-2].open&&t.toggleRowExpand(t.display[o-2].parent)):l=e.target,T((function(){l.focus()}))}function a(e){let n;const o=e.target.cellIndex,a=e.target.parentElement.rowIndex,l=e.target.parentElement.parentElement;l.rows[a-1].cells.length-1===o?l.rows.length===a?n=l.rows[0].cells[!0===t.zeroColumn?1:0]:(n=l.rows[a].cells[!0===t.zeroColumn?1:0],!0===t.config.treeView&&!1===t.display[a].open&&t.toggleRowExpand(a-1)):n=l.rows[a-1].cells[o+1],T((function(){n.focus()}))}function l(e){let n;const o=e.target.cellIndex,a=e.target.parentElement.rowIndex,l=e.target.parentElement.parentElement;if(o===(!0===t.zeroColumn?1:0)){if(1===a)return;n=l.rows[a-2].cells[l.rows[a-2].cells.length-1],t.toggleRowExpand(a-2)}else n=l.rows[a-1].cells[o-1];n.focus()}return window.addEventListener("click",(function(e){if(t.modal.parent)if(t.modal.parent.contains(e.target));else{if(!t.modal.visible)return;t.modal.visible=!1}})),{TableData:t,v4:k,formatCell:function(e,n,o){let a;if(e?a=e.target.cellIndex+(!0===t.zeroColumn?-1:0):n&&o&&(a=t.columns.indexOf(n)),n||!("format"in t.columns[a]))return o&&"format"in n?n.format(o):(o&&n.type.toLowerCase(),o);e.target.innerHTML=t.columns[a].format(e.target.innerHTML)},enterNav:function(e){e.preventDefault(),e.stopPropagation(),!0===e.shiftKey?o(e):n(e)},tabNav:function(e){e.preventDefault(),e.stopPropagation(),!0===e.shiftKey?l(e):a(e)},downArrowNav:function(e){!0!==e.shiftKey&&(e.preventDefault(),e.stopPropagation(),n(e))},upArrowNav:function(e){!0!==e.shiftKey&&(e.preventDefault(),e.stopPropagation(),o(e))},leftArrowNav:function(e){!0!==e.shiftKey&&(e.preventDefault(),e.stopPropagation(),l(e))},rightArrowNav:function(e){!0!==e.shiftKey&&(e.preventDefault(),e.stopPropagation(),a(e))},homeNav:function(e){let n;const o=e.target.cellIndex,a=e.target.parentElement.rowIndex,l=e.target.parentElement.parentElement;o!==(!0===t.config.numberedRows?1:0)&&(n=l.rows[a-1].cells[!0===t.zeroColumn?1:0],n.focus())},endNav:function(e){let n;const o=e.target.cellIndex,a=e.target.parentElement.rowIndex,l=e.target.parentElement.parentElement;l.rows[a-1].cells.length-1!==o&&(n=l.rows[a-1].cells[t.columns.length-(!0===t.zeroColumn?0:1)],n.focus())},prevCell:l,nextCell:a,upCell:o,downCell:n,moveCursorToEnd:function(e){e.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd()}}}}),U=w("data-v-455a3966");m("data-v-455a3966");const F={class:"atable"};b();const B=U(((e,t,n,o,d,i)=>{const p=$("ATableHeader"),u=$("ACell"),g=$("ARow"),w=$("ATableModal");return l(),r("table",F,[s(e.$slots,"tableheader",{},(()=>[h(p,{columns:e.TableData.columns,config:e.TableData.config,tableid:e.TableData.id},null,8,["columns","config","tableid"])]),{},!0),h("tbody",null,[(l(!0),r(x,null,v(e.TableData.rows,((t,n)=>(l(),r(g,{key:t.id||e.v4(),row:t,rowIndex:n,tableid:e.TableData.id},{default:U((()=>[(l(!0),r(x,null,v(e.TableData.columns,((t,o)=>(l(),r(u,{key:o,tableid:e.TableData.id,col:t,tabindex:"0",spellcheck:"false",rowIndex:n,colIndex:o+Number(!0===e.TableData.zeroColumn?0:-1),style:{"text-align":void 0!==t.align?t.align.toLowerCase():"center","min-width":void 0!==t.width?t.width:"40ch"}},null,8,["tableid","col","rowIndex","colIndex","style"])))),128))])),_:2},1032,["row","rowIndex","tableid"])))),128))]),s(e.$slots,"footer",{},void 0,!0),a(h(w,{colIndex:e.TableData.modal.colIndex,rowIndex:e.TableData.modal.rowIndex,tableid:e.TableData.id,style:{left:e.TableData.modal.left+"px",top:e.TableData.modal.top+"px","max-width":e.TableData.modal.width+"px"}},{default:U((()=>[(l(),r(f(e.TableData.modal.component),{colIndex:e.TableData.modal.colIndex,rowIndex:e.TableData.modal.rowIndex,tableid:e.TableData.id},null,8,["colIndex","rowIndex","tableid"]))])),_:1},8,["colIndex","rowIndex","tableid","style"]),[[c,e.TableData.modal.visible]])])}));W.render=B,W.__scopeId="data-v-455a3966";var G={install:function(e,t){e.component("ATable",W),e.component("ATableHeader",q),e.component("ATableModal",z)}};export{G as default};

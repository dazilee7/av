(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{367:function(e,t,n){"use strict";var o=n(46),r=n.n(o),i=(n(47),n(364)),a=n.n(i),c=n(439),l=n.n(c),s=n(437),f=n.n(s),u=n(435),p=n.n(u),y=n(67);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return h(o,(n=o=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(v(o),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){o.props.onClick&&o.props.onClick(e),!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)&&function(e){return 0===e.button}(e)&&!0!==e.defaultPrevented&&(e.preventDefault(),y.a.push(o.props.to))}}),n))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["to","children"]);return r.a.createElement("a",b({href:t},o,{onClick:this.handleClick}),n)}}])&&m(n.prototype,o),i&&m(n,i),t}();Object.defineProperty(g,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{onClick:null}});var x,w=g,_=n(433),S=n.n(_),k=n(432),O=n.n(k);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,n,o){x||(x="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:x,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var E,R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return P("div",{className:O.a.root,role:"navigation"},void 0,P(w,{className:O.a.link,to:"/about"},void 0,"About"),P(w,{className:O.a.link,to:"/contact"},void 0,"Contact"),P("span",{className:O.a.spacer},void 0," | "),P(w,{className:O.a.link,to:"/login"},void 0,"Log in"),P("span",{className:O.a.spacer},void 0,"or"),P(w,{className:S()(O.a.link,O.a.highlight),to:"/register"},void 0,"Sign up"))}}])&&C(n.prototype,o),i&&C(n,i),t}(),H=a()(O.a)(R),I=n(430),T=n.n(I),z=n(429),A=n.n(z);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t,n,o){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:E,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function W(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var K,L=$(H,{}),Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return $("div",{className:p.a.root},void 0,$("div",{className:p.a.container},void 0,L,$(w,{className:p.a.brand,to:"/"},void 0,$("img",{src:T.a,srcSet:"".concat(A.a," 2x"),width:"38",height:"38",alt:"React"}),$("span",{className:p.a.brandTxt},void 0,"Your Company")),$("div",{className:p.a.banner},void 0,$("h1",{className:p.a.bannerTitle},void 0,"React"),$("p",{className:p.a.bannerDesc},void 0,"Complex web apps made easy"))))}}])&&W(n.prototype,o),i&&W(n,i),t}(),U=a()(p.a)(Q),q=n(428),Y=n.n(q);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t,n,o){K||(K="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:K,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function X(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var B,M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return F("div",{className:Y.a.root},void 0,F("div",{className:Y.a.container},void 0,F("a",{className:Y.a.link,href:"https://gitter.im/kriasoft/react-starter-kit"},void 0,"Ask a question"),F("span",{className:Y.a.spacer},void 0,"|"),F("a",{className:Y.a.link,href:"https://github.com/kriasoft/react-starter-kit/issues/new"},void 0,"Report an issue")))}}])&&G(n.prototype,o),i&&G(n,i),t}(),V=a()(Y.a)(M),ee=n(426),te=n.n(ee);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t,n,o){B||(B="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:B,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function re(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ie(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var ae,ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ie(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return oe("div",{className:te.a.root},void 0,oe("div",{className:te.a.container},void 0,oe("span",{className:te.a.text},void 0,"© Your Company"),oe("span",{className:te.a.spacer},void 0,"·"),oe(w,{className:te.a.link,to:"/"},void 0,"Home"),oe("span",{className:te.a.spacer},void 0,"·"),oe(w,{className:te.a.link,to:"/admin"},void 0,"Admin"),oe("span",{className:te.a.spacer},void 0,"·"),oe(w,{className:te.a.link,to:"/privacy"},void 0,"Privacy"),oe("span",{className:te.a.spacer},void 0,"·"),oe(w,{className:te.a.link,to:"/not-found"},void 0,"Not Found")))}}])&&re(n.prototype,o),i&&re(n,i),t}(),le=a()(te.a)(ce);function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t,n,o){ae||(ae="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:ae,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ue(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function pe(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var ye=fe(U,{}),de=fe(V,{}),be=fe(le,{}),me=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),pe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return fe("div",{},void 0,ye,this.props.children,de,be)}}])&&ue(n.prototype,o),i&&ue(n,i),t}();t.a=a()(l.a,f.a)(me)},425:function(e,t,n){(t=e.exports=n(363)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._1tZAR{background:#333;color:#fff}.e0IRj{margin:0 auto;padding:20px 15px;max-width:1000px;max-width:var(--max-content-width);text-align:center}.tr5-G{color:hsla(0,0%,100%,.5)}._2Di2J{color:hsla(0,0%,100%,.3)}._3Ww1H,.tr5-G{padding:2px 5px;font-size:1em}._3Ww1H,._3Ww1H:active,._3Ww1H:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._3Ww1H:hover{color:#fff}',""]),t.locals={root:"_1tZAR",container:"e0IRj",text:"tr5-G",spacer:"_2Di2J",link:"_3Ww1H"}},426:function(e,t,n){var o=n(425),r=n(362);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},427:function(e,t,n){(t=e.exports=n(363)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._2g7Ns{background:#f5f5f5;color:#333}.PgkWg{margin:0 auto;padding:20px 8px;max-width:1000px;max-width:var(--max-content-width);text-align:center;font-size:1.5em}._30xS9,._30xS9:active,._30xS9:hover,._30xS9:visited{color:#333;text-decoration:none}._30xS9:hover{text-decoration:underline}.IQHzD{padding-right:15px;padding-left:15px}',""]),t.locals={root:"_2g7Ns",container:"PgkWg",link:"_30xS9",spacer:"IQHzD"}},428:function(e,t,n){var o=n(427),r=n(362);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},429:function(e,t,n){e.exports=n.p+"8844262b.png"},430:function(e,t,n){e.exports=n.p+"2f751285.png"},431:function(e,t,n){(t=e.exports=n(363)(!1)).push([e.i,".d0C7s{float:right;margin:6px 0 0}._3unRI{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}._3unRI,._3unRI:active,._3unRI:visited{color:hsla(0,0%,100%,.6)}._3unRI:hover,.PPdJ5{color:#fff}.PPdJ5{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15)}.PPdJ5:hover{background:rgba(0,0,0,.3)}.cX3Pd{color:hsla(0,0%,100%,.3)}",""]),t.locals={root:"d0C7s",link:"_3unRI",highlight:"PPdJ5",spacer:"cX3Pd"}},432:function(e,t,n){var o=n(431),r=n(362);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},434:function(e,t,n){(t=e.exports=n(363)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--brand-color:#61dafb}._1vSE5{background:#373277;color:#fff}._1EKFE{margin:0 auto;padding:20px 0;max-width:1000px;max-width:var(--max-content-width)}._2ZSht{color:#92e5fc;color:color(var(--brand-color) lightness(10%));text-decoration:none;font-size:1.75em}.dkY7q{margin-left:10px}._1vQSj{text-align:center}.J73k2{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}._1QHrc{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}',""]),t.locals={root:"_1vSE5",container:"_1EKFE",brand:"_2ZSht",brandTxt:"dkY7q",banner:"_1vQSj",bannerTitle:"J73k2",bannerDesc:"_1QHrc"}},435:function(e,t,n){var o=n(434),r=n(362);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},436:function(e,t,n){(e.exports=n(363)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;font-family:var(--font-family-base);line-height:1.375}body{margin:0}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}',""])},437:function(e,t,n){var o=n(436),r=n(362);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}}}]);
//# sourceMappingURL=about~admin~contact~home~login~not-found~privacy~register.a9b7ed96.chunk.js.map
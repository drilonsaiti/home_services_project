(self.webpackChunkhome_service_backend=self.webpackChunkhome_service_backend||[]).push([[5162],{4753:function(e,t,a){var r;e.exports=(r=a(53547),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=145)}({0:function(e,t){e.exports=r},145:function(e,t,a){"use strict";a.r(t);var r=a(0);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.default=function(e){return r.createElement("svg",n({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M4 20.252V3.748a1 1 0 011.507-.862l14.028 8.252a1 1 0 010 1.724L5.507 21.113A1 1 0 014 20.252z",fill:"#212134"}))}}}))},53830:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=r(a(45697)),u=a(46458),o=a(43499),i=r(a(11700)),d=function(e){var t=e.disabledEvents,a=e.name,r=e.events,l=e.inputValue,d=e.handleChange,s=e.handleChangeAll,c=r.filter((function(e){return!t.includes(e)})),f=l.length===c.length,p=l.length>0;return n.default.createElement("tr",null,n.default.createElement("td",null,n.default.createElement(o.Checkbox,{indeterminate:p&&!f,"aria-label":"Select all entries",name:a,onChange:function(e){var t=e.target.name;s({target:{name:t,value:!f}})},value:f},(0,i.default)(a))),r.map((function(e){return n.default.createElement("td",{key:e},n.default.createElement(u.BaseCheckbox,{disabled:t.includes(e),"aria-label":e,name:e,value:l.includes(e),onValueChange:function(t){return d({target:{name:e,value:t}})}}))})))};d.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange:function(){},handleChangeAll:function(){}},d.propTypes={disabledEvents:l.default.array,events:l.default.array,inputValue:l.default.array,handleChange:l.default.func,handleChangeAll:l.default.func,name:l.default.string.isRequired};var s=d;t.default=s},43082:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=r(a(45697)),u=a(16572),o=a(9524),i=a(33483),d=a(80831),s=a(97132),c=r(a(78384)),f=r(a(53830)),p=r(a(8590)),g=c.default.table.withConfig({displayName:"EventInput__StyledTable",componentId:"sc-1sadnz3-0"})(["td{height:","rem;width:10%;vertical-align:middle;text-align:center;}tbody tr:nth-child(odd){background:",";}tbody tr td:first-child{padding-left:",";}"],3.25,(function(e){return e.theme.colors.neutral100}),(function(e){return e.theme.spaces[7]})),m={headers:{default:["Settings.webhooks.events.create","Settings.webhooks.events.update","app.utils.delete"],draftAndPublish:["Settings.webhooks.events.create","Settings.webhooks.events.update","app.utils.delete","app.utils.publish","app.utils.unpublish"]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},v=function(e){var t=e.isDraftAndPublish,a=t?m.headers.draftAndPublish:m.headers.default,r=t?m.events.draftAndPublish:m.events.default,l=(0,s.useIntl)().formatMessage,c=(0,d.useFormikContext)(),v=c.values,h=c.handleChange,b="events",y=v.events,E=[],k=(0,p.default)(y),w=function(e){var t=e.target,a=t.name,r=t.value,n=new Set(y);r?n.add(a):n.delete(a),h({target:{name:b,value:Array.from(n)}})},O=function(e){var t=e.target,a=t.name,n=t.value,l=new Set(y);n?r[a].forEach((function(e){E.includes(e)||l.add(e)})):r[a].forEach((function(e){return l.delete(e)})),h({target:{name:b,value:Array.from(l)}})};return n.default.createElement(o.Stack,{spacing:1},n.default.createElement(u.FieldLabel,null,l({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),n.default.createElement(g,null,n.default.createElement("thead",null,n.default.createElement("tr",null,n.default.createElement("td",null),a.map((function(e){return"app.utils.publish"===e||"app.utils.unpublish"===e?n.default.createElement("td",{key:e,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for contents with Draft/Publish system enabled"})},n.default.createElement(i.Typography,{variant:"sigma",textColor:"neutral600"},l({id:e,defaultMessage:e}))):n.default.createElement("td",{key:e},n.default.createElement(i.Typography,{variant:"sigma",textColor:"neutral600"},l({id:e,defaultMessage:e})))})))),n.default.createElement("tbody",null,Object.keys(r).map((function(e){return n.default.createElement(f.default,{disabledEvents:E,key:e,name:e,events:r[e],inputValue:k[e],handleChange:w,handleChangeAll:O})})))))};v.propTypes={isDraftAndPublish:l.default.bool.isRequired};var h=v;t.default=h},8590:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e.reduce((function(e,t){var a=t.split(".")[0];return e[a]||(e[a]=[]),e[a].push(t),e}),{})};t.default=a},46148:(e,t,a)=>{"use strict";var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67154)),u=r(a(319)),o=r(a(63038)),i=r(a(6479)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=g(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}r.default=e,a&&a.set(e,r);return r}(a(53547)),s=r(a(45697)),c=a(88252),f=r(a(92641)),p=["name","onChange","value"];function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(g=function(e){return e?a:t})(e)}var m=function(e){var t=e.name,a=e.onChange,r=e.value,n=(0,i.default)(e,p),s=(0,d.useState)(r?[].concat((0,u.default)(f.default),[r]):f.default),g=(0,o.default)(s,2),m=g[0],v=g[1];return d.default.createElement(c.CreatableCombobox,(0,l.default)({},n,{onChange:function(e){a({target:{name:t,value:e}})},onCreateOption:function(e){v((function(t){return[].concat((0,u.default)(t),[e])})),a({target:{name:t,value:e}})},placeholder:"",value:r}),m.map((function(e){return d.default.createElement(c.ComboboxOption,{value:e,key:e},e)})))};m.defaultProps={value:void 0},m.propTypes={name:s.default.string.isRequired,onChange:s.default.func.isRequired,value:s.default.string};var v=m;t.default=v},68091:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=a(68547),u=r(a(89326)),o=a(94117),i=a(16572),d=a(39272),s=a(40264),c=a(9524),f=a(99136),p=a(82212),g=a(80831),m=a(97132),v=r(a(46148)),h=function(){var e=(0,m.useIntl)().formatMessage,t=(0,g.useFormikContext)(),a=t.values,r=t.errors;return n.default.createElement(c.Stack,{spacing:1},n.default.createElement(i.FieldLabel,null,e({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),n.default.createElement(o.Box,{padding:8,background:"neutral100",hasRadius:!0},n.default.createElement(g.FieldArray,{validateOnChange:!1,name:"headers",render:function(t){var i,c=t.push,m=t.remove;return n.default.createElement(d.Grid,{gap:4},null===(i=a.headers)||void 0===i?void 0:i.map((function(t,u){var i,c,p,h,b,y,E,k,w,O;return n.default.createElement(n.default.Fragment,{key:u},n.default.createElement(d.GridItem,{col:6},n.default.createElement(g.Field,{as:v.default,name:"headers.".concat(u,".key"),"aria-label":"row ".concat(u+1," key"),label:e({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:(null===(i=r.headers)||void 0===i||null===(c=i[u])||void 0===c?void 0:c.key)&&e({id:null===(p=r.headers[u])||void 0===p?void 0:p.key,defaultMessage:null===(h=r.headers[u])||void 0===h?void 0:h.key})})),n.default.createElement(d.GridItem,{col:6},n.default.createElement(s.Flex,{alignItems:"flex-end"},n.default.createElement(o.Box,{style:{flex:1}},n.default.createElement(g.Field,{as:f.TextInput,"aria-label":"row ".concat(u+1," value"),label:e({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:"headers.".concat(u,".value"),error:(null===(b=r.headers)||void 0===b||null===(y=b[u])||void 0===y?void 0:y.value)&&e({id:null===(E=r.headers[u])||void 0===E?void 0:E.value,defaultMessage:null===(k=r.headers[u])||void 0===k?void 0:k.value})})),n.default.createElement(s.Flex,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:null!==(w=r.headers)&&void 0!==w&&null!==(O=w[u])&&void 0!==O&&O.value?0:5},n.default.createElement(l.RemoveRoundedButton,{onClick:function(){return 1!==a.headers.length&&m(u)},label:e({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:u+1})})))))})),n.default.createElement(d.GridItem,{col:12},n.default.createElement(p.TextButton,{type:"button",onClick:function(){c({key:"",value:""})},startIcon:n.default.createElement(u.default,null)},e({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))}})))};t.default=h},92641:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"];t.default=a},12118:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=r(a(45697)),u=a(97132),o=r(a(78384)),i=a(68547),d=r(a(22754)),s=r(a(7228)),c=r(a(79386)),f=a(94117),p=a(40264),g=a(33483),m=a(9524),v=a(39272),h=o.default.svg.withConfig({displayName:"TriggerContainer__Icon",componentId:"sc-3cghkc-0"})((function(e){var t=e.theme,a=e.color;return"\n  width: ".concat(.75,"rem;\n  height: ").concat(.75,"rem;\n\n  path {\n    fill: ").concat(t.colors[a],";\n  }\n")})),b=function(e){var t=e.isPending,a=e.statusCode,r=(0,u.useIntl)().formatMessage;return t?n.default.createElement(m.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},n.default.createElement(h,{as:c.default}),n.default.createElement(g.Typography,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):a>=200&&a<300?n.default.createElement(m.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},n.default.createElement(h,{as:d.default,color:"success700"}),n.default.createElement(g.Typography,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):a>=300?n.default.createElement(m.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},n.default.createElement(h,{as:s.default,color:"danger700"}),n.default.createElement(g.Typography,null,r({id:"Settings.error",defaultMessage:"error"})," ",a)):null};b.propTypes={isPending:l.default.bool.isRequired,statusCode:l.default.number},b.defaultProps={statusCode:void 0};var y=function(e){var t=e.statusCode,a=e.message,r=(0,u.useIntl)().formatMessage;return t>=200&&t<300?n.default.createElement(p.Flex,{justifyContent:"flex-end"},n.default.createElement(g.Typography,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):t>=300?n.default.createElement(p.Flex,{justifyContent:"flex-end"},n.default.createElement(p.Flex,{maxWidth:(0,i.pxToRem)(250),justifyContent:"flex-end",title:a},n.default.createElement(g.Typography,{ellipsis:!0,textColor:"neutral600"},a))):null};y.propTypes={statusCode:l.default.number,message:l.default.string},y.defaultProps={statusCode:void 0,message:void 0};var E=function(e){var t=e.onCancel,a=(0,u.useIntl)().formatMessage;return n.default.createElement(p.Flex,{justifyContent:"flex-end"},n.default.createElement("button",{onClick:t,type:"button"},n.default.createElement(m.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},n.default.createElement(g.Typography,{textColor:"neutral400"},a({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),n.default.createElement(h,{as:s.default,color:"neutral400"}))))};E.propTypes={onCancel:l.default.func.isRequired};var k=function(e){var t=e.isPending,a=e.onCancel,r=e.response,l=r.statusCode,o=r.message,i=(0,u.useIntl)().formatMessage;return n.default.createElement(f.Box,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},n.default.createElement(v.Grid,{gap:4,style:{alignItems:"center"}},n.default.createElement(v.GridItem,{col:3},n.default.createElement(g.Typography,null,i({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),n.default.createElement(v.GridItem,{col:3},n.default.createElement(b,{isPending:t,statusCode:l})),n.default.createElement(v.GridItem,{col:6},t?n.default.createElement(E,{onCancel:a}):n.default.createElement(y,{statusCode:l,message:o}))))};k.defaultProps={isPending:!1,onCancel:function(){},response:{}},k.propTypes={isPending:l.default.bool,onCancel:l.default.func,response:l.default.object};var w=k;t.default=w},93320:(e,t,a)=>{"use strict";var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(63038)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=M(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}r.default=e,a&&a.set(e,r);return r}(a(53547)),o=r(a(45697)),i=a(68547),d=r(a(87760)),s=r(a(22754)),c=r(a(4753)),f=a(35395),p=a(94117),g=a(64459),m=a(56156),v=a(9524),h=a(99136),b=a(39272),y=a(80831),E=a(97132),k=r(a(43082)),w=r(a(68091)),O=r(a(12118)),P=r(a(65701));function M(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(M=function(e){return e?a:t})(e)}var C=function(e){var t=e.handleSubmit,a=e.data,r=e.triggerWebhook,n=e.isCreating,o=e.isTriggering,M=e.triggerResponse,C=e.isDraftAndPublishEvents,j=(0,E.useIntl)().formatMessage,S=(0,u.useState)(!1),_=(0,l.default)(S,2),x=_[0],I=_[1];return u.default.createElement(y.Formik,{onSubmit:t,initialValues:{name:(null===a||void 0===a?void 0:a.name)||"",url:(null===a||void 0===a?void 0:a.url)||"",headers:Object.keys((null===a||void 0===a?void 0:a.headers)||[]).length?Object.entries(a.headers).map((function(e){var t=(0,l.default)(e,2);return{key:t[0],value:t[1]}})):[{key:"",value:""}],events:(null===a||void 0===a?void 0:a.events)||[]},validationSchema:P.default,validateOnChange:!1,validateOnBlur:!1},(function(e){var t=e.handleSubmit,l=e.errors;return u.default.createElement(i.Form,{noValidate:!0},u.default.createElement(f.HeaderLayout,{primaryAction:u.default.createElement(v.Stack,{horizontal:!0,spacing:2},u.default.createElement(g.Button,{onClick:function(){r(),I(!0)},variant:"tertiary",startIcon:u.default.createElement(c.default,null),disabled:n||o,size:"L"},j({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),u.default.createElement(g.Button,{startIcon:u.default.createElement(s.default,null),onClick:t,type:"submit",size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:n?j({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):null===a||void 0===a?void 0:a.name,navigationAction:u.default.createElement(m.Link,{startIcon:u.default.createElement(d.default,null),to:"/settings/webhooks"},j({id:"global.back",defaultMessage:"Back"}))}),u.default.createElement(f.ContentLayout,null,u.default.createElement(v.Stack,{spacing:4},x&&u.default.createElement("div",{className:"trigger-wrapper"},u.default.createElement(O.default,{isPending:o,response:M,onCancel:function(){return I(!1)}})),u.default.createElement(p.Box,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},u.default.createElement(v.Stack,{spacing:6},u.default.createElement(b.Grid,{gap:6},u.default.createElement(b.GridItem,{col:6},u.default.createElement(y.Field,{as:h.TextInput,name:"name",error:l.name&&j({id:l.name}),label:j({id:"global.name",defaultMessage:"Name"}),required:!0})),u.default.createElement(b.GridItem,{col:12},u.default.createElement(y.Field,{as:h.TextInput,name:"url",error:l.url&&j({id:l.url}),label:j({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),u.default.createElement(w.default,null),u.default.createElement(k.default,{isDraftAndPublish:C}))))))}))};C.propTypes={data:o.default.object,handleSubmit:o.default.func.isRequired,triggerWebhook:o.default.func.isRequired,isCreating:o.default.bool.isRequired,isDraftAndPublishEvents:o.default.bool.isRequired,isTriggering:o.default.bool.isRequired,triggerResponse:o.default.object},C.defaultProps={data:void 0,triggerResponse:void 0};var j=C;t.default=j},90579:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URL_REGEX=t.NAME_REGEX=void 0;var a=new RegExp("(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)");t.NAME_REGEX=a;var r=new RegExp("(^$)|((https?://.*)(d*)/?(.*))");t.URL_REGEX=r},65701:(e,t,a)=>{"use strict";var r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,a&&a.set(e,n);return n}(a(53209)),l=a(68547),u=a(90579);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}var i=n.object().shape({name:n.string(l.translatedErrors.string).required(l.translatedErrors.required).matches(u.NAME_REGEX,l.translatedErrors.regex),url:n.string(l.translatedErrors.string).required(l.translatedErrors.required).matches(u.URL_REGEX,l.translatedErrors.regex),headers:n.lazy((function(e){var t=n.array();if(1===e.length){var a=e[0],r=a.key,u=a.value;if(!r&&!u)return t}return t.of(n.object().shape({key:n.string().required(l.translatedErrors.required),value:n.string().required(l.translatedErrors.required)}))})),events:n.array()});t.default=i},92853:(e,t,a)=>{"use strict";var r=a(25108),n=a(95318),l=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(87757)),o=n(a(63038)),i=n(a(48926)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var a=b(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=n?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}r.default=e,a&&a.set(e,r);return r}(a(53547)),s=a(68547),c=a(80117),f=a(23724),p=a(39711),g=a(63376),m=a(53777),v=n(a(93320)),h=n(a(14968));function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(b=function(e){return e?a:t})(e)}var y=function(){var e=(0,p.useRouteMatch)("/settings/webhooks/:id").params.id,t=(0,p.useHistory)().replace,a=(0,s.useOverlayBlocker)(),n=a.lockApp,l=a.unlockApp,b=(0,s.useNotification)(),y=(0,f.useQueryClient)(),E=(0,g.useModels)(),k=E.isLoading,w=E.collectionTypes,O="create"===e,P=(0,d.useCallback)(function(){var e=(0,i.default)(u.default.mark((function e(t){var a,r,n,l;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.to)((0,s.request)("/admin/webhooks/".concat(t),{method:"GET"}));case 2:if(a=e.sent,r=(0,o.default)(a,2),n=r[0],l=r[1].data,!n){e.next=9;break}return b({type:"warning",message:{id:"notification.error"}}),e.abrupt("return",null);case 9:return e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b]),M=(0,f.useQuery)(["get-webhook",e],(function(){return P(e)}),{enabled:!O}),C=M.isLoading,j=M.data,S=(0,f.useMutation)((function(){return m.axiosInstance.post("/admin/webhooks/".concat(e,"/trigger"))})),_=S.isLoading,x=S.data,I=S.isIdle,T=S.mutate,A=(0,f.useMutation)((function(e){return(0,s.request)("/admin/webhooks",{method:"POST",body:e})})),R=(0,f.useMutation)((function(e){var t=e.id,a=e.body;return(0,s.request)("/admin/webhooks/".concat(t),{method:"PUT",body:a})})),q=function(){var a=(0,i.default)(u.default.mark((function a(o){return u.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:O?(n(),A.mutate((0,h.default)(o),{onSuccess:function(e){b({type:"success",message:{id:"Settings.webhooks.created"}}),t("/settings/webhooks/".concat(e.data.id)),l()},onError:function(e){b({type:"warning",message:{id:"notification.error"}}),r.log(e),l()}})):(n(),R.mutate({id:e,body:(0,h.default)(o)},{onSuccess:function(){y.invalidateQueries(["get-webhook",e]),b({type:"success",message:{id:"notification.form.success.fields"}}),l()},onError:function(e){b({type:"warning",message:{id:"notification.error"}}),r.log(e),l()}}));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),D=(0,d.useMemo)((function(){return w.some((function(e){return!0===e.options.draftAndPublish}))}),[w]);return C||k?d.default.createElement(s.LoadingIndicatorPage,null):d.default.createElement(c.Main,null,d.default.createElement(s.SettingsPageTitle,{name:"Webhooks"}),d.default.createElement(v.default,{handleSubmit:q,data:j,triggerWebhook:function(){return T(null,{onError:function(){b({type:"warning",message:{id:"notification.error"}})}})},isCreating:O,isTriggering:_,isTriggerIdle:I,triggerResponse:null===x||void 0===x?void 0:x.data.data,isDraftAndPublishEvents:D}))};t.default=y},14968:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(59713)),l=a(96486);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var i=function(e){return e.reduce((function(e,t){var a=t.key,r=t.value;return""!==a?o(o({},e),{},(0,n.default)({},a,r)):e}),{})},d=function(e){var t=o({},e);return(0,l.set)(t,"headers",i(e.headers)),t};t.default=d},39616:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=a(68547),u=r(a(13240)),o=r(a(92853)),i=function(){return n.default.createElement(l.CheckPagePermissions,{permissions:u.default.settings.webhooks.create},n.default.createElement(o.default,null))};t.default=i},56454:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=a(68547),u=r(a(13240)),o=r(a(92853)),i=function(){return n.default.createElement(l.CheckPagePermissions,{permissions:u.default.settings.webhooks.update},n.default.createElement(o.default,null))};t.default=i}}]);
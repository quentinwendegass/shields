(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{151:function(e,t,n){"use strict";n.d(t,"j",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return v}),n.d(t,"a",function(){return y}),n.d(t,"h",function(){return C}),n.d(t,"g",function(){return k}),n.d(t,"c",function(){return E}),n.d(t,"i",function(){return w});n(26);var a=n(80),r=n.n(a),o=n(203),i=n.n(o),l=(n(204),n(0)),c=n.n(l),s=n(1),u=n.n(s),p=n(150);function m(){var e=i()(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return m=function(){return e},e}var d=Object.freeze({autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}),f=Object(p.a)(m()),h=p.c.div.withConfig({displayName:"common__BaseFont",componentId:"sc-16zh6vt-0"})(["font-family:Lekton,sans-serif;color:#534;"]),g=p.c.h2.withConfig({displayName:"common__H2",componentId:"sc-16zh6vt-1"})(["font-style:italic;margin-top:12mm;font-variant:small-caps;::before{content:'☙ ';}::after{content:' ❧';}"]),v=p.c.h3.withConfig({displayName:"common__H3",componentId:"sc-16zh6vt-2"})(["font-style:italic;"]),b=p.c.span.withConfig({displayName:"common__BadgeWrapper",componentId:"sc-16zh6vt-3"})(["padding:2px;height:",";vertical-align:middle;display:",";",";"],function(e){return e.height},function(e){return e.display},function(e){return e.clickable&&Object(p.b)(["cursor:pointer;"])}),y=function(e){var t=e.src,n=e.alt,a=void 0===n?"":n,o=e.display,i=void 0===o?"inline":o,l=e.height,s=void 0===l?"20px":l,u=e.clickable,p=void 0!==u&&u,m=r()(e,["src","alt","display","height","clickable"]);return c.a.createElement(b,{height:s,clickable:p,display:i},t?c.a.createElement("img",Object.assign({src:t,alt:a},m)):" ")};y.propTypes={src:u.a.string.isRequired,alt:u.a.string,display:u.a.oneOf(["inline","block","inline-block"]),height:u.a.string,clickable:u.a.bool};var C=p.c.input.withConfig({displayName:"common__StyledInput",componentId:"sc-16zh6vt-4"})(["height:15px;border:solid #b9a;border-width:0 0 1px 0;padding:0;text-align:center;color:#534;:focus{outline:0;}"]),k=Object(p.c)(C).withConfig({displayName:"common__InlineInput",componentId:"sc-16zh6vt-5"})(["width:70px;margin-left:5px;margin-right:5px;"]),E=Object(p.c)(C).withConfig({displayName:"common__BlockInput",componentId:"sc-16zh6vt-6"})(["width:40%;background-color:transparent;"]),w=p.c.hr.withConfig({displayName:"common__VerticalSpace",componentId:"sc-16zh6vt-7"})(["border:0;display:block;height:3mm;"])},152:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});var a=n(80),r=n.n(a),o=(n(26),n(159)),i=n(175);function l(e,t,n,a,r){var l=Object(i.staticBadgeUrl)({label:t,message:n,color:a});return Object(o.a)(l,e,r)}function c(e,t,n,a,i,l){var c=void 0===l?{}:l,s=c.prefix,u=c.suffix,p=c.color,m=c.queryParams,d=void 0===m?{}:m,f=r()(c,["prefix","suffix","color","queryParams"]);return Object.assign(d,{label:n,url:a,query:i}),p&&(d.colorB=p),s&&(d.prefix=s),u&&(d.suffix=u),function(e,t,n){var a=void 0===n?{}:n,r=a.longCache,i=a.style,l=a.queryParams,c=a.format,s=void 0===c?"svg":c,u=Object.assign({},l);return r&&(u.maxAge="2592000"),i&&(u.style=i),Object(o.a)(e+"."+s,t,u)}("/badge/dynamic/"+t,e,Object.assign({queryParams:d},f))}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(78),n(26);var a=n(215);function r(e,t,n){var r=t?Object(a.resolve)(t,e):e,o=Object(a.parse)(r,!0);return o.query=Object.assign({},o.query,n),delete o.search,Object(a.format)(o)}},160:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return p});var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(223),c=n.n(l),s=n(150),u=s.c.span.withConfig({displayName:"snippet__CodeContainer",componentId:"sc-1wzkqq5-0"})(["position:relative;vertical-align:middle;display:inline-block;",";"],function(e){return e.truncate&&Object(s.b)(["max-width:40%;overflow:hidden;text-overflow:ellipsis;"])}),p=s.c.code.withConfig({displayName:"snippet__StyledCode",componentId:"sc-1wzkqq5-1"})(["line-height:1.2em;padding:0.1em 0.3em;border-radius:4px;"," font-family:Lekton;font-size:",";white-space:nowrap;"],function(e){return!1!==e.withBackground&&Object(s.b)(["background:#eef;"])},function(e){return e.fontSize}),m=function(e){var t=e.snippet,n=e.truncate,a=void 0!==n&&n,o=e.fontSize;return r.a.createElement(u,{truncate:a},r.a.createElement(c.a,null,r.a.createElement(p,{fontSize:o},t)))};m.propTypes={snippet:i.a.string.isRequired,truncate:i.a.bool,fontSize:i.a.string}},166:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="https://img.shields.io"},167:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(195),i=n(202),l=n.n(i);t.a=function(){return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,"Shields.io: Quality metadata badges for open source projects"),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),r.a.createElement("meta",{name:"description",content:"We serve fast and scalable informational images as badges\nfor GitHub, Travis CI, Jenkins, WordPress and many more services. Use them to\ntrack the state of your projects, or for promotional purposes."}),r.a.createElement("link",{rel:"icon",type:"image/png",href:l.a}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Lekton",rel:"stylesheet"}))}},170:function(e,t,n){"use strict";var a=n(36),r=n(0),o=n.n(r),i=n(150),l=n(151),c=function(e){return o.a.createElement("svg",e,o.a.createElement("rect",{rx:"8",x:"140",width:"55",height:"58"}),o.a.createElement("g",{stroke:"#000",strokeWidth:"8"},o.a.createElement("path",{d:"M135.5 54a8 8 0 0 0 8.5 -8.5"}),o.a.createElement("rect",{x:"4",y:"4",rx:"8",width:"190",height:"50",fill:"none"})),o.a.createElement("path",{d:"m23.906 33.641c.953-.083 1.906-.167 2.859-.25.108 2.099 1.511 4.139 3.578 4.722 2.438.895 5.357.799 7.559-.658 1.49-1.129 1.861-3.674.324-4.925-1.557-1.322-3.685-1.504-5.576-2.057-2.343-.565-4.912-1.133-6.611-2.979-1.805-2.088-1.627-5.485.292-7.443 2.041-2.113 5.222-2.55 8.02-2.274 2.46.244 5.058 1.343 6.252 3.635.426.908 1.095 2.241.656 3.108-.888.173-1.81.148-2.715.245-.077-2.084-1.727-4.073-3.863-4.234-1.902-.317-4.02-.252-5.691.802-1.398.989-1.849 3.363-.381 4.494 1.281 1.01 2.962 1.199 4.482 1.642 2.66.627 5.602 1.118 7.596 3.158 2 2.188 1.893 5.84-.088 8.01-2.01 2.32-5.304 2.972-8.237 2.713-2.585-.147-5.319-1.024-6.916-3.184-.987-1.288-1.517-2.905-1.542-4.523"}),o.a.createElement("path",{d:"m45.953 41c0-7.635 0-15.271 0-22.906.938 0 1.875 0 2.813 0 0 2.74 0 5.479 0 8.219 1.391-1.721 3.69-2.523 5.86-2.236 1.975.154 4.03 1.371 4.513 3.402.504 1.973.278 4.02.33 6.04 0 2.495 0 4.989 0 7.484-.938 0-1.875 0-2.813 0-.009-3.675.018-7.351-.014-11.03-.026-1.342-.627-2.835-2-3.282-2.187-.802-5.077.393-5.609 2.773-.417 1.764-.216 3.586-.264 5.381 0 2.051 0 4.102 0 6.153-.938 0-1.875 0-2.813 0"}),o.a.createElement("path",{d:"m63.781 21.328v-3.234h2.813v3.234zm0 19.672v-16.594h2.813v16.594z"}),o.a.createElement("path",{d:"m82.25 35.656c.969.12 1.938.24 2.906.359-.702 3.464-4.348 5.767-7.781 5.386-3.235-.066-6.43-2.328-7.06-5.598-.843-3.307-.404-7.285 2.101-9.784 3.082-3 8.699-2.618 11.235.892 1.374 1.85 1.676 4.267 1.578 6.51-4.125 0-8.25 0-12.375 0-.142 2.889 2.267 6 5.346 5.658 1.881-.162 3.613-1.566 4.045-3.423m-9.234-4.547c3.089 0 6.177 0 9.266 0 .129-2.774-2.616-5.422-5.419-4.713-2.174.427-3.912 2.474-3.846 4.713"}),o.a.createElement("path",{d:"m88.64 41v-22.906h2.813v22.906z"}),o.a.createElement("path",{d:"m106.59 41c0-.698 0-1.396 0-2.094-1.412 2.442-4.776 3.067-7.233 1.949-2.378-1.02-3.971-3.403-4.345-5.924-.507-2.761-.123-5.768 1.389-8.167 1.863-2.705 5.968-3.642 8.711-1.741.422.228 1.028 1.144 1.294 1.018-.006-2.649-.0001-5.298-.003-7.948.932 0 1.865 0 2.797 0 0 7.635 0 15.271 0 22.906-.87 0-1.74 0-2.61 0m-8.89-8.281c-.075 2.246.637 4.861 2.79 5.952 2 1.023 4.682-.047 5.488-2.134.897-1.996.746-4.278.388-6.382-.425-1.95-2.046-3.804-4.158-3.805-1.903-.065-3.633 1.363-4.099 3.181-.327 1.028-.394 2.116-.408 3.188"}),o.a.createElement("path",{d:"m112.52 36.05c.927-.146 1.854-.292 2.781-.438.126 1.69 1.513 3.244 3.239 3.365 1.398.212 3.01.12 4.12-.851.807-.749 1.1-2.243.159-3.01-.908-.723-2.115-.812-3.182-1.172-1.797-.485-3.713-.848-5.243-1.97-1.83-1.551-1.868-4.679-.099-6.293 1.577-1.507 3.918-1.784 6-1.594 1.685.176 3.54.749 4.535 2.217.464.715.708 1.549.844 2.384-.917.125-1.833.25-2.75.375-.121-1.569-1.653-2.762-3.19-2.695-1.246-.082-2.702.012-3.608.982-.624.724-.543 1.971.314 2.481.998.706 2.269.757 3.389 1.173 1.754.512 3.647.848 5.141 1.965 1.686 1.476 1.728 4.244.396 5.966-1.298 1.788-3.597 2.417-5.709 2.448-1.466-.007-2.984-.214-4.299-.893-1.599-.909-2.585-2.655-2.84-4.444"}),o.a.createElement("g",{fill:"#fff"},o.a.createElement("path",{d:"m151.11 41v-22.906h3.03v22.906z"}),o.a.createElement("path",{d:"m158.55 29.844c-.277-4.765 2.335-9.977 7.05-11.551 4.902-1.757 11.226.197 13.477 5.098 2.266 4.706 1.89 10.92-1.767 14.833-4.554 4.948-13.81 3.976-17.08-1.954-1.111-1.946-1.679-4.188-1.68-6.426m3.125.047c-.377 4.273 2.892 8.844 7.375 8.951 3.791.221 7.557-2.653 7.997-6.497.794-3.731.139-8.292-3.107-10.696-3.788-2.814-10.05-1.104-11.591 3.444-.54 1.539-.642 3.181-.675 4.798"})))};c.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"198",height:"58"};var s=i.c.p.withConfig({displayName:"header__Highlights",componentId:"sc-1l0ubx-0"})(["font-style:italic;"]);t.a=function(){return o.a.createElement("section",null,o.a.createElement(a.Link,{to:"/"},o.a.createElement(c,null)),o.a.createElement(l.i,null),o.a.createElement(s,null,"Pixel-perfect   Retina-ready   Fast   Consistent   Hackable   No tracking"))}},175:function(e,t,n){"use strict";n(38),n(26);var a=n(176),r=n(177);function o(e){var t=e.baseUrl,n=void 0===t?"":t,r=e.path,o=e.queryParams,i=e.style,l=e.format,c=void 0===l?"svg":l,s=e.longCache,u=void 0!==s&&s,p=c.length?"."+c:"",m=a.stringify(Object.assign({maxAge:u?"2592000":void 0,style:i},o));return""+n+r+p+(m?"?"+m:"")}function i(e){return encodeURIComponent(e.replace(/-/g,"--").replace(/_/g,"__"))}e.exports={badgeUrlFromPath:o,badgeUrlFromPattern:function(e){var t=e.baseUrl,n=void 0===t?"":t,a=e.pattern,i=e.namedParams,l=e.queryParams,c=e.style,s=e.format,u=void 0===s?"svg":s,p=e.longCache,m=void 0!==p&&p;return o({baseUrl:n,path:r.compile(a,{strict:!0,sensitive:!0})(i),queryParams:l,style:c,format:u,longCache:m})},encodeField:i,staticBadgeUrl:function(e){var t=e.baseUrl,n=void 0===t?"":t,r=e.label,o=e.message,l=e.color,c=void 0===l?"lightgray":l,s=e.style,u=e.namedLogo,p=e.format,m=void 0===p?"svg":p,d=[r,o,c].map(i).join("-"),f=a.stringify({style:s,logo:u});return n+"/badge/"+d+"."+m+(f?"?"+f:"")}}},182:function(e){e.exports={b:["bitcoin","dependabot","discord","gitlab","npm","paypal","serverfault","stackexchange","superuser","telegram","travis"],a:["plastic","flat","flat-square","for-the-badge","popout","popout-square","social"]}},186:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(150),c=n(159),s=n(151),u=l.c.a.withConfig({displayName:"footer__SpacedA",componentId:"sc-10wqpng-0"})(["margin-left:10px;margin-right:10px;"]),p=function(e){var t=e.baseUrl;return r.a.createElement("section",null,r.a.createElement(s.e,{id:"like-this"},"Like This?"),r.a.createElement("p",null,r.a.createElement("object",{data:Object(c.a)("/twitter/follow/shields_io.svg?style=social&label=Follow",t),alt:"Follow @shields_io"})," ",r.a.createElement("object",{data:Object(c.a)("/opencollective/backers/shields.svg?style=social&link=https://opencollective.com/shields",t),alt:"Donate to us!"})," ",r.a.createElement("object",{data:Object(c.a)("/opencollective/sponsors/shields.svg?style=social&link=https://opencollective.com/shields",t),alt:"Donate to us!"})," ",r.a.createElement("object",{data:Object(c.a)("/github/forks/badges/shields.svg?style=social&label=Fork",t),alt:"Fork on GitHub"})," ",r.a.createElement("object",{data:Object(c.a)("/discord/308323056592486420.svg?style=social&label=Chat&link=https://discord.gg/HjJCwm5",t),alt:"chat on Discord"})),r.a.createElement("p",null,"What is your favorite badge service to use?",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/badges/shields/blob/master/CONTRIBUTING.md"},"Tell us")," ","and we might bring it to you!"),r.a.createElement("p",null,r.a.createElement(u,{href:"https://status.shields.io/"},"Status"),r.a.createElement(u,{href:"https://github.com/badges/shields/"},"GitHub")))};t.a=p,p.propTypes={baseUrl:i.a.string.isRequired}},187:function(e,t,n){"use strict";var a=n(157),r=n.n(a),o=(n(156),n(154),n(158)),i=n.n(o),l=n(161),c=n.n(l),s=n(7),u=n.n(s),p=n(0),m=n.n(p),d=n(1),f=n.n(d),h=n(231),g=n.n(h),v=n(152);n(155),n(77),n(56),n(180),n(88),n(89),n(38);function b(e,t,n){return void 0===n&&(n=""),e}function y(e,t,n){var a='<img alt="'+n+'" src="'+e+'">';return t?"<a href="+t+">"+a+"</a>":a}function C(e,t,n){var a="!["+(n||"")+"]("+e+")";return t?"["+a+"]("+t+")":a}function k(e,t,n){var a=".. image:: "+e;return n&&(a+="   :alt: "+n),t&&(a+="   :target: "+t),a}function E(e){return"string"==typeof e?'"'+e.replace(/"/g,'\\"')+'"':null==e?"None":e}function w(e,t){var n={};for(var a in e)n[a]=t(e[a]);return n}function x(e,t,n){return"image:"+e+function(e,t){(e.some(function(e){return e.includes(",")})||Object.keys(t).length>0)&&(e=e.map(function(e){return E(e)}),t=w(t,function(e){return E(e)}));var n=e.concat(Object.entries(t).map(function(e){return e[0]+"="+e[1]}));return n.length?"["+n.join(",")+"]":"[]"}(n?[n]:[],t?{link:t}:{})}function P(e){var t=e.badgeUrl,n=e.link,a=e.title;return(0,{markdown:C,rst:k,asciidoc:x,link:b,html:y}[e.markupFormat])(t,n,a)}var O=n(151),_=(n(26),n(163),n(150)),j=n(177),q=n.n(j),S=n(181),I=n.n(S),A=n(233),N=_.c.div.withConfig({displayName:"builder-common__BuilderOuterContainer",componentId:"sc-1qmnput-0"})(["margin-top:10px;margin-bottom:10px;"]),B=_.c.div.withConfig({displayName:"builder-common__BuilderInnerContainer",componentId:"sc-1qmnput-1"})(["display:inline-block;padding:1px 14px 10px;border-radius:4px;background:#eef;"]),z=function(e){var t=e.children;return m.a.createElement(N,null,m.a.createElement(B,null,t))};z.propTypes={children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node])};var R="\n  font-family: system-ui;\n  font-size: 11px;\n",M=_.c.label.withConfig({displayName:"builder-common__BuilderLabel",componentId:"sc-1qmnput-2"})([""," text-transform:lowercase;"],R),L=_.c.span.withConfig({displayName:"builder-common__BuilderCaption",componentId:"sc-1qmnput-3"})([""," color:#999;"],R),Q=_.c.span.withConfig({displayName:"path-builder__PathBuilderColumn",componentId:"sc-55c99y-0"})(["height:78px;float:left;display:flex;flex-direction:column;margin:0;",";"],function(e){return e.withHorizPadding&&Object(_.b)(["padding:0 8px;"])}),T=_.c.div.withConfig({displayName:"path-builder__PathLiteral",componentId:"sc-55c99y-1"})(["margin-top:39px;",";"],function(e){return e.isFirstToken&&Object(_.b)(["margin-left:3px;"])}),U=_.c.span.withConfig({displayName:"path-builder__NamedParamLabelContainer",componentId:"sc-55c99y-2"})(["display:flex;flex-direction:column;height:37px;width:100%;justify-content:center;"]),F="\n  width: 100%;\n  text-align: center;\n",D=Object(_.c)(O.h).withConfig({displayName:"path-builder__NamedParamInput",componentId:"sc-55c99y-3"})([""," margin-top:2px;margin-bottom:10px;"],F),H=_.c.select.withConfig({displayName:"path-builder__NamedParamSelect",componentId:"sc-55c99y-4"})([""," margin-bottom:9px;font-size:10px;"],F),G=Object(_.c)(L).withConfig({displayName:"path-builder__NamedParamCaption",componentId:"sc-55c99y-5"})(["width:100%;text-align:center;"]),J=function(e){function t(t){var n;(n=e.call(this,t)||this).handleTokenChange=function(e){var t,a=e.target,r=a.name,o=a.value,i=n.state,l=i.tokens,c=i.namedParams,s=Object.assign({},c,((t={})[r]=o,t));n.setState({namedParams:s}),n.notePathChanged({tokens:l,namedParams:s})};var a=t.pattern,r=q.a.parse(a),o={};return r.filter(function(e){return"string"!=typeof e}).forEach(function(e){var t=e.name;o[t]=""}),n.state={tokens:r,namedParams:o},n}u()(t,e),t.constructPath=function(e){var t=e.tokens,n=e.namedParams,a=!0;return{path:t.map(function(e){if("string"==typeof e)return e;var t=e.delimiter,r=e.name,o=e.optional,i=n[r];return i?""+t+i:o?"":(a=!1,t+":"+r)}).join(""),isComplete:a}};var n=t.prototype;return n.notePathChanged=function(e){var t=e.tokens,n=e.namedParams,a=this.props.onChange;if(a){var r=this.constructor.constructPath({tokens:t,namedParams:n});a({path:r.path,isComplete:r.isComplete})}},n.componentDidMount=function(){var e=this.state,t=e.tokens,n=e.namedParams;this.notePathChanged({tokens:t,namedParams:n})},n.renderLiteral=function(e,t){return m.a.createElement(Q,{key:t+"-"+e},m.a.createElement(T,{isFirstToken:0===t},e))},n.renderNamedParamInput=function(e){var t=e.name,n=e.pattern,a=Object(A.patternToOptions)(n),r=this.state.namedParams[t];return a?m.a.createElement(H,{name:t,value:r,onChange:this.handleTokenChange},m.a.createElement("option",{key:"empty",value:""}," "),a.map(function(e){return m.a.createElement("option",{key:e,value:e},e)})):m.a.createElement(D,Object.assign({type:"text",name:t,value:r,onChange:this.handleTokenChange},O.j))},n.renderNamedParam=function(e,t,n){var a=e.delimiter,r=e.name,o=e.optional,i=this.props.exampleParams[r]||"(not set)";return m.a.createElement(m.a.Fragment,{key:e.name},this.renderLiteral(a,t),m.a.createElement(Q,{withHorizPadding:!0},m.a.createElement(U,null,m.a.createElement(M,{htmlFor:r},I()(r)),o?m.a.createElement(M,null,"(optional)"):null),this.renderNamedParamInput(e),m.a.createElement(G,null,0===n?"e.g. "+i:i)))},n.render=function(){var e=this,t=this.state.tokens,n=0;return m.a.createElement(z,null,t.map(function(t,a){return"string"==typeof t?e.renderLiteral(t,a):e.renderNamedParam(t,a,n++)}))},t}(m.a.Component);J.propTypes={pattern:f.a.string.isRequired,exampleParams:f.a.object.isRequired,onChange:f.a.func};n(81);var W=n(176),V=n(182),K=Object(_.c)(M).withConfig({displayName:"query-string-builder__QueryParamLabel",componentId:"dh0rqv-0"})(["margin:5px;"]),Y=Object(_.c)(O.h).withConfig({displayName:"query-string-builder__QueryParamInput",componentId:"dh0rqv-1"})(["margin:5px 10px;"]),Z=Object(_.c)(L).withConfig({displayName:"query-string-builder__QueryParamCaption",componentId:"dh0rqv-2"})(["margin:5px;"]),X=[{name:"style"},{name:"label",label:"override label"},{name:"colorB",label:"override color"},{name:"logo",label:"named logo"},{name:"logoColor",label:"override logo color"}];function $(e){return X.find(function(t){return t.name===e})}var ee=function(e){function t(t){var n;(n=e.call(this,t)||this).handleServiceQueryParamChange=function(e){var t,a=e.target,r=a.name,o="checkbox"===a.type?e.target.checked:e.target.value,i=n.state,l=i.queryParams,c=i.badgeOptions,s=Object.assign({},l,((t={})[r]=o,t));n.setState({queryParams:s}),n.noteQueryStringChanged({queryParams:s,badgeOptions:c})},n.handleBadgeOptionChange=function(e){var t,a=e.target,r=a.name,o=a.value,i=n.state,l=i.badgeOptions,c=i.queryParams,s=Object.assign({},l,((t={})[r]=o,t));n.setState({badgeOptions:s}),n.noteQueryStringChanged({queryParams:c,badgeOptions:s})};var a=t.exampleParams,r=t.defaultStyle,o={};Object.entries(a).forEach(function(e){var t=e[0],n="string"==typeof e[1];o[t]=!n||""});var i={},l={style:r};return X.forEach(function(e){var t=e.name;i[t]=l[t]||""}),n.state={queryParams:o,badgeOptions:i},n}u()(t,e),t.getQueryString=function(e){var t=e.queryParams,n=e.badgeOptions,a={},r=!0;return Object.entries(t).forEach(function(e){var t=e[0],n=e[1];"string"==typeof n?n?a[t]=n:r=!1:n&&(a[t]=null)}),Object.entries(n).forEach(function(e){var t=e[0],n=e[1],r=$(t).defaultValue;n&&n!==r&&(a[t]=n)}),{queryString:Object(W.stringify)(a),isComplete:r}};var n=t.prototype;return n.noteQueryStringChanged=function(e){var t=e.queryParams,n=e.badgeOptions,a=this.props.onChange;if(a){var r=this.constructor.getQueryString({queryParams:t,badgeOptions:n});a({queryString:r.queryString,isComplete:r.isComplete})}},n.componentDidMount=function(){var e=this.state,t=e.queryParams,n=e.badgeOptions;this.noteQueryStringChanged({queryParams:t,badgeOptions:n})},n.renderServiceQueryParam=function(e){var t=e.name,n=e.value,a=e.isStringParam,r=e.stringParamCount,o=this.props.exampleParams[t];return m.a.createElement("tr",{key:t},m.a.createElement("td",null,m.a.createElement(K,{htmlFor:t},I()(t).toLowerCase())),m.a.createElement("td",null,a&&m.a.createElement(Z,null,0===r?"e.g. "+o:o)),m.a.createElement("td",null,a?m.a.createElement(Y,Object.assign({type:"text",name:t,checked:n,onChange:this.handleServiceQueryParamChange},O.j)):m.a.createElement("input",{type:"checkbox",name:t,checked:n,onChange:this.handleServiceQueryParamChange})))},n.renderBadgeOptionInput=function(e,t){return"style"===e?m.a.createElement("select",{name:"style",value:t,onChange:this.handleBadgeOptionChange},V.a.map(function(e){return m.a.createElement("option",{key:e,value:e},e)})):m.a.createElement(Y,Object.assign({type:"text",name:e,checked:t,onChange:this.handleBadgeOptionChange},O.j))},n.renderBadgeOption=function(e,t){var n=$(e),a=n.label,r=void 0===a?I()(e):a,o=n.defaultValue;return m.a.createElement("tr",{key:e},m.a.createElement("td",null,m.a.createElement(K,{htmlFor:e},r)),m.a.createElement("td",null,!o&&m.a.createElement(Z,null,"optional")),m.a.createElement("td",null,this.renderBadgeOptionInput(e,t)))},n.render=function(){var e=this,t=this.state,n=t.queryParams,a=t.badgeOptions,r=Boolean(Object.keys(n).length),o=0;return m.a.createElement(m.a.Fragment,null,r&&m.a.createElement(z,null,m.a.createElement("table",null,m.a.createElement("tbody",null,Object.entries(n).map(function(t){var n=t[0],a=t[1],r="string"==typeof a;return e.renderServiceQueryParam({name:n,value:a,isStringParam:r,stringParamCount:r?o++:void 0})})))),m.a.createElement(z,null,m.a.createElement("table",null,m.a.createElement("tbody",null,Object.entries(a).map(function(t){var n=t[0],a=t[1];return e.renderBadgeOption(n,a)})))))},t}(m.a.Component);ee.propTypes={exampleParams:f.a.object.isRequired,defaultStyle:f.a.string,onChange:f.a.func},ee.defaultProps={defaultStyle:"flat"};var te=n(41),ne=n.n(te),ae=n(234),re=function(e){return m.a.createElement(ae.a.Control,Object.assign({},e,{innerProps:{onMouseDown:e.selectProps.onControlMouseDown}}))};re.propTypes={selectProps:f.a.object.isRequired};var oe=Object(_.c)(ae.b).withConfig({displayName:"request-markup-button__MarkupFormatSelect",componentId:"gjwzgu-0"})(["width:200px;margin-left:auto;margin-right:auto;font-family:'Lato',sans-serif;font-size:12px;.markup-format__control{background-image:linear-gradient(-180deg,#00aeff 0%,#0076ff 100%);border:1px solid rgba(238,239,241,0.8);border-width:0;box-shadow:unset;cursor:copy;}.markup-format__control--is-disabled{background:rgba(0,118,255,0.3);cursor:none;}.markup-format__placeholder{color:#eeeff1;}.markup-format__indicator{color:rgba(238,239,241,0.81);cursor:pointer;}.markup-format__indicator:hover{color:#eeeff1;}.markup-format__control--is-focused .markup-format__indicator,.markup-format__control--is-focused .markup-format__indicator:hover{color:#ffffff;}.markup-format__option{text-align:left;cursor:copy;}"]),ie=[{value:"markdown",label:"Copy Markdown"},{value:"rst",label:"Copy reStructuredText"},{value:"asciidoc",label:"Copy AsciiDoc"},{value:"html",label:"Copy HTML"}],le=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).selectRef=m.a.createRef(),t.onControlMouseDown=function(){var e=i()(r.a.mark(function e(n){var a,o,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=ne()(ne()(t)),o=a.selectRef,!(i=t.props.onMarkupRequested)){e.next=5;break}return e.next=5,i("link");case 5:o.current.blur();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.onOptionClick=function(){var e=i()(r.a.mark(function e(n){var a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.value,!(o=t.props.onMarkupRequested)){e.next=5;break}return e.next=5,o(a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t}return u()(t,e),t.prototype.render=function(){var e=this.props.isDisabled;return m.a.createElement(oe,{ref:this.selectRef,options:ie,placeholder:"Copy Badge URL",value:"",isDisabled:e,closeMenuOnScroll:!0,blurInputOnSelect:!0,menuPlacement:"auto",isSearchable:!1,onControlMouseDown:this.onControlMouseDown,onChange:this.onOptionClick,classNamePrefix:"markup-format",components:{Control:re}})},t}(m.a.PureComponent);le.propTypes={onMarkupRequested:f.a.func.isRequired,isDisabled:f.a.bool};var ce=le,se=n(247),ue=_.c.span.withConfig({displayName:"copied-content-indicator__ContentAnchor",componentId:"sc-1dqcwul-0"})(["position:relative;display:inline-block;"]),pe=_.c.span.withConfig({displayName:"copied-content-indicator__ContentContainer",componentId:"sc-1dqcwul-1"})(["width:100vw;position:absolute;left:50%;transform:translateX(-50%);will-change:opacity,top;pointer-events:none;"]),me=Object(se.a)(pe)({hidden:{opacity:0,transition:{duration:100}},effectStart:{top:"-10px",opacity:1,transition:{duration:0}},effectEnd:{top:"-75px",opacity:.5}}),de=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={pose:"hidden"},t.handlePoseComplete=function(){"effectStart"===t.state.pose?t.setState({pose:"effectEnd"}):t.setState({pose:"hidden"})},t}u()(t,e);var n=t.prototype;return n.trigger=function(){this.setState({pose:"effectStart"})},n.render=function(){var e=this.state.pose;return m.a.createElement(ue,null,m.a.createElement(me,{pose:e,onPoseComplete:this.handlePoseComplete},this.props.copiedContent),this.props.children)},t}(m.a.Component);de.propTypes={copiedContent:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node])},n.d(t,"a",function(){return fe});var fe=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).indicatorRef=m.a.createRef(),t.state={path:"",link:"",message:void 0},t.copyMarkup=function(){var e=i()(r.a.mark(function e(n){var a,o,i,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.title,o=t.state.link,i=t.generateBuiltBadgeUrl(),l=P({badgeUrl:i,link:o,title:a,markupFormat:n}),e.prev=4,e.next=7,g()(l);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(4),t.setState({message:"Copy failed",markup:l}),e.abrupt("return");case 13:t.setState({markup:l}),t.indicatorRef.current.trigger();case 15:case"end":return e.stop()}},e,this,[[4,9]])}));return function(t){return e.apply(this,arguments)}}(),t.handlePathChange=function(e){var n=e.path,a=e.isComplete;t.setState({path:n,pathIsComplete:a})},t.handleQueryStringChange=function(e){var n=e.queryString;e.isComplete;t.setState({queryString:n})},t}u()(t,e);var n=t.prototype;return n.generateBuiltBadgeUrl=function(){var e=this.baseUrl,t=this.state,n=t.path,a=t.queryString;return""+e+n+".svg"+(a?"?"+a:"")},n.renderLivePreview=function(){var e,t=this.props.baseUrl;return e=this.state.pathIsComplete?this.generateBuiltBadgeUrl():Object(v.b)(t,"preview","some parameters missing","lightgray"),m.a.createElement("p",null,m.a.createElement(O.a,{display:"block",src:e}))},n.renderMarkupAndLivePreview=function(){var e=this.indicatorRef,t=this.state,n=t.markup,a=t.message,r=t.pathIsComplete;return m.a.createElement("div",null,this.renderLivePreview(),m.a.createElement(de,{ref:e,copiedContent:"Copied"},m.a.createElement(ce,{isDisabled:!r,onMarkupRequested:this.copyMarkup})),a&&m.a.createElement("div",null,m.a.createElement("p",null,a),m.a.createElement("p",null,"Markup: ",n)))},n.render=function(){var e=this.props,t=e.pattern,n=e.exampleNamedParams,a=e.exampleQueryParams,r=e.defaultStyle;return m.a.createElement("form",{action:""},m.a.createElement(J,{pattern:t,exampleParams:n,onChange:this.handlePathChange}),m.a.createElement(ee,{exampleParams:a,defaultStyle:r,onChange:this.handleQueryStringChange}),m.a.createElement("div",null,this.renderMarkupAndLivePreview()))},c()(t,[{key:"baseUrl",get:function(){var e=this.props.baseUrl;if(e)return e;var t=window.location;return t.protocol+"//"+t.hostname}}]),t}(m.a.Component);fe.propTypes={baseUrl:f.a.string.isRequired,title:f.a.string.isRequired,pattern:f.a.string.isRequired,exampleNamedParams:f.a.object.isRequired,exampleQueryParams:f.a.object.isRequired,defaultStyle:f.a.string}},202:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABE0lEQVR4AWJkAIKkpCQ7TU3NySIiIlosQMCABejbMWAFf//8YXj77vWn27duZWVGz1nKGBYWZiQkJHSIkZGRmwEPCMxiwAt+/fz3/86VL8EAbuiiAKEoiMLwGcHdCQMBiUAlurDErmJ75tmKP8A3oiJyuF6vAxglws+0C5pv81GJaJdzhlWMMJssaaXM3C0CpmSDLAQtgH3BiCIVB2NRMKWEIoXQMBiLgjHGP9nQ+6ZPLgqGgs9xriDovX8A6Jjgw8ZyIigzn5xz+yZ+6O/tsz7Hy8tb/PLlywPAHMOFT/G3LwRc95fxPyerQCojuKwLDLQAGjoJWIzpAw1mw6bB0guHSYyMDBysnO/5hUTTGvM3rQEAI8qCnLiY3O4AAAAASUVORK5CYII="},233:function(e,t,n){n(85),n(92);var a=/^[A-za-z0-9-]+$/;e.exports={patternToOptions:function(e){var t=e.split("|");return t.some(function(e){return!e.match(a)})?void 0:t}}}}]);
//# sourceMappingURL=1-1e605bfe1cc98be4f471.js.map
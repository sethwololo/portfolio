import{c as V,j as a,r as W,w as be,I as ge,l as ae,R as he,a as xe,b as ye,d as we,e as ve,f as je,g as ke,h as ze,i as Se}from"./react-vendor-39xCtSGq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();function D(t){const e=V.c(13),{icon:o,title:r,linkTitle:n,linkHref:l}=t;let s;e[0]!==o?(s=a.jsx("span",{className:"shrink-0","aria-hidden":!0,children:o}),e[0]=o,e[1]=s):s=e[1];let c;e[2]!==r?(c=a.jsxs("b",{children:[r,": "]}),e[2]=r,e[3]=c):c=e[3];let i;e[4]!==l||e[5]!==n?(i=a.jsx("a",{target:"_blank",rel:"noreferrer",href:l,className:"text-indigo-600 hover:underline underline-offset-4 break-all",children:n}),e[4]=l,e[5]=n,e[6]=i):i=e[6];let d;e[7]!==c||e[8]!==i?(d=a.jsxs("p",{className:"",children:[c,i]}),e[7]=c,e[8]=i,e[9]=d):d=e[9];let u;return e[10]!==s||e[11]!==d?(u=a.jsxs("div",{className:"flex items-center gap-2 text-base",children:[s,d]}),e[10]=s,e[11]=d,e[12]=u):u=e[12],u}const oe=W.createContext([]),_e=t=>{const e=V.c(6),{children:o}=t;let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],e[0]=r):r=e[0];const[n,l]=W.useState(r);let s,c;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{fetch(window.location.href+"/projects.json").then(d=>d.json()).then(d=>l(d.reverse()))},c=[],e[1]=s,e[2]=c):(s=e[1],c=e[2]),W.useEffect(s,c);let i;return e[3]!==n||e[4]!==o?(i=a.jsx(oe,{value:n,children:o}),e[3]=n,e[4]=o,e[5]=i):i=e[5],i};function ce(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(o=ce(t[e]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function Ce(){for(var t,e,o=0,r="",n=arguments.length;o<n;o++)(t=arguments[o])&&(e=ce(t))&&(r&&(r+=" "),r+=e);return r}const ne="-";function Ne(t){const e=Pe(t),{conflictingClassGroups:o,conflictingClassGroupModifiers:r}=t;function n(s){const c=s.split(ne);return c[0]===""&&c.length!==1&&c.shift(),de(c,e)||Me(s)}function l(s,c){const i=o[s]||[];return c&&r[s]?[...i,...r[s]]:i}return{getClassGroupId:n,getConflictingClassGroupIds:l}}function de(t,e){var s;if(t.length===0)return e.classGroupId;const o=t[0],r=e.nextPart.get(o),n=r?de(t.slice(1),r):void 0;if(n)return n;if(e.validators.length===0)return;const l=t.join(ne);return(s=e.validators.find(({validator:c})=>c(l)))==null?void 0:s.classGroupId}const se=/^\[(.+)\]$/;function Me(t){if(se.test(t)){const e=se.exec(t)[1],o=e==null?void 0:e.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}function Pe(t){const{theme:e,prefix:o}=t,r={nextPart:new Map,validators:[]};return Ae(Object.entries(t.classGroups),o).forEach(([l,s])=>{re(s,r,l,e)}),r}function re(t,e,o,r){t.forEach(n=>{if(typeof n=="string"){const l=n===""?e:le(e,n);l.classGroupId=o;return}if(typeof n=="function"){if(Ie(n)){re(n(r),e,o,r);return}e.validators.push({validator:n,classGroupId:o});return}Object.entries(n).forEach(([l,s])=>{re(s,le(e,l),o,r)})})}function le(t,e){let o=t;return e.split(ne).forEach(r=>{o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}function Ie(t){return t.isThemeGetter}function Ae(t,e){return e?t.map(([o,r])=>{const n=r.map(l=>typeof l=="string"?e+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([s,c])=>[e+s,c])):l);return[o,n]}):t}function Re(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,o=new Map,r=new Map;function n(l,s){o.set(l,s),e++,e>t&&(e=0,r=o,o=new Map)}return{get(l){let s=o.get(l);if(s!==void 0)return s;if((s=r.get(l))!==void 0)return n(l,s),s},set(l,s){o.has(l)?o.set(l,s):n(l,s)}}}const ue="!";function Te(t){const e=t.separator,o=e.length===1,r=e[0],n=e.length;return function(s){const c=[];let i=0,d=0,u;for(let p=0;p<s.length;p++){let g=s[p];if(i===0){if(g===r&&(o||s.slice(p,p+n)===e)){c.push(s.slice(d,p)),d=p+n;continue}if(g==="/"){u=p;continue}}g==="["?i++:g==="]"&&i--}const b=c.length===0?s:s.substring(d),y=b.startsWith(ue),v=y?b.substring(1):b,j=u&&u>d?u-d:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:j}}}function $e(t){if(t.length<=1)return t;const e=[];let o=[];return t.forEach(r=>{r[0]==="["?(e.push(...o.sort(),r),o=[]):o.push(r)}),e.push(...o.sort()),e}function Ge(t){return{cache:Re(t.cacheSize),splitModifiers:Te(t),...Ne(t)}}const Ee=/\s+/;function Le(t,e){const{splitModifiers:o,getClassGroupId:r,getConflictingClassGroupIds:n}=e,l=new Set;return t.trim().split(Ee).map(s=>{const{modifiers:c,hasImportantModifier:i,baseClassName:d,maybePostfixModifierPosition:u}=o(s);let b=r(u?d.substring(0,u):d),y=!!u;if(!b){if(!u)return{isTailwindClass:!1,originalClassName:s};if(b=r(d),!b)return{isTailwindClass:!1,originalClassName:s};y=!1}const v=$e(c).join(":");return{isTailwindClass:!0,modifierId:i?v+ue:v,classGroupId:b,originalClassName:s,hasPostfixModifier:y}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:c,classGroupId:i,hasPostfixModifier:d}=s,u=c+i;return l.has(u)?!1:(l.add(u),n(i,d).forEach(b=>l.add(c+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Oe(){let t=0,e,o,r="";for(;t<arguments.length;)(e=arguments[t++])&&(o=fe(e))&&(r&&(r+=" "),r+=o);return r}function fe(t){if(typeof t=="string")return t;let e,o="";for(let r=0;r<t.length;r++)t[r]&&(e=fe(t[r]))&&(o&&(o+=" "),o+=e);return o}function We(t,...e){let o,r,n,l=s;function s(i){const d=e.reduce((u,b)=>b(u),t());return o=Ge(d),r=o.cache.get,n=o.cache.set,l=c,c(i)}function c(i){const d=r(i);if(d)return d;const u=Le(i,o);return n(i,u),u}return function(){return l(Oe.apply(null,arguments))}}function x(t){const e=o=>o[t]||[];return e.isThemeGetter=!0,e}const me=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ue=/^\d+\/\d+$/,Be=new Set(["px","full","screen"]),Ve=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,He=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ye=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function O(t){return q(t)||Be.has(t)||Ue.test(t)}function U(t){return F(t,"length",tt)}function q(t){return!!t&&!Number.isNaN(Number(t))}function Q(t){return F(t,"number",q)}function Y(t){return!!t&&Number.isInteger(Number(t))}function Je(t){return t.endsWith("%")&&q(t.slice(0,-1))}function f(t){return me.test(t)}function B(t){return Ve.test(t)}const Ke=new Set(["length","size","percentage"]);function Xe(t){return F(t,Ke,pe)}function Ze(t){return F(t,"position",pe)}const Qe=new Set(["image","url"]);function De(t){return F(t,Qe,ot)}function et(t){return F(t,"",rt)}function J(){return!0}function F(t,e,o){const r=me.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):o(r[2]):!1}function tt(t){return qe.test(t)&&!Fe.test(t)}function pe(){return!1}function rt(t){return He.test(t)}function ot(t){return Ye.test(t)}function nt(){const t=x("colors"),e=x("spacing"),o=x("blur"),r=x("brightness"),n=x("borderColor"),l=x("borderRadius"),s=x("borderSpacing"),c=x("borderWidth"),i=x("contrast"),d=x("grayscale"),u=x("hueRotate"),b=x("invert"),y=x("gap"),v=x("gradientColorStops"),j=x("gradientColorStopPositions"),p=x("inset"),g=x("margin"),S=x("opacity"),k=x("padding"),_=x("saturate"),P=x("scale"),I=x("sepia"),C=x("skew"),N=x("space"),M=x("translate"),A=()=>["auto","contain","none"],G=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",f,e],m=()=>[f,e],T=()=>["",O,U],E=()=>["auto",q,f],w=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],h=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],L=()=>["start","end","center","between","around","evenly","stretch"],z=()=>["","0",f],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[q,Q],Z=()=>[q,f];return{cacheSize:500,separator:":",theme:{colors:[J],spacing:[O,U],blur:["none","",B,f],brightness:H(),borderColor:[t],borderRadius:["none","","full",B,f],borderSpacing:m(),borderWidth:T(),contrast:H(),grayscale:z(),hueRotate:Z(),invert:z(),gap:m(),gradientColorStops:[t],gradientColorStopPositions:[Je,U],inset:R(),margin:R(),opacity:H(),padding:m(),saturate:H(),scale:H(),sepia:z(),skew:Z(),space:m(),translate:m()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[B]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...w(),f]}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Y,f]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",Y,f]}],"grid-cols":[{"grid-cols":[J]}],"col-start-end":[{col:["auto",{span:["full",Y,f]},f]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[J]}],"row-start-end":[{row:["auto",{span:[Y,f]},f]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",f,e]}],"min-w":[{"min-w":[f,e,"min","max","fit"]}],"max-w":[{"max-w":[f,e,"none","full","min","max","fit","prose",{screen:[B]},B]}],h:[{h:[f,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[f,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[f,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[f,e,"auto","min","max","fit"]}],"font-size":[{text:["base",B,U]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Q]}],"font-family":[{font:[J]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",q,Q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...h(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",O,U]}],"underline-offset":[{"underline-offset":["auto",O,f]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:m()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...w(),Ze]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Xe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},De]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[j]}],"gradient-via-pos":[{via:[j]}],"gradient-to-pos":[{to:[j]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...h(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:h()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...h()]}],"outline-offset":[{"outline-offset":[O,f]}],"outline-w":[{outline:[O,U]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:T()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[O,U]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",B,et]}],"shadow-color":[{shadow:[J]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[r]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",B,f]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[b]}],saturate:[{saturate:[_]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[P]}],"scale-x":[{"scale-x":[P]}],"scale-y":[{"scale-y":[P]}],rotate:[{rotate:[Y,f]}],"translate-x":[{"translate-x":[M]}],"translate-y":[{"translate-y":[M]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[O,U,Q]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const st=We(nt),K=(...t)=>st(Ce(t));function lt(t){const e=V.c(14);let o,r,n;e[0]!==t?({name:r,imageUrl:o,...n}=t,e[0]=t,e[1]=o,e[2]=r,e[3]=n):(o=e[1],r=e[2],n=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=K("flex flex-col overflow-hidden cursor-pointer transition-colors","bg-zinc-50 border border-zinc-300 rounded-xl shadow-sm","hover:shadow-md hover:border-indigo-500"),e[4]=l):l=e[4];const s=window.location.href+o,c=`Imagem do projeto ${r}`;let i;e[5]!==s||e[6]!==c?(i=a.jsx("div",{className:"bg-zinc-200 w-full h-auto aspect-video",children:a.jsx("img",{src:s,className:"w-full h-auto object-cover aspect-video",alt:c})}),e[5]=s,e[6]=c,e[7]=i):i=e[7];let d;e[8]!==r?(d=a.jsx("p",{className:"block p-2 text-left truncate text-ellipsis w-full border-t text-base border-t-zinc-300",children:r}),e[8]=r,e[9]=d):d=e[9];let u;return e[10]!==n||e[11]!==i||e[12]!==d?(u=a.jsxs("button",{type:"button",className:l,...n,children:[i,d]}),e[10]=n,e[11]=i,e[12]=d,e[13]=u):u=e[13],u}function it(t){const e=V.c(47),{ref:o,projectId:r}=t,n=o,l=W.use(oe);let s,c;if(e[0]!==r||e[1]!==l){let z;e[3]!==r?(z=X=>X.id===r,e[3]=r,e[4]=z):z=e[4],c=l.find(z),e[0]=r,e[1]=l,e[2]=c}else c=e[2];s=c;const i=s;let d;e[5]===Symbol.for("react.memo_cache_sentinel")?(d=()=>{var z;(z=n.current)==null||z.close()},e[5]=d):d=e[5];const u=d;let b,y;e[6]===Symbol.for("react.memo_cache_sentinel")?(b=K(["backdrop:bg-black/30 backdrop:backdrop-blur-md","open:animate-fade-in open:backdrop:animate-fade-in"]),y=z=>z.currentTarget.close(),e[6]=b,e[7]=y):(b=e[6],y=e[7]);let v,j;e[8]===Symbol.for("react.memo_cache_sentinel")?(v=K(["max-w-[calc(100%-1rem)] md:max-w-[680px] w-full flex flex-col overflow-hidden","fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","bg-zinc-50 shadow-2xl rounded-2xl border border-zinc-300"]),j=z=>z.stopPropagation(),e[8]=v,e[9]=j):(v=e[8],j=e[9]);let p;e[10]===Symbol.for("react.memo_cache_sentinel")?(p=a.jsx(he,{weight:"bold"}),e[10]=p):p=e[10];let g;e[11]!==u?(g=a.jsx("button",{onClick:u,className:"absolute text-zinc-700 top-3 right-3 rounded-md bg-zinc-50 p-1 text-lg cursor-pointer hover:bg-indigo-500 hover:text-zinc-50 transition-colors",children:p}),e[11]=u,e[12]=g):g=e[12];const S=window.location.href+(i==null?void 0:i.image),k=`Imagem demonstrativa do projeto "${i==null?void 0:i.name}"`;let _;e[13]!==S||e[14]!==k?(_=a.jsx("div",{className:"w-full h-auto bg-zinc-200 aspect-video border-b border-b-zinc-300",children:a.jsx("img",{className:"w-full h-full object-cover",src:S,alt:k})}),e[13]=S,e[14]=k,e[15]=_):_=e[15];let P;e[16]!==i?(P=(i==null?void 0:i.url)===""?a.jsx(be,{size:18,weight:"regular",className:"text-zinc-700"}):a.jsx(ge,{size:18,weight:"regular",className:"text-zinc-700"}),e[16]=i,e[17]=P):P=e[17];let I;e[18]!==i?(I=(i==null?void 0:i.url)===""?i==null?void 0:i.name:a.jsx("a",{href:i==null?void 0:i.url,target:"_blank",rel:"noreferrer",className:" hover:underline decoration-indigo-500 underline-offset-2",children:i==null?void 0:i.name}),e[18]=i,e[19]=I):I=e[19];let C;e[20]!==I?(C=a.jsx("h1",{className:"inline-flex font-bold text-pretty flex-1",children:I}),e[20]=I,e[21]=C):C=e[21];let N;e[22]!==P||e[23]!==C?(N=a.jsxs("div",{className:"flex items-center gap-2 text-xl sm:text-3xl",children:[P,C]}),e[22]=P,e[23]=C,e[24]=N):N=e[24];let M;e[25]!==i?(M=(i==null?void 0:i.ghUrl)&&a.jsx("a",{href:i==null?void 0:i.ghUrl,className:K(["block p-1.5 text-indigo-600 bg-indigo-100 w-fit aspect-square border border-transparent rounded transition-colors","hover:bg-indigo-200 hover:text-indigo-600"]),title:"Abrir no GitHub",target:"_blank",rel:"noreferrer",children:a.jsx(ae,{size:18})}),e[25]=i,e[26]=M):M=e[26];let A;e[27]!==N||e[28]!==M?(A=a.jsxs("div",{className:"flex gap-2 justify-between items-center",children:[N,M]}),e[27]=N,e[28]=M,e[29]=A):A=e[29];let G;e[30]===Symbol.for("react.memo_cache_sentinel")?(G=a.jsx(xe,{weight:"duotone",size:18}),e[30]=G):G=e[30];const R=i==null?void 0:i.stack;let m;e[31]!==R?(m=a.jsxs("div",{className:"inline-flex gap-2 items-center text-indigo-600",children:[G,a.jsx("small",{className:"text-sm italic ",children:R})]}),e[31]=R,e[32]=m):m=e[32];let T;e[33]===Symbol.for("react.memo_cache_sentinel")?(T=a.jsx(ye,{size:18,weight:"duotone",className:"shrink-0"}),e[33]=T):T=e[33];const E=i==null?void 0:i.description;let w;e[34]!==E?(w=a.jsxs("div",{className:"flex gap-2 text-zinc-600",children:[T,a.jsx("p",{className:"text-base sm:text-lg max-w-prose ",children:E})]}),e[34]=E,e[35]=w):w=e[35];let h;e[36]!==A||e[37]!==m||e[38]!==w?(h=a.jsxs("div",{className:"px-4 pt-4 pb-8 flex flex-col gap-4",children:[A,m,w]}),e[36]=A,e[37]=m,e[38]=w,e[39]=h):h=e[39];let $;e[40]!==g||e[41]!==_||e[42]!==h?($=a.jsxs("div",{className:v,onClick:j,children:[g,_,h]}),e[40]=g,e[41]=_,e[42]=h,e[43]=$):$=e[43];let L;return e[44]!==n||e[45]!==$?(L=a.jsx("dialog",{ref:n,className:b,onClick:y,"data-id":"",children:$}),e[44]=n,e[45]=$,e[46]=L):L=e[46],L}const ie=t=>a.jsx("button",{...t,type:"button",className:K("flex items-center aspect-square p-2 rounded-full cursor-pointer bg-transparent","transition-colors text-zinc-800 hover:bg-zinc-200 disabled:bg-transparent","disabled:opacity-50")});function at(){const t=V.c(47),e=W.use(oe),o=W.useRef(null),[r,n]=W.useState(0),l=Math.ceil(e.length/6),[s,c]=W.useState(1);let i;t[0]!==s||t[1]!==l?(i=()=>{s<l&&c(s+1)},t[0]=s,t[1]=l,t[2]=i):i=t[2];const d=i;let u;t[3]!==s?(u=()=>{s>1&&c(s-1)},t[3]=s,t[4]=u):u=t[4];const b=u;let y;t[5]===Symbol.for("react.memo_cache_sentinel")?(y=w=>{var h;n(w),(h=o.current)==null||h.showModal()},t[5]=y):y=t[5];const v=y;let j;t[6]!==o||t[7]!==r?(j=a.jsx(it,{ref:o,projectId:r}),t[6]=o,t[7]=r,t[8]=j):j=t[8];let p;if(t[9]!==s||t[10]!==e||t[11]!==v){let w;t[13]!==v?(w=h=>a.jsx(lt,{name:h.name,onClick:()=>v(h.id),imageUrl:h.image,"aria-label":`Card do projeto ${h.name}`},`project-${h.id}-card`),t[13]=v,t[14]=w):w=t[14],p=e.slice((s-1)*6,s*6).map(w),t[9]=s,t[10]=e,t[11]=v,t[12]=p}else p=t[12];let g;t[15]!==p?(g=a.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full",children:p}),t[15]=p,t[16]=g):g=t[16];const S=s===1;let k;t[17]===Symbol.for("react.memo_cache_sentinel")?(k=a.jsx(we,{weight:"bold"}),t[17]=k):k=t[17];let _;t[18]!==b||t[19]!==S?(_=a.jsx("li",{children:a.jsx(ie,{"aria-label":"Anterior",onClick:b,disabled:S,children:k})}),t[18]=b,t[19]=S,t[20]=_):_=t[20];let P;t[21]===Symbol.for("react.memo_cache_sentinel")?(P=a.jsx("label",{className:"sr-only",htmlFor:"pagination-select",children:"Página selecionada:"}),t[21]=P):P=t[21];let I;t[22]===Symbol.for("react.memo_cache_sentinel")?(I=w=>c(Number(w.target.value)),t[22]=I):I=t[22];let C;if(t[23]!==l){let w;t[25]===Symbol.for("react.memo_cache_sentinel")?(w=($,L)=>L+1,t[25]=w):w=t[25];let h;t[26]===Symbol.for("react.memo_cache_sentinel")?(h=$=>a.jsx("option",{value:$,className:"bg-zinc-50 text-zinc-800",children:$},`pagination-option-${$}`),t[26]=h):h=t[26],C=Array.from({length:l},w).map(h),t[23]=l,t[24]=C}else C=t[24];let N;t[27]!==s||t[28]!==C?(N=a.jsx("select",{id:"pagination-select",className:"appearance-none rounded-md px-3 py-1 border border-indigo-400 bg-transparent text-base focus:outline-0 focus-visible:outline-2",value:s,onChange:I,children:C}),t[27]=s,t[28]=C,t[29]=N):N=t[29];let M;t[30]!==N||t[31]!==l?(M=a.jsxs("li",{className:"text-base",children:[P,N," ","de ",l]}),t[30]=N,t[31]=l,t[32]=M):M=t[32];const A=s===l;let G;t[33]===Symbol.for("react.memo_cache_sentinel")?(G=a.jsx(ve,{weight:"bold"}),t[33]=G):G=t[33];let R;t[34]!==d||t[35]!==A?(R=a.jsx("li",{children:a.jsx(ie,{"aria-label":"Próximo",onClick:d,disabled:A,children:G})}),t[34]=d,t[35]=A,t[36]=R):R=t[36];let m;t[37]!==_||t[38]!==M||t[39]!==R?(m=a.jsx("nav",{"aria-label":"Paginação",children:a.jsxs("ul",{className:"flex items-center w-fit mx-auto gap-2",children:[_,M,R]})}),t[37]=_,t[38]=M,t[39]=R,t[40]=m):m=t[40];let T;t[41]!==g||t[42]!==m?(T=a.jsxs(W.Suspense,{fallback:"Carregando...",children:[g,m]}),t[41]=g,t[42]=m,t[43]=T):T=t[43];let E;return t[44]!==j||t[45]!==T?(E=a.jsxs("div",{className:"flex flex-col gap-4",children:[j,T]}),t[44]=j,t[45]=T,t[46]=E):E=t[46],E}function ee(t){const e=V.c(2),{children:o}=t;let r;return e[0]!==o?(r=a.jsx("p",{className:"text-md sm:text-lg text-pretty max-w-[80ch] pl-1 text-zinc-600",children:o}),e[0]=o,e[1]=r):r=e[1],r}function te(t){const e=V.c(3),{children:o}=t;let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=a.jsxs("span",{className:"font-bold text-indigo-500 select-none leading-none","aria-hidden":!0,children:["❯"," "]}),e[0]=r):r=e[0];let n;return e[1]!==o?(n=a.jsxs("h2",{className:"leading-none text-xl sm:text-2xl font-bold focus-visible:outline-0 focus-visible:underline focus-visible:decoration-indigo-500 underline-offset-8",tabIndex:0,children:[r,o]}),e[1]=o,e[2]=n):n=e[2],n}function ct(t,e){let n=Math.abs(e.getTime()-t.getTime())/31536e6;return Math.floor(n*10%10)===5?n=Math.floor(n*10)/10:n=Math.round(n),n}function dt(){const t=V.c(11);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=ct(new Date(2021,0,1),new Date),t[0]=e):e=t[0];const o=e;let r;t[1]===Symbol.for("react.memo_cache_sentinel")?(r=a.jsxs("h1",{className:"flex flex-col max-w-fit my-32 sm:my-64 ml-auto text-zinc-600",children:[a.jsx("span",{className:"text-2xl sm:text-4xl font-normal",children:"olá, sou"}),a.jsx("strong",{className:"text-4xl sm:text-6xl font-bold text-zinc-700",children:"Matheus Bezerra"}),a.jsx("span",{className:"text-xl self-end",children:"desenvolvedor web"})]}),t[1]=r):r=t[1];let n;t[2]===Symbol.for("react.memo_cache_sentinel")?(n=a.jsxs("section",{id:"sobre-mim",className:"flex flex-col gap-4",children:[a.jsx(te,{children:"sobre mim"}),a.jsxs(ee,{children:["atuo como desenvolvedor web há ",o," anos, criando interfaces intuitivas com foco em acessibilidade e usabilidade. acredito em proporcionar às pessoas a mesma experiência que eu gostaria de ter, entregando o meu melhor em cada projeto."]})]}),t[2]=n):n=t[2];let l,s;t[3]===Symbol.for("react.memo_cache_sentinel")?(l=a.jsx(te,{children:"meu trabalho"}),s=a.jsx(ee,{children:"esses foram os projetos em que estive envolvido:"}),t[3]=l,t[4]=s):(l=t[3],s=t[4]);let c;t[5]===Symbol.for("react.memo_cache_sentinel")?(c=a.jsxs("section",{id:"meu-trabalho",className:"flex flex-col gap-4",children:[l,s,a.jsx(_e,{children:a.jsx(at,{})})]}),t[5]=c):c=t[5];let i,d;t[6]===Symbol.for("react.memo_cache_sentinel")?(i=a.jsx(te,{children:"onde me encontrar"}),d=a.jsx(ee,{children:"estou sempre aberto a novas oportunidades e desafios. entre em contato comigo!"}),t[6]=i,t[7]=d):(i=t[6],d=t[7]);let u;t[8]===Symbol.for("react.memo_cache_sentinel")?(u=a.jsx(D,{icon:a.jsx(je,{size:18,className:"shrink-0"}),title:"e-mail",linkTitle:"sethwololo@gmail.com",linkHref:"mailto:sethwololo@gmail.com"}),t[8]=u):u=t[8];let b;t[9]===Symbol.for("react.memo_cache_sentinel")?(b=a.jsx(D,{icon:a.jsx(ke,{size:18}),title:"linkedin",linkTitle:"linkedin.com/in/matheush5710",linkHref:"https://linkedin.com/in/matheush5710"}),t[9]=b):b=t[9];let y;return t[10]===Symbol.for("react.memo_cache_sentinel")?(y=a.jsxs("main",{className:"flex flex-col w-full gap-32 max-w-[1120px] mx-auto h-full p-4 pb-20",children:[r,n,c,a.jsxs("section",{id:"contato",className:"flex flex-col gap-4",children:[i,d,a.jsxs("div",{className:"flex flex-col gap-2",children:[u,b,a.jsx(D,{icon:a.jsx(ae,{size:18,className:"shrink-0"}),title:"github",linkTitle:"github.com/sethwololo",linkHref:"https://github.com/sethwololo"})]})]})]}),t[10]=y):y=t[10],y}ze.createRoot(document.getElementById("root")).render(a.jsx(Se.StrictMode,{children:a.jsx(dt,{})}));
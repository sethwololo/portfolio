import{j as s,r as w,R as be,w as me,I as ge,l as le,a as he,b as xe,c as we,d as ye,e as ve,f as je,g as ke,h as ze}from"./react-vendor-CHujH7FL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();function V({icon:e,title:t,linkTitle:o,linkHref:n}){return s.jsxs("div",{className:"flex items-center gap-2 text-base",children:[s.jsx("span",{className:"shrink-0","aria-hidden":!0,children:e}),s.jsxs("p",{className:"",children:[s.jsxs("b",{children:[t,": "]}),s.jsx("a",{target:"_blank",rel:"noreferrer",href:n,className:"text-indigo-600 hover:underline underline-offset-4 break-all",children:o})]})]})}const H=w.createContext([]),Ce=({children:e})=>{const[t,o]=w.useState([]);return w.useEffect(()=>{fetch(window.location.href+"/projects.json").then(n=>n.json()).then(n=>o(n.reverse()))},[]),s.jsx(H.Provider,{value:t,children:e})};function ae(e){var t,o,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(o=ae(e[t]))&&(n&&(n+=" "),n+=o)}else for(o in e)e[o]&&(n&&(n+=" "),n+=o);return n}function Ne(){for(var e,t,o=0,n="",r=arguments.length;o<r;o++)(e=arguments[o])&&(t=ae(e))&&(n&&(n+=" "),n+=t);return n}const Y="-";function Me(e){const t=Se(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:n}=e;function r(i){const c=i.split(Y);return c[0]===""&&c.length!==1&&c.shift(),ce(c,t)||Pe(i)}function l(i,c){const f=o[i]||[];return c&&n[i]?[...f,...n[i]]:f}return{getClassGroupId:r,getConflictingClassGroupIds:l}}function ce(e,t){var i;if(e.length===0)return t.classGroupId;const o=e[0],n=t.nextPart.get(o),r=n?ce(e.slice(1),n):void 0;if(r)return r;if(t.validators.length===0)return;const l=e.join(Y);return(i=t.validators.find(({validator:c})=>c(l)))==null?void 0:i.classGroupId}const oe=/^\[(.+)\]$/;function Pe(e){if(oe.test(e)){const t=oe.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}function Se(e){const{theme:t,prefix:o}=e,n={nextPart:new Map,validators:[]};return Ae(Object.entries(e.classGroups),o).forEach(([l,i])=>{F(i,n,l,t)}),n}function F(e,t,o,n){e.forEach(r=>{if(typeof r=="string"){const l=r===""?t:ne(t,r);l.classGroupId=o;return}if(typeof r=="function"){if(Ie(r)){F(r(n),t,o,n);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(([l,i])=>{F(i,ne(t,l),o,n)})})}function ne(e,t){let o=e;return t.split(Y).forEach(n=>{o.nextPart.has(n)||o.nextPart.set(n,{nextPart:new Map,validators:[]}),o=o.nextPart.get(n)}),o}function Ie(e){return e.isThemeGetter}function Ae(e,t){return t?e.map(([o,n])=>{const r=n.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([i,c])=>[t+i,c])):l);return[o,r]}):e}function Re(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,n=new Map;function r(l,i){o.set(l,i),t++,t>e&&(t=0,n=o,o=new Map)}return{get(l){let i=o.get(l);if(i!==void 0)return i;if((i=n.get(l))!==void 0)return r(l,i),i},set(l,i){o.has(l)?o.set(l,i):r(l,i)}}}const de="!";function Te(e){const t=e.separator,o=t.length===1,n=t[0],r=t.length;return function(i){const c=[];let f=0,m=0,b;for(let g=0;g<i.length;g++){let x=i[g];if(f===0){if(x===n&&(o||i.slice(g,g+r)===t)){c.push(i.slice(m,g)),m=g+r;continue}if(x==="/"){b=g;continue}}x==="["?f++:x==="]"&&f--}const d=c.length===0?i:i.substring(m),h=d.startsWith(de),j=h?d.substring(1):d,M=b&&b>m?b-m:void 0;return{modifiers:c,hasImportantModifier:h,baseClassName:j,maybePostfixModifierPosition:M}}}function Ge(e){if(e.length<=1)return e;const t=[];let o=[];return e.forEach(n=>{n[0]==="["?(t.push(...o.sort(),n),o=[]):o.push(n)}),t.push(...o.sort()),t}function Ee(e){return{cache:Re(e.cacheSize),splitModifiers:Te(e),...Me(e)}}const Le=/\s+/;function $e(e,t){const{splitModifiers:o,getClassGroupId:n,getConflictingClassGroupIds:r}=t,l=new Set;return e.trim().split(Le).map(i=>{const{modifiers:c,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:b}=o(i);let d=n(b?m.substring(0,b):m),h=!!b;if(!d){if(!b)return{isTailwindClass:!1,originalClassName:i};if(d=n(m),!d)return{isTailwindClass:!1,originalClassName:i};h=!1}const j=Ge(c).join(":");return{isTailwindClass:!0,modifierId:f?j+de:j,classGroupId:d,originalClassName:i,hasPostfixModifier:h}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:c,classGroupId:f,hasPostfixModifier:m}=i,b=c+f;return l.has(b)?!1:(l.add(b),r(f,m).forEach(d=>l.add(c+d)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function Oe(){let e=0,t,o,n="";for(;e<arguments.length;)(t=arguments[e++])&&(o=ue(t))&&(n&&(n+=" "),n+=o);return n}function ue(e){if(typeof e=="string")return e;let t,o="";for(let n=0;n<e.length;n++)e[n]&&(t=ue(e[n]))&&(o&&(o+=" "),o+=t);return o}function _e(e,...t){let o,n,r,l=i;function i(f){const m=t.reduce((b,d)=>d(b),e());return o=Ee(m),n=o.cache.get,r=o.cache.set,l=c,c(f)}function c(f){const m=n(f);if(m)return m;const b=$e(f,o);return r(f,b),b}return function(){return l(Oe.apply(null,arguments))}}function u(e){const t=o=>o[e]||[];return t.isThemeGetter=!0,t}const pe=/^\[(?:([a-z-]+):)?(.+)\]$/i,We=/^\d+\/\d+$/,Be=new Set(["px","full","screen"]),Ue=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ve=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,qe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Fe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,He=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return N(e)||Be.has(e)||We.test(e)}function z(e){return P(e,"length",er)}function N(e){return!!e&&!Number.isNaN(Number(e))}function $(e){return P(e,"number",N)}function A(e){return!!e&&Number.isInteger(Number(e))}function Ye(e){return e.endsWith("%")&&N(e.slice(0,-1))}function a(e){return pe.test(e)}function C(e){return Ue.test(e)}const Je=new Set(["length","size","percentage"]);function Ke(e){return P(e,Je,fe)}function Xe(e){return P(e,"position",fe)}const Ze=new Set(["image","url"]);function Qe(e){return P(e,Ze,tr)}function De(e){return P(e,"",rr)}function R(){return!0}function P(e,t,o){const n=pe.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):o(n[2]):!1}function er(e){return Ve.test(e)&&!qe.test(e)}function fe(){return!1}function rr(e){return Fe.test(e)}function tr(e){return He.test(e)}function or(){const e=u("colors"),t=u("spacing"),o=u("blur"),n=u("brightness"),r=u("borderColor"),l=u("borderRadius"),i=u("borderSpacing"),c=u("borderWidth"),f=u("contrast"),m=u("grayscale"),b=u("hueRotate"),d=u("invert"),h=u("gap"),j=u("gradientColorStops"),M=u("gradientColorStopPositions"),g=u("inset"),x=u("margin"),k=u("opacity"),y=u("padding"),J=u("saturate"),O=u("scale"),K=u("sepia"),X=u("skew"),Z=u("space"),Q=u("translate"),_=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",a,t],p=()=>[a,t],D=()=>["",v,z],G=()=>["auto",N,a],ee=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],S=()=>["","0",a],te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>[N,$],L=()=>[N,a];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[v,z],blur:["none","",C,a],brightness:I(),borderColor:[e],borderRadius:["none","","full",C,a],borderSpacing:p(),borderWidth:D(),contrast:I(),grayscale:S(),hueRotate:L(),invert:S(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Ye,z],inset:B(),margin:B(),opacity:I(),padding:p(),saturate:I(),scale:I(),sepia:S(),skew:L(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ee(),a]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",A,a]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:S()}],shrink:[{shrink:S()}],order:[{order:["first","last","none",A,a]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",A,a]},a]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[A,a]},a]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[Z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,t]}],"min-w":[{"min-w":[a,t,"min","max","fit"]}],"max-w":[{"max-w":[a,t,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[a,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,t,"auto","min","max","fit"]}],"font-size":[{text:["base",C,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",N,$]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,z]}],"underline-offset":[{"underline-offset":["auto",v,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ee(),Xe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ke]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[j]}],"gradient-via":[{via:[j]}],"gradient-to":[{to:[j]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:E()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[v,a]}],"outline-w":[{outline:[v,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[v,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,De]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":[...re(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":re()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[n]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",C,a]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[d]}],saturate:[{saturate:[J]}],sepia:[{sepia:[K]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[J]}],"backdrop-sepia":[{"backdrop-sepia":[K]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[A,a]}],"translate-x":[{"translate-x":[Q]}],"translate-y":[{"translate-y":[Q]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,z,$]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const nr=_e(or),T=(...e)=>nr(Ne(e));function sr({name:e,imageUrl:t,...o}){return s.jsxs("button",{type:"button",className:T("flex flex-col overflow-hidden cursor-pointer transition-colors","bg-zinc-50 border border-zinc-300 rounded-xl shadow-sm","hover:shadow-md hover:border-indigo-500"),...o,children:[s.jsx("div",{className:"bg-zinc-200 w-full h-auto aspect-video",children:s.jsx("img",{src:window.location.href+t,className:"w-full h-auto object-cover aspect-video",alt:`Imagem do projeto ${e}`})}),s.jsx("p",{className:"block p-2 text-left truncate text-ellipsis w-full border-t text-base border-t-zinc-300",children:e})]})}const ir=w.forwardRef(({projectId:e},t)=>{const o=w.useRef(null);w.useImperativeHandle(t,()=>o.current,[]);const n=w.useContext(H),r=w.useMemo(()=>n.find(i=>i.id===e),[e,n]),l=()=>{var i;(i=o.current)==null||i.close()};return s.jsx("dialog",{ref:o,className:T(["backdrop:bg-black/30 backdrop:backdrop-blur-md","open:animate-fade-in open:backdrop:animate-fade-in"]),onClick:i=>i.currentTarget.close(),"data-id":"",children:s.jsxs("div",{className:T(["max-w-[calc(100%-1rem)] md:max-w-[680px] w-full flex flex-col overflow-hidden","fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","bg-zinc-50 shadow-2xl rounded-2xl border border-zinc-300"]),onClick:i=>i.stopPropagation(),children:[s.jsx("button",{onClick:l,className:"absolute text-zinc-700 top-3 right-3 rounded-md bg-zinc-50 p-1 text-lg cursor-pointer hover:bg-indigo-500 hover:text-zinc-50 transition-colors",children:s.jsx(be,{weight:"bold"})}),s.jsx("div",{className:"w-full h-auto bg-zinc-200 aspect-video border-b border-b-zinc-300",children:s.jsx("img",{className:"w-full h-full object-cover",src:window.location.href+(r==null?void 0:r.image),alt:`Imagem demonstrativa do projeto "${r==null?void 0:r.name}"`})}),s.jsxs("div",{className:"px-4 pt-4 pb-8 flex flex-col gap-4",children:[s.jsxs("div",{className:"flex gap-2 justify-between items-center",children:[s.jsxs("div",{className:"flex items-center gap-2 text-xl sm:text-3xl",children:[(r==null?void 0:r.url)===""?s.jsx(me,{size:18,weight:"regular",className:"text-zinc-700"}):s.jsx(ge,{size:18,weight:"regular",className:"text-zinc-700"}),s.jsx("h1",{className:"inline-flex font-bold text-pretty flex-1",children:(r==null?void 0:r.url)===""?r==null?void 0:r.name:s.jsx("a",{href:r==null?void 0:r.url,target:"_blank",rel:"noreferrer",className:" hover:underline decoration-indigo-500 underline-offset-2",children:r==null?void 0:r.name})})]}),(r==null?void 0:r.ghUrl)&&s.jsx("a",{href:r==null?void 0:r.ghUrl,className:T(["block p-1.5 text-indigo-600 bg-indigo-100 w-fit aspect-square border border-transparent rounded transition-colors","hover:bg-indigo-200 hover:text-indigo-600"]),title:"Abrir no GitHub",target:"_blank",rel:"noreferrer",children:s.jsx(le,{size:18})})]}),s.jsxs("div",{className:"inline-flex gap-2 items-center text-indigo-600",children:[s.jsx(he,{weight:"duotone",size:18}),s.jsx("small",{className:"text-sm italic ",children:r==null?void 0:r.stack})]}),s.jsxs("div",{className:"flex gap-2 text-zinc-600",children:[s.jsx(xe,{size:18,weight:"duotone",className:"shrink-0"}),s.jsx("p",{className:"text-base sm:text-lg max-w-prose ",children:r==null?void 0:r.description})]})]})]})})}),se=e=>s.jsx("button",{...e,type:"button",className:T("flex items-center aspect-square p-2 rounded-full cursor-pointer bg-transparent","transition-colors text-zinc-800 hover:bg-zinc-200 disabled:bg-transparent","disabled:opacity-50")});function lr(){const e=w.useContext(H),t=w.useRef(null),[o,n]=w.useState(0),r=6,l=Math.ceil(e.length/r),[i,c]=w.useState(1),f=()=>{i<l&&c(i+1)},m=()=>{i>1&&c(i-1)},b=d=>{var h;n(d),(h=t.current)==null||h.showModal()};return s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx(ir,{ref:t,projectId:o}),s.jsxs(w.Suspense,{fallback:"Carregando...",children:[s.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full",children:e.slice((i-1)*r,i*r).map(d=>s.jsx(sr,{name:d.name,onClick:()=>b(d.id),imageUrl:d.image,"aria-label":`Card do projeto ${d.name}`},`project-${d.id}-card`))}),s.jsx("nav",{"aria-label":"Paginação",children:s.jsxs("ul",{className:"flex items-center w-fit mx-auto gap-2",children:[s.jsx("li",{children:s.jsx(se,{"aria-label":"Anterior",onClick:m,disabled:i===1,children:s.jsx(we,{weight:"bold"})})}),s.jsxs("li",{className:"text-base",children:[s.jsx("label",{className:"sr-only",htmlFor:"pagination-select",children:"Página selecionada:"}),s.jsx("select",{id:"pagination-select",className:"appearance-none rounded-md px-3 py-1 border border-indigo-400 bg-transparent text-base focus:outline-0 focus-visible:outline-2",value:i,onChange:d=>c(Number(d.target.value)),children:Array.from({length:l},(d,h)=>h+1).map(d=>s.jsx("option",{value:d,className:"bg-zinc-50 text-zinc-800",children:d},`pagination-option-${d}`))})," ","de ",l]}),s.jsx("li",{children:s.jsx(se,{"aria-label":"Próximo",onClick:f,disabled:i===l,children:s.jsx(ye,{weight:"bold"})})})]})})]})]})}function ie({children:e}){return s.jsx("p",{className:"text-md sm:text-lg text-pretty max-w-[80ch] pl-1 text-zinc-600",children:e})}function q({children:e}){return s.jsxs("h2",{className:"leading-none text-xl sm:text-2xl font-bold focus-visible:outline-0 focus-visible:underline focus-visible:decoration-indigo-500 underline-offset-8",tabIndex:0,children:[s.jsxs("span",{className:"font-bold text-indigo-500 select-none leading-none","aria-hidden":!0,children:["❯"," "]}),e]})}function ar(e,t){let r=Math.abs(t.getTime()-e.getTime())/31536e6;return Math.floor(r*10%10)===5?r=Math.floor(r*10)/10:r=Math.round(r),r}function cr(){const e=ar(new Date(2021,0,1),new Date);return s.jsxs("main",{className:"flex flex-col w-full gap-32 max-w-[1120px] mx-auto h-full p-4 pb-20",children:[s.jsxs("h1",{className:"flex flex-col max-w-fit my-32 sm:my-64 ml-auto text-zinc-600",children:[s.jsx("span",{className:"text-2xl sm:text-4xl font-normal",children:"olá, sou"}),s.jsx("strong",{className:"text-4xl sm:text-6xl font-bold text-zinc-700",children:"Matheus Bezerra"}),s.jsx("span",{className:"text-xl self-end",children:"desenvolvedor web"})]}),s.jsxs("section",{id:"sobre-mim",className:"flex flex-col gap-4",children:[s.jsx(q,{children:"sobre mim"}),s.jsxs(ie,{children:["atuo como desenvolvedor web há ",e," anos, criando interfaces intuitivas com foco em acessibilidade e usabilidade. acredito em proporcionar às pessoas a mesma experiência que eu gostaria de ter, entregando o meu melhor em cada projeto."]})]}),s.jsxs("section",{id:"meu-trabalho",className:"flex flex-col gap-4",children:[s.jsx(q,{children:"meu trabalho"}),s.jsx(ie,{children:"esses foram os projetos em que estive envolvido:"}),s.jsx(Ce,{children:s.jsx(lr,{})})]}),s.jsxs("section",{id:"contato",className:"flex flex-col gap-4",children:[s.jsx(q,{children:"onde me encontrar"}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(V,{icon:s.jsx(ve,{size:18,className:"shrink-0"}),title:"e-mail",linkTitle:"sethwololo@gmail.com",linkHref:"mailto:sethwololo@gmail.com"}),s.jsx(V,{icon:s.jsx(je,{size:18}),title:"linkedin",linkTitle:"linkedin.com/in/matheush5710",linkHref:"https://linkedin.com/in/matheush5710"}),s.jsx(V,{icon:s.jsx(le,{size:18,className:"shrink-0"}),title:"github",linkTitle:"github.com/sethwololo",linkHref:"https://github.com/sethwololo"})]})]})]})}ke.createRoot(document.getElementById("root")).render(s.jsx(ze.StrictMode,{children:s.jsx(cr,{})}));

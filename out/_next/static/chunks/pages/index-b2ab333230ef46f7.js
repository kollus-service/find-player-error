(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1820)}])},1820:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(5893),o=r(7294),i=r(9144),c=r(6336),a=r(9630),d=r(8346);function s(e){return(0,n.jsxs)(a.Z,{variant:"body2",color:"text.secondary",align:"center",width:"100%",maxWidth:e.maxWidth,sx:{my:10},children:["Copyright \xa9 ",(0,n.jsx)(d.Z,{color:"inherit",href:"https://www.catenoid.net",target:"_blank",children:"Catenoid"})," ",(new Date).getFullYear(),"."]})}var u=r(2097),l=r(1953),m=r(562),v=r(9879),h=r(7289);function p(e){var t=(0,u.Z)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.Z,{sx:{display:"flex",width:"100%",alignItems:"center",justifyContent:"end",bgcolor:"background.default",color:"text.primary",borderRadius:1,p:3},children:(0,n.jsx)(m.Z,{sx:{ml:1},onClick:e.toggleColorMode,color:"inherit",children:"dark"===t.palette.mode?(0,n.jsx)(h.Z,{}):(0,n.jsx)(v.Z,{})})})})}var y=r(6719),f=r(4065),x=r(3508),g=r(7028),S=r(9618),j=r(6902),w=r(2446),Z=(0,j.ZP)((function(e){return{src:"",cuid:"test",mckey:"9G6jKGi5",vodSecurity:"catenoid1",vodCustomer:"a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",liveSecurity:"catenoid1",liveCustomer:"a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",setVodInfo:function(t){return e((function(e){return{mckey:t.mckey,vodSecurity:t.vodSecurity,vodCustomer:t.vodCustomer}}))},setSrc:function(t){return e((function(e){return{src:t}}))},generateVodSrc:function(){return e((function(e){return{src:(0,w.generateVodJwt)({cuid:e.cuid,mckey:e.mckey,vodSecurity:e.vodSecurity,vodCustomer:e.vodCustomer})}}))}}})),k=function(){var e=new VgControllerClient({target_window:document.getElementById("kollus-player").contentWindow});e.on("ready",(function(){localStorage.setItem("player_id",e.get_player_id())})),e.on("error",(function(e){localStorage.setItem("player_error",e)}))},C=function(e){var t=Z(),r=t.src,c=t.generateVodSrc,d=(0,o.useState)(""),s=d[0],u=d[1];return(0,o.useEffect)((function(){c(),u('<iframe id="kollus-player" className="kollus-player" width="640" height="480" src="'.concat(r,'" frameBorder="0" allowFullScreen></iframe>'))}),[r]),(0,n.jsxs)(i.Z,{spacing:2,children:[(0,n.jsx)("iframe",{id:"kollus-player",className:"kollus-player",onLoad:k,width:"640",height:"480",src:r,frameBorder:"0",allowFullScreen:!0}),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(S.Z,{expandIcon:(0,n.jsx)(x.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)(a.Z,{children:"\ud0dc\uadf8 \ubcf4\uae30"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)(y.Z,{id:"contentCode",label:"iFrame Tag",multiline:!0,defaultValue:s,InputProps:{style:{fontSize:"12px"}},rows:6,variant:"filled",sx:{width:"100%"},InputLabelProps:{shrink:!0}})})]})]})},b=r(6042),_=r(9396),I=r(9534),M=r(5697),V=r.n(M),D=r(8661),E=r(2722),F=r(4924),P=r(5084),N=r(8316),T=r(5343),K=r(2961),W=r(4246),A=r(9041),q=r(2450);function B(){var e=Z(),t=e.src,r=(e.cuid,e.mckey,e.vodSecurity,e.vodCustomer,e.setVodInfo),c=e.generateVodSrc,a=(0,o.useState)(),d=a[0],s=a[1],u=(0,o.useState)({vodSecurity:"",vodCustomer:"",mckey:"",src:"",showSecurity:!1,showCustomer:!1}),l=u[0],v=u[1],h=function(e){return function(t){localStorage.setItem(e,t.target.value),v((0,_.Z)((0,b.Z)({},l),(0,F.Z)({},e,t.target.value)))}},p=function(e){v((function(t){return"vodSecurity"===e&&(t.showSecurity=!t.showSecurity),"vodCustomer"===e&&(t.showCustomer=!t.showCustomer),(0,b.Z)({},t)}))},f=function(e){e.preventDefault()};return(0,o.useEffect)((function(){v((function(e){return(0,_.Z)((0,b.Z)({},e),{vodSecurity:localStorage.getItem("vodSecurity"),vodCustomer:localStorage.getItem("vodCustomer")})})),function(e){s(e)}(t)}),[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z,{spacing:2,children:[(0,n.jsxs)(T.Z,{variant:"outlined",children:[(0,n.jsx)(N.Z,{htmlFor:"vodSecurity",children:"\uc11c\ube44\uc2a4 \uacc4\uc815 \ud0a4"}),(0,n.jsx)(W.Z,{id:"vodSecurity",label:"\uc11c\ube44\uc2a4 \uacc4\uc815 \ud0a4",type:l.showSecurity?"text":"password",value:l.vodSecurity,onChange:h("vodSecurity"),endAdornment:(0,n.jsx)(A.Z,{position:"end",children:(0,n.jsx)(m.Z,{"aria-label":"toggle password visibility",onClick:function(){return p("vodSecurity")},onMouseDown:f,edge:"end",children:l.showSecurity?(0,n.jsx)(q.Z,{}):(0,n.jsx)(K.Z,{})})})})]}),(0,n.jsxs)(T.Z,{variant:"outlined",children:[(0,n.jsx)(N.Z,{htmlFor:"vodCustomer",children:"\uc0ac\uc6a9\uc790 \ud0a4"}),(0,n.jsx)(W.Z,{id:"vodCustomer",label:"\uc0ac\uc6a9\uc790 \ud0a4",type:l.showCustomer?"text":"password",value:l.vodCustomer,onChange:h("vodCustomer"),endAdornment:(0,n.jsx)(A.Z,{position:"end",children:(0,n.jsx)(m.Z,{"aria-label":"toggle password visibility",onClick:function(){return p("vodCustomer")},onMouseDown:f,edge:"end",children:l.showCustomer?(0,n.jsx)(q.Z,{}):(0,n.jsx)(K.Z,{})})})})]}),(0,n.jsx)(y.Z,{id:"mckey",label:"\ubbf8\ub514\uc5b4 \ucee8\ud150\uce20 \ud0a4",value:l.mckey,onChange:h("mckey")}),(0,n.jsx)(y.Z,{id:"src",label:"\uc601\uc0c1 \ub9c1\ud06c",multiline:!0,defaultValue:d,InputProps:{style:{fontSize:"0.8rem"}},InputLabelProps:{shrink:!0},onChange:h("src"),rows:6,variant:"filled"}),(0,n.jsx)(P.Z,{variant:"contained",onClick:function(){var e={vodSecurity:l.vodSecurity,vodCustomer:l.vodCustomer,mckey:l.mckey};r(e),c()},children:"\ucf58\ud150\uce20 \ud655\uc778"})]})})}function J(e){var t=e.children,r=e.value,o=e.index,i=(0,I.Z)(e,["children","value","index"]);return(0,n.jsx)("div",(0,_.Z)((0,b.Z)({role:"tabpanel",hidden:r!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o)},i),{children:r===o&&(0,n.jsx)(l.Z,{sx:{p:3},children:t})}))}function L(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function O(e){var t=(0,o.useState)(0),r=t[0],c=t[1],a=(0,o.useState)(""),d=a[0],s=a[1],u=(0,o.useState)(""),m=u[0],v=u[1],h=function(e){s(e)},p=function(e){v(e)};return(0,o.useEffect)((function(){var e=document.createElement("video");try{navigator.requestMediaKeySystemAccess("com.widevine.alpha",config).then((function(e){h("Google Widevine Supported")})).catch((function(e){}))}catch(t){}try{navigator.requestMediaKeySystemAccess("com.microsoft.playready",config).then((function(e){h("Apple PlayReady Supported")})).catch((function(e){}))}catch(r){}try{e.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")),h("MS Fairplay Supported")}catch(n){}d&&h("MultiDrm Not Supported");try{""!=e.canPlayType("video/mp4")&&p("mp4 video Supported")}catch(o){p("mp4 video not Supported")}}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z,{width:"450px",spacing:2,children:[(0,n.jsx)(l.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,n.jsxs)(E.Z,{value:r,onChange:function(e,t){c(t)},children:[(0,n.jsx)(D.Z,(0,b.Z)({label:"VOD"},L(0))),(0,n.jsx)(D.Z,(0,b.Z)({label:"Supported"},L(1)))]})}),(0,n.jsx)(J,{component:"div",value:r,index:0,children:(0,n.jsx)(B,{})}),(0,n.jsxs)(J,{component:"div",value:r,index:1,children:[(0,n.jsx)("div",{children:d}),(0,n.jsx)("div",{children:m})]})]})})}function R(e){return(0,n.jsx)(c.Z,{maxWidth:"lg",children:(0,n.jsxs)(i.Z,{spacing:2,children:[(0,n.jsx)(p,{toggleColorMode:e.toggleColorMode}),(0,n.jsxs)(i.Z,{direction:"row",spacing:2,sx:{mt:6,mb:6,height:"600px"},children:[(0,n.jsx)(C,{}),(0,n.jsx)(O,{})]}),(0,n.jsx)(i.Z,{direction:"row",spacing:2,sx:{mb:6}}),(0,n.jsx)(s,{})]})})}J.propTypes={children:V().node,index:V().number.isRequired,value:V().number.isRequired}},2446:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(2648).Z)(r(9704));e.exports={generateVodJwt:function(e){if(e.mckey&&e.cuid&&e.vodSecurity&&e.vodCustomer){var t=Math.round((new Date).getTime()/1e3)+31536e5,r={mc:[{mckey:e.mckey}],cuid:e.cuid,expt:t},o=n.default.sign(r,e.vodSecurity,{algorithm:"HS256",expiresIn:t}),i=e.vodCustomer;return"https://v.kr.kollus.com/sr?jwt=".concat(o,"&custom_key=").concat(i)}},generateLiveJwt:function(e){if(e.lmckey&&e.cuid&&e.liveSecurity&&e.liveCustomer){var t=Math.round((new Date).getTime()/1e3)+31536e5,r={mc:[{mckey:e.mckey}],client_user_id:e.cuid,client_user_name:e.cuid,expire_time:t,play_expt:t,live_media_channel_key:e.lmckey},o=n.default.sign(r,e.liveSecurity,{algorithm:"HS256",expiresIn:t}),i=e.liveCustomer;return"https://v.kr.kollus.com/s?jwt=".concat(o,"&custom_key=").concat(i)}},generateMultiDrmVodJwt:function(e){if(e.mckey&&e.cuid&&e.upkey&&e.vodSecurity&&e.vodCustomer){var t=Math.round((new Date).getTime()/1e3)+31536e5,r={mc:[{mckey:e.mckey}],cuid:e.cuid,expt:t},o=n.default.sign(r,e.vodSecurity,{algorithm:"HS256",expiresIn:t}),i=e.vodCustomer;return"https://v.kr.kollus.com/s?jwt=".concat(o,"&custom_key=").concat(i)}}}}},function(e){e.O(0,[714,975,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
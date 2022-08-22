(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{9490:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/[id]",function(){return r(7373)}])},2806:function(e,t,r){"use strict";var o,i=r(5893);o=[{id:"ifc_3D_model_markup",title:"IFC 3D Model Markup",summary:"Markups functionality over IFC model using IFC.js + React + React Three Fiber",description:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"In this demo you can see how we can add markers to an IFC 3D model to track issues on any part of the project."}),(0,i.jsx)("p",{children:"Add markups to your models to improve your team's workflow and the model's usability. Easy to use and simple to integrate, markups will help you throughout the different stages of your project."}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Improve your workflows by adding markups to your model in the browser."}),(0,i.jsx)("li",{children:"For you it only takes the click of a button to get started, we take care of the rest."}),(0,i.jsx)("li",{children:"Create a fully interactive scenario."})]})]}),image:["/ifc_marker/1.png","/ifc_marker/2.png"],link:"https://demo-ifc-markers.vercel.app/",ytVideoId:"DMYLwhclrgs",date:"21 Aug 2022 00:12:00 GMT"}],t.Z=o},8940:function(e,t,r){"use strict";r.r(t);var o=r(1799),i=r(5893),n=r(177),s=r(2342),l=r(7049),a=r(7294),d=r(5093),c=r(2490),u=n.Z.Footer;t.default=function(){var e=(new Date).getFullYear(),t=(0,a.useState)(!1),r=t[0],n=t[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(u,{style:{color:"#D2E6E7",boxShadow:"0px 4px 15px #2C375E",backgroundColor:"#101940",textAlign:"center",minHeight:"15em"},children:(0,i.jsxs)("div",{style:{marginTop:"12em",marginBottom:"12em"},children:[(0,i.jsxs)("h1",{style:{fontSize:"3rem",color:"#D2E6E7"},children:[" ","Ready to get started?"]}),(0,i.jsx)("a",{target:"_blank",href:"https://www.lagarsoft.com/contact",rel:"noopener noreferrer",children:(0,i.jsx)(s.Z,{type:"primary",size:"large",onMouseEnter:function(){n(!0)},onMouseLeave:function(){n(!1)},style:(0,o.Z)({},r?{background:"#2C375E",marginBottom:"2rem",borderColor:"#2C375E"}:{color:"#D2E6E7",backgroundColor:"#101940",borderColor:"#D2E6E7",marginBottom:"2rem"}),children:"Contact us"})})]})}),(0,i.jsxs)(u,{style:{color:"#D2E6E7",backgroundColor:"#2C375E",minHeight:"15em"},children:[(0,i.jsx)("h1",{style:{color:"#D2E6E7",fontSize:57,fontWeight:100},children:"Lagarsoft Demo Apps"}),(0,i.jsx)(l.Z,{style:{backgroundColor:"#D2E6E7"}}),(0,i.jsx)("a",{target:"_blank",href:"https://www.lagarsoft.com/",rel:"noopener noreferrer",style:{color:"#D2E6E7",fontSize:25},children:"Visit us"}),(0,i.jsxs)("div",{style:{display:"inline",marginLeft:15},children:[(0,i.jsx)("a",{target:"_blank",href:"https://twitter.com/lagarsoft_eng",rel:"noopener noreferrer",style:{color:"#D2E6E7",fontSize:30},children:(0,i.jsx)(d.Z,{})}),(0,i.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/company/lagarsoft-srl/about/",rel:"noopener noreferrer",style:{color:"#D2E6E7",fontSize:30,marginLeft:10},children:(0,i.jsx)(c.Z,{})})]}),(0,i.jsxs)("div",{style:{textAlign:"center"},children:["Copyright \xa9 2019-",e,", Lagarsoft SRL"," "]})]})]})}},7282:function(e,t,r){"use strict";r.r(t);var o=r(1799),i=r(9396),n=r(5893),s=r(3091),l=r(6348),a=r(6226),d=r(5675),c=r.n(d),u=r(1163),h=r(7294),m=r(2806);t.default=function(){var e=s.Z.Meta,t=(0,h.useState)([]),r=t[0],d=t[1],p=(0,u.useRouter)(),x=p.query.id,f={xs:18,md:16,lg:8};return(0,h.useEffect)((function(){var e=m.Z.filter((function(e){return e.id!==Number(x)}));e.sort((function(){return Math.random()-.5})),e.splice(3),d(e)}),[x]),(0,n.jsxs)("div",{style:{fontSize:"20px",textAlign:"center",marginTop:"5em",padding:"50px 25%"},children:[r.length>0&&(0,n.jsx)("h3",{style:{lineHeight:"150%",marginBottom:"2em"},children:"Other projects like this "}),(0,n.jsx)(l.Z,{justify:"center",align:"middle",gutter:[10,18],children:r.map((function(t,r){return(0,n.jsx)(a.Z,(0,i.Z)((0,o.Z)({span:8},f),{style:{flex:"1 0 25%"},children:(0,n.jsx)(s.Z,{className:"other-project-card",onClick:function(){return p.push("/demo/"+t.id)},hoverable:!0,cover:(0,n.jsx)(c(),{alt:"Card Image",src:"../.."+t.image[0],width:"1000",height:"500"}),children:(0,n.jsx)(e,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:t.title})})}),r)}))})]})}},7373:function(e,t,r){"use strict";r.r(t);var o=r(5893),i=r(177),n=r(1980),s=r(2342),l=r(6396),a=r(6348),d=r(6226),c=r(1163),u=r(7294),h=r(5675),m=r.n(h),p=r(2806),x=r(8940),f=r(246),g=r(7282),y=r(7117),j=r(3191);t.default=function(){var e=(0,u.useState)(),t=e[0],r=e[1],h=i.Z.Content,v=i.Z.Header,w=(0,c.useRouter)(),k=w.query.id;return(0,u.useEffect)((function(){if(k){var e=p.Z.find((function(e){return e.id===k}));e&&r(e)}}),[k]),(0,o.jsxs)(i.Z,{children:[(0,o.jsxs)(v,{style:{color:"#D2E6E7",backgroundColor:"#101940",fontSize:"4vw",textAlign:"center",minHeight:"8em",height:"auto",maxHeight:"12em",lineHeight:"5em",boxShadow:"0px 4px 15px #2C375E",overflow:"hidden",fontWeight:100},children:[null===t||void 0===t?void 0:t.title,(0,o.jsx)("div",{children:(0,o.jsx)(m(),{src:".."+(null===t||void 0===t?void 0:t.image[0]),width:"960",height:"642",alt:""})})]}),(0,o.jsxs)(h,{children:[(0,o.jsxs)("div",{style:{padding:"50px 25%",textAlign:"justify",alignItems:"center",fontSize:"18px",lineHeight:"150%"},children:[(0,o.jsx)("div",{style:{textAlign:"center",marginBottom:36}}),(null===t||void 0===t?void 0:t.summary)&&(0,o.jsx)("div",{children:t.summary}),(null===t||void 0===t?void 0:t.summary)&&(0,o.jsx)("br",{}),null===t||void 0===t?void 0:t.description]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(n.Z,{autoplay:!0,children:(null===t||void 0===t?void 0:t.image)&&(null===t||void 0===t?void 0:t.image.length)>1&&(null===t||void 0===t?void 0:t.image.slice(1).map((function(e,t){return(0,o.jsx)(m(),{src:".."+e,width:"1000",height:"500",alt:""},t)})))}),(null===t||void 0===t?void 0:t.ytVideoId)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Z,{className:"onlyDesktop",style:{marginTop:"5em"},videoId:t.ytVideoId,onReady:function(e){return e.target.pauseVideo()}}),(0,o.jsx)("a",{className:"onlyMobile",href:"http://www.youtube.com/watch?v="+t.ytVideoId,children:" Watch Video "})]}),(0,o.jsxs)(s.Z,{target:"_blank",href:null===t||void 0===t?void 0:t.link,type:"primary",size:"large",shape:"round",style:{marginTop:"4em",boxShadow:"0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d"},children:["Check Demo ",(0,o.jsx)(y.Z,{})]})]}),(0,o.jsx)(g.default,{})]}),(0,o.jsx)(l.Z,{offsetBottom:200,children:(0,o.jsx)(a.Z,{children:(0,o.jsx)(d.Z,{span:24,children:(0,o.jsx)(s.Z,{danger:!0,type:"primary",size:"large",shape:"round",icon:(0,o.jsx)(f.Z,{}),style:{marginRight:"200px",marginBottom:"40px",float:"right",boxShadow:"0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d"},onClick:function(){return w.push("/")},children:"Back"})})})}),(0,o.jsx)(x.default,{})]})}}},function(e){e.O(0,[941,21,648,24,774,888,179],(function(){return t=9490,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
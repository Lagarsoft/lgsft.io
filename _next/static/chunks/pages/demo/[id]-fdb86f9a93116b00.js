(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{9490:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/[id]",function(){return n(7373)}])},1537:function(e,t,n){"use strict";var o;o=[{id:"ifc_3D_model_markup",title:"IFC 3D Model Markup",summary:"Markups functionality over IFC model using IFC.js + React + React Three Fiber",description:"\n      <div>\n        <p>\n          In this demo you can see how we can add markers to an IFC 3D model\n          to track issues on any part of the project.\n        </p>\n        <p>\n          Add markups to your models to improve your team&apos;s workflow and\n          the model&apos;s usability. Easy to use and simple to integrate,\n          markups will help you throughout the different stages of your\n          project.\n        </p>\n        <ul>\n          <li>\n            Improve your workflows by adding markups to your model in the\n            browser.\n          </li>\n          <li>\n            For you it only takes the click of a button to get started, we\n            take care of the rest.\n          </li>\n          <li>Create a fully interactive scenario.</li>\n        </ul>\n      </div>\n      ",image:["/ifc_marker/1.png","/ifc_marker/2.png"],link:"https://demo-ifc-markers.vercel.app/",ytVideoId:"DMYLwhclrgs",date:"21 Aug 2022 00:12:00 GMT"},{id:"gltf_2D_3D_floor_plan_view",title:"GLTF 2D-3D floor plan view",summary:"it's not just about the 3D model--it's about understanding the space.",description:"\n      <div>\n        <p>\n          By clicking on the area of interest of your preference in the 2D plan,\n          the model will emphasize where your mouse pointer is standing with no\n          delay. This tool uses GLTF, a file format to store and share 3D\n          models. Browser support of 3D technologies is a powerful alternative\n          to show 3D models quickly, with virtually no loss of quality.\n        </p>\n        <p>\n          The world has become a global village. You can now share your ideas\n          with your customers easier and faster. As professionals in the\n          Software industry, we always keep ourselves updated with new\n          technologies. That&apos;s why we chose some Open Source tools and\n          combined them to create a 2D + 3D viewer, to demonstrate how easy it\n          is to jump into the 3d world nowadays.\n        </p>\n        <ul>\n          <li>Fast and easy to use.</li>\n          <li>Visualize your model through the web.</li>\n          <li>Navigate the areas of interest.</li>\n          <li>It\u2019s interactive and gets your clients engaged.</li>\n        </ul>\n      </div>\n    ",image:["/gltf_2d_3d/1.png","/gltf_2d_3d/2.png"],link:"https://demo-gltf-floorplan.herokuapp.com/",ytVideoId:"6TfAGsCVNCc",date:"24 Aug 2022 00:12:00 GMT"}],t.Z=o},8940:function(e,t,n){"use strict";n.r(t);var o=n(1799),r=n(5893),i=n(177),s=n(2342),l=n(7049),a=n(7294),d=n(5093),c=n(2490),u=i.Z.Footer;t.default=function(){var e=(new Date).getFullYear(),t=(0,a.useState)(!1),n=t[0],i=t[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{style:{color:"#D2E6E7",boxShadow:"0px 4px 15px #2C375E",backgroundColor:"#101940",textAlign:"center",minHeight:"15em"},children:(0,r.jsxs)("div",{style:{marginTop:"12em",marginBottom:"12em"},children:[(0,r.jsxs)("h1",{style:{fontSize:"3rem",color:"#D2E6E7"},children:[" ","Ready to get started?"]}),(0,r.jsx)("a",{target:"_blank",href:"https://www.lagarsoft.com/contact",rel:"noopener noreferrer",children:(0,r.jsx)(s.Z,{type:"primary",size:"large",onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},style:(0,o.Z)({},n?{background:"#2C375E",marginBottom:"2rem",borderColor:"#2C375E"}:{color:"#D2E6E7",backgroundColor:"#101940",borderColor:"#D2E6E7",marginBottom:"2rem"}),children:"Contact us"})})]})}),(0,r.jsxs)(u,{style:{color:"#D2E6E7",backgroundColor:"#2C375E",minHeight:"15em"},children:[(0,r.jsx)("h1",{style:{color:"#D2E6E7",fontSize:57,fontWeight:100},children:"Lagarsoft Demo Apps"}),(0,r.jsx)(l.Z,{style:{backgroundColor:"#D2E6E7"}}),(0,r.jsx)("a",{target:"_blank",href:"https://www.lagarsoft.com/",rel:"noopener noreferrer",style:{color:"#D2E6E7",fontSize:25},children:"Visit us"}),(0,r.jsxs)("div",{style:{display:"inline",marginLeft:15},children:[(0,r.jsx)("a",{target:"_blank",href:"https://twitter.com/lagarsoft_eng",rel:"noopener noreferrer",style:{color:"#D2E6E7",fontSize:30},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/company/lagarsoft-srl/about/",rel:"noopener noreferrer",style:{color:"#D2E6E7",fontSize:30,marginLeft:10},children:(0,r.jsx)(c.Z,{})})]}),(0,r.jsxs)("div",{style:{textAlign:"center"},children:["Copyright \xa9 2019-",e,", Lagarsoft SRL"," "]})]})]})}},7282:function(e,t,n){"use strict";n.r(t);var o=n(1799),r=n(9396),i=n(5893),s=n(3091),l=n(6348),a=n(6226),d=n(5675),c=n.n(d),u=n(1163),h=n(7294),m=n(1537);t.default=function(){var e=s.Z.Meta,t=(0,h.useState)([]),n=t[0],d=t[1],p=(0,u.useRouter)(),g=p.query.id,f={xs:18,md:16,lg:8};return(0,h.useEffect)((function(){var e=m.Z.filter((function(e){return e.id!==Number(g)}));e.sort((function(){return Math.random()-.5})),e.splice(3),d(e)}),[g]),(0,i.jsxs)("div",{style:{fontSize:"20px",textAlign:"center",marginTop:"5em",padding:"50px 25%"},children:[n.length>0&&(0,i.jsx)("h3",{style:{lineHeight:"150%",marginBottom:"2em"},children:"Other projects like this "}),(0,i.jsx)(l.Z,{justify:"center",align:"middle",gutter:[10,18],children:n.map((function(t,n){return(0,i.jsx)(a.Z,(0,r.Z)((0,o.Z)({span:8},f),{style:{flex:"1 0 25%"},children:(0,i.jsx)(s.Z,{className:"other-project-card",onClick:function(){return p.push("/demo/"+t.id)},hoverable:!0,cover:(0,i.jsx)(c(),{alt:"Card Image",src:"../.."+t.image[0],width:"1000",height:"500"}),children:(0,i.jsx)(e,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:t.title})})}),n)}))})]})}},7373:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v}});var o=n(5893),r=n(7117),i=n(246),s=n(177),l=n(1980),a=n(2342),d=n(6396),c=n(6348),u=n(6226),h=n(9008),m=n.n(h),p=n(5675),g=n.n(p),f=n(1163),x=n(3191),y=n(8940),w=n(7282),v=!0;t.default=function(e){var t=e.post,n=s.Z.Content,h=s.Z.Header,p=(0,f.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m(),{children:[(0,o.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@lagarsoft_eng"}),(0,o.jsx)("meta",{name:"twitter:title",content:null===t||void 0===t?void 0:t.summary},"twitter:title"),(0,o.jsx)("meta",{name:"twitter:image",content:null===t||void 0===t?void 0:t.image[0]},"twitter:image")]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(h,{className:"header",style:{color:"#D2E6E7",backgroundColor:"#101940",fontSize:"5vw",textAlign:"center",minHeight:"8em",height:"auto",lineHeight:"5em",boxShadow:"0px 4px 15px #2C375E",overflow:"hidden",fontWeight:100},children:[null===t||void 0===t?void 0:t.title,(0,o.jsx)("div",{children:(0,o.jsx)(g(),{src:".."+(null===t||void 0===t?void 0:t.image[0]),width:"960",height:"642",alt:""})})]}),(0,o.jsxs)(n,{children:[(0,o.jsxs)("div",{className:"content",style:{textAlign:"justify",alignItems:"center",fontSize:"18px",lineHeight:"150%"},children:[(0,o.jsx)("div",{style:{textAlign:"center",marginBottom:36}}),(null===t||void 0===t?void 0:t.summary)&&(0,o.jsx)("div",{className:"summary",children:t.summary}),(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.description}})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(l.Z,{autoplay:!0,children:(null===t||void 0===t?void 0:t.image)&&(null===t||void 0===t?void 0:t.image.length)>1&&(null===t||void 0===t?void 0:t.image.slice(1).map((function(e,t){return(0,o.jsx)(g(),{src:".."+e,width:"1024",height:"500",alt:""},t)})))}),(null===t||void 0===t?void 0:t.ytVideoId)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.Z,{className:"onlyDesktop",style:{marginTop:"5em"},videoId:t.ytVideoId,onReady:function(e){return e.target.pauseVideo()}}),(0,o.jsxs)("a",{className:"onlyMobile",href:"http://www.youtube.com/watch?v="+t.ytVideoId,children:[" ","Watch Video"," "]})]}),(0,o.jsxs)(a.Z,{target:"_blank",href:null===t||void 0===t?void 0:t.link,type:"primary",size:"large",shape:"round",style:{marginTop:"4em",boxShadow:"0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d"},children:["Check Demo ",(0,o.jsx)(r.Z,{})]})]}),(0,o.jsx)(w.default,{})]}),(0,o.jsx)(d.Z,{className:"onlyDesktop",offsetBottom:200,children:(0,o.jsx)(c.Z,{children:(0,o.jsx)(u.Z,{span:24,children:(0,o.jsx)(a.Z,{danger:!0,type:"primary",size:"large",shape:"round",icon:(0,o.jsx)(i.Z,{}),style:{marginRight:"200px",marginBottom:"40px",float:"right",boxShadow:"0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d"},onClick:function(){return p.push("/")},children:"Back"})})})}),(0,o.jsx)(y.default,{})]})]})}}},function(e){e.O(0,[941,21,648,450,774,888,179],(function(){return t=9490,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(162),c=a(160);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Contact Us",keywords:["tango","#ArmTangoFest2019","festival"]}),r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},"Contact Us"),r.a.createElement("p",{className:"lead text-muted"},"Contact us if you have any questions"),r.a.createElement("form",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Full name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone number"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Country"})),r.a.createElement("div",null,r.a.createElement("textarea",{placeholder:"Message",className:"form-control mb-3",rows:"4"})),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block btn-outline-primary"},"Submit"))))))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(154);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},159:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(55),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=i},160:function(e,t,a){"use strict";var n=a(161),r=a(0),l=a.n(r),c=a(4),o=a.n(c),s=a(172),i=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title,s=n.data.site,m=t||s.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},161:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},162:function(e,t,a){"use strict";var n=a(158),r=a(0),l=a.n(r),c=a(4),o=a.n(c),s=a(153),i=a(164),m=a.n(i),u=a(165),d=a.n(u),p=a(166),E=a.n(p),g=a(157),f=a.n(g),h=function(e){var t=e.siteTitle;return l.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(f.a,null,l.a.createElement(m.a.Brand,{as:s.a,to:"/"},t),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(E.a,{title:"Festival"},l.a.createElement(E.a.Item,{as:s.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(E.a.Item,{as:s.a,to:"/djs"},"DJs"),l.a.createElement(E.a.Item,{as:s.a,to:"/orchestra"},"Orchestra"),l.a.createElement(E.a.Item,{as:s.a,to:"/maestros"},"Teachers/Dancers")),l.a.createElement(E.a,{title:"Packages"},l.a.createElement(E.a.Item,{as:s.a,to:"/packages"},"Festival and Tour packages"),l.a.createElement(E.a.Item,{as:s.a,to:"/workshops-and-milongas"},"Workshops and milongas")),l.a.createElement(d.a.Link,{as:s.a,to:"/contact-us"},"Contact Us")))))};h.propTypes={siteTitle:o.a.string},h.defaultProps={siteTitle:""};var v=h,y=a(167),b=a.n(y),w=a(168),N=a.n(w),k=a(173),T=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"First international tango festival in armenia.")),l.a.createElement(N.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(k.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(k.c,null)," ",l.a.createElement(k.d,null)," ",l.a.createElement(k.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(k.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},x=(a(169),a(170),a(171),function(e){var t=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(T,null))},data:n})});x.propTypes={children:o.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-877b5f99d80d321b4c3a.js.map
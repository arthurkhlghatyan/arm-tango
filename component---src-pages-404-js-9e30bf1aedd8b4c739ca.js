(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(159),c=a(158);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a page that doesn't exist... the sadness."))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=a(33),i=a.n(s);a.d(t,"a",function(){return i.a});a(155);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},158:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),c=a(4),s=a.n(c),i=a(172),o=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title,i=n.data.site,m=t||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},l.a.createElement("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit"}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},159:function(e,t,a){"use strict";var n=a(160),r=a(0),l=a.n(r),c=a(4),s=a.n(c),i=a(154),o=a(164),m=a.n(o),u=a(165),d=a.n(u),p=a(166),g=a.n(p),E=a(157),h=a.n(E),f=function(e){var t=e.siteTitle;return l.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(h.a,null,l.a.createElement(m.a.Brand,{as:i.a,to:"/"},t),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(g.a,{title:"Festival"},l.a.createElement(g.a.Item,{as:i.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(g.a.Item,{as:i.a,to:"/djs"},"DJs"),l.a.createElement(g.a.Item,{as:i.a,to:"/orchestra"},"Orchestra"),l.a.createElement(g.a.Item,{as:i.a,to:"/maestros"},"Teachers/Dancers")),l.a.createElement(g.a,{title:"Packages"},l.a.createElement(g.a.Item,{as:i.a,to:"/packages"},"Festival and Tour packages"),l.a.createElement(g.a.Item,{as:i.a,to:"/workshops-and-milongas"},"Workshops and milongas")),l.a.createElement(d.a.Link,{as:i.a,to:"/contact-us"},"Contact Us")))))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var v=f,y=a(167),b=a.n(y),w=a(168),k=a.n(w),T=a(173),F=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement(k.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"First international tango festival in armenia.")),l.a.createElement(k.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(T.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(T.c,null)," ",l.a.createElement(T.d,null)," ",l.a.createElement(T.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(T.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},N=(a(169),a(170),a(171),function(e){var t=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(F,null))},data:n})});N.propTypes={children:s.a.node.isRequired};t.a=N},160:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},161:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=a(55),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},162:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-9e30bf1aedd8b4c739ca.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(161),i=a(159);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"About Armenia",keywords:["tango","#ArmTangoFest2019","armenia"]}),"About Armenia")}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(155);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},157:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,a){"use strict";var n=a(160),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(172),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,c=n.data.site,m=t||c.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},161:function(e,t,a){"use strict";var n=a(157),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(154),s=a(164),m=a.n(s),u=a(165),d=a.n(u),p=a(166),g=a.n(p),E=a(156),f=a.n(E),h=function(e){var t=e.siteTitle;return l.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(f.a,null,l.a.createElement(m.a.Brand,{as:c.a,to:"/"},t),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(g.a,{title:"Festival"},l.a.createElement(g.a.Item,{as:c.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(g.a.Item,{as:c.a,to:"/djs"},"DJs"),l.a.createElement(g.a.Item,{as:c.a,to:"/orchestra"},"Orchestra"),l.a.createElement(g.a.Item,{as:c.a,to:"/maestros"},"Maestros")),l.a.createElement(g.a,{title:"Packages"},l.a.createElement(g.a.Item,{as:c.a,to:"/packages"},"Festival and Tour packages"),l.a.createElement(g.a.Item,{as:c.a,to:"/workshops-and-milongas"},"Workshops and milongas")),l.a.createElement(d.a.Link,{as:c.a,to:"/media"},"Media"),l.a.createElement(d.a.Link,{as:c.a,to:"/contact-us"},"Contact Us")))))};h.propTypes={siteTitle:o.a.string},h.defaultProps={siteTitle:""};var v=h,y=a(167),b=a.n(y),w=a(168),k=a.n(w),T=a(173),A=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(k.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"First international tango festival in armenia.")),l.a.createElement(k.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(T.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(T.c,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(T.d,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(T.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(T.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur"))))},F=(a(169),a(170),a(171),function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(A,null))},data:n})});F.propTypes={children:o.a.node.isRequired};t.a=F}}]);
//# sourceMappingURL=component---src-pages-about-armenia-js-2dd599328e960dd30ac3.js.map
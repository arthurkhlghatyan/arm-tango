(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(153),i=t(161),c=t(159),s=function(){return r.a.createElement("header",{className:"masthead text-center text-white"},r.a.createElement("div",{className:"masthead-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"masthead-heading mb-0"},"1st International"),r.a.createElement("h2",{className:"masthead-subheading mb-0"},"Tango Festival in Armenia"),r.a.createElement(l.a,{to:"/",className:"btn btn-primary btn-xl rounded-pill mt-5"},"Book Now"))))},m=t(242),o=t.n(m),u=t(243),d=t.n(u),p=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"p-5"},r.a.createElement("img",{className:"img-fluid rounded-circle",src:o.a,alt:""}))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"p-5"},r.a.createElement("h2",{className:"display-4"},"We salute you!"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.")))))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-lg-6 order-lg-2"},r.a.createElement("div",{className:"p-5"},r.a.createElement("img",{className:"img-fluid rounded-circle",src:d.a,alt:""}))),r.a.createElement("div",{className:"col-lg-6 order-lg-1"},r.a.createElement("div",{className:"p-5"},r.a.createElement("h2",{className:"display-4"},"Let there be rock!"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.")))))))};a.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["tango","#ArmTangoFest2019","festival"]}),r.a.createElement(s,null),r.a.createElement(p,null))}},153:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a});t(154);var m=r.a.createContext({}),o=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},157:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(55),s=t(2),m=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=m},159:function(e,a,t){"use strict";var n=t(160),r=t(0),l=t.n(r),i=t(4),c=t.n(i),s=t(172),m=t.n(s);function o(e){var a=e.description,t=e.lang,r=e.meta,i=e.keywords,c=e.title,s=n.data.site,o=a||s.siteMetadata.description;return l.a.createElement(m.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=o},160:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},161:function(e,a,t){"use strict";var n=t(156),r=t(0),l=t.n(r),i=t(4),c=t.n(i),s=t(153),m=t(163),o=t.n(m),u=t(165),d=t.n(u),p=t(166),E=t.n(p),g=t(155),v=t.n(g),f=function(e){var a=e.siteTitle;return l.a.createElement(o.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(v.a,null,l.a.createElement(o.a.Brand,{as:s.a,to:"/"},a),l.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(E.a,{title:"Festival"},l.a.createElement(E.a.Item,{as:s.a,to:"/djs"},"DJs"),l.a.createElement(E.a.Item,{as:s.a,to:"/orchestra"},"Orchestra"),l.a.createElement(E.a.Item,{as:s.a,to:"/maestros"},"Maestros")),l.a.createElement(d.a.Link,{as:s.a,to:"/packages"},"Packages"),l.a.createElement(d.a.Link,{as:s.a,to:"/media"},"Media"),l.a.createElement(d.a.Link,{as:s.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(d.a.Link,{as:s.a,to:"/contact-us"},"Contact Us")))))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var b=f,h=t(167),y=t.n(h),N=t(168),w=t.n(N),k=t(173),T=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(v.a,null,l.a.createElement(y.a,null,l.a.createElement(w.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"First international tango festival in armenia.")),l.a.createElement(w.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(k.a,null),"  arman.dashan@gmail.com"),l.a.createElement("p",null,l.a.createElement(k.c,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(k.d,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(k.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(k.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur"))))},x=(t(169),t(170),t(171),function(e){var a=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,a),l.a.createElement(T,null))},data:n})});x.propTypes={children:c.a.node.isRequired};a.a=x},242:function(e,a,t){e.exports=t.p+"static/02-0c990242997737a286c6287e3378e154.jpg"},243:function(e,a,t){e.exports=t.p+"static/03-8079bc527d4127b55fb368f53b56cb15.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-108c4a5b653fe9345673.js.map
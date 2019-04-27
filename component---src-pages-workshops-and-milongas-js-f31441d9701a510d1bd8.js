(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,a,t){"use strict";t.r(a);t(177);var n=t(0),r=t.n(n),o=t(161),l=t(160),c=t(165),s=[{name:"Workshop prices",prices:[15,18,25]},{name:"Opening milonga",prices:[18,20,25]},{name:"Weekday milongas",prices:[5,7,10]},{name:"Weekend milongas",prices:[9,12,15]},{name:"Gala Milonga",prices:[27,30,35]},{name:"Yerevan Milonga package",prices:[30,35,40]},{name:"Tsakhkadzor Milonga package",prices:[37,45,50]},{name:"Yerevan + Tsakhkadzor Milonga package",prices:[55,65,85]},{name:"Yerevan milongas + 3 workshops",prices:[75,90,120],isImportant:!0},{name:"Yerevan milongas + 5 workshops",prices:[105,130,165],isImportant:!0},{name:"Tsakhkadzor milongas + 4 workshops",prices:[95,115,140]},{name:"Tsakhkadzor full package",prices:[195,220,270]},{name:"Budget full package",prices:[685,770,890]},{name:"Special full package",prices:[875,960,1080]}];a.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Workshops and Milongas",keywords:["tango","#ArmTangoFest2019","milongas"]}),r.a.createElement(c.a,{title:"Workshops and milongas",description:"Choose whatever works for you"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Workshops and Milongas"),r.a.createElement("th",{scope:"col"},"Before 21st of April"),r.a.createElement("th",{scope:"col"},"Before 21st of May"),r.a.createElement("th",{scope:"col"},"Late reservation"))),r.a.createElement("tbody",null,s.map(function(e,a){var t=e.name,n=e.prices,o=e.isImportant?"font-weight-bold":"";return r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",{className:o},"€",n[0]),r.a.createElement("td",{className:o},"€",n[1]),r.a.createElement("td",{className:o},"€",n[2]))})))))}},157:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),o=t(4),l=t.n(o),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a});t(158);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},158:function(e,a,t){var n;e.exports=(n=t(167))&&n.default||n},160:function(e,a,t){"use strict";var n=t(168),r=t(0),o=t.n(r),l=t(4),c=t.n(l),s=t(163),i=t.n(s);function m(e){var a=e.description,t=e.lang,r=e.meta,l=e.keywords,c=e.title,s=n.data.site,m=a||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=m},161:function(e,a,t){"use strict";var n=t(166),r=t(0),o=t.n(r),l=t(4),c=t.n(l),s=t(157),i=t(163),m=t.n(i),u=t(170),p=t.n(u),d=t(171),g=t.n(d),h=t(172),E=t.n(h),f=t(164),k=t.n(f),w=function(e){var a=e.siteTitle;return o.a.createElement(p.a,{className:"navbar-custom",variant:"dark",expand:"lg"},o.a.createElement(k.a,null,o.a.createElement(p.a.Brand,{as:s.a,to:"/"},a),o.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(g.a,{className:"ml-auto"},o.a.createElement(g.a.Link,{as:s.a,to:"/about-armenia"},"About Armenia"),o.a.createElement(E.a,{title:"Festival"},o.a.createElement(E.a.Item,{as:s.a,to:"/djs"},"DJs"),o.a.createElement(E.a.Item,{as:s.a,to:"/orchestra"},"Orchestra"),o.a.createElement(E.a.Item,{as:s.a,to:"/maestros"},"Teachers/Dancers"),o.a.createElement(E.a.Item,{as:s.a,to:"/venues-and-locations"},"Venues and Locations")),o.a.createElement(E.a,{title:"Schedule"},o.a.createElement(E.a.Item,{as:s.a,to:"/calendar"},"Calendar"),o.a.createElement(E.a.Item,{as:s.a,to:"/workshop-topics"},"Workshop Topics")),o.a.createElement(E.a,{title:"Booking"},o.a.createElement(E.a.Item,{as:s.a,to:"/packages"},"Festival and Tour packages"),o.a.createElement(E.a.Item,{as:s.a,to:"/workshops-and-milongas"},"Workshops and milongas"),o.a.createElement(E.a.Item,{as:s.a,to:"/yerevan-hotels"},"Yerevan Hotels")),o.a.createElement(g.a.Link,{as:s.a,to:"/contact-us"},"Contact Us")))))};w.propTypes={siteTitle:c.a.string},w.defaultProps={siteTitle:""};var b=w,v=t(173),y=t.n(v),T=t(174),F=t.n(T),N=t(179),A=function(){return window.getOutboundLink("https://www.facebook.com/arthur.khlghatyan.1"),!1},j=function(){return getOutboundLink("https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"),!1},I=function(){return o.a.createElement("footer",null,o.a.createElement(k.a,null,o.a.createElement(y.a,null,o.a.createElement(F.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},o.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),o.a.createElement("p",null,"Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West.")),o.a.createElement(F.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},o.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),o.a.createElement("p",null,o.a.createElement(N.a,null),"  tango.inarmenia@gmail.com"),o.a.createElement("p",null,o.a.createElement(N.c,null)," ",o.a.createElement(N.d,null)," ",o.a.createElement(N.e,null),"  +374 95889933"),o.a.createElement("p",null,o.a.createElement(N.b,null)," ",o.a.createElement("a",{rel:"noopener",target:"_blank",href:"https://www.facebook.com/armtangofest"},"@armtangofest"))),o.a.createElement(F.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},o.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Useful links"),o.a.createElement("p",null,o.a.createElement("a",{rel:"noopener",onClick:j,href:"https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"},"Book now")),o.a.createElement("p",null,o.a.createElement("a",{rel:"noopener",target:"_blank",href:"https://www.facebook.com/events/279299639637976/"},"Join Event on Facebook")),o.a.createElement("p",null,o.a.createElement("a",{rel:"noopener",target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"Tango School Facebook page"))))),o.a.createElement("div",{className:"footer-copyright text-center py-4"},o.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),o.a.createElement("div",null,"Developed by  ",o.a.createElement("a",{rel:"noopener",onClick:A,href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},L=(t(175),t(176),function(e){var a=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(r.Fragment,null,o.a.createElement(m.a,null,o.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-138348380-1"}),o.a.createElement("script",null,"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n              gtag('config', 'UA-138348380-1');\n\n              var getOutboundLink = function(url) {\n                gtag('event', 'click', {\n                  'event_category': 'outbound',\n                  'event_label': url,\n                  'transport_type': 'beacon',\n                  'event_callback': function() {document.location = url;}\n                });\n              }\n            ")),o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null,a),o.a.createElement(I,null))},data:n})});L.propTypes={children:c.a.node.isRequired};a.a=L},165:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.title,t=e.description,n=e.children;return r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},a),r.a.createElement("p",{className:"lead text-muted"},t)),n)}},166:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},167:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),o=t(4),l=t.n(o),c=t(55),s=t(2),i=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=i},168:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},177:function(e,a,t){var n=t(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||t(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-workshops-and-milongas-js-f31441d9701a510d1bd8.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(30)},18:function(e,t,a){},20:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),o=a.n(c),r=(a(18),a(2)),s=a(3),l=a(5),m=a(4),u=a(6),p=(a(20),function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement("div",{className:"Navbar"},i.a.createElement("div",{className:"Navbar__title"},"Do you like purple? I do!"),t))}),h=a(8),d=function(){return i.a.createElement("div",{className:"Navbar__icons"},i.a.createElement("a",{href:"https://github.com/kostadriano",target:"_blank"},i.a.createElement(h.a,{className:"Navbar__icon"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/adriano-costa-0121a1110/",target:"_blank"},i.a.createElement(h.b,{className:"Navbar__icon"})))},b=a(11),f=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rangeX,a=e.rangeY,n=e.calculatePosition,c=this.props,o=c.positionX,r=c.positionY,s=n({position:o,max:t.max,min:t.min,size:20}),l=n({position:r,max:a.max,min:a.min,size:20});return i.a.createElement("div",{className:"Pupil",style:{left:"".concat(s,"px"),top:"".concat(l,"px"),height:"".concat(20,"px"),width:"".concat(20,"px")}})}}]),t}(i.a.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calculatePosition",value:function(e){var t=e.position,a=e.max,n=e.min,i=e.size;return t<n+i/2?0:t>a-i/2?a-n-i:t-n-i/2}},{key:"render",value:function(){var e=this.props.position,t=e.x,a=e.y,n=this.props,c=n.leftDistance,o=n.topDistance,r=n.width,s=n.height;return i.a.createElement("div",{className:"Eye",style:{left:"".concat(c,"px"),top:"".concat(o,"px"),height:"".concat(s,"px"),width:"".concat(r,"px")}},i.a.createElement(f,{positionX:t,positionY:a,rangeX:{min:c,max:c+r},rangeY:{min:o,max:o+s},calculatePosition:this.calculatePosition}))}}]),t}(i.a.Component),E=(a(28),function(){return i.a.createElement(b.a,{className:"Face"},i.a.createElement(v,{leftDistance:50,topDistance:50,height:150,width:150}),i.a.createElement(v,{leftDistance:300,topDistance:50,height:150,width:150}))}),w=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null,i.a.createElement(d,null)),i.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.6b578eb4.chunk.js.map
(this.webpackJsonpapp2=this.webpackJsonpapp2||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=(a(27),a(16)),i=a(17),l=a(20),m=a(19),u=a(50),p=a(6),h=a(52),d=a(51),f=function(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(console.log("handleResponse response text --\x3e ",a),!e.ok){200!==e.status&&console.log("handleResponse",e);var n=a&&(a.error||a.statusText);return console.log("error from handleResponse",n),Promise.reject(n)}return a}))},g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).handleFetchData=function(){fetch("http://localhost:43878/course",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(f).then((function(e){console.log("getPosts (course) ",e.courses),n.setState({data:e.courses})})).catch((function(e){console.log("get error",e)}))},n.state={data:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(u.a,{container:!0,className:e.root,spacing:2},o.a.createElement(u.a,{item:!0,xs:12},o.a.createElement(u.a,{container:!0,justify:"center",spacing:1},o.a.createElement(u.a,{item:!0},o.a.createElement(d.a,{className:e.paper},"my App")))),o.a.createElement(u.a,{item:!0,xs:12},o.a.createElement(u.a,{container:!0,justify:"center",spacing:1},o.a.createElement(u.a,{item:!0},o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.handleFetchData},"getData")))),o.a.createElement(u.a,{item:!0,xs:12},o.a.createElement(u.a,{container:!0,justify:"center",spacing:1},this.state.data?this.state.data.map((function(e){return o.a.createElement(u.a,{item:!0,key:e._id},e._id)})):""))))}}]),a}(n.Component),E=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},grid_root:{flexGrow:1}}}))(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.1b6a26eb.chunk.js.map
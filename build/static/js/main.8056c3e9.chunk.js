(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c,o=n(0),a=n.n(o),r=n(8),i=n.n(r),l=n(12),s=n(34),d=n(24),u=n(9),b=n(35),j=n.n(b),h=n(11),O=n(36),p=n.n(O),f=n(13),m=n(4),x=n(72),v={addContact:Object(u.b)("phonebook/Save_contact",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(x.a)(),name:t,number:n}}})),deleteContact:Object(u.b)("phonebook/Delete_contact"),updateFilter:Object(u.b)("phonebook/Update_filter")},y=Object(u.c)([],(c={},Object(f.a)(c,v.addContact,(function(e,t){var n=t.payload;return[].concat(Object(d.a)(e),[n])})),Object(f.a)(c,v.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),g=Object(u.c)("",Object(f.a)({},v.updateFilter,(function(e,t){return t.payload}))),C=Object(m.c)({items:y,filter:g}),k={key:"contacts",storage:p.a,blacklist:["filter"]},w=[].concat(Object(d.a)(Object(u.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[j.a]),M=Object(u.a)({reducer:{contacts:Object(h.g)(k,C)},middleware:w,devTools:!1}),D={store:M,persistor:Object(h.h)(M)},A=(n(49),n(20)),_=n(21),F=n(26),N=n(25),E=n(30),L=n(69),S=n(71),z=n(2),B=Object(L.a)({form:{width:275,height:150,display:"flex",flexDirection:"column",justifyContent:"space-around"}}),K=Object(l.b)((function(e){return{contacts:e.contacts.items}}),(function(e){return{onAdd:function(t){return e(v.addContact(t))}}}))((function(e){var t=e.contacts,n=e.onAdd,c=B(),o={name:"",number:""},a=function(e){o=Object(E.a)(Object(E.a)({},o),{},Object(f.a)({},e.target.id,e.target.value))};return Object(z.jsxs)("form",{className:c.form,children:[Object(z.jsx)("label",{children:"Name"}),Object(z.jsx)("input",{type:"text",onChange:a,id:"name"}),Object(z.jsx)("label",{children:"Number"}),Object(z.jsx)("input",{type:"text",onChange:a,id:"number"}),Object(z.jsx)(S.a,{variant:"contained",color:"primary",size:"small",type:"button",onClick:function(){t.map((function(e){return e.name})).includes(o.name)?alert("".concat(o.name," is already in contacts.")):n(o)},children:"Add contact"})]})})),T=Object(l.b)(null,(function(e){return{updateFilter:function(t){return e(v.updateFilter(t.target.value))}}}))((function(e){var t=e.updateFilter;return Object(z.jsxs)("div",{children:[Object(z.jsx)("p",{children:"Find contacts by name"}),Object(z.jsx)("input",{type:"text",onChange:t,id:"find"})]})})),J=Object(l.b)((function(e){return{contacts:e.contacts.items,filter:e.contacts.filter}}),(function(e){return{onDelete:function(t){return e(v.deleteContact(t))}}}))((function(e){var t=e.filter,n=e.contacts,c=e.onDelete,o=e.onClose,a=function(e){c(e.currentTarget.id),o()};return Object(z.jsx)("ul",{children:(t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n).map((function(e){var t=e.id,n=e.name,c=e.number;return Object(z.jsxs)("li",{children:[n,": ",c,Object(z.jsx)(S.a,{color:"secondary",type:"button",id:t,onClick:a,children:"Delete"})]},t)}))})})),P=(n(51),document.querySelector("#modal-root")),U=function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(A.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(_.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(z.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(z.jsx)("div",{className:"Modal__content",children:this.props.children})}),P)}}]),n}(o.Component),q=function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(A.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(_.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{children:[this.state.showModal&&Object(z.jsxs)(U,{onClose:this.toggleModal,children:[Object(z.jsx)("h1",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0434\u0430\u043b\u0435\u043d"}),Object(z.jsx)(S.a,{variant:"contained",color:"primary",size:"small",type:"button",onClick:this.toggleModal,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]}),Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(K,{}),Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsx)(T,{}),Object(z.jsx)(J,{onClose:this.toggleModal})]})}}]),n}(o.Component);var I=function(){return Object(z.jsx)("div",{className:"App",children:Object(z.jsx)(q,{})})};n(52);i.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(l.a,{store:D.store,children:Object(z.jsx)(s.a,{loading:null,persistor:D.persistor,children:Object(z.jsx)(I,{})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.8056c3e9.chunk.js.map
(this["webpackJsonpcraftsman-frontend"]=this["webpackJsonpcraftsman-frontend"]||[]).push([[0],{211:function(e,t,a){e.exports=a.p+"static/media/project_image.9d8a7c9c.jpg"},227:function(e,t,a){e.exports=a(410)},232:function(e,t,a){},237:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},380:function(e,t,a){},409:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(23),l=a.n(c),o=(a(232),a(42)),s=a(43),i=a(45),m=a(44),u=a(412),p=a(87),d=a(41),E=a(81),h=a(73),f=a(160),b=a(51),g={currentCustomer:{firstName:"",lastName:""},customers:[],loading:!1,error:null,changeMode:!1};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CUSTOMERS_START":return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case"FETCH_CUSTOMERS_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,customers:t.customers});case"FETCH_CUSTOMERS_ERROR":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});case"SET_CURRENT_CUSTOMER":return Object(b.a)(Object(b.a)({},e),{},{currentCustomer:{id:t.customer.id,firstName:t.customer.firstName,lastName:t.customer.name,phoneNumber:t.customer.phoneNumber,email:t.customer.email}});case"TOGGLE_CUSTOMER_CHANGE":return Object(b.a)(Object(b.a)({},e),{},{changeMode:!e.changeMode});default:return e}},j={currentProject:{id:"2020-03-0001",externalId:"987654321",name:"Kernsanierung",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",customerId:"1",timeTracks:[]},projects:[],loading:!1,error:null};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROJECT_WORKING_TIME":return Object(b.a)(Object(b.a)({},e),{},{currentProject:Object(b.a)(Object(b.a)({},e.currentProject),{},{timeTracks:e.currentProject.timeTracks.concat(t.workingTime)})});default:return e}},k=Object(h.c)({customer:y,project:C}),v=Object(h.e)(k,{},Object(h.a)(f.a)),O=a(417),T=a(72),N=(a(237),O.a.Title),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"sider-menu"},n.a.createElement("div",{className:"sider-header-logo"},n.a.createElement(p.b,{to:"/"},n.a.createElement(N,{id:"sider-header-title",level:2},"Craftsman"))),n.a.createElement(T.a,{theme:"dark",defaultSelectedKeys:["1"],defaultOpenKeys:["1"]},n.a.createElement(T.a.Item,{key:"1"},n.a.createElement(p.b,{to:"/"},"Dashboard")),n.a.createElement(T.a.Item,{key:"2"},n.a.createElement(p.b,{to:"/customer"},"Customers")),n.a.createElement(T.a.Item,{key:"3"},n.a.createElement(p.b,{to:"/project"},"Projects")),n.a.createElement(T.a.Item,{key:"4"},n.a.createElement(p.b,{to:"/employee"},"Employees"))))}}]),a}(n.a.Component),x=a(222),I=a(426),P=(a(288),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header-avatar"},n.a.createElement(x.a,{size:"large",icon:n.a.createElement(I.a,null)}))}}]),a}(n.a.Component)),w=a(165),M=a(138),R=a(105),_=a(66),A=a(424),L=a(420),F=a(46),U=a(413);a(289);var D=a(427),H=O.a.Text,G=w.a.TabPane,W=n.a.createElement(D.a,{style:{fontSize:50},spin:!0}),K=[{title:"Project Name",dataIndex:"name",key:"name",render:function(e){return n.a.createElement("a",null,e)}},{title:"Description",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}],B=[{key:"1",name:"Project 1",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Project 2",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Project 4",age:32,address:"Sidney No. 1 Lake Park"}],V=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).onFilterValueChange=function(e){var t=r.props.customers;if(t)var a=t.filter((function(t){return(t.firstName.toLowerCase()+t.name.toLowerCase()).includes(e)}));r.setState({filteredCustomers:a})},r.onListItemClick=function(e){r.props.dispatch(function(e){return{type:"SET_CURRENT_CUSTOMER",customer:e}}(e))},r.onChangButtonClick=function(){r.props.dispatch({type:"TOGGLE_CUSTOMER_CHANGE"})},r.state={filteredCustomers:r.props.customers},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){e({type:"FETCH_CUSTOMERS_START"}),fetch("http://localhost:8080/customer").then((function(e){return e.json()})).then((function(t){var a=[];t.forEach((function(e,t){a.push({id:e.id,name:e.name,firstName:e.firstName,phoneNumber:e.phoneNumber,email:e.email})})),e(function(e){return{type:"FETCH_CUSTOMERS_SUCCESS",customers:e}}(a))})).catch((function(t){e(function(e){return{type:"FETCH_CUSTOMERS_ERROR",error:e}}(t)),console.log(t)}))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.loading?n.a.createElement(M.a,{indicator:W}):null,n.a.createElement(R.a,null,n.a.createElement(_.a,{span:6},n.a.createElement(A.b,{header:n.a.createElement(L.a,{placeholder:"Search Customers",bordered:!1,onChange:function(t){return e.onFilterValueChange(t.target.value)}}),size:"large",bordered:!0,dataSource:this.props.customers,renderItem:function(t){return n.a.createElement(A.b.Item,{onClick:function(){return e.onListItemClick(t)},className:"customer-list-item"},t.firstName+" "+t.name)}})),n.a.createElement(_.a,{span:18},n.a.createElement(R.a,{style:{height:"62.6px",padding:"15px"}},n.a.createElement(_.a,{span:12},n.a.createElement(F.a,{onClick:function(){return e.onChangButtonClick()},style:{margin:"0px 5px 0px 5px",width:"80px"}},this.props.changeMode?"Save":"Change"),n.a.createElement(F.a,{type:"primary",danger:!0},"Delete")),n.a.createElement(_.a,{span:12},n.a.createElement(F.a,{type:"primary",style:{float:"right"}},"Add new Customer"))),n.a.createElement(R.a,{style:{margin:"0px 0px 0px 20px"}},n.a.createElement(_.a,{span:24},n.a.createElement(R.a,null,n.a.createElement(H,{strong:!0},"Customer Id:"),this.props.currentCustomer.id),n.a.createElement(R.a,null,n.a.createElement(H,{strong:!0},"First Name:"),this.props.changeMode?n.a.createElement(L.a,{defaultValue:this.props.currentCustomer.firstName}):this.props.currentCustomer.firstName),n.a.createElement(R.a,null,n.a.createElement(H,{strong:!0},"Last Name:"),this.props.changeMode?n.a.createElement(L.a,{defaultValue:this.props.currentCustomer.lastName}):this.props.currentCustomer.lastName),n.a.createElement(R.a,null,n.a.createElement(H,{strong:!0},"Phone Number:"),this.props.changeMode?n.a.createElement(L.a,{defaultValue:this.props.currentCustomer.phoneNumber}):this.props.currentCustomer.phoneNumber),n.a.createElement(R.a,null,n.a.createElement(H,{strong:!0},"Email:"),this.props.changeMode?n.a.createElement(L.a,{defaultValue:this.props.currentCustomer.email}):this.props.currentCustomer.email))),n.a.createElement(R.a,{style:{margin:"0px 0px 0px 20px"}},n.a.createElement(_.a,{span:24},n.a.createElement(w.a,{defaultActiveKey:"1"},n.a.createElement(G,{tab:"Open Projects",key:"1"},n.a.createElement(U.a,{columns:K,dataSource:B})),n.a.createElement(G,{tab:"More Info",key:"2"}),n.a.createElement(G,{tab:"More Info",key:"3"}),n.a.createElement(G,{tab:"More Info",key:"4"})))))))}}]),a}(n.a.Component),q=Object(E.b)((function(e){return{currentCustomer:e.customer.currentCustomer,customers:e.customer.customers,loading:e.customer.loading,error:e.customer.error,changeMode:e.customer.changeMode}}),null)(V),z=a(416),J=a(415),Y=a(422),$=a(418),Q=a(425),X=a(421),Z=a(419),ee=a(211),te=a.n(ee),ae=(a(380),a(411)),re=O.a.Title,ne=O.a.Text,ce=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(re,{level:2},this.props.currentProject.name),n.a.createElement(R.a,null,n.a.createElement(_.a,{span:3},n.a.createElement(ne,{strong:!0},"Project Id:")),n.a.createElement(_.a,{span:21},this.props.currentProject.id),n.a.createElement(_.a,{span:3},n.a.createElement(ne,{strong:!0},"External Project Id:")),n.a.createElement(_.a,{span:21},this.props.currentProject.externalId),n.a.createElement(_.a,{span:3},n.a.createElement(ne,{strong:!0},"Description:")),n.a.createElement(_.a,{span:21},this.props.currentProject.description)),n.a.createElement(ae.a,{orientation:"left"},"Further Details"))}}]),a}(n.a.Component),le=Object(E.b)((function(e){return{currentProject:e.project.currentProject}}),null)(ce),oe=a(414),se=a(225),ie=a(428),me=oe.a.Dragger,ue={name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:function(e){var t=e.file.status;"uploading"!==t&&console.log(e.file,e.fileList),"done"===t?se.b.success("".concat(e.file.name," file uploaded successfully.")):"error"===t&&se.b.error("".concat(e.file.name," file upload failed."))}},pe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(me,ue,n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(ie.a,null)),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")))}}]),a}(n.a.Component);n.a.Component;function de(e){return{type:"SET_PROJECT_WORKING_TIME",workingTime:e}}var Ee=L.a.TextArea,he=w.a.TabPane,fe=[{title:"Employee",dataIndex:"employee",key:"employee",render:function(e){return n.a.createElement("a",null,e)}},{title:"Working Time",dataIndex:"workingTime",key:"workingTime",render:function(e){return n.a.createElement("div",null,e," h")}},{title:"Note",dataIndex:"note",key:"note"}],be={labelCol:{span:6},wrapperCol:{span:18}},ge={wrapperCol:{offset:6,span:18}},ye=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={visible:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){var a={id:"",employee:t.employee,workingTime:t.Duration,note:t.note};e.props.dispatch(de(a)),e.setState({visible:!1})},e.handleCancel=function(t){e.setState({visible:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(z.a,{title:"Add new working time",visible:this.state.visible,onCancel:this.handleCancel,footer:null,destroyOnClose:!0},n.a.createElement(J.a,Object.assign({},be,{name:"timeTrackForm",onFinish:this.handleOk,onFinishFailed:function(){},preserve:!1}),n.a.createElement(J.a.Item,{label:"Employee",name:"employee",rules:[{required:!0,message:"Please specify Employee name"}]},n.a.createElement(L.a,null)),n.a.createElement(J.a.Item,{label:"Duration",name:"Duration",rules:[{required:!0,message:"Please set Working Time duration"},{type:"number"}]},n.a.createElement(Y.a,{min:0})),n.a.createElement(J.a.Item,{label:"Note",name:"note"},n.a.createElement(L.a,null)),n.a.createElement(J.a.Item,ge,n.a.createElement(F.a,{type:"primary",htmlType:"submit"},"Submit"),n.a.createElement(F.a,{style:{"margin-left":"8px"},onClick:this.handleCancel},"Cancel")))),n.a.createElement($.a,{onBack:function(){return window.history.back()},title:this.props.currentProject.name,tags:n.a.createElement(Q.a,{color:"blue"},"In Progress"),subTitle:this.props.currentProject.id,extra:n.a.createElement(F.a,{type:"primary",onClick:function(){return e.showModal()}},"Add Workin Hours")},n.a.createElement(R.a,null,n.a.createElement(_.a,{span:4},n.a.createElement("img",{src:te.a,className:"project-image",alt:""})),n.a.createElement(_.a,{span:16},n.a.createElement(X.a,{size:"small",column:3},n.a.createElement(X.a.Item,{label:"Contact Person"},"Marc-Robin D\xfcck"),n.a.createElement(X.a.Item,{label:"Start Date"},"2017-01-10"),n.a.createElement(X.a.Item,{label:"Effective Time"},"2017-10-10"))),n.a.createElement(_.a,{span:4},n.a.createElement(Z.a,{title:"Total working hours",suffix:"h",value:330})))),n.a.createElement(w.a,{defaultActiveKey:"1"},n.a.createElement(he,{tab:"General Information",key:"1"},n.a.createElement(le,null)),n.a.createElement(he,{tab:"Working hours",key:"2"},n.a.createElement(U.a,{columns:fe,dataSource:this.props.currentProject.timeTracks})),n.a.createElement(he,{tab:"Images",key:"3"},n.a.createElement(pe,null)),n.a.createElement(he,{tab:"Notes",key:"4"},n.a.createElement(Ee,{rows:4}))))}}]),a}(n.a.Component),je=Object(E.b)((function(e){return{currentProject:e.project.currentProject}}),null)(ye),Ce=a(423),ke=O.a.Title,ve=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(R.a,null,n.a.createElement(_.a,{span:6},n.a.createElement(Ce.a,{title:"Total Income",style:{margin:"10px",textAlign:"center"}},n.a.createElement(ke,{level:2},3e3," \u20ac"))),n.a.createElement(_.a,{span:6},n.a.createElement(Ce.a,{title:"Total Working Hours",style:{margin:"10px",textAlign:"center"}},n.a.createElement(ke,{level:2},500," h"))),n.a.createElement(_.a,{span:6},n.a.createElement(Ce.a,{title:"Open Projects",style:{margin:"10px",textAlign:"center"}},n.a.createElement(ke,{level:2},9))),n.a.createElement(_.a,{span:6},n.a.createElement(Ce.a,{title:"Open Requests",style:{margin:"10px",textAlign:"center"}},n.a.createElement(ke,{level:2},4)))))}}]),a}(n.a.Component),Oe=(a(408),a(409),u.a.Header),Te=u.a.Footer,Ne=u.a.Sider,Se=u.a.Content,xe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(E.a,{store:v},n.a.createElement(p.a,null,n.a.createElement(u.a,null,n.a.createElement(Ne,{className:"sider"},n.a.createElement(S,null)),n.a.createElement(u.a,null,n.a.createElement(Oe,{className:"header"},n.a.createElement(P,null)),n.a.createElement(Se,{className:"content"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/"},n.a.createElement(ve,null)),n.a.createElement(d.a,{path:"/customer"},n.a.createElement(q,null)),n.a.createElement(d.a,{path:"/project"},n.a.createElement(je,null)))),n.a.createElement(Te,{className:"footer"},"Craftsman @ 2020 Created by BuehrerDueck")))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.92228ed9.chunk.js.map
(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{224:function(e,t,n){},413:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(218),c=n.n(r),s=(n(224),n(15)),i=n(10),l=n(16),o=n(68),j=(n(147),n(2)),d=Object(l.b)(null,(function(e){return{signOut:function(){return e((function(e,t){o.a.auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(j.jsxs)("ul",{className:"right",children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/newproject",children:"New Project"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:e.signOut,children:"Log Out"})})]})})),h=function(){return Object(j.jsxs)("ul",{className:"right",children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/signup",children:"Signup"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/signin",children:"Log In"})})]})},u=Object(l.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth.uid?Object(j.jsx)(d,{}):Object(j.jsx)(h,{});return Object(j.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(s.b,{to:"/",className:"brand-logo",children:"Mario Plan"}),t]})})})),b=n(33),p=n(34),O=n(37),m=n(36),x=function(e){var t=e.project,n=new Date,a=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear();return Object(j.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(j.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(j.jsxs)("span",{className:"card-title",children:[" ",t.title," "]}),Object(j.jsx)("p",{children:"Posted By Basava"}),Object(j.jsxs)("p",{className:"gret-text",children:[" on ",a]})]})})},f=function(e){var t=e.projects;return Object(j.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(j.jsx)(s.b,{to:"/project/"+e.id,children:Object(j.jsx)(x,{project:e})},e.id)}))})},g=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Notifications"})})},v=n(31),N=n(23),C=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.projects;return e.auth.uid?Object(j.jsx)("div",{className:"dashboard container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col s12 m6",children:Object(j.jsx)(f,{projects:t})}),Object(j.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(j.jsx)(g,{})})]})}):Object(j.jsx)(i.a,{to:"/signin"})}}]),n}(a.Component),S=Object(N.d)(Object(l.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth}})),Object(v.firestoreConnect)([{collection:"projects"}]))(C),y=Object(N.d)(Object(l.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.projects;return{project:a?a[n]:null,auth:e.firebase.auth}})),Object(v.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(j.jsx)("div",{className:"container section project-details",children:Object(j.jsxs)("div",{className:"card z-depth-0",children:[Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title darken-1",children:t.title}),Object(j.jsx)("p",{children:t.content}),Object(j.jsxs)("div",{children:[" Posted By ",t.authorFirstName," ",t.authorLastName]})]}),Object(j.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(j.jsx)("div",{children:"Posted By Basava"}),Object(j.jsx)("div",{children:"2nd Sep"})]})]})}):Object(j.jsx)("div",{className:"container center",children:Object(j.jsx)("p",{children:"Loading Project..."})}):Object(j.jsx)(i.a,{to:"/signin"})})),E=n(35),w=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handelChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.handelSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{onSubmit:this.handelSubmit,className:"white",children:[Object(j.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.handelChange})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",onChange:this.handelChange})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("button",{className:"btn pink lightn-1 z-depth-0",children:"Login"}),Object(j.jsx)("div",{className:"red-text center",children:t?Object(j.jsx)("p",{children:t}):null})]})]})})}}]),n}(a.Component),R=Object(l.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t){o.a.auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(w),I=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",password:""},e.handelChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.handelSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{onSubmit:this.handelSubmit,className:"white",children:[Object(j.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.handelChange})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",onChange:this.handelChange})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"firstname",children:"First Name"}),Object(j.jsx)("input",{type:"text",name:"firstname",id:"firstname",onChange:this.handelChange})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"lastname",children:"Last Name"}),Object(j.jsx)("input",{type:"text",name:"lastname",id:"lastname",onChange:this.handelChange})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("button",{className:"btn pink lightn-1 z-depth-0",children:"Sign Up"}),Object(j.jsx)("div",{className:"red-text center",children:n?Object(j.jsx)("p",{children:n}):null})]})]})})}}]),n}(a.Component),P=Object(l.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n){var a=o.a.firestore;o.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return a.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(I),F=n(24),k=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(p.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{className:"white",onSubmit:this.handleSubmit,children:[Object(j.jsx)("h5",{className:"grey-text text-darken-3",children:"Create a New Project"}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{type:"text",id:"title",onChange:this.handleChange}),Object(j.jsx)("label",{htmlFor:"title",children:"Project Title"})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),Object(j.jsx)("label",{htmlFor:"content",children:"Project Content"})]}),Object(j.jsx)("div",{className:"input-field",children:Object(j.jsx)("button",{className:"btn pink lighten-1",children:"Create"})})]})}):Object(j.jsx)(i.a,{to:"/signin"})}}]),n}(a.Component),U=Object(l.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,n,a){a().firestore().collection("projects").add(Object(F.a)(Object(F.a)({},e),{},{authorFirstName:"Karibasaveshwara",authorLastName:"TG",authorId:12345,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",error:e})}))}}(t))}}}))(k);var _=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/",exact:!0,component:S}),Object(j.jsx)(i.b,{path:"/project/:id",component:y}),Object(j.jsx)(i.b,{path:"/signin",component:R}),Object(j.jsx)(i.b,{path:"/signup",component:P}),Object(j.jsx)(i.b,{path:"/newproject",component:U})]})]})})},A={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(F.a)(Object(F.a)({},e),{},{authError:" Login failed"});case"LOGIN_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout sucess"),e;case"SIGNUP_SUCCESS":return console.log("Signup Success"),Object(F.a)(Object(F.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("SIGN UP ERROR"),Object(F.a)(Object(F.a)({},e),{},{authError:t.err.message});default:return e}},L={projects:[{id:"1",title:"Help me",content:"blah blah balh"},{id:"2",title:"Move me",content:"blah blah balh"},{id:"3",title:"Find me",content:"blah blah balh"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.error),e;default:return e}},D=n(93),B=Object(N.c)({auth:G,project:T,firestore:D.firestoreReducer,firebase:v.firebaseReducer}),J=n(219),z=n(95),M=(n(412),{apiKey:"AIzaSyBkxxFOZJK6adLISLD-5tJlQgoMbwjsOi0",authDomain:"marioplan-51df3.firebaseapp.com",projectId:"marioplan-51df3",storageBucket:"marioplan-51df3.appspot.com",messagingSenderId:"480268447909",appId:"1:480268447909:web:1c35d3e041c10bb9225d4c",measurementId:"G-DJRBGYH8DW",userProfile:"users",useFirestoreForProfile:!0});z.a.initializeApp(M),z.a.firestore().settings({timeStampsInSnapshots:!0});var K=z.a,W=Object(N.e)(B,Object(N.d)(Object(N.a)(J.a.withExtraArgument(v.getFirebase))));c.a.render(Object(j.jsx)(l.a,{store:W,children:Object(j.jsx)(v.ReactReduxFirebaseProvider,{firebase:K,config:{},dispatch:W.dispatch,createFirestoreInstance:D.createFirestoreInstance,children:Object(j.jsx)(_,{})})}),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.27c03d70.chunk.js.map
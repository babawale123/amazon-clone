(this.webpackJsonpnewproject=this.webpackJsonpnewproject||[]).push([[0],{48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},68:function(e,t,i){"use strict";i.r(t);var a=i(3),c=i.n(a),s=i(25),n=i.n(s),r=(i(48),i(38)),o=i(13),l=(i(49),i(50),i(40)),d=i.n(l),j=i(41),u=i.n(j),m=i(20),h=i(2),b=Object(a.createContext)(),p=function(e){var t=e.reducer,i=e.initialState,c=e.children;return Object(h.jsx)(b.Provider,{value:Object(a.useReducer)(t,i),children:c})},_=function(){return Object(a.useContext)(b)},O=i(31),g=(O.a.initializeApp({apiKey:"AIzaSyBW2NS_xs3muFDM7cVaPoI04yA0MmTAD0c",authDomain:"challange-343c4.firebaseapp.com",projectId:"challange-343c4",storageBucket:"challange-343c4.appspot.com",messagingSenderId:"1038140208164",appId:"1:1038140208164:web:49e1a0492da492814114b1",measurementId:"G-QWV3KXC74W"}).firestore(),O.a.auth());var x=function(){var e=_(),t=Object(o.a)(e,2),i=t[0],a=i.basket,c=i.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{className:"header__searchInput",type:"text"}),Object(h.jsx)(d.a,{className:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsx)(m.b,{to:!c&&"/login",children:Object(h.jsxs)("div",{onClick:function(){c&&g.signOut()},className:"header__option",children:[Object(h.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===c||void 0===c?void 0:c.email]}),Object(h.jsxs)("span",{className:"header__optionLineTwo",children:[c?"Sign Out":"Sign In"," "]})]})}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Return "}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"& Orders "})]}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Your "}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"Prime "})]}),Object(h.jsx)(m.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header__optionBasket",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};i(60),i(61);var v=function(e){var t=e.id,i=e.title,a=e.image,c=e.price,s=e.rating,n=_(),r=Object(o.a)(n,2),l=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:i}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:c})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(h.jsx)("img",{src:a,alt:""}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:i,image:a,price:c,rating:s}})},children:"Add to Basket"})]})};var f=function(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("div",{className:"home__container",children:Object(h.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""})}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(v,{id:"1",title:"The Lean Start Up:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",rating:2}),Object(h.jsx)(v,{id:"2",title:"Plasma Television:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",price:99.99,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",rating:3})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(v,{id:"3",title:"Labtop:Lorem ipsum dolor sit amet, consectetur adipisicing elit, ",price:299.99,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",rating:4}),Object(h.jsx)(v,{id:"4",title:"Apple product:Lorem ipsum dolor sit amet, consectetur  ",price:499.99,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",rating:3}),Object(h.jsx)(v,{id:"5",title:"Hp Laptop:Lorem ipsum dolor sit amet, consectetur adipisicing",price:199.99,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",rating:2})]}),Object(h.jsx)("div",{className:"home__row",children:Object(h.jsx)(v,{id:"6",title:"Amazon great Product:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r quis nostrud exercitation ullamco laboris nisi ut aliquip ex",price:9.99,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",rating:6})})]})},N=i(10),k=(i(62),i(63),i(42)),S=i.n(k),C=i(32),A=i(22),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},E=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var i=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(C.a)(e.basket);return i>=0?a.splice(i,1):console.warn("cant remove product (id: ".concat(t.id,") as its not in the basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:a});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var B=function(){var e=_(),t=Object(o.a)(e,2),i=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(S.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal ( ",null===i||void 0===i?void 0:i.length," items):",Object(h.jsxs)("strong",{children:[" ",e]})]}),Object(h.jsxs)("small",{className:"subtotal__gift",children:[Object(h.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:y(i),displayType:"text",thousandSeperator:!0,prefix:"$"}),Object(h.jsx)("button",{children:"Proceed to Checkout"})]})};i(65);var z=function(e){var t=e.id,i=e.image,a=e.title,c=e.price,s=e.rating,n=_(),r=Object(o.a)(n,2),l=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct__image",src:i}),Object(h.jsxs)("div",{className:"checkoutProduct__info",children:[Object(h.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(h.jsxs)("p",{className:"checkoutProduct__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:c})]}),Object(h.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(h.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var P=function(){var e=_(),t=Object(o.a)(e,2),i=t[0],a=i.basket,c=i.user;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout__left",children:[Object(h.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"",className:"checkout__ad"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello, ",null===c||void 0===c?void 0:c.email]}),Object(h.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),a.map((function(e){return Object(h.jsx)(z,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(B,{})})]})};i(66);var T=function(){var e=Object(N.f)(),t=Object(a.useState)(""),i=Object(o.a)(t,2),c=i[0],s=i[1],n=Object(a.useState)(""),r=Object(o.a)(n,2),l=r[0],d=r[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(h.jsxs)("div",{className:"login__container",children:[Object(h.jsx)("h1",{children:"Sign in"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:l,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(c,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(h.jsx)("p",{children:"By Signing-in your agree to Amazon's FAKE CLONE Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(c,l).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your amazon account"})]})]})};var L=function(){var e=_(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var i=t[1];return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("the user is >>>>",e),i(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(m.a,{children:Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(N.c,{children:[Object(h.jsx)(N.a,{path:"/login",children:Object(h.jsx)(T,{})}),Object(h.jsxs)(N.a,{path:"/checkout",children:[Object(h.jsx)(x,{}),Object(h.jsx)(P,{})]}),Object(h.jsxs)(N.a,{path:"/",children:[Object(h.jsx)(x,{}),Object(h.jsx)(f,{})]})]})})})},w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,80)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),a(e),c(e),s(e),n(e)}))};n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{initialState:{basket:[],user:null},reducer:E,children:Object(h.jsx)(L,{})})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.865ef313.chunk.js.map
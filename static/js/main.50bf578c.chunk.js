(this["webpackJsonpmuster-website"] = this["webpackJsonpmuster-website"] || []).push([[0],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/muster-row-white.de34bcd0.png";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/muster-text.5976b193.png";

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/topic-friends.2cfee916.png";

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/topic-venues.dc280e9c.png";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/topic-feed.863ac30d.png";

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(16);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/font-awesome/scss/font-awesome.scss
var font_awesome = __webpack_require__(52);

// EXTERNAL MODULE: ./src/assets/scss/argon.scss
var argon = __webpack_require__(53);

// EXTERNAL MODULE: ./src/assets/scss/overrides.scss
var overrides = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/headroom.js/dist/headroom.js
var dist_headroom = __webpack_require__(43);
var headroom_default = /*#__PURE__*/__webpack_require__.n(dist_headroom);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/Navbar.js
var es_Navbar = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/Container.js
var Container = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/NavbarBrand.js
var NavbarBrand = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/UncontrolledCollapse.js + 1 modules
var UncontrolledCollapse = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/Row.js
var Row = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/Col.js
var Col = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/Nav.js
var Nav = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/NavItem.js
var NavItem = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/NavLink.js
var NavLink = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/UncontrolledTooltip.js + 7 modules
var UncontrolledTooltip = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var Button = __webpack_require__(93);

// CONCATENATED MODULE: ./src/config.js
const config=Object.freeze({hrefActionMail:"mailto:contact@getmuster.com",hrefSocialFacebook:"https://facebook.com/TheMusterApp",hrefSocialInstagram:"https://instagram.com/TheMusterApp",hrefFormConsumerShort:"http://eepurl.com/gFbf6j",hrefFormBusinessShort:"https://forms.gle/gc1wZMT4Keyhge1c7",hrefFormAmbassadorShort:"https://forms.gle/vQB58ZkrMmysmVQJA"});function useConfig(){return config;}/* harmony default export */ var src_config = (config);
// CONCATENATED MODULE: ./src/components/Navbars/Navbar.js
// JavaScript plugin that hides or shows a component based on your scroll
// reactstrap components
class Navbar_Navbar extends react_default.a.Component{constructor(...args){super(...args);this.state={collapseClasses:"",collapseOpen:false};this.onExiting=()=>{this.setState({collapseClasses:"collapsing-out"});};this.onExited=()=>{this.setState({collapseClasses:""});};}componentDidMount(){let headroom=new headroom_default.a(document.getElementById("navbar-main"));// initialise
headroom.init();}render(){const _useConfig=useConfig(),hrefSocialFacebook=_useConfig.hrefSocialFacebook,hrefSocialInstagram=_useConfig.hrefSocialInstagram,hrefFormConsumerShort=_useConfig.hrefFormConsumerShort;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("header",{className:"header-global"},/*#__PURE__*/react_default.a.createElement(es_Navbar["a" /* default */],{className:"navbar-main navbar-transparent navbar-light headroom",expand:"lg",id:"navbar-main"},/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(NavbarBrand["a" /* default */],{className:"mr-lg-5",to:"/",tag:react_router_dom["b" /* Link */]},/*#__PURE__*/react_default.a.createElement("img",{alt:"...",src:__webpack_require__(29)})),/*#__PURE__*/react_default.a.createElement("button",{className:"navbar-toggler",id:"navbar_global"},/*#__PURE__*/react_default.a.createElement("span",{className:"navbar-toggler-icon"})),/*#__PURE__*/react_default.a.createElement(UncontrolledCollapse["a" /* default */],{toggler:"#navbar_global",navbar:true,className:this.state.collapseClasses,onExiting:this.onExiting,onExited:this.onExited},/*#__PURE__*/react_default.a.createElement("div",{className:"navbar-collapse-header"},/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{className:"collapse-brand",xs:"6"},/*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */],{to:"/"},/*#__PURE__*/react_default.a.createElement("img",{alt:"...",src:__webpack_require__(66)}))),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{className:"collapse-close",xs:"6"},/*#__PURE__*/react_default.a.createElement("button",{className:"navbar-toggler",id:"navbar_global"},/*#__PURE__*/react_default.a.createElement("span",null),/*#__PURE__*/react_default.a.createElement("span",null))))),/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */],{className:"align-items-lg-center ml-lg-auto",navbar:true},/*#__PURE__*/react_default.a.createElement(NavItem["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(NavLink["a" /* default */],{className:"nav-link-icon",href:hrefSocialFacebook,id:"tooltip333589074",target:"_blank"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-facebook-square"}),/*#__PURE__*/react_default.a.createElement("span",{className:"nav-link-inner--text ml-2"},"Facebook")),/*#__PURE__*/react_default.a.createElement(UncontrolledTooltip["a" /* default */],{delay:0,target:"tooltip333589074"},"Like Muster on Facebook")),/*#__PURE__*/react_default.a.createElement(NavItem["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(NavLink["a" /* default */],{className:"nav-link-icon",href:hrefSocialInstagram,id:"tooltip356693867",target:"_blank"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-instagram"}),/*#__PURE__*/react_default.a.createElement("span",{className:"nav-link-inner--text ml-2"},"Instagram")),/*#__PURE__*/react_default.a.createElement(UncontrolledTooltip["a" /* default */],{delay:0,target:"tooltip356693867"},"Follow Muster on Instagram")),/*#__PURE__*/react_default.a.createElement(NavItem["a" /* default */],{className:"d-none d-lg-block ml-lg-4"},/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:"btn-neutral btn-icon",color:"default",href:hrefFormConsumerShort,target:"_blank"},/*#__PURE__*/react_default.a.createElement("span",{className:"nav-link-inner--text ml-1"},"Subscribe")))))))));}}
// CONCATENATED MODULE: ./src/components/Footers/Footer.js
/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/ /*eslint-disable*/// reactstrap components
function Footer(props){const _useConfig=useConfig(),hrefActionMail=_useConfig.hrefActionMail,hrefSocialFacebook=_useConfig.hrefSocialFacebook,hrefSocialInstagram=_useConfig.hrefSocialInstagram,hrefFormConsumerShort=_useConfig.hrefFormConsumerShort;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("footer",{className:"footer mt-6"},/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"row-grid align-items-center my-5"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{lg:"6"},/*#__PURE__*/react_default.a.createElement("h3",{className:"text-primary font-weight-light mb-2"},"Join the Social Shift with Muster!"),/*#__PURE__*/react_default.a.createElement("h4",{className:"mb-0 font-weight-light"},"Follow us and get in touch on these platforms.")),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{className:"text-lg-center btn-wrapper",lg:"6"},/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:"btn-icon-only rounded-circle ml-1",color:"dark",href:hrefActionMail,id:"tooltip837440418",target:"_blank"},/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--icon"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-envelope-o"}))),/*#__PURE__*/react_default.a.createElement(UncontrolledTooltip["a" /* default */],{delay:0,target:"tooltip837440418"},"Contact Muster via Email"),/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:"btn-icon-only rounded-circle ml-1",color:"facebook",href:hrefSocialFacebook,id:"tooltip837440414",target:"_blank"},/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--icon"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-facebook-square"}))),/*#__PURE__*/react_default.a.createElement(UncontrolledTooltip["a" /* default */],{delay:0,target:"tooltip837440414"},"Like Muster on Facebook"),/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:"btn-icon-only rounded-circle",color:"instagram",href:hrefSocialInstagram,id:"tooltip475038074",target:"_blank"},/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--icon"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-instagram"}))),/*#__PURE__*/react_default.a.createElement(UncontrolledTooltip["a" /* default */],{delay:0,target:"tooltip475038074"},"Follow Muster on Instagram"))),/*#__PURE__*/react_default.a.createElement("hr",null),/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"align-items-center justify-content-md-between"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"12"},/*#__PURE__*/react_default.a.createElement("div",{className:"copyright"},"\xA9 ",new Date().getFullYear()," ",/*#__PURE__*/react_default.a.createElement("a",{href:"/"},"Muster")),/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("ul",{style:{fontSize:"0.7em"},className:"list-unstyled text-muted"},/*#__PURE__*/react_default.a.createElement("li",null,"Muster Tech Pty Ltd \u2022 ABN 636 751 150 \u2022 ACN 60 636 751 150"),/*#__PURE__*/react_default.a.createElement("li",null,"Muster Tech Holdings Pty Ltd \u2022 ACN 627 081 609"))))))));}
// CONCATENATED MODULE: ./src/views/IndexSections/IndexHero.js
/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/// reactstrap components
class IndexHero_Hero extends react_default.a.Component{render(){const _useConfig=useConfig(),hrefSocialFacebook=_useConfig.hrefSocialFacebook,hrefSocialInstagram=_useConfig.hrefSocialInstagram,hrefFormConsumerShort=_useConfig.hrefFormConsumerShort;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("div",{className:"position-relative"},/*#__PURE__*/react_default.a.createElement("section",{className:"section section-hero section-shaped pb-250"},/*#__PURE__*/react_default.a.createElement("div",{className:"shape shape-style-1 shape-custom"},/*#__PURE__*/react_default.a.createElement("span",{className:"span-150"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-50"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-50"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-75"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-100"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-75"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-50"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-100"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-50"}),/*#__PURE__*/react_default.a.createElement("span",{className:"span-100"})),/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],{className:"shape-container d-flex align-items-center py-lg"},/*#__PURE__*/react_default.a.createElement("div",{className:"col px-0"},/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"align-items-center justify-content-center"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{className:"text-center",lg:"6"},/*#__PURE__*/react_default.a.createElement("img",{alt:"...",className:"img-fluid",src:__webpack_require__(29),style:{width:"340px"}}),/*#__PURE__*/react_default.a.createElement("p",{className:"lead text-white"},"All of your favourite venues and your friends' availabilities at your fingertips."),/*#__PURE__*/react_default.a.createElement("div",{className:"btn-wrapper mt-5"},/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:"btn-icon mb-3 mb-sm-0",color:"primary",href:hrefFormConsumerShort,target:"_blank",size:"lg",style:{fontSize:"1.2em",paddingLeft:24,paddingRight:24}},/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--icon mr-1"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-envelope"})),/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--text"},/*#__PURE__*/react_default.a.createElement("strong",null,"Subscribe")," to the Muster Beta"))))),/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"align-items-center justify-content-center mt-5"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{className:"text-center"},/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:"btn-icon my-1",color:"facebook",href:hrefSocialFacebook,size:"md",target:"_blank"},/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--icon mr-1"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-facebook"})),/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--text"},/*#__PURE__*/react_default.a.createElement("strong",null,"Like")," on Facebook"))," ",/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:"btn-icon my-1",color:"instagram",href:hrefSocialInstagram,size:"md",target:"_blank"},/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--icon mr-1"},/*#__PURE__*/react_default.a.createElement("i",{className:"fa fa-instagram"})),/*#__PURE__*/react_default.a.createElement("span",{className:"btn-inner--text"},/*#__PURE__*/react_default.a.createElement("strong",null,"Follow")," on Instagram")))))),/*#__PURE__*/react_default.a.createElement("div",{className:"separator separator-bottom separator-skew zindex-100"},/*#__PURE__*/react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},/*#__PURE__*/react_default.a.createElement("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"}))))));}}/* harmony default export */ var IndexHero = (IndexHero_Hero);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Card.js
var Card = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/CardBody.js
var CardBody = __webpack_require__(95);

// CONCATENATED MODULE: ./src/views/IndexSections/IndexContactCards.js
function ContactCard(props){const title=props.title,titleDescription=props.titleDescription,titleCaption=props.titleCaption,buttonPrimaryText=props.buttonPrimaryText,buttonPrimaryHref=props.buttonPrimaryHref,styleClassName=props.styleClassName,children=props.children;return/*#__PURE__*/react_default.a.createElement(Card["a" /* default */],{className:"shadow border-0"},/*#__PURE__*/react_default.a.createElement(CardBody["a" /* default */],{className:"py-5"},/*#__PURE__*/react_default.a.createElement("div",{className:"text-center"},/*#__PURE__*/react_default.a.createElement("h5",{className:"text-".concat(styleClassName," text-uppercase")},title),/*#__PURE__*/react_default.a.createElement("h6",null,/*#__PURE__*/react_default.a.createElement("strong",null,titleDescription)),/*#__PURE__*/react_default.a.createElement("p",{className:"description"},/*#__PURE__*/react_default.a.createElement("strong",null,titleCaption))),/*#__PURE__*/react_default.a.createElement("hr",null),/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"align-items-center",style:{minHeight:120}},/*#__PURE__*/react_default.a.createElement("ul",{className:"my-0"},children)),/*#__PURE__*/react_default.a.createElement("hr",null),/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"justify-content-center"},/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{color:"".concat(styleClassName),href:buttonPrimaryHref,target:"_blank"},buttonPrimaryText))));}function IndexContactCards(){const _useConfig=useConfig(),hrefFormBusinessShort=_useConfig.hrefFormBusinessShort,hrefFormAmbassadorShort=_useConfig.hrefFormAmbassadorShort;return/*#__PURE__*/react_default.a.createElement("section",{className:"section section-lg pt-lg-0 mt--200"},/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],{id:"contact-cards"},/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"justify-content-center"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{lg:"12"},/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"row-grid justify-content-md-center"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{lg:"5"},/*#__PURE__*/react_default.a.createElement(ContactCard,{title:"Muster for Business",titleDescription:"Free Trial for Early Adopters",titleCaption:"Market your business with Muster!",buttonPrimaryText:"Business Contact",buttonPrimaryHref:hrefFormBusinessShort,buttonSecondaryText:"Learn More",buttonSecondaryHref:"#business",styleClassName:"primary"},/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("li",null,"Real-time, mass engagement tools."),/*#__PURE__*/react_default.a.createElement("li",null,"Consolidate and promote your everyday deals."),/*#__PURE__*/react_default.a.createElement("li",null,"Seamless integration with your existing workflows.")))),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{lg:"5"},/*#__PURE__*/react_default.a.createElement(ContactCard,{title:"Muster Ambassadors",titleDescription:"Affiliate Partnership Program",titleCaption:"Join Muster as an Ambassador!",buttonPrimaryText:"Ambassador Contact",buttonPrimaryHref:hrefFormAmbassadorShort,buttonSecondaryText:"Current Ambassadors",buttonSecondaryHref:"#ambassadors",styleClassName:"success"},/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("li",null,"Partner with our growth."),/*#__PURE__*/react_default.a.createElement("li",null,"Promote your brand on our platform."),/*#__PURE__*/react_default.a.createElement("li",null,"Access exclusive benefits and business insights.")))))))));}
// CONCATENATED MODULE: ./src/views/IndexSections/IndexAbout.js
function AboutCard(props){const title=props.title,icon=props.icon,styleClassName=props.styleClassName;return/*#__PURE__*/react_default.a.createElement(Card["a" /* default */],{className:"shadow border-0 my-2"},/*#__PURE__*/react_default.a.createElement(CardBody["a" /* default */],{className:"py-5"},/*#__PURE__*/react_default.a.createElement("div",{className:"icon icon-lg icon-shape icon-shape-".concat(styleClassName," shadow rounded-circle")},/*#__PURE__*/react_default.a.createElement("i",{className:icon})),/*#__PURE__*/react_default.a.createElement("div",{className:"mt-4"},title)));}function InboxAbout(){return/*#__PURE__*/react_default.a.createElement("section",{className:"section py-2"},/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"justify-content-center my-6"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"8"},/*#__PURE__*/react_default.a.createElement("h1",null,"About"),/*#__PURE__*/react_default.a.createElement("p",{className:"lead"},"Muster is a social/lifestyle app that empowers friends & peers to get together amidst busy schedules. It provides an easy way for friends to coordinate spontaneous plans together and discover new venues, events, and deals around them."))),/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"justify-content-center my-6 text-center",style:{fontSize:"1.2em"}},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"3"},/*#__PURE__*/react_default.a.createElement(AboutCard,{title:"Coordinate with your friends!",icon:"fa fa-calendar",styleClassName:"primary"})),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"3"},/*#__PURE__*/react_default.a.createElement(AboutCard,{title:"Discover amazing new venues!",icon:"fa fa-star",styleClassName:"success"})),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"3"},/*#__PURE__*/react_default.a.createElement(AboutCard,{title:"Access spur-of-moment deals!",icon:"fa fa-fire",styleClassName:"danger"})))));}
// CONCATENATED MODULE: ./src/views/IndexSections/IndexFeatures.js
function InboxFeatures(){return/*#__PURE__*/react_default.a.createElement("section",{className:"section py-2"},/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"justify-content-center my-6 align-items-center"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"7",className:"pr-md-6"},/*#__PURE__*/react_default.a.createElement("h3",{className:"text-primary"},"Easy spontaneous plans"),/*#__PURE__*/react_default.a.createElement("p",{className:"lead"},"Muster shows you which friends are currently available (or soon to be) for quick, hassle-free day planning!")),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"4"},/*#__PURE__*/react_default.a.createElement("img",{src:__webpack_require__(80),alt:"Muster friend activity list view",className:"img-fluid rounded shadow"}))),/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"justify-content-center my-6 align-items-center"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"7",className:"pr-md-6"},/*#__PURE__*/react_default.a.createElement("h3",{className:"text-success"},"All venue details in one spot"),/*#__PURE__*/react_default.a.createElement("p",{className:"lead"},"Muster makes it easy to find the next place to go to, with aggregated closing times, happy hours, deals and more!")),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"4"},/*#__PURE__*/react_default.a.createElement("img",{src:__webpack_require__(81),alt:"Muster aggregated nearby venues list view",className:"img-fluid rounded shadow"}))),/*#__PURE__*/react_default.a.createElement(Row["a" /* default */],{className:"justify-content-center my-6 align-items-center"},/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"7",className:"pr-md-6"},/*#__PURE__*/react_default.a.createElement("h3",{className:"text-danger"},"Real-time deals and plans"),/*#__PURE__*/react_default.a.createElement("p",{className:"lead"},"Discover pop-up deals for nearby venues when you're available, and be notified of your friends' plans and movements!")),/*#__PURE__*/react_default.a.createElement(Col["a" /* default */],{md:"4"},/*#__PURE__*/react_default.a.createElement("img",{src:__webpack_require__(82),alt:"Muster deals and plans information feed view",className:"img-fluid rounded shadow"})))));}
// CONCATENATED MODULE: ./src/views/Index.js
class Index_Index extends react_default.a.Component{componentDidMount(){document.documentElement.scrollTop=0;document.scrollingElement.scrollTop=0;this.refs.main.scrollTop=0;}render(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Navbar_Navbar,null),/*#__PURE__*/react_default.a.createElement("main",{ref:"main"},/*#__PURE__*/react_default.a.createElement(IndexHero,null),/*#__PURE__*/react_default.a.createElement(IndexContactCards,null),/*#__PURE__*/react_default.a.createElement(InboxAbout,null),/*#__PURE__*/react_default.a.createElement(InboxFeatures,null)),/*#__PURE__*/react_default.a.createElement(Footer,null));}}/* harmony default export */ var views_Index = (Index_Index);
// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(/*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* BrowserRouter */],null,/*#__PURE__*/react_default.a.createElement(react_router["d" /* Switch */],null,/*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */],{path:"/",exact:true,render:props=>/*#__PURE__*/react_default.a.createElement(views_Index,props)}),/*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */],{to:"/"}))),document.getElementById("root"));

/***/ })

},[[47,1,2]]]);
//# sourceMappingURL=main.50bf578c.chunk.js.map
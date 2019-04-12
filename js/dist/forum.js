module.exports=function(t){var o={};function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(r,n,function(o){return t[o]}.bind(null,n));return r},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=15)}([function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["utils/ItemList"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,o){t.exports=flarum.core.compat["components/Modal"]},function(t,o){t.exports=flarum.core.compat["models/User"]},function(t,o){t.exports=flarum.core.compat["utils/mixin"]},function(t,o){t.exports=flarum.core},function(t,o){t.exports=flarum.core.compat["components/LinkButton"]},function(t,o){t.exports=flarum.core.compat["models/Group"]},function(t,o){t.exports=flarum.core.compat["utils/computed"]},function(t,o){t.exports=flarum.core.compat["utils/string"]},function(t,o,e){"use strict";function r(){return(r=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.r(o);var n=e(5),a=e(2),i=e.n(a),s=e(0),c=e.n(s),p=(e(11),e(1)),u=e.n(p),l=e(6),d=e.n(l);function f(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var h=e(7),_=e.n(h),y=(e(4),e(12),e(3)),b=e.n(y),v=function(t){function o(){return t.apply(this,arguments)||this}f(o,t);var e=o.prototype;return e.init=function(){this.contact=app.session.user.contact(),this.contact?(this.realname=m.prop(this.contact.name()||""),this.work_company=m.prop(this.contact.work_company()||""),this.primary_address=m.prop(this.contact.primary_address()||""),this.phone_mobile=m.prop(this.contact.phone_mobile()||""),this.department=m.prop(this.contact.department()||""),this.work_qq=m.prop(this.contact.work_qq()||"")):(this.realname=m.prop(""),this.work_company=m.prop(""),this.primary_address=m.prop(""),this.phone_mobile=m.prop(""),this.department=m.prop(""),this.work_qq=m.prop(""))},e.className=function(){return"EditGroupModal Modal--small"},e.title=function(){return["联系方式"]},e.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fields().toArray()))},e.fields=function(){var t=new b.a;return t.add("name",m("div",{className:"Form-group"},m("label",null,"真实姓名"),m("div",{className:"EditGroupModal-name-input"},m("input",{className:"FormControl",value:this.realname(),oninput:m.withAttr("value",this.realname)}))),30),t.add("company",m("div",{className:"Form-group"},m("label",null,"公司名称"),m("input",{className:"FormControl",value:this.work_company(),oninput:m.withAttr("value",this.work_company)})),20),t.add("department",m("div",{className:"Form-group"},m("label",null,"部门"),m("input",{className:"FormControl",value:this.department(),oninput:m.withAttr("value",this.department)})),20),t.add("primary_address",m("div",{className:"Form-group"},m("label",null,"地址"),m("input",{className:"FormControl",value:this.primary_address(),oninput:m.withAttr("value",this.primary_address)})),10),t.add("phone_mobile",m("div",{className:"Form-group"},m("label",null,"手机"),m("input",{className:"FormControl",value:this.phone_mobile(),oninput:m.withAttr("value",this.phone_mobile)})),10),t.add("work_qq",m("div",{className:"Form-group"},m("label",null,"QQ"),m("input",{className:"FormControl",value:this.work_qq(),oninput:m.withAttr("value",this.work_qq)})),10),t.add("submit",m("div",{className:"Form-group"},u.a.component({type:"submit",className:"Button Button--primary EditGroupModal-save",loading:this.loading,children:"保存"})),-10),t},e.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0;var e={};e.name=this.realname(),e.primary_address=this.primary_address(),e.phone_mobile=this.phone_mobile(),e.work_company=this.work_company(),e.work_qq=this.work_qq(),e.department=this.department(),app.session.user.save({contactData:e}).then(function(){return o.success=!0}).catch(function(){}).then(this.hide.bind(this),this.loaded.bind(this))},o}(_.a),w=e(8),x=e.n(w),g=e(9),k=e.n(g),q=(e(13),e(14),function(t){function o(){return t.apply(this,arguments)||this}return f(o,t),o}(k()(c.a,{name:c.a.attribute("name"),work_company:c.a.attribute("work_company"),primary_address:c.a.attribute("primary_address"),phone_mobile:c.a.attribute("phone_mobile"),mail:c.a.attribute("mail"),work_qq:c.a.attribute("work_qq"),department:c.a.attribute("department")}))),N=r({"models/Contact":q},{"components/AddContactModal":v}),F=e(10);i.a.initializers.add("ffrunkey-contacts",function(){i.a.store.models.contact=q,x.a.prototype.contact=c.a.hasOne("contact"),Object(n.extend)(d.a.prototype,"accountItems",function(t){t.add("addcontact",u.a.component({children:"联系方式",className:"Button",onclick:function(){return i.a.modal.show(new v)}}))})}),r(F.compat,N)}]);
//# sourceMappingURL=forum.js.map
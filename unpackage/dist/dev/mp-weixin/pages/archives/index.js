"use strict";const e=require("../../common/vendor.js"),r=require("../../common/assets.js");if(!Array){const a=e.resolveComponent("up-navbar"),s=e.resolveComponent("up-icon"),_=e.resolveComponent("up-form-item"),n=e.resolveComponent("up-divider"),c=e.resolveComponent("up-form"),t=e.resolveComponent("up-button");(a+s+_+n+c+t)()}const m=()=>"../../uni_modules/uview-plus/components/u-navbar/u-navbar.js",p=()=>"../../uni_modules/uview-plus/components/u-icon/u-icon.js",l=()=>"../../uni_modules/uview-plus/components/u-form-item/u-form-item.js",i=()=>"../../uni_modules/uview-plus/components/u-divider/u-divider.js",v=()=>"../../uni_modules/uview-plus/components/u-form/u-form.js",f=()=>"../../uni_modules/uview-plus/components/u-button/u-button.js";Math||(m+p+l+i+v+f)();const b={__name:"index",setup(a){const s=e.ref([{label:"真实姓名",text:"袁天伦"},{label:"身份证号",text:"1234567890"},{label:"性别",text:"男"},{label:"民族",text:"汉族"},{label:"联系电话",text:"18999999999"},{label:"单位",text:"武汉中科通达科技股份有限公司"},{label:"职业",text:"司机"}]),_=n=>{console.log(n)};return(n,c)=>({a:e.p({title:"我的档案",autoBack:!0,placeholder:!0}),b:r._imports_0$1,c:e.f(s.value,(t,u,o)=>e.e({a:e.t(t.text),b:u!=0&&u!=4},u!=0&&u!=4?{c:e.o(y=>_(u),t.label),d:"158e3f34-3-"+o+","+("158e3f34-2-"+o),e:e.p({name:u==1?"scan":"arrow-down"})}:{},{f:"158e3f34-2-"+o+","+("158e3f34-1-"+o),g:e.p({label:t.label,labelWidth:"206rpx"}),h:"158e3f34-4-"+o+","+("158e3f34-1-"+o),i:t.label,j:"158e3f34-1-"+o})),d:e.p({type:"primary",text:"保存"})})}},d=e._export_sfc(b,[["__scopeId","data-v-158e3f34"]]);wx.createPage(d);

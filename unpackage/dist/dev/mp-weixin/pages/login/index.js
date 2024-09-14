"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_checkbox2 = common_vendor.resolveComponent("up-checkbox");
  const _easycom_up_checkbox_group2 = common_vendor.resolveComponent("up-checkbox-group");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  (_easycom_up_navbar2 + _easycom_up_checkbox2 + _easycom_up_checkbox_group2 + _easycom_up_button2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_checkbox = () => "../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_up_checkbox_group = () => "../../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_checkbox + _easycom_up_checkbox_group + _easycom_up_button)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tip = common_vendor.ref("同意《用户服务协议》及《隐私协议》");
    const checkboxValue = common_vendor.ref([]);
    const checkboxChange = (value) => {
      console.log("复选框状态:", value);
    };
    const getPhoneNumber = (e) => {
      if (checkboxValue.value.length === 0) {
        common_vendor.index.showToast({
          title: "请先同意用户服务协议及隐私协议",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "../index/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "登录",
          leftIcon: true,
          bgColor: "transparent"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_vendor.p({
          label: tip.value,
          name: tip.value
        }),
        e: common_vendor.o(checkboxChange),
        f: common_vendor.o(($event) => checkboxValue.value = $event),
        g: common_vendor.p({
          modelValue: checkboxValue.value
        }),
        h: common_vendor.o(getPhoneNumber),
        i: common_vendor.p({
          type: "primary",
          icon: "weixin-fill",
          ["open-type"]: "getPhoneNumber",
          text: "微信授权登录"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"]]);
wx.createPage(MiniProgramPage);

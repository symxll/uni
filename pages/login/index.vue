<template>
  <up-navbar title="登录" leftIcon bgColor="transparent" />
  <view class="bg">
    <image class="bg-body" src="../../static/login/body.png" mode="aspectFill" />
    <image class="bg-head" src="../../static/login/head.png" mode="aspectFit" />
    <view class="bg-text">社会面毛发检测</view>
  </view>
  <view class="flex-center">
    <view class="tip">
      <view class="flex-center">
        <up-checkbox-group v-model="checkboxValue" @change="checkboxChange">
          <up-checkbox :label="tip" :name="tip" />
        </up-checkbox-group>
      </view>
      <up-button type="primary" icon="weixin-fill" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" text="微信授权登录" />
    </view>
  </view>
  <view class="flex-center">
    <view class="footer">
      <view class="tac">
        华芯云集团湖北武中医疗科技
      </view>
      <view class="tac u-primary">其它人员登录入口</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
// import { showToast } from '@uni/toast'; // 确认导入 toast 模块

// 登录协议提示
const tip = ref('同意《用户服务协议》及《隐私协议》')

// 复选框状态
const checkboxValue = ref([])

// 监听复选框状态变化
const checkboxChange = (value) => {
  console.log('复选框状态:', value);
};

/**  用户手机号授权  */
const getPhoneNumber = (e) => {
  if(checkboxValue.value.length === 0) {
    uni.showToast({
      title: '请先同意用户服务协议及隐私协议',
      icon: 'none',
      duration: 2000
    })
    return;
  }
  // concole.log(e);
  uni.navigateTo({
    url: '../index/index'
  })
}

</script>

<style scoped>
@font-face {
  font-family: 'Source Han Sans';
  src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
}
.bg {
  position: relative;
}
.bg-body {
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
}
.bg-head {
  position: relative;
  z-index: 2;
  width: 100vw;
}
.bg-text {
  position: sticky;
  z-index: 11;
  font-family: 'Source Han Sans';
  font-size: 44rpx;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}
.tip {
  position: relative;
  z-index: 1;
  width: 656rpx;
  display: grid;
  gap: 30rpx;
  top: 20vh;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer {
  position: absolute;
  z-index: 1;
  bottom: 5vh;
  gap: 30rpx;
}
.tac {
  text-align: center;
}
</style>
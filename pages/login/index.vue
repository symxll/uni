<template>
  <view>
    <up-navbar title="登录" bgColor="transparent" />
    <view class="bg">
      <image class="bg-body" src="../../static/login/body.png" mode="aspectFill" />
      <image class="bg-head" src="../../static/login/head.png" mode="aspectFit" />
      <view class="bg-text">社会面毛发检测</view>
    </view>
    <view class="flex-center">
      <view class="tip">
        <view class="flex-center">
          <up-checkbox-group :v-model="checkboxState">
            <up-checkbox />同意<text class="tip--highlight">用户服务协议</text>及<text class="tip--highlight" @click="jumpToPath">《隐私协议》</text>
          </up-checkbox-group>
        </view>
        <up-button type="primary" icon="weixin-fill" open-type="getPhoneNumber" @getphonenumber="getphonenumber" text="微信授权登录" />
      </view>
    </view>
    <view class="flex-center">
      <view class="footer">
        <view class="tac"> 华芯云集团湖北武中医疗科技 </view>
        <view class="tac u-primary">其它人员登录入口</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 选中状态
const checkboxState = ref(false);

/** 微信登录 */
const wxlogin = async() => {
  uni.login({
    provider: 'weixin',
    success: (res) => {
      console.log(res);
      const openid = "15113131654";
      const userInfo = {
        nickName: "测试",
        avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJib1Zic3ic3"
      }
      uni.setStorageSync('openid', openid);
      uni.setStorageSync('userInfo', userInfo);
      console.log('存储成功:', openid, userInfo);
    },
  });
}

/** 获取用户手机号  */
const getphonenumber = async(e) => {
  console.log(e);
  if(e.detail.errMsg === 'getPhoneNumber:ok') {
    uni.showToast({title: '授权成功', icon: 'none'});
    setTimeout(() => {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    }, 500);
  } else {
    uni.showToast({title: '授权失败', icon: 'none'});
    return;
  }
}

const jumpToPath = () => {
  uni.navigateTo({
    url: '/pages/web-view/index'
  })
}

onMounted(() => {
  wxlogin();
});

</script>

<style scoped>
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
  font-family: "Source Han Sans";
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

.tip--highlight {
  color: #3394FF;
}
</style>
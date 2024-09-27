<template>
  <view>
    <up-navbar title="人员信息" leftIconSize="0" bgColor="transparent" placeholder />
    <!-- 名片 -->
    <view class="flex-center">
      <view class="card">
        <image class="card-bg" src="../../static/index/bg.png" mode="aspectFill" />
        <view class="flex-center">
          <view class="card-border flex-center">
            <image class="card-border_photo" :src="userPhoto" mode="aspectFill" />
          </view>
          <view class="user-info">
            <view class="user-name">{{ userName || '登录后查看~' }}</view>
            <view class="h3">{{ userPhone ? `联系电话： ${userPhone}` : ' ' }}</view>
            <view class="flex-center">
              <view class="btn">
                <up-button type="primary" size="mini" text="被检人员" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 卡片 -->
    <view class="label">基本信息</view>
    <view class="flex-spacebetween label-card" @click="jumpToPath">
      <view class="flex">
        <view class="label-icon flex-center">
          <up-icon size="86rpx" name="account" />
        </view>
        <view class="label-text">我的档案</view>
      </view>
      <up-icon name="arrow-right" />
    </view>
    <view class="flex-spacebetween label-card" @click="openDialog">
      <view class="flex">
        <view class="label-icon flex-center">
          <up-icon size="86rpx" name="grid" />
        </view>
        <view class="label-text">我的二维码</view>
      </view>
    </view>

    <!-- 弹窗 -->
    <up-popup :show="showDialog" mode="center" round="10" @open="openDialog" @close="closeDialog">
      <view class="dialog">
        <view class="flex">
          <image class="dialog-photo" src="/static/logo.png" mode="scaleToFit" />
          <view class="dialog-title">{{ userName }}</view>
        </view>
        <view class="qrcode flex-center">
           <up-qrcode v-if="showDialog" :size="qrCodeSize" val="userPhone" :icon="userPhoto"></up-qrcode>
        </view>
        <view class="date-time">{{ currentTime }}</view>
      </view>
    </up-popup>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad, onShow } from '@dcloudio/uni-app';

const userPhoto = ref("/static/logo.png");
const userName = ref("");
const userPhone = ref("");
const showDialog = ref(false);
const qrCodeSize = ref(0);
const currentTime = ref(uni.$u.timeFormat(new Date(), 'yyyy年mm月dd hh:MM:ss'));
const interval = ref(0);

const jumpToPath = () => {
  uni.navigateTo({
    url: "../archives/index",
  });
};

const openDialog = () => {
  qrcodeSize();
  interval.value = setInterval( () => {
    currentTime.value = uni.$u.timeFormat(new Date(), 'yyyy年mm月dd hh:MM:ss');
  }, 1000);
  showDialog.value = true;
};

const closeDialog = () => {
  clearInterval(interval.value);
  showDialog.value = false;
};

const qrcodeSize = () => {
  const systemInfo = uni.getSystemInfoSync();
  qrCodeSize.value = (150 / 375) * systemInfo.screenWidth;
}

/** 读取缓存 */
const getStorage = () => {
  const openid = uni.getStorageSync('openid') || null;
  const userInfo = uni.getStorageSync('userInfo') || null;
  console.log('读取缓存:', openid, userInfo);
  if (!openid && !userInfo) {
    // 如果缓存中有 openid 和 userInfo，则跳转到 index 页面
    uni.navigateTo({
      url: '/pages/login/index'
    });
  }
}

/** 监听资料修改 */
const updataUserInfo = () => {
  const formData = uni.getStorageSync('formData')
  if(formData) {
    userPhone.value = formData[4].text;
    userName.value = formData[0].text;
  }
}

onLoad(() => {
  getStorage();
})

onShow(() => {
  updataUserInfo();
})
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-spacebetween {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card {
  position: relative;
  top: 138rpx;
  width: 654rpx;
  height: 356rpx;
  border-radius: 48rpx;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 48rpx;
  z-index: -1;
}

.card-border {
  position: absolute;
  width: 144rpx;
  height: 144rpx;
  border-radius: 50%;
  box-sizing: border-card;
  background: linear-gradient(180deg, #ffc77c -3%, #88fff4 100%);
  box-shadow: 0px 24px 42px 0px rgba(0, 0, 0, 0.04);
  border-image-slice: 1;
}

.card-border_photo {
  position: absolute;
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
}

.user-info {
  position: absolute;
  top: 25%;
  display: grid;
  gap: 20rpx;
  text-align: center;
}

.user-name {
  text-align: center;
}

.btn {
  width: 136rpx;
  height: 48rpx;
}

.label {
  margin-top: 150rpx;
  font-family: "Poppins";
  font-size: 24rpx;
  font-weight: 600;
  line-height: 48rpx;
  letter-spacing: -0.16rpx;
  padding: 24rpx 48rpx 0;
}

.label-card {
  padding: 24rpx 48rpx;
}

.label-icon {
  width: 84rpx;
  height: 84rpx;
  border-radius: 32rpx;
  background-color: #f6fbfa;
}

.label-text {
  padding-left: 30rpx;
  font-family: Poppins;
  font-size: 24rpx;
  font-weight: normal;
  line-height: 48rpx;
  letter-spacing: -0.08px;
}

.dialog {
  width: 554rpx;
  padding: 50rpx;
}

.calling-card {
  width: 80%;
  height: 100rpx;
  backface-visibility: skyblue;
}

.dialog-photo {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
}

.dialog-title {
  padding-left: 30rpx;
}

.qrcode {
  margin: 50rpx 0;
  height: 300rpx;
  width: 100%;
}

.date-time {
  text-align: center;
}
</style>

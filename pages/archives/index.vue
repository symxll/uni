<template>
  <view>
    <up-navbar
      title="我的档案"
      autoBack
      placeholder
    />
    <view class="flex-center">
      <view class="main">
        <view class="title">人脸活体认证</view>
        <image src="../../static/logo.png" mode="aspectFit" class="verify" />
        <view class="title">档案信息</view>
        <up-form v-for="(item, index) in formList" :key="item.label">
          <up-form-item :label="item.label" labelWidth="206rpx">
            <view class="flex-spacebetween">
              <view class="">
                {{ item.text }}
              </view>
              <up-icon
                :name="index == 1 ? 'scan' : 'arrow-down'"
                v-if="index != 0 && index != 4"
                @click="handleEvent(index)"
              ></up-icon>
            </view>
          </up-form-item>
          <up-divider></up-divider>
        </up-form>
      </view>
    </view>
    <view class="placeholder"></view>
    <view class="sub">
      <up-button type="primary" text="保存"></up-button>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const formList = ref([
  { label: "真实姓名", text: "袁天伦" },
  { label: "身份证号", text: "1234567890" },
  { label: "性别", text: "男" },
  { label: "民族", text: "汉族" },
  { label: "联系电话", text: "18999999999" },
  { label: "单位", text: "武汉中科通达科技股份有限公司" },
  { label: "职业", text: "司机" },
]);

const handleEvent = (index) => {
  console.log(index);
  if(index == 1) {
    
  }
};
</script>

<style scoped>
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
.main {
  width: 654rpx;
}
.title {
  font-family: Source Han Sans;
  font-size: 28rpx;
  font-weight: bold;
  line-height: 48rpx;
  letter-spacing: -0.16rpx;
}
.verify {
  width: 180rpx;
  height: 196rpx;
  border-radius: 16rpx;
  margin: 30rpx 0;
}
.sub {
  position: fixed;
  bottom: 0;
  margin: 0 24rpx;
  padding-bottom: 77rpx;
  width: 702rpx;
  background-color: #ffffff;
}
.placeholder {
  height: 112rpx;
}
</style>

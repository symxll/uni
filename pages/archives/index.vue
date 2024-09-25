<template>
  <view>
    <up-navbar title="我的档案" autoBack placeholder />
    <view class="flex-center">
      <view class="main">
        <view class="title">人脸活体认证</view>
        <image src="../../static/logo.png" mode="aspectFit" class="verify" />
        <view class="title">档案信息</view>
        <up-form v-for="(item, index) in formData" :key="item.label">
          <up-form-item :label="item.label" labelWidth="206rpx" @click="handleEvent(index)">
            <view class="flex-spacebetween">
              <view class="u-tips-color" v-if="index == 2 || index == 3 || index == 5 || index == 6">
                {{ item.text ? item.text : "请选择" }}
              </view>
              <up-input v-else placeholderStyle="u-tips-color" color="#909193" v-model="item.text" placeholder="请输入" border="none" />
              <up-icon :name="index == 1 ? 'scan' : 'arrow-down'"
                v-if="index != 0 && index != 1 && index != 4"></up-icon>
            </view>
          </up-form-item>
          <up-divider></up-divider>
        </up-form>
      </view>
    </view>
    <view class="placeholder"></view>
    <view class="sub">
      <up-button type="primary" text="保存" @click="sumbit"></up-button>
    </view>
  </view>
  <up-picker :show="showPicker" :columns="columns" @confirm="confirm" @cancel="close" @close="close"
    closeOnClickOverlay></up-picker>
</template>

<script setup>
import { ref, onMounted } from "vue";

const formData = ref([
  { label: "真实姓名", text: "" },
  { label: "身份证号", text: "" },
  { label: "性别", text: "" },
  { label: "民族", text: "" },
  { label: "联系电话", text: "" },
  { label: "单位", text: "" },
  { label: "职业", text: "" },
]);

const columns = ref([[]]);

const formIndex = ref(0);

const showPicker = ref(false);

const handleEvent = (index) => {
  formIndex.value = index;
  switch (index) {
    case 2:
      columns.value = [["男", "女"]];
      showPicker.value = true;
      break;
    case 3:
      columns.value = [["汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族", "满族", "侗族", "瑶族", "白族", "土家族", "哈尼族", "哈萨克族", "傣族", "黎族", "傈僳族", "佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", "纳西族", "景颇族", "柯尔克孜族", "土族", "达斡尔族", "仫佬族", "羌族", "布朗族", "撒拉族", "毛南族", "仡佬族", "锡伯族", "阿昌族", "普米族", "塔吉克族", "怒族", "乌孜别克族", "俄罗斯族", "鄂温克族", "德昂族", "保安族", "裕固族", "京族", "塔塔尔族", "独龙族", "鄂伦春族", "赫哲族", "门巴族", "珞巴族", "基诺族"]];
      showPicker.value = true;
      break;
    case 5:
      columns.value = [["武汉中科通达科技股份有限公司", "其他单位"]];
      showPicker.value = true;
      break;
    case 6:
      columns.value = [["司机", "医生", "教师", "工程师", "律师", "会计", "护士", "销售", "行政", "人力资源"]];
      showPicker.value = true;
      break;
    default:
      showPicker.value = false;
      break;
  }
};

const confirm = (e) => {
  const { value } = e;
  formData.value[formIndex.value].text = value[0];
  close();
}

const close = () => {
  showPicker.value = false;
};

const sumbit = () => {
  // console.log(formData.value);
  uni.showToast({title: "保存成功", icon: 'none'});
  uni.setStorageSync('formData', formData.value);
  setTimeout(() => {
    uni.navigateBack();
  }, 500)
}

onMounted( () => {
  uni.getStorageInfoSync('formdata');
  formData.value = uni.getStorageSync('formData') || formData.value;
})
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
  z-index: 2;
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
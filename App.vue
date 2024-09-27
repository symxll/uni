<script setup>
import { onLaunch } from '@dcloudio/uni-app';
/** 检查版本更新 */
const checkForUpdate = () => {
  const updateManager = uni.getUpdateManager();
  updateManager.onCheckForUpdate((res) => {
    if (res.hasUpdate) {
      updateManager.onUpdateReady(() => {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: (res) => {
            if (res.confirm) {
              updateManager.applyUpdate();
            }
          }
        })
      })
    }
    updateManager.onUpdateFailed(() => {
      uni.showModal({
        title: '更新失败',
        content: '新版本下载失败，请检查网络',
        showCancel: false
      })
    })
  })
}

onLaunch(() => {
  checkForUpdate();
})
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uview-plus/index.scss";
</style>

<template>
    <div>
        {{res}}
        <br>
        <br>
        <router-link :to="{path:'/'}"></router-link>
    </div>
</template>
<script>
export default {
  data() {
      return {
          res:''
      }
  },
//   生命周期函数 也是钩子 组件已经挂在到页面上去了
// 发送ajax请求的最佳时期
  mounted () {
      axios.get('users').then(response => {
          this.res = response.data.msg
      })
  }
}
</script>
<style>

</style>

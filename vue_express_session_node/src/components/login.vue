<template>
    <div>
        <input type="text" v-model="phone">
        <input type="password" v-model="pwd">
        <button type="button" @click="login">登录</button>
    </div>
</template>
<script>
export default {
  data () {
      return {
          phone: '',
          pwd: ''
      }
  },
  methods:{
        login(){
            const that = this
            // 加密请求  后面是请求内容
            axios.post('users/login',{
                pwd: that.pwd,
                telphone: this.phone
            }).then((response)=>{
                console.log(response)
                let {data} = response
                if(data.code == 200) {
                    // js内触发路由的跳转
                    this.$router.push('/home')
                }else{
                    alert(data.errmsg)
                }
            })
        }
    }
}
</script>
<style>

</style>

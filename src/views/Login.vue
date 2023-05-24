<template>
  <div class="body">
    <div class="inputContainer">
      <div class="containerHead">SDN平台</div>
      <el-form :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.UserName" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="请输入密码" type="password"/>
        </el-form-item>
      </el-form>
      <el-link type="primary"  style="margin: 0 0 20px 0;">忘记密码</el-link>        
      <el-button size="large" type="primary"  style="width: 100%;" @click="submit">登录</el-button>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive } from 'vue'
import router from '@/router'
export default defineComponent({
  setup() {
    const form = reactive({
      UserName: '',
      password: ''
    })
    const submit = ()=>{

    }
    return {
      form,
      submit
    }
  }
})
</script>

<style scoped >
.body{
  height: 100vh;
  width: 100%;
  padding: 30vh 0;
  box-sizing: border-box;
  background-image: url(@/assets/img/back.jpg);
  background-size: cover;
}
.inputContainer{
  width: 25%;
  min-width: 300px;
  margin: auto;
  padding: 30px 30px;
  border-radius: 10px;
  background-color: rgb(247, 247, 247);
}
input{
  background-color: rgb(216, 216, 216) !important; 
}
.containerHead{
  text-align: center;
  margin: 15px auto;
  font-weight: bold;
  font-size: large;
}
</style>
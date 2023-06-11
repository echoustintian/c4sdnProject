<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="asider">
        <LeftBar></LeftBar>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive } from 'vue'
import LeftBar from '@/components/LeftBar.vue'
import Header from '@/components/Header.vue'
import router from '@/router'
export default defineComponent({
  setup() {

    return {

    }
  },
  components: { Header, LeftBar },
})
</script>

<style scoped >
.asider {
  height: 100vh;
}

.main {
  height: calc(100vh - 65px);
  box-shadow: rgba(204, 219, 232, 0.5) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  padding: 0;
}

.header {
  height: 65px;
}
</style>
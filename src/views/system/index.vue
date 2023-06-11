<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="CollapseStore.isCollapse ? '65px' : '220px'" class="asider">
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

<script setup>

import LeftBar from '@/components/LeftBar.vue'
import Header from '@/components/Header.vue'
import { useCollapseStore } from '@/stores/collapse';


//折叠
const CollapseStore = useCollapseStore();
</script>

<style scoped >
.asider {
  height: 100vh;
  transition: width 0.2s;
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
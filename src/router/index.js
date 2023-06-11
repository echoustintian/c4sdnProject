import { createRouter, createWebHashHistory } from "vue-router";
import hostManage from '@/views/system/hostManage/hostManage.vue'

const router = createRouter({
  // 使用 hash 模式
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/system/index.vue"),
      children: [
        {
          path: "/system/hostManage",
          name: hostManage,
          component: hostManage,
        },
        {
          path: "main",
          name: "main",
          component: () => import("../views/system/Main.vue"),
        },
        {
          path: "carmanager",
          name: "carmanager",
          component: () => import("../views/car/CarManager.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    
  ],
});

// 全局前置守卫
// router.beforeEach((to, from, next) => {

// })

export default router;

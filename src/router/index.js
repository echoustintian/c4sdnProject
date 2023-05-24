import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 使用 hash 模式
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: ()=> import('../views/MainPage.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/Login.vue')
    },
  ]
})

// 全局前置守卫
// router.beforeEach((to, from, next) => {

// })


export default router

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 依赖预构建优化
  optimizeDeps:{
    exclude: []
  },

  resolve: {
    // 路径别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    // 仅供测试，便于定位生成环境问题,生产上线记得关闭
    sourcemap: true,
    minify: false,
    // rollupOptions 配置
    rollupOptions:{
      output:{

      }
    }
  },
  server: {
    port: 9999,
    host: "0.0.0.0"
  },
  

  plugins: [vue()],
})

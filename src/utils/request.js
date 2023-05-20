import Axios from "axios";

const axios = Axios
// 配置不同环境下，axios的默认请求地址
if (process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL = ''
}else if (process.env.NODE_ENV == 'debug'){
  axios.defaults.baseURL = ''
}else if (process.env.NODE_ENV == 'production'){
  axios.defaults.baseURL = ''
}

// 请求拦截器
axios.interceptors.request.use(    
  config => {
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = window.localStorage['token'];        
      token && (config.headers.Authorization = token);
      return config;    
  },    
  error => {        
      return Promise.reject(error);    
  }
)

// 封装 get 请求函数
// 参数 ： url 类型string 必选； params 类型实现IAnyObj的对象 必选； clearFn 类型Fn 可选 用于处理返回值的回调函数
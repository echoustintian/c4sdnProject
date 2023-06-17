import axios from "axios";

// 配置不同环境下，axios的默认请求地址
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "http://192.168.3.3:8010";
} else if (process.env.NODE_ENV == "debug") {
  axios.defaults.baseURL = "";
} else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "";
}

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = window.localStorage["token"];
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      console.log("未登录");
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      localStorage.removeItem("token");
      console.log("登录状态过期");
      break;
    // 404请求不存在
    case 404:
      console.log(404);
      break;
    default:
      console.log(other);
  }
};

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res);
  },
  (err) => {
    const { response } = err;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    }
  }
);

// 封装 get 请求函数
// 参数 ： url 类型string 必选； params 类型实现IAnyObj的对象 必选； clearFn 类型Fn 可选 用于处理返回值的回调函数
/**
 *
 * @param {String} url 请求路径
 * @param {Object} params 参数
 * @param {Function} clearFn 用于处理返回值的回调函数
 */
export const get = (url, params, clearFn) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((success) => {
        let res;
        if (clearFn != undefined) {
          res = clearFn(success.data);
        } else {
          res = success.data;
        }
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

// 封装 post 请求函数
// 参数 ： url 类型string 必选； params 类型实现IAnyObj的对象 必选； clearFn 类型Fn 可选 用于处理返回值的回调函数
/**
 *
 * @param {String} url 请求路径
 * @param {Object} params 参数
 * @param {Function} clearFn 用于处理返回值的回调函数
 */
export const post = (url, data, params, clearFn) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, { params })
      .then((success) => {
        let res;
        if (clearFn != undefined) {
          res = clearFn(success.data);
        } else {
          res = success.data;
        }
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

// 封装 put 请求函数
// 参数 ： url 类型string 必选； params 类型实现IAnyObj的对象 必选； clearFn 类型Fn 可选 用于处理返回值的回调函数
/**
 *
 * @param {String} url 请求路径
 * @param {Object} params 参数
 * @param {Function} clearFn 用于处理返回值的回调函数
 */
export const put = (url, params, clearFn) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((success) => {
        let res;
        if (clearFn != undefined) {
          res = clearFn(success.data);
        } else {
          res = success.data;
        }
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

// 封装 delete 请求函数
// 参数 ： url 类型string 必选； params 类型实现IAnyObj的对象 必选； clearFn 类型Fn 可选 用于处理返回值的回调函数
/**
 *
 * @param {String} url 请求路径
 * @param {Object} params 参数
 * @param {Function} clearFn 用于处理返回值的回调函数
 */
export const del = (url, params, clearFn) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { params })
      .then((success) => {
        let res;
        if (clearFn != undefined) {
          res = clearFn(success.data);
        } else {
          res = success.data;
        }
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

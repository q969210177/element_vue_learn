//请求的全局配置
// import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { Message, Loading } from "element-ui";
let baseURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:8888//datajs";
} else if (process.env.NODE_ENV === "production") {
  baseURL = "http://969210177.cn/php";
}

// 响应时间
axios.defaults.timeout = 5 * 1000;
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";
// 静态资源
// Vue.prototype.$static = "";
// 配置接口地址
axios.defaults.baseURL = baseURL;
var loadingInstance;
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      lock: true,
      text: "数据加载中，请稍后...",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  err => {
    loadingInstance.close();
    Message.error("请求错误");
    return Promise.reject(err);
  }
);
// 返回状态判断(添加响应拦截器) ;
axios.interceptors.response.use(
  res => {
    loadingInstance.close();
    return res;
  },
  err => {
    loadingInstance.close();
    Message.error("请求失败，请稍后再试");
    return Promise.reject(err);
  }
);
// 发送请求
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      )
      .catch(err => {
        reject(err);
      });
  });
}
export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function getJson(url) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: url,
      responseType: "json"
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

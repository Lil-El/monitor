import perf from "./perf.js";
import resources from "./resources.js";
import errorCatch from "./errorCatch.js";
import xhrHook from "./xhr.js";
import behavior from "./behavior.js";

perf.init((perfData) => {
  // console.log('perf', perfData);
  /**
   * 发送给服务器：
   * 1. ajax
   * 2. Image，将数据转换，添加到img的src中
   */
});

resources.init((list) => {
  // console.log('resources', list.length === 1 ? list[0] : list);
});

errorCatch.init((err) => {
  console.log("errorCatch", err);
});

xhrHook.init((xhrInfo) => {
  // 在index.html使用xhr发送请求就可以进行监测
  console.log(xhrInfo);
});

behavior.init(() => {
  console.log("behavior init");
});

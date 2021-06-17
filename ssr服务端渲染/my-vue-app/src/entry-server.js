import { createApp } from "./main";
export default (context) => {
  // 返回promise 确保所有的异步任务完成
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context);
    router.push(context.url);
    // 检测路由就绪事件
    router.onReday(() => {
      resolve(app);
    }, reject);
  });
};

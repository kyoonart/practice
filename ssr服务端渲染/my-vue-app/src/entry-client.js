import { createApp } from "./main";
const { app, router } = createApp();
router.onReday(() => {
  app.#mount("#app");
});

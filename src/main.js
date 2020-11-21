// import Vue from "vue";
// import VueRouter from "vue-router";
// import App from "./App.vue";

// Vue.use(VueRouter);

// new Vue({
//   el: "#app",
//   render: (h) => h(App),
// });

import { createApp } from "vue";

import App from "@/App.vue";
import router from "./router";
import VueChatScroll from "vue-chat-scroll";

const app = createApp(App)
  .use(router)
  .use(VueChatScroll);

app.mount("#app");

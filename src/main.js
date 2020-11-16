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

const app = createApp(App).use(router);

app.mount("#app");

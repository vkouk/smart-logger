import Vue from "vue";
import App from "./App";
import router from "./router";
import apolloProvider from "./utils/Apollo";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");

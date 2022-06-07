import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Message, Dropdown, DropdownMenu, DropdownItem } from "element-ui";
import "./flexible";
import "@/assets/style/common.less";
Vue.config.productionTip = false;
Vue.prototype.$message = Message;
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

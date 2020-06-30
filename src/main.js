import Vue from "vue";
import VueProgressBar from "vue-progressbar";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const options = {
  color: "#bffaf3",
  failedColor: "#874b4b",
  thickness: "2px",
  transition: {
    speed: "2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

Vue.use(VueProgressBar, options);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

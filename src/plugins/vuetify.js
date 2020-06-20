import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        black: "#282e3a",
        blue: "#44bef1",
        email: "#4b5d78",
      },
    },
  },
});

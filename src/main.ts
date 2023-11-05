import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDataTable } from "vuetify/labs/VDataTable";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  directives,
  components: { ...components, VDataTable },
});

const app = createApp(App);

app.use(router).use(vuetify).mount("#app");

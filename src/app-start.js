import Vue from "vue/dist/vue";

import router from "./routes/routes";
import AppContainer from "./pages/AppContainer";

var vueInstance = new Vue({
    render: createElement => createElement(AppContainer),
    router
}).$mount("#app");

//Provides a global reference to your vue instance 
global.app = vueInstance;


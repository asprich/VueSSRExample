import Vue from "vue/dist/vue";

import AppContainer from "./pages/AppContainer";

var vueInstance = new Vue({
    render: createElement => createElement(AppContainer)
}).$mount("#app");

//Provides a global reference to your vue instance 
global.app = vueInstance;
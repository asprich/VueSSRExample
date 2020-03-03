import Vue from "vue/dist/vue";

import router from "./routes/routes";
import AppContainer from "./pages/AppContainer";

export default () => {
    var vueInstance = new Vue({
        render: createElement => createElement(AppContainer),
        router
    });

    //Provides a global reference to your vue instance 
    global.app = vueInstance;

    return { vueInstance };
}



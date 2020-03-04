import Vue from "vue/dist/vue";

import createRouter from "./routes/routes";
import createStore from "./db/store";
import AppContainer from "./pages/AppContainer";

export default () => {
    const router = createRouter();
    const store = createStore();

    var vueInstance = new Vue({
        render: createElement => createElement(AppContainer),
        router,
        store
    });

    //Provides a global reference to your vue instance 
    global.app = vueInstance;

    return { vueInstance, router, store };
}

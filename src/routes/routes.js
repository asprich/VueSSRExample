import Vue from "vue/dist/vue";
import VueRouter from "vue-router";

import Home from "../pages/Home";
import About from "../pages/About";

//Register the plugin with Vue
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/about", component: About }
    ]
})

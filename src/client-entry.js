import appStart from "./app-start";

const { vueInstance, store } = appStart();

if (window.__INITIAL_STATE__) {
    // We initialize the store state with the data injected from the server
    store.replaceState(window.__INITIAL_STATE__)
};

vueInstance.$mount("#app");
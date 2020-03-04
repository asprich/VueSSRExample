import Vue from "vue/dist/vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: () => ({
        vueLinks: []
    }),
    mutations: {
        setVueLinks(state, links) {
            state.vueLinks = links;
        }
    },
    actions: {
        "vueLinks.fetchAll": function(context) {
            if (context.state.vueLinks.length)
                return Promise.resolve();

            var url = "https://firebasestorage.googleapis.com/v0/b/ams-examples.appspot.com/o/vue-ssr-example%2Fvue-links.json?alt=media";

            try {
                if (document)
                    url = "https://cors-anywhere.herokuapp.com/" + url;
            } catch {
                //document doesn't exist on the server and we don't need
                //to worry about cors on the server
            }

            return axios
                .get(url)
                .then(response => context.commit("setVueLinks", response.data.vueDocumentaionReferences));
        }
    }
});
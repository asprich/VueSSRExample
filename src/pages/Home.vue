<template>
    <div>
        <h2>{{message}}</h2>
        <ul>
            <li v-for="link in vueLinks" :key="link.url">
                <a :href="link.url" target="_blank" v-text="link.title"></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Home",
    data: () => ({
        message: "Vue Documentation Links"
    }),
    computed: {
        vueLinks() {
            return this.$store ? this.$store.state.vueLinks : null;
        }
    },
    methods: {
        getLinks() {
            return this.$store.dispatch("vueLinks.fetchAll");
        }
    },
    mounted() {
        this.getLinks();
    },
    serverPrefetch() {
        return this.getLinks();
    }
}
</script>
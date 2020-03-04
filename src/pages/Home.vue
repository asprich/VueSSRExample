<template>
    <div>
        {{message}}
    </div>
</template>

<script>
export default {
    name: "Home",
    data: () => ({
        message: null
    }),
    mounted() {
        setTimeout(() => this.message = "This is the home content!", 1500);
    },
    serverPrefetch() {
        this.message = "This is the home content!";
    }
}
</script>
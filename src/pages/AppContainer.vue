<template>
    <div id="app">
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppContainer",
    data: () => ({
    })
}
</script>
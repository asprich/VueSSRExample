<template>
    <div>
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>

        <div>{{futurePageContents}}</div>
    </div>
</template>

<script>
export default {
    name: "AppContainer",
    data: () => ({
        futurePageContents: "Page contents goes here"
    })
}
</script>
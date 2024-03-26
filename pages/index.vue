<script setup lang="ts">
const appconfig = useAppConfig()
const signedIn = ref(false)
</script>

<template>
    <AppHeader v-if="signedIn"/>
    <Greeting />
</template>
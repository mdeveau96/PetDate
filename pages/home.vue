<script setup lang="ts">
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

Amplify.configure(outputs)
const auth = useAuthenticator()
</script>

<template>
    <AppHeader />
    <UserCarousel />
</template>
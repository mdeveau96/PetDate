<script setup lang="ts">
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import outputs from '../amplify_outputs.json';

const appconfig = useAppConfig()

Amplify.configure(outputs);
</script>

<template>
    <Greeting />
</template>
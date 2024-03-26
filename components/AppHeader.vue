<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Log In',
//   to: '/login'
}]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 font-bold text-white bg-red-700 dark:bg-gray-900 dark:border-gray-800" />
</template>


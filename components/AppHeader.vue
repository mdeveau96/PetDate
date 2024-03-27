<script setup lang="ts">
const route = useRoute()

const links = [
  [],
  [{
    label: 'Sign Out',
    // to: '/signout'
  }]
]
</script>

<template>
  <div
    class="flex border-b-2 border-gray-200 font-bold text-white dark:text-rose-400 bg-rose-400 dark:bg-black dark:border-gray-600">
    <div>
      <a href="/">
        <img src="/paw_print.png" class="size-12 rounded-full m-2">
      </a>
    </div>
    <a href="/">
      <div class="m-4 text-3xl font-bold font-mono tracking-tight flex">
        <h1>Pet</h1>
        <h1 class="pl-2">Date</h1>
      </div>
    </a>
    <UHorizontalNavigation :links="links" class="px-2">
      <template #default="{ link }">
        <span class="group-hover:text-black dark:group-hover:text-rose-400 text-white relative">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>
  </div>
</template>

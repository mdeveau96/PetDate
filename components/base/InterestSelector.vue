<script setup lang="ts">
const options = [{
    label: 'Men',
    icon: 'i-ion-male',
    value: 'men'
}, {
    label: 'Women',
    icon: 'i-ion-female',
    value: 'women'
}, {
    label: 'Both',
    icon: 'i-ion-male-female',
    value: 'both'
}]
</script>

<template>
    <UButton v-for="option in options" :icon=option.icon :label="option.label" 
    class="mx-2 rounded-full font-bold border-none dark:border-none text-white dark:text-white bg-rose-400 dark:bg-rose-400 hover:bg-rose-500 dark:hover:bg-rose-500 focus:bg-rose-500 dark:focus:bg-rose-500" />
</template>
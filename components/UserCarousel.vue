<script setup lang="ts">
const potentialMatches = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]
</script>

<template>
    <div class="flex min-h-full items-end sm:items-center justify-center text-center">
        <div>
            <UButton size="xl" color="red" variant="outline" class="mr-10 rounded-full rotate-180" icon="i-ion-paw"></UButton>
        </div>
        <UCard class="p-4 sm:p-0 sm:my-8 min-w-96 w-6/12"
            :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="h-8"></div>
            </template>
            <div class="h-8"></div>
            <template #footer>
                <div class="h-8"></div>
            </template>
        </UCard>
        <div>
            <UButton size="xl" color="green" variant="outline" class="ml-10 rounded-full" icon="i-ion-paw"></UButton>
        </div>
    </div>
</template>

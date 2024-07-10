<script setup lang="ts">
const goal = defineModel()
const statuses = [{
    label: 'Relationship',
    icon: 'i-twemoji-couple-with-heart',
    value: 'relationship'
}, {
    label: 'Casual',
    icon: 'i-twemoji-man-and-woman-holding-hands',
    value: 'casual'
}, {
    label: 'Friends',
    icon: 'i-twemoji-handshake',
    value: 'friends'
}, {
    label: "Don't Know",
    icon: 'i-twemoji-person-shrugging',
    value: 'dontKnow'
}]

const emit = defineEmits(['selectedGoal'])

</script>

<template>
    <div>
        <h2 class="font-bold pb-2">What are you looking for?</h2>
        <div class="grid grid-cols-1 gap-y-4">
            <UButton v-for="status in statuses" v-model="goal" :label="status.label" :value="status.value" :icon="status.icon" 
                class="p-3 gap-x-3 bg-rose-400 dark:bg-rose-400 hover:bg-rose-500 dark:hover:bg-rose-500 focus:bg-rose-600 dark:focus:bg-rose-600"
                @click="$emit('selectedGoal', status.value)"/>
        </div>
    </div>
</template>
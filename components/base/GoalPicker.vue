<script setup lang="ts">
const goal = defineModel()
const statuses = [{
    label: 'A Relationship',
    icon: 'i-twemoji-couple-with-heart',
    value: 'relationship'
}, {
    label: 'Something Casual',
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
        <div>
            <ul class="inline-flex justify-center grid grid-cols-1 gap-y-4">
                <li v-for="status in statuses">
                    <input type="radio" :id="status.label" :value="status.value" name="goal" class="peer hidden" @click="$emit('selectedGoal', status)">
                    <label :for="status.label" class="block w-full p-2 transition duration-300 hover:bg-rose-500 dark:hover:bg-rose-500 hover:text-white hover:border-rose-500 dark:hover:border-rose-500 border-2 border-rose-400 cursor-pointer rounded-full font-bold peer-checked:text-white peer-checked:bg-rose-500 peer-checked:border-rose-500 text-rose-400 dark:text-white bg-transparent dark:bg-transparent">
                        <span>
                            <UIcon :name="status.icon"/>
                            {{ status.label }}
                        </span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"

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


const emit = defineEmits(['selectedInterest'])
</script>

<template>
    <div>
        <h3 class="font-bold">What are you looking for?</h3>
        <ul class="inline-flex w-full justify-center py-2">
            <li v-for="option in options" class="pt-2">
                <input type="radio" :id="option.label" :value="option.value" name="interest" class="peer hidden" @click="$emit('selectedInterest', option.value)">
                <label :for="option.label" class="inline mx-2 p-2 transition duration-300 hover:bg-rose-500 dark:hover:bg-rose-500 hover:text-white dark:hover:text-white border-2 border-rose-400 hover:border-rose-500 dark:hover:border-rose-500 cursor-pointer rounded-full font-bold peer-checked:bg-rose-500 peer-checked:border-rose-500 peer-checked:text-white text-rose-400 dark:text-white bg-transparent dark:bg-transparent">
                    <UIcon :name="option.icon" class="w-5 h-5"/>
                    {{ option.label }}
                </label>
            </li>
        </ul>
    </div>
</template>
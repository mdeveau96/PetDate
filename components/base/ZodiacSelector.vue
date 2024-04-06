<script setup lang="ts">
const sign = defineModel()

const zodiacSigns = [{
    label: 'Aries',
    icon: 'i-mdi-zodiac-aries',
    value: 'aries'
}, {
    label: 'Tauras',
    icon: 'i-mdi-zodiac-taurus',
    value: 'tauras'
}, {
    label: 'Gemini',
    icon: 'i-mdi-zodiac-gemini',
    value: 'gemini'
}, {
    label: 'Cancer',
    icon: 'i-mdi-zodiac-cancer',
    value: 'cancer'
}, {
    label: 'Leo',
    icon: 'i-mdi-zodiac-leo',
    value: 'leo'
}, {
    label: 'Virgo',
    icon: 'i-mdi-zodiac-virgo',
    value: 'virgo'
}, {
    label: 'Libra',
    icon: 'i-mdi-zodiac-libra',
    value: 'libra'
}, {
    label: 'Scorpio',
    icon: 'i-mdi-zodiac-scorpio',
    value: 'scorpio'
}, {
    label: 'Sagittarius',
    icon: 'i-mdi-zodiac-sagittarius',
    value: 'sagittarius'
}, {
    label: 'Capricorn',
    icon: 'i-mdi-zodiac-capricorn',
    value: 'capricorn'
}, {
    label: 'Aquarius',
    icon: 'i-mdi-zodiac-aquarius',
    value: 'aquarius'
}, {
    label: 'Pisces',
    icon: 'i-mdi-zodiac-pisces',
    value: 'pisces'
}]

const selected = ref(zodiacSigns[0])
</script>

<template>
    <USelectMenu v-model="selected" :options="zodiacSigns" class="font-bold">
        <template #leading>
            <UIcon v-if="selected.icon" :name="(selected.icon as string)" class="w-5 h-5 text-rose-500 dark:text-rose-300"/>
        </template>
    </USelectMenu>
</template>
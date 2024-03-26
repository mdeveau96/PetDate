<script setup lang="ts">
import { onMounted, ref } from 'vue';

const items = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3',
    'https://picsum.photos/1920/1080?random=4',
    'https://picsum.photos/1920/1080?random=5',
    'https://picsum.photos/1920/1080?random=6'
]

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})

const name = ref('')

const nameSelect = ref(false)
const ageSelect = ref(false)
const bioSelect = ref(false)
const petSelect = ref(false)
</script>

<template>
    <div class="relative z-50">
        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-end sm:items-center justify-center text-center">
                <UCard class="p-4 sm:p-0 sm:my-8 min-w-96">
                    <!-- <div class="pb-6">
                        <img src="/paw_print.png" class="size-24 mx-auto">
                    </div> -->
                    <div class="pb-4">
                        <h2 class="font-bold pb-2">What is your name?</h2>
                        <UInput v-model="name" color="red" padded placeholder="First Name..." size="xl"
                            class="w-full border" />
                    </div>
                    <UButton size="xl" class="font-bold w-20 justify-center">Next</UButton>
                </UCard>
            </div>
        </div>
    </div>
    <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
        class="overflow-hidden h-screen">
        <img :src="item" class="w-full" draggable="false">
    </UCarousel>
</template>
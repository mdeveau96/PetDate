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

const isOpen = ref(true)
</script>

<template>
  <div class="relative z-50 opacity-90">
    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-end sm:items-center justify-center text-center">
        <UCard class="p-4 sm:p-0 sm:my-8 min-w-96">
          <div>
            <img src="/paw_print.png"
              class="size-24 z-40 mx-auto shadow-2xl dark:shadow-lg shadow-black dark:shadow-gray-400 ring-1.5 ring-gray-200 rounded-full">
            <h1 class="font-semibold text-3xl font-mono text-center py-4">Pet Date</h1>
            <UButton class="w-42 justify-center text-lg font-bold" to="/account">Find your match!</UButton>
          </div>
        </UCard>
      </div>
    </div>
  </div>
  <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
    class="overflow-hidden h-screen">
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(true)
</script>

<template>
  <div class="relative z-50 opacity-90">
    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-end sm:items-center justify-center text-center">
        <UCard class="p-4 sm:p-0 sm:my-8 min-w-96">
          <div>
            <a href='/'>
              <img src="/paw_print.png"
                class="size-24 z-40 mx-auto shadow-lg dark:shadow-lg shadow-gray-400 dark:shadow-gray-400 ring-1.5 ring-gray-200 rounded-full">
            </a>
            <h1 class="font-semibold text-3xl font-mono text-center py-4">Pet Date</h1>
            <UButton class="w-60 justify-center text-lg font-bold rounded-full" to="/account">Find your match!</UButton>
            <p class="pt-4">Already have an account? <a
                class="text-blue-500 hover:text-blue-500 hover:underline hover:cursor-pointer" href="/login">Log In!</a>
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
  <Carousel />
</template>

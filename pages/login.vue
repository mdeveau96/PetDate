<script setup lang="ts">

</script>

<template>
    <div class="relative z-50 opacity-90">
        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-end sm:items-center justify-center text-center">
                <UCard class="p-4 sm:p-0 sm:my-8 min-w-96">
                    <a href="/">
                        <img src="/paw_print.png"
                            class="size-24 z-40 mx-auto shadow-lg dark:shadow-lg shadow-gray-400 dark:shadow-gray-400 ring-1.5 ring-gray-200 rounded-full">
                    </a>
                    <LoginForm />
                </UCard>
            </div>
        </div>
    </div>
    <Carousel />
</template>
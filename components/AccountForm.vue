<script setup lang="ts">
import { ref } from 'vue';
import { object, string, number, type InferType } from 'yup'
import type { FormError, FormSubmitEvent } from '#ui/types'
import { format } from 'date-fns'

const date = ref(new Date())

const age = (date: Date) => {
    let timeDiff = Math.abs(Date.now() - date.getTime());
    return (Math.floor((timeDiff / (1000 * 3600 * 24))/365.25));
}

const schema = object({
    name: string().required('Required'),
    age: number().required('Required').positive().integer(),
    bio: string().nullable(),
    petName: string().nullable()
})

type Schema = InferType<typeof schema>

const state = reactive({
    name: undefined,
    petName: undefined,
    age: undefined
})

const showBioForm = ref(false)

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data)
}

const index = ref(0)
const increment = () => {
    index.value++
    console.log(index.value)
}

</script>

<template>
    <div class="relative z-50 opacity-90">
        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-end sm:items-center justify-center text-center">
                <UCard class="p-4 sm:p-0 sm:my-8 min-w-96">
                    <!-- <div class="pb-6">
                        <img src="/paw_print.png" class="size-24 mx-auto">
                    </div> -->
                    <div class="pb-2 justify-center">
                        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                            <div v-if="index == 0">
                                <h2 class="font-bold pb-2">What is your name?</h2>
                                <UFormGroup name="name">
                                    <UInput v-model="state.name" color="red" padded placeholder="First Name..."
                                        size="xl" class="w-full border" />
                                </UFormGroup>
                            </div>
                            <div v-if="index == 1">
                                <h2 class="font-bold pb-2">What is your pet's name?</h2>
                                <UFormGroup name="age">
                                    <UInput v-model="state.petName" label="What is your pet's name?" color="red" padded
                                        placeholder="Pet name..." size="xl" class="w-full border" />
                                </UFormGroup>
                            </div>
                            <UButton v-if="!showBioForm" size="xl"
                                @click="increment(); showBioForm = index == 2 ? true : false"
                                class="font-bold w-20 justify-center rounded-full">
                                Next</UButton>
                            <div v-if="showBioForm">
                                <UFormGroup name="bio">
                                    <UAvatar alt="{{ state.name }}" size="3xl" />
                                    <UInput type="file" size="sm" class="pt-2" />
                                    <UDivider class="py-2" />
                                    <div class="flex">
                                        <UPopover :popper="{ placement: 'bottom-start' }" class="w-auto">
                                            <UButton icon="i-heroicons-calendar-days-20-solid"
                                                :label="format(date, 'd MMM, yyy')"
                                                class="bg-rose-400 dark:bg-rose-400 hover:bg-rose-500 dark:hover:bg-rose-500" />

                                            <template #panel="{ close }">
                                                <DatePicker v-model="date" is-required @close="close" />
                                            </template>
                                        </UPopover>
                                        <h2 v-if="age" class="ml-8 font-extrabold">{{ age(date) }} years old</h2>
                                    </div>
                                </UFormGroup>
                                <UButton v-if="showBioForm" size="xl" type="submit"
                                    class="font-bold w-auto justify-center rounded-full">
                                    Create Account</UButton>
                            </div>
                        </UForm>
                    </div>
                </UCard>
            </div>
        </div>
    </div>
    <Carousel />
</template>
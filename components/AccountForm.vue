<script setup lang="ts">
import { ref } from 'vue';
import { object, string, number, type InferType, array } from 'yup'
import type { FormError, FormSubmitEvent } from '#ui/types'
import { format } from 'date-fns'

const date = ref(new Date())
const hobbies = ref([])

const schema = object({
    name: string().required('Required'),
    goal: string().required('Required'),
    bio: object(),
    petName: string().nullable(),
    age: number()
})

type Schema = InferType<typeof schema>

const state = reactive({
    name: string,
    goal: string,
    petName: string,
    age: number,
    interestedIn: string,
    nextForm: 0,
    zodiacSign: string,
})

const showBioForm = ref(true)
const showInterestForm = ref(false)
const lastForm = ref(false)

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
                            <!-- <div v-if="index == 0">
                                <h2 class="font-bold pb-2">What is your name?</h2>
                                <UFormGroup name="name">
                                    <UInput v-model="state.name" color="red" padded placeholder="First Name..."
                                        size="xl" class="w-full border" />
                                </UFormGroup>
                            </div> -->
                            <div v-if="state.nextForm == 1" class="grid grid-cols-1 gap-y-4">
                                <BaseGoalPicker v-model="state.goal" />
                            </div>
                            <div v-if="state.nextForm == 2">
                                <UFormGroup name="bio">
                                    <UAvatar icon="i-heroicons-photo" size="3xl" />
                                    <h3 class="font-bold">Let people see who you are!</h3>
                                    <UInput type="file" size="sm" class="pt-2" />
                                    <UDivider class="py-2 divide-rose-400" />
                                    <h3 class="font-bold">When were you born?</h3>
                                    <div class="flex justify-center pt-2">
                                        <UPopover :popper="{ placement: 'bottom-start' }" class="w-auto">
                                            <UButton icon="i-heroicons-calendar-days-20-solid"
                                                :label="format(date, 'd MMM, yyy')"
                                                class="bg-rose-400 dark:bg-rose-400 hover:bg-rose-500 dark:hover:bg-rose-500" />

                                            <template #panel="{ close }">
                                                <BaseDatePicker v-model="date" is-required @close="close" />
                                            </template>
                                        </UPopover>
                                    </div>
                                </UFormGroup>
                                <UDivider class="py-2 divide-rose-400" />
                                <UFormGroup>
                                    <h3 class="font-bold">What are you looking for?</h3>
                                    <div class="inline-flex w-full justify-center py-2">
                                        <BaseInterestSelector v-model="state.interestedIn" class="shadow-none mx-2" />
                                    </div>
                                </UFormGroup>
                                <UDivider class="py-2 divide-rose-400" />
                                <h3 class="font-bold py-2">What is your sign?</h3>
                                <BaseZodiacSelector v-model="state.zodiacSign"
                                    class="text-rose-900 dark:text-rose-300" />
                            </div>
                            <div v-if="state.nextForm == 3">
                                <div class="grid grid-cols-5 gap-3">
                                    <BaseHobbyTable v-model="hobbies" @click="hobbies.push($event.target.value)"/>
                                    <p>Hobbies: {{ hobbies }}</p>
                                </div>
                            </div>
                            <!-- <div v-if="state.nextForm == 4">
                                <h2 class="font-bold pb-2">What is your pet's name?</h2>
                                <UFormGroup name="age">
                                    <UInput v-model="state.petName" label="What is your pet's name?" color="red" padded
                                        placeholder="Pet name..." size="xl" class="w-full border" />
                                </UFormGroup>
                            </div> -->
                            <div class="inline-flex">
                                <UButton v-if="!lastForm" size="xl" @click="state.nextForm--"
                                    class="font-bold w-20 justify-center rounded-full">
                                    Back</UButton>
                                <UButton v-if="!lastForm" size="xl" @click="state.nextForm++"
                                    class="font-bold w-20 ml-4 justify-center rounded-full">
                                    Next</UButton>
                            </div>
                            <UButton v-if="lastForm" size="xl" type="submit"
                                class="font-bold w-auto justify-center rounded-full">
                                Create Account</UButton>
                        </UForm>
                    </div>
                </UCard>
            </div>
        </div>
    </div>
    <Carousel />
</template>

<style scoped>
.active {
    background-color: rgb(244 63 94);
    color: white;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { object, string, date, type InferType, ArraySchema } from 'yup'
import type { FormError, FormSubmitEvent } from '#ui/types'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../amplify/data/resource'
import { format } from 'date-fns'

const client = generateClient<Schema>();

const nextForm = ref(0)
const hobbies: string[] = [] 
const initialDate = ref(new Date())

const user = object({
    name: string().required('Required'),
    goal: string().required('Required'),
    bio: object(),
    petName: string().nullable(),
    birthday: date()
})

type userSchema = InferType<typeof user>

const state = reactive({
    name: '',
    goal: '',
    petName: '',
    birthday: initialDate,
    interestedIn: '',
    zodiacSign: '',
    hobbies: hobbies,
    userAvatar: File,
    petAvatar: File
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<userSchema>) {
    console.log(event.data)
}

function updateHobbie(hobbie: any) {
    if (!state.hobbies.includes(hobbie)) {
        state.hobbies.push(hobbie)
    } else {
        let index = state.hobbies.indexOf(hobbie)
        state.hobbies.splice(index, 1)
    }
    console.log(state.hobbies)
}
function setZodiac(sign: string) {
    console.log(sign)
    state.zodiacSign = sign
}
function setGoal(goal: string) {
    state.goal = goal
}
function setInterest(interest: string) {
    state.interestedIn = interest
}
const fetchUsers = async () => {
    const { data: users, errors } = await client.models.users.list()
}
</script>

<template>
    <AppHeader/>
    <div class="relative z-50 opacity-90">
        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-end sm:items-center justify-center text-center">
                <UCard class="p-4 sm:p-0 sm:my-8 min-w-96">
                    <div class="pb-6">
                        <img src="/paw_print.png" class="size-24 mx-auto rounded-full">
                    </div>
                    <div class="pb-2 justify-center">
                        <UForm :schema="user" :state="state" class="space-y-4" @submit="onSubmit">

                            <div v-if="nextForm == 0">
                                <UFormGroup name="name">
                                    <h2 class="font-bold pb-2">What is your name?</h2>
                                    <UInput v-model="state.name" color="red" padded placeholder="First Name..."
                                    size="xl" class="w-full" />
                                </UFormGroup>
                            </div>

                            <div v-if="nextForm == 1">
                                <UFormGroup name="goal">
                                    <BaseGoalPicker v-model="state.goal" @selected-goal="setGoal"/>
                                </UFormGroup>
                            </div>

                            <div v-if="nextForm == 2">
                                <UFormGroup name="bio">
                                    <div>
                                        <UAvatar icon="i-heroicons-photo" size="3xl" />
                                        <h3 class="font-bold">Let people see who you are!</h3>
                                        <UInput type="file" size="sm" class="pt-2" />
                                        <UDivider class="py-2 divide-rose-400" />
                                        <h3 class="font-bold">When were you born?</h3>
                                        <div class="flex justify-center pt-2">
                                            <UPopover :popper="{ placement: 'bottom-start' }">
                                                <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(initialDate, 'd MMM, yyy')"
                                                    class="transition duration-300 hover:bg-rose-500 dark:hover:bg-rose-500 hover:text-white dark:hover:text-white border-2 border-rose-400 hover:border-rose-500 dark:hover:border-rose-500 cursor-pointer rounded-full font-bold peer-checked:bg-rose-500 peer-checked:border-rose-500 peer-checked:text-white text-rose-400 dark:text-white bg-transparent dark:bg-transparent"
                                                />
                                                <template #panel="{ close }">
                                                    <BaseDatePicker v-model="initialDate" is-required @close="close" />
                                                </template>
                                            </UPopover>
                                        </div>
                                    </div>
                                    <UDivider class="py-2 divide-rose-400" />
                                    <BaseInterestSelector v-model="state.interestedIn" class="shadow-none mx-2" @selected-interest="setInterest"/>
                                    <UDivider class="py-2 divide-rose-400" />
                                    <BaseZodiacSelector v-model="state.zodiacSign" @selected-zodiac="setZodiac"/>
                                </UFormGroup>
                            </div>

                            <div v-if="nextForm == 3">
                                <UFormGroup name="hobbies">
                                    <BaseHobbyTable v-model="state.hobbies" @update:hobbie-value="updateHobbie"/>
                                </UFormGroup>
                            </div>

                            <div v-if="nextForm == 4">
                                <UFormGroup name="age">
                                    <UInput v-model="state.petName" color="red" padded placeholder="Pet Name..."
                                    size="xl" class="w-full" />
                                </UFormGroup>
                            </div>
                            
                            <div class="inline-flex font-bold text-rose-400 dark:text-white bg-transparent dark:bg-transparent">
                                <UButton v-if="nextForm > 0 && nextForm < 5" size="xl" @click="nextForm--"
                                    class="font-bold w-20 mr-4 justify-center inline-flex transition duration-300 hover:bg-primary-600 dark:hover:bg-primary-600 text-primary-500 dark:text-primary-500 hover:text-white dark:hover:text-white border-2 border-primary-500 hover:border-primary-600 dark:hover:border-primary-600 cursor-pointer rounded-full bg-transparent dark:bg-transparent">
                                    Back</UButton>
                                <UButton v-if="nextForm < 5" size="xl" @click="nextForm++"
                                    class="font-bold w-20 justify-center inline-flex transition duration-300 hover:bg-primary-600 dark:hover:bg-primary-600 text-primary-500 dark:text-primary-500 hover:text-white dark:hover:text-white border-2 border-primary-500 hover:border-primary-600 dark:hover:border-primary-600 cursor-pointer rounded-full bg-transparent dark:bg-transparent">
                                    Next</UButton>
                            </div>
                            
                            <div v-if="nextForm == 5">
                                <table>
                                    Name: {{ state.name }}
                                    <!-- <div><p class="text-left">Name:</p><p class="text-center">{{ state.name }}</p></div> -->
                                    <UDivider class="py-2 divide-rose-400" />
                                    Looking For: {{ state.goal }}
                                    <UDivider class="py-2 divide-rose-400" />
                                    Pet Name: {{ state.petName }}
                                    <UDivider class="py-2 divide-rose-400" />
                                    Birthday: {{ state.birthday }}
                                    <UDivider class="py-2 divide-rose-400" />
                                    Interested In: {{ state.interestedIn }}
                                    <UDivider class="py-2 divide-rose-400" />
                                    Zodiac Sign: {{ state.zodiacSign }}
                                    <UDivider class="py-2 divide-rose-400" /> 
                                    Hobbies: {{ state.hobbies }}
                                </table>
                            </div>

                            <UButton v-if="nextForm >= 5" size="xl" type="submit"
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

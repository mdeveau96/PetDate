<script setup lang="ts">
import { ref } from 'vue'
import { object, string, date, type InferType } from 'yup'
import type { FormError, FormSubmitEvent } from '#ui/types'

const nextForm = ref(0)
const name = ref()
const initialDate = ref(new Date())
const attrs = ref([
    {
        highlight: {
            color: 'rose',
            fillmode: 'solid'
        },
        dates: new Date(),

    }
])

const schema = object({
    name: string().required('Required'),
    goal: string().required('Required'),
    bio: object(),
    petName: string().nullable(),
    birthday: date()
})

type Schema = InferType<typeof schema>

const state = reactive({
    name: name,
    goal: undefined,
    petName: undefined,
    birthday: undefined,
    interestedIn: undefined,
    zodiacSign: undefined,
    hobbies: [string]
})

const lastForm = ref(false)

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
    console.log(event.data)
}

function addHobbie(hobbie: any) {
    state.hobbies.push(hobbie)
    console.log(state.hobbies)
}
function setZodiac(sign: any) {
    state.zodiacSign = sign
}
function setGoal(goal: any) {
    state.goal=goal
    console.log(goal)
}
function setInterest(interest: any) {
    state.interestedIn = interest
    console.log(interest)
    console.log(state)
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
                        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">

                            <div v-if="nextForm == 0">
                                <UFormGroup name="name">
                                    <h2 class="font-bold pb-2">What is your name?</h2>
                                    <UInput v-model="name" color="red" padded placeholder="First Name..."
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
                                            <VDatePicker v-model="state.birthday" :attributes="attrs" is-dark="system" is-required>
                                                <template #default="{ togglePopover}" class="bg-rose-400 dark:bg-rose-400">
                                                    <UButton
                                                        icon="i-ion-calendar-clear-outline"
                                                        size="lg"
                                                        class="text-white dark:text-white bg-rose-400 dark:bg-rose-400 hover:bg-rose-500 dark:hover:bg-rose-500 font-bold rounded-full"
                                                        @click="togglePopover">
                                                        {{ initialDate.toLocaleDateString() }}
                                                    </UButton>
                                                </template>
                                            </VDatePicker>
                                        </div>
                                    </div>
                                    <UDivider class="py-2 divide-rose-400" />
                                    <BaseInterestSelector v-model="state.interestedIn" class="shadow-none mx-2" @selected-interest="setInterest"/>
                                    <UDivider class="py-2 divide-rose-400" />
                                    <BaseZodiacSelector v-model="state.zodiacSign"
                                        class="text-rose-900 dark:text-rose-300" @selected-zodiac="setZodiac"/>
                                </UFormGroup>
                            </div>

                            <div v-if="nextForm == 3">
                                <UFormGroup name="hobbies">
                                    <BaseHobbyTable v-model="state.hobbies" @selected-hobbie="addHobbie"/>
                                    <p>{{ state.hobbies }}</p>
                                </UFormGroup>
                            </div>

                            <div v-if="nextForm == 4">
                                <UFormGroup name="age">
                                    <BasePetData v-model="state.petName" />
                                </UFormGroup>
                            </div>
                            
                            <div class="inline-flex">
                                <UButton v-if="!lastForm && nextForm > 0" size="xl" @click="nextForm--"
                                    class="font-bold w-20 justify-center rounded-full">
                                    Back</UButton>
                                <UButton v-if="!lastForm" size="xl" @click="nextForm++"
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

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required')
})

const forgottenSchema = object({
    email: string().email('Invalid email').required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data)
}

const isOpen = ref(false)

</script>

<template>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" placeholder="Enter your email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
            <template #hint>
                <a class="text-blue-500 hover:text-blue-500 hover:underline hover:cursor-pointer"
                    @click="isOpen = true">Forgot password?</a>
            </template>
            <template #default>
                <UInput v-model="state.password" type="password" placeholder="Enter your password" />
            </template>
        </UFormGroup>

        <UButton type="submit" class="rounded-full w-full justify-center">
            Submit
        </UButton>

        <UModal v-model="isOpen">
            <div class="p-4 justify-center">
                <div class="w-14 mx-auto">
                    <a href="/">
                        <img src="/paw_print.png" class="h-14 rounded-full">
                    </a>
                </div>
                <h1 class="font-lg text-center py-2">Reset your password</h1>
                <UCard>
                    <UForm :schema="forgottenSchema" class="space-y-4" @submit="onSubmit">
                        <UFormGroup
                            label="Enter your user account's verified email address and we will send you a password reset link."
                            name="email">
                            <UInput v-model="state.email" placeholder="Enter your email" />
                        </UFormGroup>
                        <UButton type="submit" class="rounded-full w-full justify-center">
                            Submit
                        </UButton>
                    </UForm>
                </UCard>
            </div>
        </UModal>
    </UForm>
</template>
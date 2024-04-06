<script setup lang="ts">
import { ref } from 'vue'

const hobbies = [{
  label: 'Camping',
  icon: 'i-twemoji-camping'
}, {
  label: 'Hiking',
  icon: 'i-twemoji-hiking-boot'
}, {
  label: 'Running',
  icon: 'i-twemoji-man-running'
}, {
  label: 'Video Games',
  icon: 'i-twemoji-video-game'
}, {
  label: 'Movies',
  icon: 'i-twemoji-movie-camera'
}, {
  label: 'Writing',
  icon: 'i-twemoji-writing-hand'
}, {
  label: 'Reading',
  icon: 'i-twemoji-books'
}, {
  label: 'Swimming',
  icon: 'i-twemoji-person-swimming'
}, {
  label: 'Football',
  icon: 'i-twemoji-american-football'
}, {
  label: 'Basketball',
  icon: 'i-twemoji-basketball'
}, {
  label: 'Golf',
  icon: 'i-twemoji-person-golfing'
}, {
  label: 'Baseball',
  icon: 'i-twemoji-baseball'
}, {
  label: 'Lifting Weights',
  icon: 'i-twemoji-person-lifting-weights'
}, {
  label: 'Beach',
  icon: 'i-twemoji-beach-with-umbrella'
}, {
  label: 'Traveling',
  icon: 'i-twemoji-airplane'
}]

const selected = ref([])

</script>

<template>
  <UButton v-for="hobbie in hobbies" :label="hobbie.label" :icon="hobbie.icon" @click="selected.push($event.target.push)"
    class="rounded-full bg-rose-400 dark:bg-rose-400 hover:bg-rose-500 dark:hover:bg-rose-500 focus:bg-rose-600 dark:focus:bg-rose-600"/>
</template>

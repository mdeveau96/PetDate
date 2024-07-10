<script setup lang="ts">

const hobbies = [{
  label: 'Camping',
  icon: 'i-twemoji-camping',
  value:'Camping'
}, {
  label: 'Hiking',
  icon: 'i-twemoji-hiking-boot',
  value:'Hiking'
}, {
  label: 'Running',
  icon: 'i-twemoji-man-running',
  value:'Running'
}, {
  label: 'Video Games',
  icon: 'i-twemoji-video-game',
  value:'videoGames'
}, {
  label: 'Movies',
  icon: 'i-twemoji-movie-camera',
  value:'Movies'
}, {
  label: 'Writing',
  icon: 'i-twemoji-writing-hand',
  value:'Writing'
}, {
  label: 'Reading',
  icon: 'i-twemoji-books',
  value:'Reading'
}, {
  label: 'Swimming',
  icon: 'i-twemoji-person-swimming',
  value:'Swimming'
}, {
  label: 'Football',
  icon: 'i-twemoji-american-football',
  value:'Football'
}, {
  label: 'Basketball',
  icon: 'i-twemoji-basketball',
  value:'Basketball'
}, {
  label: 'Golf',
  icon: 'i-twemoji-person-golfing',
  value:'Golf'
}, {
  label: 'Baseball',
  icon: 'i-twemoji-baseball',
  value:'Baseball'
}, {
  label: 'Lifting Weights',
  icon: 'i-twemoji-person-lifting-weights',
  value:'liftingWeights'
}, {
  label: 'Beach',
  icon: 'i-twemoji-beach-with-umbrella',
  value:'Beach'
}, {
  label: 'Traveling',
  icon: 'i-twemoji-airplane',
  value:'Traveling'
}]

const emit = defineEmits(['selectedHobbie'])

</script>

<template>
  <div class="grid grid-cols-5 gap-3">
    <UButton v-for="hobbie in hobbies" :label="hobbie.label" :icon="hobbie.icon" @click="$emit('selectedHobbie', hobbie.label)"
      class="rounded-full bg-rose-400 dark:bg-rose-400 hover:bg-rose-500 dark:hover:bg-rose-500 focus:bg-rose-600 dark:focus:bg-rose-600"/>
  </div>
</template>

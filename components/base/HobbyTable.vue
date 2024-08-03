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

const emit = defineEmits(['update:hobbie-value', 'remove:hobbie-value'])

</script>

<template>
  <div>
    <ul class="py-3 grid grid-cols-5">
      <li v-for="hobbie in hobbies">
        <input type="checkbox" :id="hobbie.label" :value="hobbie.value" name="interest" class="peer hidden" @click="$emit('update:hobbie-value', hobbie.value)" @dblclick="$emit('remove:hobbie-value', hobbie.value)">
        <label :for="hobbie.label" class="inline-flex mx-2 p-1.5 transition duration-300 hover:bg-rose-500 dark:hover:bg-rose-500 hover:text-white dark:hover:text-white border-2 border-rose-400 hover:border-rose-500 dark:hover:border-rose-500 cursor-pointer rounded-full font-bold peer-checked:bg-rose-500 peer-checked:border-rose-500 peer-checked:text-white text-rose-400 dark:text-white bg-transparent dark:bg-transparent">
            <UIcon :name="hobbie.icon" class="w-5 h-5"/>
            <p class="mx-2">{{ hobbie.label }}</p>
        </label>
      </li>
    </ul>
  </div>
</template>

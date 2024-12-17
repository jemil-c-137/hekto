<template>
  <div class="mx-auto my-0 shadow-lg max-w-[370px] rounded-lg">
    <img class="rounded-lg" :src="imageUrl" alt="" />

    <div class="p-5 mb-8">
      <div class="flex gap-8 mb-8">
        <p class="flex items-baseline">
          <PenIcon class="mr-1" />
          <span>Saber Ali </span>
        </p>
        <p class="flex items-baseline">
          <CalendarIcon class="mr-1" />
          <span>21 august, 2020 </span>
        </p>
      </div>

      <p class="mb-4 text-lg font-josefin font-bold">{{ title }}</p>
      <p class="text-brand-text-secondary leading-7 mb-4">
        {{ subtext }}
      </p>
      <a href="#" class="link">Read More</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import PenIcon from '@/UI/svg/logos/PenIcon.vue'
import CalendarIcon from '@/UI/svg/logos/CalendarIcon.vue'

defineProps<{
  imageUrl: string
  title: string
  subtext: string
}>()
</script>

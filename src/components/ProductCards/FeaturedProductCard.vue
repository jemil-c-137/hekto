<template>
  <div class="w-full group shadow-2xl max-w-[270px] mx-auto my-0">
    <div
      class="h-[236px] bg-purple-white group-hover:bg-light-gray flex justify-center items-center relative"
    >
      <CardActions />
      <img :src="imageUrl" alt="" />
      <button
        class="hidden group-hover:block absolute bottom-4 hover:bg-blue active:bg-dark-navy transition-colors rounded bg-green py-2 px-4 text-white font-josefin"
      >
        View Details
      </button>
    </div>
    <div class="pt-4 bg-white text-center group-hover:bg-blue transition-colors">
      <p class="group-hover:text-white text-lg text-pink font-bold mb-3">{{ productName }}</p>
      <div class="flex justify-center mb-3">
        <div class="flex justify-center gap-x-2 group-hover:bg-white w-fit px-2 py-1">
          <span class="block w-8 h-2 bg-mint rounded"></span>
          <span class="block w-8 h-2 bg-pink rounded"></span>
          <span class="block w-8 h-2 bg-blue rounded"></span>
        </div>
      </div>
      <p class="mb-3 text-navy-blue font-josefin group-hover:text-white">{{ code }}</p>
      <p class="pb-3 text-navy-blue font-josefin group-hover:text-white">{{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardActions from './CardActions.vue'

defineProps<{
  productName: string
  price: string
  code: string
  imageUrl: string
}>()
</script>

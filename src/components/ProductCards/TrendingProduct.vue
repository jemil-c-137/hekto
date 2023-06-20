<template>
  <div
    class="bg-white p-3 shadow-2xl group hover:bg-off-navy-blue cursor-pointer rounded hover:shadow-blue"
  >
    <div
      class="relative bg-purple-white max-w-[250px] max-h-[245px] h-full flex items-center justify-center py-7 mb-4 group-hover:bg-white rounded group-hover:shadow group-hover:shadow-white"
    >
      <img :src="imageUrl" alt="" />
      <CardActions placement="top-left" />
    </div>
    <div class="text-center mb-5 group-hover:text-white">
      <p>{{ name }}</p>
      <span class="font-josefin mr-3">{{ price }}</span>
      <span
        v-if="oldPrice"
        class="font-josefin line-through opacity-30 text-sm group-hover:text-purple-white group-hover:opacity-100"
        >{{ oldPrice }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import CardActions from '../../components/ProductCards/CardActions.vue'

defineProps<{
  name: string
  imageUrl: string
  price: string
  oldPrice?: string
}>()
</script>

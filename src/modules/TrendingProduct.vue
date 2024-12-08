<template>
  <RouterLink :to="{ name: 'product-details', params: { id: `${id}` } }">
    <div
      class="bg-white p-3 shadow-2xl max-w-[250px] w-full mx-auto my-0 group hover:bg-off-navy-blue cursor-pointer rounded hover:shadow-blue"
    >
      <div
        class="relative bg-purple-white max-h-[245px] h-full flex items-center justify-center py-7 mb-4 group-hover:bg-white rounded group-hover:shadow group-hover:shadow-white"
      >
        <img :src="imageUrl" alt="" />
        <CardActions placement="top-left" />
      </div>
      <div class="text-center mb-5 group-hover:text-white">
        <p>{{ name }}</p>
        <span class="font-josefin mr-3">{{ discountedPrice ? discountedPrice : price }}</span>
        <span
          v-if="discountedPrice"
          class="font-josefin line-through opacity-30 text-sm group-hover:text-purple-white group-hover:opacity-100"
          >{{ price }}</span
        >
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import CardActions from '@/components/CardActions.vue'

defineProps<{
  name: string
  imageUrl: string
  price: string
  discountedPrice: string | null
  id: number
}>()
</script>

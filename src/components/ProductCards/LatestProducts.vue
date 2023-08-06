<template>
  <RouterLink :to="{ name: 'product-details', params: { id: `${id}` } }">
    <div class="w-full max-w-[360px] mx-auto my-0 group">
      <div
        class="relative h-[260px] bg-light-gray group-hover:bg-white transition-colors flex justify-center items-center mb-4 rounded"
      >
        <img :src="imgUrl" alt="" />
        <SaleBadge v-if="discountedPrice" class="absolute left-5 top-5" />
        <CardActions placement="bottom-left" :vertical="true" />
      </div>
      <div class="font-josefin flex justify-between">
        <p
          class="text-navy-blue relative after:content-[''] after:w-full after:h-1 after:bg-pantone-purple after:top-4 after:block"
        >
          {{ name }}
        </p>
        <div class="pr-4">
          <span class="text-navy-blue text-sm mr-2">{{
            discountedPrice ? discountedPrice : price
          }}</span>
          <span v-if="discountedPrice" class="text-red text-sm line-through">{{ price }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import SaleBadge from '../svg/SaleBadge.vue'
import CardActions from './CardActions.vue'

defineProps<{
  name: string
  price: string
  imgUrl: string
  discountedPrice: string | null
  id: string
}>()
</script>

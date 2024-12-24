<template>
  <RouterLink :to="{ name: 'product-details', params: { id: `${id}` } }">
    <div class="w-full max-w-[360px] mx-auto my-0 group">
      <div
        class="relative h-[260px] bg-brand-bg-gray group-hover:bg-white transition-colors flex justify-center items-center mb-4 rounded"
      >
        <img :src="imageUrl" alt="" />
        <SaleBadge v-if="discountedPrice" class="absolute left-5 top-5" />
        <CardActions placement="bottom-left" :vertical="true" />
      </div>
      <div class="font-josefin flex justify-between">
        <p
          class="text-brand-text-primary relative after:content-[''] after:w-full after:h-1 after:bg-brand-decorative after:top-4 after:block"
        >
          {{ name }}
        </p>
        <div class="pr-4">
          <span class="text-brand-text-primary text-sm mr-2">{{
            discountedPrice ? discountedPrice : price
          }}</span>
          <span v-if="discountedPrice" class="text-brand-accent text-sm line-through">{{ price }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template> 

<script setup lang="ts">
import SaleBadge from '@/UI/svg/SaleBadge.vue'
import CardActions from '@/components/CardActions.vue'

import { ProductCardProps } from '../../types'

defineProps<ProductCardProps>()
</script>

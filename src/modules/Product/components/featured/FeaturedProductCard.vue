<template>
  <div class="w-full group shadow-2xl max-w-[270px] mx-auto my-0">
    <div
      class="h-[236px] bg-brand-bg-secondary group-hover:bg-brand-bg-gray flex justify-center items-center relative"
    >
      <CardActions />
      <img :src="imageUrl" alt="" />
      <RouterLink
        class="hidden group-hover:block absolute bottom-4"
        :to="{ name: 'product-details', params: { id: `${id}` } }"
      >
        <BaseButton :style="'secondary'">View Details</BaseButton>
      </RouterLink>
    </div>
    <div class="pt-4 bg-white text-center group-hover:bg-brand-secondary transition-colors">
      <p class="group-hover:text-white text-lg text-brand-primary font-bold mb-3">{{ name }}</p>
      <div class="flex justify-center mb-3">
        <div class="flex justify-center gap-x-2 group-hover:bg-white w-fit px-2 py-1">
          <span class="block w-8 h-2 bg-brand-mint rounded"></span>
          <span class="block w-8 h-2 bg-brand-primary rounded"></span>
          <span class="block w-8 h-2 bg-brand-secondary rounded"></span>
        </div>
      </div>
      <p class="mb-3 text-brand-text-primary font-josefin group-hover:text-white">{{ code }}</p>
      <p class="pb-3 text-brand-text-primary font-josefin group-hover:text-white">{{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardActions from '@/components/CardActions.vue'
import BaseButton from '@/UI/BaseButton.vue'

import { ProductCardProps } from '../../types';

defineProps<ProductCardProps>()
</script>

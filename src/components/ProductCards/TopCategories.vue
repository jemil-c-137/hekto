<template>
  <div class="text-center w-[270px] mx-auto my-0 group">
    <div
      class="relative w-full h-[270px] bg-purple-white rounded-full flex justify-center items-center shadow-md group-hover:shadow-purple group-hover:shadow-2xl mb-10"
    >
      <img :src="imageUrl" alt="" />
      <RouterLink
        class="hidden group-hover:block absolute bottom-4"
        :to="{ name: 'product-details', params: { id: `${id}` } }"
      >
        <button class="view-details">View Details</button>
      </RouterLink>
    </div>
    <p class="font-josefin text-xl">{{ name }}</p>
    <p class="font-josefin">{{ price }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; price: string; imageUrl: string; id: number }>()
</script>

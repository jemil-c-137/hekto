<template>
  <div
    :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'"
    class="content-container flex flex-col py-9 items-center gap-y-16 md:gap-x-5 justify-between"
  >
    <div class="flex-1">
      <p class="font-bold text-pink mb-3">{{ leadingText }}</p>
      <h2 class="text-[53px] font-josefin tracking-wide mb-3">
        {{ name }}
      </h2>
      <p class="font-bold text-pale-purple mb-5">
        {{ subtext }}
      </p>
      <BaseButton size="l">Show Now</BaseButton>
    </div>
    <div class="flex-1 relative order-[-1] md:order-2">
      <img :src="imageUrl" alt="" srcset="" />
      <div
        class="absolute top-6 right-4 w-full max-w-[60px] md:max-w-[140px] h-full max-h-[60px] md:max-h-[140px]"
      >
        <img class="absolute" src="../assets/discount.png" alt="" srcset="" />
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base md:text-4xl font-josefin font-bold text-center text-white"
        >
          50% off
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue';

defineProps<{
  reverse?: boolean
  imageUrl: string
  name: string
  leadingText: string
  subtext: string
}>()
</script>

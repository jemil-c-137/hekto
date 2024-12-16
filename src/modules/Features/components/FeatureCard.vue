<template>
    <div>
          <div
            class="mx-auto my-0 bg-white shadow-2xl px-6 py-11 cursor-pointer transition-colors flex justify-center items-center flex-col max-w-[270px] rounded hover:bg-brand-highlight group hover:shadow-brand-text-primary"
          >
            <slot name="icon" />
            <p class="text-lg text-brand-text-primary font-josefin mb-5 group-hover:text-white">
              {{ title }}
            </p>
            <p class="font-bold text-center text-brand-muted group-hover:text-white">
              {{ description }}
            </p>
          </div>
      </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>()
</script>

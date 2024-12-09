<template>
    <div>
          <div
            class="mx-auto my-0 bg-white shadow-2xl px-6 py-11 cursor-pointer transition-colors flex justify-center items-center flex-col max-w-[270px] rounded hover:bg-off-navy-blue group hover:shadow-navy-blue"
          >
            <slot name="icon" />
            <p class="text-lg text-navy-blue font-josefin mb-5 group-hover:text-white">
              {{ title }}
            </p>
            <p class="font-bold text-center text-pale-purple group-hover:text-white">
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

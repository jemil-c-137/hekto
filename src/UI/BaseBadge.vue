<template>
    <div class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-semibold text-white opacity-70" :class="`bg-${bgColor}`">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{ bgColor: string }>()
</script>
<template>
    <div class="pr-4">
        <span class="text-brand-text-primary text-sm mr-2">
            {{ discountedPrice ? discountedPrice : price }}
        </span>
        <span v-if="discountedPrice" class="text-brand-accent text-sm line-through">{{ price }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    price: string
    discountedPrice: string | null;
}>()
</script>

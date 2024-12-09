<template>
    <section :class="withBg ? 'bg-light' : ''" class="py-4 mb-32">
        <div class="content-container">
            <div
            class="grid grid-cols-1 md:grid-cols-2 items-center justify-center"
            >
                <img class="mx-auto my-0 max-w-full h-auto" :src="imageUrl" alt="" />
                <div :class="isReverse ? 'md:order-[-1]' : ''" class="w-full">
                    <h5 class="product-title mb-7">{{ title }}</h5>
                    <p v-if="subtitle" class="font-josefin text-pink text-xl mb-5">{{ subtitle }}</p>
                    <p class="leading-8 text-pale-purple mb-5">{{ description }}</p>
                    <BulletList v-if="productFeatures" :items="productFeatures" class="mb-8" />
                    <div class="flex flex-row items-center gap-8">
                        <BaseButton @click="$emit('cta-click')">{{ ctaText }}</BaseButton>
                        <div v-if="product" class="font-josefin">
                            <p class="font-bold">{{ product.name }}</p>
                            <p>{{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue'
import BulletList from '@/UI/BulletList.vue'

defineProps<{
    title: string
    imageUrl: string
    productFeatures: string[]
    ctaText: string
    withBg?: boolean
    isReverse?: boolean
    description?: string
    subtitle?: string
    product?: {
        name: string
        price: string
    }
}>()

defineEmits<{
    (e: 'cta-click'): void
}>()
</script>

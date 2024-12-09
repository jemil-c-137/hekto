<template>
    <SpecialProductCard
        title="Unique Features Of latest & Trending Poducts"
        withBg
        :imageUrl="BlueSofaImage"
        :productFeatures="productList"
        ctaText="Add to cart"
        :product="{
            name: 'B&B Italian Sofa',
            price: '$32.00'
        }"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlueSofaImage from '@/shared/assets/b-sofe.png'
import SpecialProductCard from './SpecialProductCard.vue'

const productList = ref([
    "All frames constructed with hardwood solids and laminates",
    "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
    "Arms, backs and seats are structurally reinforced",
])
</script>

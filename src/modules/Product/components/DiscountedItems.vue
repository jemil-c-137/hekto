<template>
    <section class="content-container">
        <div class="mb-32">
            <h5 class="section-title mb-32">Discount items</h5>

            <SpecialProductCard
                title="20% Discount of All Products"
                subtitle="Eams Sofa Compact"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum."
                :imageUrl="WoodChairImage"
                :productFeatures="productFeatures"
                isReverse
                ctaText="Shop Now"
            />
        </div>
    </section>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import WoodChairImage from '@/shared/assets/discount/wood-chair.png'
import SpecialProductCard from './SpecialProductCard.vue'

const productFeatures = ref([
    "Material expose like metals",
    "Simple neutral colours.",
    "Clear lines and geomatric figures",
    "Material expose like metals",
])
</script>

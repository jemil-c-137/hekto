<template>
    <h3 class="section-title mb-12">Featured Products</h3>
    <div class="mb-32 grid gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        <FeaturedProductCard
            v-for="product in featuredProducts"
            :id="product.id"
            :key="product.id"
            :name="product.name"
            :price="product.price"
            :code="product.code"
            :imageUrl="product.imageUrl" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FeaturedProductCard from './FeaturedProductCard.vue'
import { fetchFeaturedProducts } from '../../api/fetchProducts';
import { IProduct } from '@/shared/types';

const featuredProducts = ref<IProduct[] | null>(null);

onMounted(async () => {
    const productsData = await fetchFeaturedProducts();
    featuredProducts.value = productsData;
})
</script>

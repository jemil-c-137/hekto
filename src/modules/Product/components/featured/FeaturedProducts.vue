<template>
    <h3 class="section-title mb-12">Featured Products</h3>
    <div class="mb-32 grid gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        <LoadingSpinner v-if="loading" />
        <AlertMessage v-else-if="error" :message="error" type="error" />
        <FeaturedProductCard
            v-else
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
import FeaturedProductCard from './FeaturedProductCard.vue'
import LoadingSpinner from '@/UI/LoadingSpinner.vue'
import AlertMessage from '@/UI/AlertMessage.vue'
import { useProducts } from '../../composables/useProducts';

const { products: featuredProducts, loading, error } = useProducts('featured');

</script>
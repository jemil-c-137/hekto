<template>
    <h3 class="section-title mb-3">Latest Products</h3>
    <LoadingSpinner v-if="loading" />
    <AlertMessage v-else-if="error" :message="error" type="error" />
    <div v-else class="flex justify-center gap-3 mb-14">
    <span
        :class="[
        activeLatestProducts === LatestProductsOptions.NewArrival && 'text-pink underline'
        ]"
        @click="setActiveLatestProduct(LatestProductsOptions.NewArrival)"
        class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
        >New Arrival</span
    >
    <span
        :class="[
        activeLatestProducts === LatestProductsOptions.BestSeller && 'text-pink underline'
        ]"
        @click="setActiveLatestProduct(LatestProductsOptions.BestSeller)"
        class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
        >Best Seller</span
    >
    <span
        :class="[
        activeLatestProducts === LatestProductsOptions.Featured && 'text-pink underline'
        ]"
        @click="setActiveLatestProduct(LatestProductsOptions.Featured)"
        class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
        >Featured</span
    >
    <span
        :class="[
        activeLatestProducts === LatestProductsOptions.SpecialOffer && 'text-pink underline'
        ]"
        @click="setActiveLatestProduct(LatestProductsOptions.SpecialOffer)"
        class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
        >Special Offer</span
    >
    </div>

    <div class="mb-32 grid gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        <LatestProductCard
            v-for="product in latestProducts"
            :key="product.id"
            :code="product.code"
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :discounted-price="product.discountedPrice"
            :image-url="product.imageUrl"
        />
    </div>
</template>

<script setup lang="ts">
import { LatestProductsOptions } from '@/shared/types';
import { ref } from 'vue';
import { useProducts } from '../../composables/useProducts'
import LatestProductCard from './LatestProductCard.vue';
import LoadingSpinner from '@/UI/LoadingSpinner.vue'
import AlertMessage from '@/UI/AlertMessage.vue'
const activeLatestProducts = ref<LatestProductsOptions>(LatestProductsOptions.NewArrival);

const { products: latestProducts, loading, error } = useProducts('latest');

const setActiveLatestProduct = (value: LatestProductsOptions) => {
    activeLatestProducts.value = value
}
</script>

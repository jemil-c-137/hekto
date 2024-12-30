<template>
    <div class="flex bg-white shadow-2xl max-w-7xl p-4 font-josefin">
        <div class="w-5/12 flex justify-center items-center">
            <img :src="product.imageUrl" alt="">
        </div>
        <div class="w-7/12">
            <h1 class="mt-12 product-title">{{ product.name }}</h1>
            <span class="mt-3">{{ product.rating }}</span>
            <div class="flex mt-3">
                <PriceTag :price="product.price" :discounted-price="product.discountedPrice" />
            </div>
            <p class="mt-3">
                <span>
                    Color: 
                </span>
                <span :style="`color: ${product.color.hexValue}`">{{ product.color.name }}</span>
                <span :style="`background: ${product.color.hexValue}`" class="w-3 h-3 ml-1 inline-block"></span>
            </p>
            <div class="mt-3 text-brand-semi">{{ product.description }}</div>
            <BaseButton class="mt-3">Add To Cart</BaseButton>
            <div class="mt-3">Categories: <BaseBadge v-for="category in product.categories" :key="category" bg-color="brand-interactive" class="mr-1">{{ category }}</BaseBadge></div>
            <div>Tags: <BaseBadge bg-color="brand-highlight">{{ product.tags }}</BaseBadge></div>
            <div>Share</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue';
import BaseBadge from '@/UI/BaseBadge.vue';
import { IProduct } from '../../types';
import PriceTag from '../PriceTag.vue';

defineProps<{ product: IProduct }>()
</script>

<template>
    <div class="content-container flex bg-white shadow-2xl max-w-7xl p-4 font-josefin">
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
            <div class="mt-3 flex items-center">
                <p class="mr-1">Categories: </p>
                <BaseBadge v-for="category in product.categories" :key="category" bg-color="brand-interactive" class="mr-1">{{ category }}</BaseBadge>
            </div>
            <div class="mt-2">Tags: <BaseBadge bg-color="brand-highlight">{{ product.tags }}</BaseBadge></div>
            <div class="mt-2 flex items-center">
                <p class="mr-1">Share: </p>
                <Icon icon="bi:instagram" class="text-brand-interactive mr-2" />
                <Icon icon="bi:twitter-x" class="text-brand-interactive mr-2" />
                <Icon icon="bi:facebook" class="text-brand-interactive" />
            </div>
        </div>
    </div>
    <div class="bg-brand-bg-primary mt-48 pt-24 mb-48 w-full">
        <div class="content-container">
            <ul class="flex text-lg font-semibold gap-48">
                <li v-for="tab in tabs"
                    :key="tab"
                    class="cursor-pointer hover:text-brand-interactive"
                    :class="[activeTab === tab && 'underline text-brand-primary']"
                    @click="activeTab = tab">
                        {{ tab }}
                </li>
            </ul>

            <div>
                <!-- DESCRIPTION -->
                <div v-if="activeTab === 'Description'" class="mt-12">
                    
                    <p>
                        Experience the perfect blend of elegance and comfort with the Playwood Armchair. Crafted from high-quality materials, this chair combines a sleek design with ergonomic support to enhance your living space. Ideal for modern interiors, it features smooth wood finishes and a cushioned seat for hours of relaxation. Whether you’re reading, working, or entertaining, the Playwood Armchair adapts seamlessly to your lifestyle.
                    </p>
                </div>


                <!-- ADDITIONAL INFO -->
                <div v-if="activeTab === 'Additional info'" class="mt-12">
                    <ul>
                        <li><strong>Material: </strong> Premium solid wood frame with foam cushioning</li>
                        <li><strong>Dimensions: </strong> 85cm (H) x 75cm (W) x 70cm (D)</li>
                        <li><strong>Weight Capacity: </strong> Up to 120kg</li> 
                        <li><strong>Color Options: </strong> Natural Oak, Walnut, Black Finish</li>
                        <li><strong>Assembly: </strong> Partial assembly required (tools included)</li> 
                        <li><strong>Care Instructions: </strong> Clean with a damp cloth; avoid abrasive cleaners</li>

                    </ul>
                </div>


                <!-- REVIEWS -->
                <div v-if="activeTab === 'Reviews'" class="mt-12">
                    REVIEWS
                </div>


                <!-- VIDEOS -->
                <div v-if="activeTab === 'Video'" class="mt-12">
                    VIDEOS
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import BaseButton from '@/UI/BaseButton.vue';
import BaseBadge from '@/UI/BaseBadge.vue';
import { IProduct } from '../../types';
import PriceTag from '../PriceTag.vue';
import { ref } from 'vue';

type Tabs = 'Description' | 'Additional info' | 'Reviews' | 'Video';
const tabs: Tabs[] = ['Description', 'Additional info', 'Reviews', 'Video'];

defineProps<{ product: IProduct }>()

const activeTab = ref<Tabs>('Description');
</script>

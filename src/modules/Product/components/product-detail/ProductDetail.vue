<template>
    <div class="mt-32">
        <div class="content-container flex bg-white shadow-2xl max-w-7xl p-4 font-josefin">
        <div class="w-5/12 flex justify-center items-center">
            <img :src="product.imageUrl" alt="">
        </div>
        <div class="w-7/12">
            <h1 class="mt-12 product-title">{{ product.name }}</h1>
            <span class="mt-3 flex gap-1">
                <Icon v-for="star in 5" :icon="(star - 1) >= product.rating ? 'bi:star' : 'bi-star-fill'" color="gold" :key="star" />
            </span>
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
        <div class="bg-brand-bg-primary mt-32 py-24 mb-48 w-full">
            <div class="content-container">
                <ul class="flex text-xl font-semibold gap-48">
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
                        
                        <p class="text-gray-600 leading-relaxed text-lg mt-4">
                            Experience the perfect blend of elegance and comfort with the <span class="font-semibold text-gray-800">Playwood Armchair</span>. 
                            Crafted from high-quality materials, this chair combines a sleek design with ergonomic support to enhance your living space. 
                            Ideal for modern interiors, it features smooth wood finishes and a cushioned seat for hours of relaxation. 
                            Whether you’re reading, working, or entertaining, the Playwood Armchair adapts seamlessly to your lifestyle.
                        </p>

                    </div>

                    <!-- ADDITIONAL INFO -->
                    <div v-if="activeTab === 'Additional info'" class="mt-12 bg-brand-bg-gray p-6 rounded-lg shadow-md">
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <strong class="w-40 text-gray-700 font-medium">Material:</strong>
                            <span class="text-gray-600">Premium solid wood frame with foam cushioning</span>
                        </li>
                        <li class="flex items-start">
                        <strong class="w-40 text-gray-700 font-medium">Dimensions:</strong>
                        <span class="text-gray-600">85cm (H) x 75cm (W) x 70cm (D)</span>
                        </li>
                        <li class="flex items-start">
                        <strong class="w-40 text-gray-700 font-medium">Weight Capacity:</strong>
                        <span class="text-gray-600">Up to 120kg</span>
                        </li>
                        <li class="flex items-start">
                        <strong class="w-40 text-gray-700 font-medium">Color Options:</strong>
                        <span class="text-gray-600">Natural Oak, Walnut, Black Finish</span>
                        </li>
                        <li class="flex items-start">
                        <strong class="w-40 text-gray-700 font-medium">Assembly:</strong>
                        <span class="text-gray-600">Partial assembly required (tools included)</span>
                        </li>
                        <li class="flex items-start">
                        <strong class="w-40 text-gray-700 font-medium">Care Instructions:</strong>
                        <span class="text-gray-600">Clean with a damp cloth; avoid abrasive cleaners</span>
                        </li>
                    </ul>
                    </div>



                    <!-- REVIEWS -->
                    <div v-if="activeTab === 'Reviews'" class="mt-12">
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>

                            <!-- Review Cards -->
                            <div class="space-y-4">
                            <div
                                v-for="(review, index) in displayedReviews"
                                :key="index"
                                class="bg-white shadow-md rounded-lg p-4"
                            >
                                <div class="flex items-center justify-between mb-2">
                                <div class="font-semibold text-gray-900">{{ review.name }}</div>
                                <!-- Star Ratings -->
                                <div class="flex items-center">
                                    <template v-for="i in 5" :key="i">
                                    <svg
                                        v-if="i <= review.rating"
                                        class="h-5 w-5 text-yellow-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                        d="M12 .587l3.668 7.435 8.207 1.192-5.938 5.79 1.4 8.173L12 18.896l-7.337 3.871 1.4-8.173-5.938-5.79 8.207-1.192z"
                                        />
                                    </svg>
                                    <svg
                                        v-else
                                        class="h-5 w-5 text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                        d="M12 .587l3.668 7.435 8.207 1.192-5.938 5.79 1.4 8.173L12 18.896l-7.337 3.871 1.4-8.173-5.938-5.79 8.207-1.192z"
                                        />
                                    </svg>
                                    </template>
                                </div>
                                </div>
                                <p class="text-gray-700">{{ review.comment }}</p>
                            </div>
                            </div>

                            <!-- Pagination -->
                            <div class="flex justify-end mt-6">
                            <button
                                @click="prevPage"
                                :disabled="currentPage === 1"
                                class="px-4 py-2 mr-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button
                                @click="nextPage"
                                :disabled="currentPage === totalPages"
                                class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-50"
                            >
                                Next
                            </button>
                            </div>
                        </div>
                    </div>


                    <!-- VIDEOS -->
                    <div v-if="activeTab === 'Video'" class="mt-12">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="(video, index) in videos"
                                :key="index"
                                class="bg-white shadow-md rounded-lg overflow-hidden">
                                <div class="aspect-w-16 aspect-h-9">
                                    <iframe
                                        :src="video.url"
                                        title="Video Testimonial"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        class="w-full h-full">
                                    </iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ video.title }}</h3>
                                    <p class="text-gray-700 text-sm">{{ video.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="content-container">
            <h4 class="text-3xl font-bold">Related products</h4>
            <ul class="flex gap-8 mt-12">
                <li v-for="product in relatedProducts" :key="product.title" class="shadow-xl p-4 cursor-pointer">
                    <img class="rounded" :src="product.img" alt="">
                    <div class="flex mt-4 justify-between items-center">
                        <p class="text-lg">{{ product.title }}</p>
                        <div class="flex">
                            <Icon width="12" v-for="star in 5" :icon="(star - 1) >= product.rate ? 'bi:star' : 'bi-star-fill'" color="gold" :key="star" />
                        </div>
                    </div>
                    <PriceTag :discounted-price="product.discountedPrice" :price="product.price" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import BaseButton from '@/UI/BaseButton.vue';
import BaseBadge from '@/UI/BaseBadge.vue';
import { IProduct } from '../../types';
import PriceTag from '../PriceTag.vue';
import { computed, ref } from 'vue';

type Tabs = 'Description' | 'Additional info' | 'Reviews' | 'Video';
const tabs: Tabs[] = ['Description', 'Additional info', 'Reviews', 'Video'];

defineProps<{ product: IProduct }>()

const activeTab = ref<Tabs>('Description');
const currentPage = ref<number>(1);
const reviewsPerPage = ref<number>(3);
const totalPages = computed(() => {
    return Math.ceil(reviews.value.length / reviewsPerPage.value);
})

const reviews = ref([
        { name: "Alice", rating: 5, comment: "Absolutely amazing product!" },
        { name: "John", rating: 4, comment: "Great quality, but delivery was slow." },
        { name: "Emily", rating: 3, comment: "Good, but could be better." },
        { name: "Michael", rating: 5, comment: "Exceeded my expectations!" },
        { name: "Sophia", rating: 4, comment: "Looks great in my living room." },
])

const videos = [
        {
          title: "Product Overview",
          url: "https://www.youtube.com/embed/xyz123",
          description: "A detailed look at the features and benefits of the Playwood Armchair.",
        },
        {
          title: "Customer Testimonial - Alice",
          url: "https://www.youtube.com/embed/abc456",
          description: "Alice shares her experience with the Playwood Armchair.",
        },
        {
          title: "Setting Up Your Chair",
          url: "https://www.youtube.com/embed/def789",
          description: "A step-by-step guide to assembling your armchair.",
        },
        {
          title: "Styling Ideas",
          url: "https://www.youtube.com/embed/ghi101",
          description: "Creative ways to style the Playwood Armchair in your living room.",
        },
];

const relatedProducts = [
    {
        img: 'https://github.com/jemil-c-137/hekto/blob/gh-pages/assets/chair2.png?raw=true',
        title: 'product 1',
        rate: 4,
        price: '$32',
        discountedPrice: '$25'
    },
    {
        img: 'https://github.com/jemil-c-137/hekto/blob/gh-pages/assets/chair2.png?raw=true',
        title: 'product 2',
        rate: 4,
        price: '$32',
        discountedPrice: '$25'
    },
    {
        img: 'https://github.com/jemil-c-137/hekto/blob/gh-pages/assets/chair2.png?raw=true',
        title: 'product 3',
        rate: 4,
        price: '$32',
        discountedPrice: '$25'
    },
    {
        img: 'https://github.com/jemil-c-137/hekto/blob/gh-pages/assets/chair2.png?raw=true',
        title: 'product 4',
        rate: 4,
        price: '$32',
        discountedPrice: '$25'
    }
]

const displayedReviews = computed(() => {
    const start = (currentPage.value - 1) * reviewsPerPage.value;
    const end = start + reviewsPerPage.value;
    return reviews.value.slice(start, end);
})

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
}
</script>

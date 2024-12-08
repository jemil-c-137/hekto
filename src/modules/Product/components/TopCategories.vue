<template>
    <section class="content-container">
        <h5 class="section-title mb-32">Top Categories</h5>
        <swiper-container
            v-if="topCategories"
            :style="{
            '--swiper-pagination-color': '#FB2E86',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-inactive-color': '#E0D3F5'
            }"
            :pagination="{
            clickable: true
            }"
        >
            <swiper-slide>
            <div class="pt-8 mb-32">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <TopCategoryCard
                    v-for="topCategory in topCategories[0]"
                    :id="topCategory.id"
                    :key="topCategory.id"
                    :name="topCategory.name"
                    :price="topCategory.price"
                    :code="topCategory.code"
                    :image-url="topCategory.imageUrl"
                />
                </div>
            </div>
            </swiper-slide>

            <swiper-slide>
            <div class="pb-4 mb-32">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <TopCategoryCard
                    v-for="topCategory in topCategories[1]"
                    :id="topCategory.id"
                    :key="topCategory.id"
                    :code="topCategory.code"
                    :name="topCategory.name"
                    :price="topCategory.price"
                    :image-url="topCategory.imageUrl"
                />
                </div>
            </div>
            </swiper-slide>

            <swiper-slide>
            <div class="mb-32">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <TopCategoryCard
                    v-for="topCategory in topCategories[2]"
                    :id="topCategory.id"
                    :key="topCategory.id"
                    :code="topCategory.code"
                    :name="topCategory.name"
                    :price="topCategory.price"
                    :image-url="topCategory.imageUrl"
                />
                </div>
            </div>
            </swiper-slide>
        </swiper-container>
    </section>
</template>

<script setup lang="ts">
import { IProduct } from '@/shared/types'
import { ref, onMounted } from 'vue'
import { fetchTopCategories } from '../api/fetchTopCategories'
import TopCategoryCard from './ProductsCards/TopCategoryCard.vue'

const topCategories = ref<IProduct[][] | null>(null)

onMounted(() => {
    fetchTopCategories().then((data) => {
        topCategories.value = data
    })
})
</script>

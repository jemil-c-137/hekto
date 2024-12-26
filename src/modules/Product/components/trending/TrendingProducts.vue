<template>
    <section class="content-container">
      <h3 class="section-title mb-12">Trending Products</h3>
      <LoadingSpinner v-if="loading" />
      <AlertMessage v-else-if="error" :message="error" type="error" />
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <TrendingProductCard
          v-for="product in trendingProducts"
          :key="product.id"
          :id="product.id"
          :code="product.code"
          :imageUrl="product.imageUrl"
          :price="product.price"
          :name="product.name"
          :discounted-price="product.discountedPrice"
        />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_3fr_2fr] grid-rows-[(repeat_3,_minmax(auto,_270px))] gap-y-10 gap-x-8 mb-48"
      >
        <div
          class="lg:col-start-1 lg:col-end-1 bg-brand-decorative pt-9 shadow-2xl rounded hover:bg-brand-muted cursor-pointer"
        >
          <p class="pl-5 font-josefin text-2xl font-semibold">23% off in all products</p>
          <a href="#" class="pl-5 link">Shop now</a>
          <div class="flex justify-end items-center">
            <img src="../assets/sale/clock.png" alt="" />
          </div>
        </div>
        <div
          class="lg:col-start-2 lg:col-end-3 bg-purple-white pt-9 shadow-2xl hover:bg-brand-bg-primary cursor-pointer"
        >
          <p class="pl-5 font-josefin text-2xl font-semibold">23% off in all products</p>
          <a href="#" class="pl-5 link">Shop now</a>
          <div class="flex justify-end items-center">
            <img src="../assets/sale/comod.png" alt="" />
          </div>
        </div>
        <div
          class="col-span-full lg:col-start-3 lg:col-end-3 md:grid-col h-full flex flex-wrap justify-between md:flex-row gap-6"
        >
          <div class="grid grid-cols-[1fr_2fr] cursor-pointer group shadow rounded max-w-[270px]">
            <div
              class="bg-brand-bg-secondary flex justify-center items-center group-hover:bg-brand-interactive"
            >
              <img src="@/assets/sale/chair11.png" alt="" />
            </div>
            <div class="bg-white px-2 group-hover:bg-brand-highlight group-hover:text-white">
              <p class="font-semibold">Executive Seat chair</p>
              <p class="line-through text-sm">$32.00</p>
              <p class="text-sm">$20.00</p>
            </div>
          </div>

          <div class="grid grid-cols-[1fr_2fr] cursor-pointer group shadow rounded max-w-[270px]">
            <div
              class="bg-brand-bg-secondary flex justify-center items-center group-hover:bg-brand-decorative"
            >
              <img src="@/assets/sale/chair11.png" alt="" />
            </div>
            <div class="bg-white px-2 group-hover:bg-brand-highlight group-hover:text-white">
              <p class="font-semibold">Executive Seat chair</p>
              <p class="line-through text-sm">$32.00</p>
              <p class="text-sm">$20.00</p>
            </div>
          </div>

          <div class="grid grid-cols-[1fr_2fr] cursor-pointer group shadow rounded max-w-[270px]">
            <div
              class="bg-brand-bg-secondary flex justify-center items-center group-hover:bg-brand-decorative"
            >
              <img src="@/assets/sale/chair11.png" alt="" />
            </div>
            <div class="bg-white px-2 group-hover:bg-brand-highlight group-hover:text-white">
              <p class="font-semibold">Executive Seat chair</p>
              <p class="line-through text-sm">$32.00</p>
              <p class="text-sm">$20.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import TrendingProductCard from './TrendingProductCard.vue'
import { useProducts } from '../../composables/useProducts';
import LoadingSpinner from '@/UI/LoadingSpinner.vue'
import AlertMessage from '@/UI/AlertMessage.vue'
import { getTrendingProducts } from '../../api/productApi';

const { products: trendingProducts, loading, error } = useProducts(getTrendingProducts);

</script>

<template>
    <section class="content-container">
      <h3 class="section-title mb-12">Trending Products</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
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
          class="lg:col-start-1 lg:col-end-1 bg-pantone-purple pt-9 shadow-2xl rounded hover:bg-pale-purple cursor-pointer"
        >
          <p class="pl-5 font-josefin text-2xl font-semibold">23% off in all products</p>
          <a href="#" class="pl-5 link">Shop now</a>
          <div class="flex justify-end items-center">
            <img src="../assets/sale/clock.png" alt="" />
          </div>
        </div>
        <div
          class="lg:col-start-2 lg:col-end-3 bg-purple-white pt-9 shadow-2xl hover:bg-light cursor-pointer"
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
              class="bg-purple-white flex justify-center items-center group-hover:bg-pantone-purple"
            >
              <img src="@/assets/sale/chair11.png" alt="" />
            </div>
            <div class="bg-white px-2 group-hover:bg-off-navy-blue group-hover:text-white">
              <p class="font-semibold">Executive Seat chair</p>
              <p class="line-through text-sm">$32.00</p>
              <p class="text-sm">$20.00</p>
            </div>
          </div>

          <div class="grid grid-cols-[1fr_2fr] cursor-pointer group shadow rounded max-w-[270px]">
            <div
              class="bg-purple-white flex justify-center items-center group-hover:bg-pantone-purple"
            >
              <img src="@/assets/sale/chair11.png" alt="" />
            </div>
            <div class="bg-white px-2 group-hover:bg-off-navy-blue group-hover:text-white">
              <p class="font-semibold">Executive Seat chair</p>
              <p class="line-through text-sm">$32.00</p>
              <p class="text-sm">$20.00</p>
            </div>
          </div>

          <div class="grid grid-cols-[1fr_2fr] cursor-pointer group shadow rounded max-w-[270px]">
            <div
              class="bg-purple-white flex justify-center items-center group-hover:bg-pantone-purple"
            >
              <img src="@/assets/sale/chair11.png" alt="" />
            </div>
            <div class="bg-white px-2 group-hover:bg-off-navy-blue group-hover:text-white">
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
import { ref, onMounted } from 'vue'
import TrendingProductCard from './TrendingProductCard.vue'
import { IProduct } from '@/shared/types';
import { fetchTrendingProducts } from '../../api/fetchTrendingProducts';

const trendingProducts = ref<IProduct[]>([]);

onMounted(async () => {
    const productsData = await fetchTrendingProducts();
    trendingProducts.value = productsData;
})
</script>

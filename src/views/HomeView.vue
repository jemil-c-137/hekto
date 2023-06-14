<template>
  <main>
    <HeroSection />
    <section class="content-container pt-12">
      <h3 class="section-title mb-12">Featured Products</h3>
      <div class="mb-32 grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        <FeaturedProductCard
          v-for="product in productsList"
          :key="product.id"
          :productName="product.name"
          :price="product.price"
          :code="product.code"
          :imageUrl="product.imageUrl"
        />
      </div>

      <h3 class="section-title mb-12">Latest Products</h3>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturedProductCard from '../components/ProductCards/FeaturedProductCard.vue'

const productsData = [
    {
    name: 'Cantiliver chair',
    price: '$42.00',
    code: 'Code - Y532203',
    imageUrl: 'src/assets/chair2.png',
    id: 2
  },
  {
    name: 'Cantiliver chair',
    price: '$42.00',
    code: 'Code - Y532203',
    imageUrl: 'src/assets/chair1.png',
    id: 1
  },
  {
    name: 'Cantiliver chair',
    price: '$42.00',
    code: 'Code - Y532203',
    imageUrl: 'src/assets/chair3.png',
    id: 3
  },
  {
    name: 'Cantiliver chair',
    price: '$42.00',
    code: 'Code - Y532203',
    imageUrl: 'src/assets/chair4.png',
    id: 4
  }
]

const productsList = ref<typeof productsData>(productsData)
</script>

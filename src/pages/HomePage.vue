<template>
  <main>
    <HeroSlider />
    <section class="content-container pt-12 pb-36">
      <FeaturedProducts />
      
      <LatestProducts />
      <FeaturesGrid />
    </section>

    <UniqueFeature />

    <TrendingProducts />

    <DiscountedItems />

    <TopCategories />

    <Newsletter />

    <FeaturedBlogs />
  </main>
</template>

<script setup lang="ts">
import { HeroSlider } from '@/modules/Hero'
import {
  FeaturedProducts,
  LatestProducts,
  TrendingProducts,
  TopCategories,
  UniqueFeature,
  DiscountedItems
} from '@/modules/Product'
import { FeaturedBlogs } from '@/modules/Blog'
import { Newsletter } from '@/modules/Newsletter'
import { FeaturesGrid } from '@/modules/Features'
</script>

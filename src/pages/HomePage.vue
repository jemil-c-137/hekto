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
import { FeaturedProducts } from '@/modules/Product'
import { LatestProducts } from '@/modules/Product'
import { TrendingProducts } from '@/modules/Product'
import { TopCategories } from '@/modules/Product'
import { FeaturedBlogs } from '@/modules/Blog'
import { Newsletter } from '@/modules/Newsletter'
import { FeaturesGrid } from '@/modules/Features'
import { UniqueFeature } from '@/modules/Product'
import { DiscountedItems } from '@/modules/Product'
</script>

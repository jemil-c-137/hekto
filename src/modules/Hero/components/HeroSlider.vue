<template>
    <section class="bg-brand-bg-primary">
      <swiper-container
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
          <HeroSection
            :imageUrl="PinkSofaImage"
            name="New Furniture Collection in 2023"
            leading-text="Best Furniture For Your Castle...."
            subtext="Immerse yourself in a world of luxury and sophistication as you explore our carefully curated pieces"
          />
        </swiper-slide>
        <swiper-slide>
          <HeroSection
            :reverse="true"
            :imageUrl="BlueSofaImage"
            name="Introducing the Exquisite Home Décor Line"
            leading-text="Discover the Finest Furniture Collection for Your Grand Estate!"
            subtext="Crafted with meticulous attention to detail, each piece in our collection showcases exquisite craftsmanship and exceptional quality"
          />
        </swiper-slide>
        <swiper-slide>
          <HeroSection
            :imageUrl="GraySofa"
            name="Innovation Meets Comfort"
            leading-text="Transform Your Estate's Interior with Timeless Furniture Selections!"
            subtext="Indulge in unrivaled luxury and create an ambiance of grandeur in your stately manor with our exclusive furniture collection"
          />
        </swiper-slide>
      </swiper-container>
    </section>
</template>

<script setup lang="ts">
import HeroSection from './HeroSection.vue'

import PinkSofaImage from '@/shared/assets/sofa.png'
import BlueSofaImage from '@/shared/assets/b-sofe.png'
import GraySofa from '@/shared/assets/gray-sofa.png'
</script>

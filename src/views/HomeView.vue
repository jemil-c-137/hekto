<template>
  <main>
    <section class="bg-light">
      <swiper-container
        :style="{
          '--swiper-pagination-color': '#FB2E86',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-inactive-color': '#E0D3F5'
        }"
        :pagination="true"
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

    <section class="content-container pt-12 pb-36">
      <h3 class="section-title mb-12">Featured Products</h3>
      <div
        class="mb-32 grid gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center"
      >
        <FeaturedProductCard
          v-for="product in productsData"
          :key="product.id"
          :productName="product.name"
          :price="product.price"
          :code="product.code"
          :imageUrl="product.imageUrl"
        />
      </div>

      <h3 class="section-title mb-3">Latest Products</h3>

      <div class="flex justify-center gap-3 mb-14">
        <span
          :class="[
            activeLatestProducts === LatestProductsOptions.NewArrival && 'text-pink underline'
          ]"
          @click="setActiveLatestProduct(LatestProductsOptions.NewArrival)"
          class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
          >New Arrival</span
        >
        <span
          :class="[
            activeLatestProducts === LatestProductsOptions.BestSeller && 'text-pink underline'
          ]"
          @click="setActiveLatestProduct(LatestProductsOptions.BestSeller)"
          class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
          >Best Seller</span
        >
        <span
          :class="[
            activeLatestProducts === LatestProductsOptions.Featured && 'text-pink underline'
          ]"
          @click="setActiveLatestProduct(LatestProductsOptions.Featured)"
          class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
          >Featured</span
        >
        <span
          :class="[
            activeLatestProducts === LatestProductsOptions.SpecialOffer && 'text-pink underline'
          ]"
          @click="setActiveLatestProduct(LatestProductsOptions.SpecialOffer)"
          class="cursor-pointer text-lg hover:underline hover:text-pink transition-colors"
          >Special Offer</span
        >
      </div>

      <div
        class="mb-32 grid gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center"
      >
        <LatestProducts
          v-for="product in latestProducts"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :oldPrice="product.oldPrice"
          :imgUrl="product.imageUrl"
        />
      </div>
      <div>
        <h3 class="section-title mb-12">What Shopex Offer!</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div
            class="mx-auto my-0 bg-white shadow-2xl px-6 py-11 cursor-pointer transition-colors flex justify-center items-center flex-col max-w-[270px] rounded hover:bg-off-navy-blue group hover:shadow-navy-blue"
          >
            <FreeDelivery class="mb-6" />
            <p class="text-lg text-navy-blue font-josefin mb-5 group-hover:text-white">
              24/7 Support
            </p>
            <p class="font-bold text-center text-pale-purple group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div
            class="mx-auto my-0 bg-white shadow-2xl px-6 py-11 cursor-pointer transition-colors flex justify-center items-center flex-col max-w-[270px] rounded hover:bg-off-navy-blue group hover:shadow-navy-blue"
          >
            <CustomerSupport class="mb-6 text-navy-blue group-hover:text-white" />
            <p class="text-lg text-navy-blue font-josefin mb-5 group-hover:text-white">
              24/7 Support
            </p>
            <p class="font-bold text-center text-pale-purple group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div
            class="mx-auto my-0 bg-white shadow-2xl px-6 py-11 cursor-pointer transition-colors flex justify-center items-center flex-col max-w-[270px] rounded hover:bg-off-navy-blue group hover:shadow-navy-blue"
          >
            <CashBack class="mb-6" />
            <p class="text-lg text-navy-blue font-josefin mb-5 group-hover:text-white">
              24/7 Support
            </p>
            <p class="font-bold text-center text-pale-purple group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div
            class="mx-auto my-0 bg-white shadow-2xl px-6 py-11 cursor-pointer transition-colors flex justify-center items-center flex-col max-w-[270px] rounded hover:bg-off-navy-blue group hover:shadow-navy-blue"
          >
            <PremiumQuality class="mb-6" />
            <p class="text-lg text-navy-blue font-josefin mb-5 group-hover:text-white">
              24/7 Support
            </p>
            <p class="font-bold text-center text-pale-purple group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light py-4 mb-32">
      <div class="content-container">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center justify-center flex-col md:flex-row"
        >
          <img class="mx-auto my-0 max-w-full h-auto" :src="BlueSofaImage" alt="" />
          <div class="w-full">
            <h5 class="product-title mb-7">Unique Features Of leatest & Trending Poducts</h5>
            <BulletList :items="productList" class="mb-8" />
            <div class="flex flex-row items-center gap-8">
              <button class="button !px-6 !py-4 max-w-fit">Add to cart</button>
              <div class="font-josefin">
                <p class="font-bold">B&B Italian Sofa</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-container">
      <h3 class="section-title mb-12">Trending Products</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <TrendingProduct
          v-for="product in trendingProducts"
          :key="product.id"
          :imageUrl="product.imageUrl"
          :price="product.price"
          :name="product.name"
          :oldPrice="product.oldPrice"
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
              <img src="src/assets/sale/chair11.png" alt="" />
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
              <img src="src/assets/sale/chair11.png" alt="" />
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
              <img src="src/assets/sale/chair11.png" alt="" />
            </div>
            <div class="bg-white px-2 group-hover:bg-off-navy-blue group-hover:text-white">
              <p class="font-semibold">Executive Seat chair</p>
              <p class="line-through text-sm">$32.00</p>
              <p class="text-sm">$20.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-32">
        <h5 class="section-title mb-32">Discount items</h5>
        <div class="flex flex-col md:flex-row items-center">
          <div class="mb-8">
            <img src="src/assets/discount/wood-chair.png" alt="" />
          </div>
          <div class="md:order-[-1]">
            <p class="product-title mb-4">20% Discount of All Products</p>
            <p class="font-josefin text-pink text-xl mb-5">Eams Sofa Compact</p>
            <p class="leading-8 text-pale-purple mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse
              nec, bibendum condimentum.
            </p>
            <ol class="text-pale-purple mb-9">
              <li><span class="mr-1 text-off-purple">&#10004;</span>Material expose like metals</li>
              <li><span class="mr-1 text-off-purple">&#10004;</span>Simple neutral colours.</li>
              <li>
                <span class="mr-1 text-off-purple">&#10004;</span>Clear lines and geomatric figures
              </li>
              <li><span class="mr-1 text-off-purple">&#10004;</span>Material expose like metals</li>
            </ol>
            <button class="button !px-6 !py-4 max-w-fit">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
    <section class="content-container">
      <swiper-container
        :style="{
          '--swiper-pagination-color': '#FB2E86',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-inactive-color': '#E0D3F5'
        }"
        :pagination="true"
      >
        <swiper-slide>
          <div class="pt-8 mb-32">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <TopCategories
                v-for="topCategory in topCategories[0]"
                :key="topCategory.id"
                :name="topCategory.name"
                :price="topCategory.price"
                :image-url="topCategory.imageUrl"
              />
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="pb-4 mb-32">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <TopCategories
                v-for="topCategory in topCategories[1]"
                :key="topCategory.id"
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
              <TopCategories
                v-for="topCategory in topCategories[2]"
                :key="topCategory.id"
                :name="topCategory.name"
                :price="topCategory.price"
                :image-url="topCategory.imageUrl"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
    <h5 class="section-title mb-32">Top Categories</h5>

    <section class="pt-56 pb-32 text-center bg-[url('src/assets/bg-palm.jpg')] bg-no-repeat">
      <h3 class="mb-7 section-title">Get Leatest Update By Subscribe 0ur Newslater</h3>
      <button class="button">Show Now</button>
    </section>
    <section class="content-container py-32">
      <div>
        <h5 class="section-title mb-20">Leatest Blog</h5>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          <BlogpostCard
            v-for="post in blogposts"
            :key="post.id"
            :imageUrl="post.imageUrl"
            :title="post.title"
            :subtext="post.subtext"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import FeaturedProductCard from '../components/ProductCards/FeaturedProductCard.vue'
import LatestProducts from '../components/ProductCards/LatestProducts.vue'
import CashBack from '../components/svg/CashBack.vue'
import CustomerSupport from '../components/svg/CustomerSupport.vue'
import FreeDelivery from '../components/svg/FreeDelivery.vue'
import PremiumQuality from '../components/svg/PremiumQuality.vue'
import BulletList from '../components/UI/BulletList.vue'
import TrendingProduct from '../components/ProductCards/TrendingProduct.vue'
import TopCategories from '../components/ProductCards/TopCategories.vue'
import BlogpostCard from '../components/Blogpost/BlogpostCard.vue'
import PinkSofaImage from '../assets/sofa.png'
import BlueSofaImage from '../assets/b-sofe.png'
import GraySofa from '../assets/gray-sofa.png'
import { LatestProductsOptions } from '@/types'
import { ref, computed } from 'vue'

const activeLatestProducts = ref<LatestProductsOptions>(LatestProductsOptions.NewArrival)

const latestProducts = computed(() => {
  let data: { id: number; name: string; imageUrl: string; price: string; oldPrice?: string }[]
  switch (activeLatestProducts.value) {
    case LatestProductsOptions.NewArrival:
      data = latestProductsData
      break
    case LatestProductsOptions.BestSeller:
      data = trendingProducts
      break
    case LatestProductsOptions.Featured:
      data = productsData
      break
    case LatestProductsOptions.SpecialOffer:
      data = latestProductsData
      break
  }

  return data
})

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

const latestProductsData = [
  {
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    imageUrl: 'src/assets/new-arrival/chair1.png',
    id: 1
  },
  {
    name: 'Comfort Handy Craft',
    price: '$42.00',
    imageUrl: 'src/assets/new-arrival/chair2.png',
    id: 2
  },
  {
    name: 'Comfort Handy Craft',
    price: '$42.00',
    imageUrl: 'src/assets/new-arrival/chair3.png',
    id: 3
  },
  {
    name: 'Comfort Handy Craft',
    price: '$42.00',
    imageUrl: 'src/assets/new-arrival/chair4.png',
    id: 4
  },
  {
    name: 'Comfort Handy Craft',
    price: '$42.00',
    imageUrl: 'src/assets/new-arrival/chair5.png',
    id: 5
  },
  {
    name: 'Comfort Handy Craft',
    price: '$42.00',
    imageUrl: 'src/assets/new-arrival/chair6.png',
    id: 6
  }
]

const trendingProducts = [
  {
    name: 'Cantilever chair',
    price: '$26.00',
    oldPrice: '$42.00',
    imageUrl: 'src/assets/trending/gray-chair.png',
    id: 1
  },
  {
    name: 'Cantilever chair',
    price: '$26.00',
    oldPrice: '$42.00',
    imageUrl: 'src/assets/trending/white-chair.png',
    id: 4
  },
  {
    name: 'Cantilever chair',
    price: '$26.00',
    oldPrice: '$42.00',
    imageUrl: 'src/assets/trending/black-chair.png',
    id: 2
  },
  {
    name: 'Cantilever chair',
    price: '$26.00',
    oldPrice: '$42.00',
    imageUrl: 'src/assets/trending/red-chair.png',
    id: 3
  }
]

const topCategories = [
  [
    { name: 'Mini LCW Chair', price: '$56.00', imageUrl: 'src/assets/chair5.png', id: 1 },
    { name: 'Mini LCW Chair', price: '$56.00', imageUrl: 'src/assets/chair3.png', id: 2 },
    { name: 'Mini LCW Chair', price: '$56.00', imageUrl: 'src/assets/chair4.png', id: 3 },
    { name: 'Mini LCW Chair', price: '$56.00', imageUrl: 'src/assets/chair2.png', id: 4 }
  ],
  [
    {
      name: 'Cantilever chair',
      price: '$26.00',
      imageUrl: 'src/assets/trending/gray-chair.png',
      id: 1
    },
    {
      name: 'Cantilever chair',
      price: '$26.00',
      imageUrl: 'src/assets/trending/white-chair.png',
      id: 4
    },
    {
      name: 'Cantilever chair',
      price: '$26.00',
      imageUrl: 'src/assets/trending/black-chair.png',
      id: 2
    },
    {
      name: 'Cantilever chair',
      price: '$26.00',
      imageUrl: 'src/assets/trending/red-chair.png',
      id: 3
    }
  ],
  [
    {
      name: 'Comfort Handy Craft',
      price: '$42.00',
      imageUrl: 'src/assets/new-arrival/chair2.png',
      id: 2
    },
    {
      name: 'Comfort Handy Craft',
      price: '$42.00',
      imageUrl: 'src/assets/new-arrival/chair3.png',
      id: 3
    },
    {
      name: 'Comfort Handy Craft',
      price: '$42.00',
      imageUrl: 'src/assets/new-arrival/chair5.png',
      id: 5
    },
    {
      name: 'Comfort Handy Craft',
      price: '$42.00',
      imageUrl: 'src/assets/new-arrival/chair6.png',
      id: 6
    }
  ]
]

const productList = [
  'All frames constructed with hardwood solids and laminates',
  'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails',
  'Arms, backs and seats are structurally reinforced'
]

const blogposts = [
  {
    title: 'Top esssential Trends in 2021',
    subtext: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    imageUrl: 'src/assets/office.jpg',
    id: 1
  },
  {
    title: 'Top esssential Trends in 2021',
    subtext: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    imageUrl: 'src/assets/hall.jpg',
    id: 2
  },
  {
    title: 'Top esssential Trends in 2021',
    subtext: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    imageUrl: 'src/assets/living-room.jpg',
    id: 3
  }
]

const setActiveLatestProduct = (value: LatestProductsOptions) => {
  activeLatestProducts.value = value
}
</script>

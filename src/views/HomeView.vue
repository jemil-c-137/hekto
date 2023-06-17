<template>
  <main>
    <HeroSection />
    <section class="content-container pt-12 pb-36">
      <h3 class="section-title mb-12">Featured Products</h3>
      <div
        class="mb-32 grid gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center"
      >
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

      <div
        class="mb-32 grid gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center"
      >
        <LatestProducts
          v-for="product in latestProductsData"
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
          <img class="mx-auto my-0 max-w-full h-auto" src="../assets/b-sofe.png" alt="" />
          <div class="w-full">
            <h5 class="font-josefin text-4xl font-bold mb-7">
              Unique Features Of leatest & Trending Poducts
            </h5>
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
      <div class="grid grid-cols-2 lg:grid-cols-4">
        <div class="bg-white p-3 shadow-2xl">
          <div class="bg-purple-white max-w-[250px] flex items-center justify-center py-7 mb-4">
            <img src="../assets/trending/gray-chair.png" alt="" />
          </div>
          <div class="text-center mb-5">
            <p>Cantilever chair</p>
            <span class="font-josefin mr-3">$26.00</span>
            <span class="font-josefin line-through opacity-30 text-sm">$42.00</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturedProductCard from '../components/ProductCards/FeaturedProductCard.vue'
import LatestProducts from '../components/ProductCards/LatestProducts.vue'
import CashBack from '../components/svg/CashBack.vue'
import CustomerSupport from '../components/svg/CustomerSupport.vue'
import FreeDelivery from '../components/svg/FreeDelivery.vue'
import PremiumQuality from '../components/svg/PremiumQuality.vue'
import BulletList from '../components/UI/BulletList.vue'

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
    oldPrice: "$42.00",
    imageUrl: "../assets/trending/gray-chair.png"
  }
]

const productList = [
  'All frames constructed with hardwood solids and laminates',
  'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails',
  'Arms, backs and seats are structurally reinforced'
]

const productsList = ref<typeof productsData>(productsData)
</script>

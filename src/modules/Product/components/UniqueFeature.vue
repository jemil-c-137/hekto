<template>
    <section class="bg-light py-4 mb-32">
      <div class="content-container">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center justify-center flex-col md:flex-row"
        >
          <img class="mx-auto my-0 max-w-full h-auto" :src="BlueSofaImage" alt="" />
          <div class="w-full">
            <h5 class="product-title mb-7">Unique Features Of latest & Trending Poducts</h5>
            <BulletList v-if="productList" :items="productList" class="mb-8" />
            <div class="flex flex-row items-center gap-8">
              <BaseButton>Add to cart</BaseButton>
              <div class="font-josefin">
                <p class="font-bold">B&B Italian Sofa</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlueSofaImage from '@/shared/assets/b-sofe.png'
import BaseButton from '@/UI/BaseButton.vue'
import BulletList from '@/UI/BulletList.vue'

const productList = ref([
    "All frames constructed with hardwood solids and laminates",
    "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
    "Arms, backs and seats are structurally reinforced",
])
</script>

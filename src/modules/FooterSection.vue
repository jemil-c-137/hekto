<template>
  <footer class="bg-light">
    <div
      class="content-container pt-16 text-pale-purple grid grid-cols-1 md:grid-cols-3 gap-12 lg:grid-cols-6"
    >
      <div class="pb-8 col-span-full lg:col-start-1 lg:col-end-3">
        <p class="logo-text">Hekto</p>
        <SignUpField />
        <p>Contact info</p>
        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>

      <div>
        <p class="cont-josefin text-2xl mb-2 md:mb-10 text-dark-blue">Categories</p>
        <ul>
          <li class="mb-5"><a href="">Laptops & Computers</a></li>
          <li class="mb-5"><a href="">Cameras & Photography</a></li>
          <li class="mb-5"><a href="">Smart Phones & Tablets</a></li>
          <li class="mb-5"><a href=""> Games & Consoles</a></li>
          <li><a href="">Waterproof Headphones</a></li>
        </ul>
      </div>

      <div>
        <p class="cont-josefin text-2xl mb-2 md:mb-10 text-dark-blue">Customer Care</p>
        <ul>
          <li class="mb-5"><a href="">My Account</a></li>
          <li class="mb-5"><a href="">Discount</a></li>
          <li class="mb-5"><a href="">Returns</a></li>
          <li class="mb-5"><a href="">Orders History</a></li>
          <li><a href="">Order Tracking</a></li>
        </ul>
      </div>

      <div>
        <p class="cont-josefin text-2xl mb-2 md:mb-10 text-dark-blue">Pages</p>
        <ul>
          <li class="mb-5"><a href="">Blog</a></li>
          <li class="mb-5"><a href="">Browse the Shop</a></li>
          <li class="mb-5"><a href="">Category</a></li>
          <li class="mb-5"><a href="">Orders History</a></li>
          <li><a href="">Order Tracking</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SignUpField from "@/components/SignUpField.vue";
</script>

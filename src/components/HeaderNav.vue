<template>
  <header class="relative">
    <div class="bg-purple text-white py-2 w-full" :class="[showMobileNav && 'fixed']">
      <div class="content-container flex justify-between">
        <div class="md:flex gap-12 hidden">
          <div class="flex gap-2 items-center">
            <MailLogo class="w-6" />
            <span>mail@mail.com</span>
          </div>

          <div class="flex gap-2 items-center">
            <PhoneLogo class="w-6" />
            <span>(12345)67890</span>
          </div>
        </div>
        <div class="flex gap-5">
          <div class="flex gap-2 items-center">
            <LoginLogo class="w-6" />
            <span>login</span>
          </div>
          <div class="flex gap-2 items-center">
            <FavoriteLogo class="w-6" />
            <span>login</span>
          </div>
          <div class="flex gap-2 items-center">
            <CartLogo class="w-8" />
          </div>
        </div>
        <div class="md:hidden" @click="showMobileNav = !showMobileNav">
          <button
            class="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
          >
            <div
              class="h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300"
              :class="[
                showMobileNav
                  ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              ]"
            />
            <div
              class="h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300"
              :class="[showMobileNav ? 'opacity-0' : 'opacity-50 group-hover:opacity-100']"
            />
            <div
              class="h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300"
              :class="[
                showMobileNav
                  ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              ]"
            />
          </button>
        </div>
      </div>
    </div>

    <nav class="content-container flex flex-col md:flex-row justify-between items-center py-5">
      <div><h3 class="logo-text">Hekto</h3></div>
      <ul
        class="hidden md:flex md:justify-between md:items-center md:gap-2 md:text-base text-dark-blue"
        :class="[
          showMobileNav &&
            '!flex fixed mt-11 z-10 w-full h-full bg-white text-center text-2xl gap-y-4 flex-col justify-center'
        ]"
      >
        <li class="hover:text-pink transition-colors">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="hover:text-pink transition-colors">
          <RouterLink to="/products">Products</RouterLink>
        </li>
        <li class="hover:text-pink transition-colors">
          <RouterLink to="/blog">Blog</RouterLink>
        </li>
        <li class="hover:text-pink transition-colors">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="hover:text-pink transition-colors">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
      <div>
        <form class="flex">
          <input
            class="border border-pantone-purple focus:outline-none focus:border-navy-blue hover:border-blue text-base px-4"
          />
          <button
            type="submit"
            class="bg-pink py-2 px-3 active:bg-blue focus:bg-blue hover:bg-off-purple transition-colors"
          >
            <SearchLogo class="w-6" />
          </button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import PhoneLogo from './svg/logos/PhoneLogo.vue'
import MailLogo from './svg/logos/MailLogo.vue'
import LoginLogo from './svg/logos/LoginLogo.vue'
import FavoriteLogo from './svg/logos/FavoriteLogo.vue'
import CartLogo from './svg/logos/CartLogo.vue'
import SearchLogo from './svg/logos/SearchLogo.vue'
import { watch, ref } from 'vue'

const showMobileNav = ref<boolean>(false)

watch(showMobileNav, (value) => {
  const body = document.body
  if (value) {
    body.classList.add('lock-scroll')
  } else {
    body.classList.remove('lock-scroll')
  }
})
</script>

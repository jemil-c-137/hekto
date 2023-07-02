<template>
  <HeaderNav />

  <RouterView />

  <FooterSection />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import FooterSection from './components/FooterSection.vue'
</script>

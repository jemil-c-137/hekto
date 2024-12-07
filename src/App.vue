<template>
    <HeaderNav />
    <RouterView />
    <FooterSection />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from '@/modules/HeaderNav.vue'
import FooterSection from '@/modules/FooterSection.vue'
</script>

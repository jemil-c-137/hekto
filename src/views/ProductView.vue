<template>
  <h1>product details</h1>
</template>

<script setup lang="ts">
import Api from '@/api'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  const id = route.params.id
  console.log(id, 'id')
  if (id) {
    Api.getProductDetails(+id).then((res) => {
      console.log(res, 'res')
    })
  }
})
</script>

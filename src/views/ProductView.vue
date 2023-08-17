<template>
  <h1>🚧Page {{ productName }} under construction🚧</h1>
</template>

<script setup lang="ts">
import Api from '@/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const productName = ref<string>()

onMounted(() => {
  const id = route.params.id
  console.log(id, 'id')
  if (id) {
    Api.getProductDetails(+id)
      .then((res) => {
        productName.value = res.name
      })
      .catch((e) => console.log('error', e))
  }
})
</script>

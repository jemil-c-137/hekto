<template>
  <main>
    <div v-if="loading" class="min-h-lg">
      <LoadingSpinner />
    </div>
    <div v-else-if="product === null" class="flex">
        <h1>PRODUCT NOT FOUND</h1>
    </div>
    <template v-else>
      <ProductDetail class="my-32" :product="product" />
    </template>
  </main>
</template>

<script setup lang="ts">
import { IProduct } from '@/modules/Product';
import { getProduct } from '@/modules/Product/api/productApi';
import ProductDetail from '@/modules/Product/components/product-detail/ProductDetail.vue';
import LoadingSpinner from '@/UI/LoadingSpinner.vue';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const product = ref<IProduct | null>(null);
const loading = ref<boolean>(false);

onMounted( async () => {
  const id = route.params.id
  console.log(id, 'id')
  if (typeof id === 'string') {
    loading.value = true;
    await getProduct(+id).then(res => {
      console.log(res, 'res');
      product.value = res;
    }).catch(e => {
      console.log(e, 'error');
    }).finally(() => {
      loading.value = false;
    })
  }
})
</script>

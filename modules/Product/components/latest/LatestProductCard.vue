<template>
  <div class="group cursor-pointer">
    <div class="relative bg-brand-bg-secondary rounded-lg p-4 transition-all">
      <img :src="product.image" :alt="product.name" class="w-full h-auto" />
      <div class="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
    </div>
    <div class="mt-4">
      <h3 class="text-brand-heading font-josefin text-xl">{{ product.name }}</h3>
      <p class="text-brand-text-secondary">{{ product.price }}</p>
      <span 
        v-if="product.discount" 
        class="text-brand-primary font-bold"
      >
        {{ discountedPrice }}
      </span>
    </div>
  </div>
</template> 
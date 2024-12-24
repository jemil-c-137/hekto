<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div class="relative">
      <img :src="product.image" :alt="product.name" class="w-full h-auto" />
      <div 
        v-if="product.discount" 
        class="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 rounded-full"
      >
        -{{ product.discount }}%
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-brand-heading font-josefin text-xl mb-2">{{ product.name }}</h3>
      <div class="flex items-center justify-between">
        <p class="text-brand-primary font-bold">{{ formattedPrice }}</p>
        <button 
          class="bg-brand-interactive hover:bg-brand-interactive-hover text-white px-4 py-2 rounded-md transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template> 
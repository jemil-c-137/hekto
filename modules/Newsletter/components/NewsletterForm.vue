<template>
  <div class="bg-brand-bg-primary">
    <div class="container mx-auto py-16">
      <h2 class="text-brand-heading text-3xl font-josefin text-center mb-8">
        Get Latest Updates By Subscribing To Our Newsletter
      </h2>
      <form @submit.prevent="handleSubmit" class="flex justify-center">
        <button 
          type="submit" 
          class="bg-brand-primary hover:bg-brand-interactive text-white px-8 py-2 rounded-md transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template> 
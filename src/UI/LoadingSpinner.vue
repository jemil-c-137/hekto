<template>
  <div 
    class="flex flex-col items-center justify-center"
    role="status"
    aria-label="Loading"
  >
    <!-- Spinner container -->
    <div class="relative w-24 h-24">
      <!-- Outer ring -->
      <div
        class="absolute inset-0 rounded-full border-4 border-brand-decorative
               after:absolute after:inset-0 after:rounded-full
               after:border-4 after:border-brand-primary
               after:border-l-transparent after:border-r-transparent after:border-b-transparent
               after:animate-spin
               w-24 h-24"
      ></div>
      <!-- Inner ring -->
      <div
        class="absolute rounded-full border-4 border-brand-bg-primary
               after:absolute after:inset-0 after:rounded-full
               after:border-4 after:border-brand-interactive
               after:border-l-transparent after:border-r-transparent after:border-b-transparent
               after:animate-spin after:[animation-direction:reverse]
               w-16 h-16 left-4 top-4"
      ></div>
    </div>
  </div>
</template>

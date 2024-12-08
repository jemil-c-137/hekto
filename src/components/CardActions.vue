<template>
  <div
    class="hidden group-hover:flex absolute gap-x-1"
    :class="[vertical ? 'flex-col' : 'flex-row', position]"
  >
    <span
      class="p-1 rounded-full bg-pale-purple hover:bg-off-navy-blue hover:cursor-pointer transition-colors"
    >
      <CartLogo class="w-4 text-white" />
    </span>
    <span
      class="p-1 rounded-full bg-pale-purple hover:bg-off-navy-blue hover:cursor-pointer transition-colors"
    >
      <FavoriteLogo class="w-4 text-white" />
    </span>
    <span
      class="p-1 rounded-full bg-pale-purple hover:bg-off-navy-blue hover:cursor-pointer transition-colors"
    >
      <ZoomInLogo class="w-4 text-white" />
    </span>
  </div>
</template>

<script setup lang="ts">
import FavoriteLogo from '@/UI/svg/logos/FavoriteLogo.vue'
import CartLogo from '@/UI/svg/logos/CartLogo.vue'
import ZoomInLogo from '@/UI/svg/logos/ZoomInLogo.vue'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    vertical?: boolean
    placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  }>(),
  {
    vertical: false,
    placement: 'top-left'
  }
)

const position = computed(() => {
  switch (props.placement) {
    case 'top-right':
      return 'top-2 right-3'
    case 'bottom-right':
      return 'bottom-2 right-3'
    case 'bottom-left':
      return 'bottom-2 left-3'
    default:
    case 'top-left':
      return 'top-3 left-3'
  }
})
</script>

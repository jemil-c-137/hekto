<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="item"
      class="font-semi text-pale-purple before:content-[''] before:w-2 before:h-2 before:rounded-full before:inline-block before:min-w-[8px] flex items-center before:mr-3"
      :class="[getBgColor(index + 1)]"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()

function getBgColor(index: number) {
  if (index % 2 === 0 && index % 3 !== 0) {
    return 'before:bg-blue'
  } else if (index % 3 === 0) {
    return 'before:bg-mint'
  } else {
    return 'before:bg-pink'
  }
}
</script>

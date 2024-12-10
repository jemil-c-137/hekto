<template>
    <div :class="alertClass" role="alert">
    <div>
        {{ message }}
    </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    message: string;
    type: 'success' | 'error' | 'info';
}>()

const alertClass = computed(() => {
    return `flex items-center p-4 mb-4 text-sm text-${props.type}-800 border border-${props.type}-300 rounded-lg bg-${props.type}-50 dark:bg-gray-800 dark:text-${props.type}-400 dark:border-${props.type}-800`
})

</script>

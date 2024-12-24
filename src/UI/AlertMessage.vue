<template>
    <div class="flex items-center p-4 mb-4 text-sm border rounded-lg" 
        :class="alertClass" 
        role="alert">
        <div class="text-sm">
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
    switch (props.type) {
        case 'success':
            return 'border-brand-mint bg-green bg-opacity-70'
        case 'error':
            return 'text-red-800 border-red-300 bg-red-50'
        case 'info':
            return 'text-blue-800 border-blue-300 bg-blue-50'
        default:
            return 'text-gray-800 border-gray-300 bg-gray-50'
    }
})

</script>

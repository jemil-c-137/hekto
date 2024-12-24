<template>
    <input
        :value="modelValue"
        :required="required"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="border border-brand-decorative focus:outline-none focus:border-brand-text-primary hover:border-brand-secondary text-base px-4"
    />
</template>

<script setup lang="ts">
defineProps<{
    modelValue: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
}>();
</script>

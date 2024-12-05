<template>
    <input
        :value="modelValue"
        :required="required"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="border border-pantone-purple focus:outline-none focus:border-navy-blue hover:border-blue text-base px-4"
    />
</template>

<script setup lang="ts">
defineProps<{
    modelValue: string;
    placeholder?: string;
    required?: boolean;
}>();
</script>

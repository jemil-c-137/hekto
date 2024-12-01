<template>
	<button :class="[classes, btnSize, rounded ? 'rounded' : '']" :type="type" @click="emit('click')">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
	type?: 'button' | 'submit' | 'reset';
	icon?: string;
	style?: 'primary' | 'secondary';
	rounded?: boolean;
	size?: 'l' | 'm' | 's';
}>(), {
	type: 'button',
	style: 'primary',
	rounded: true,
	size: 'm',
});

const emit = defineEmits<{
	(e: 'click'): void;
}>();

const classes = computed(() => {
	switch (props.style) {
		case 'secondary':
			return 'hover:bg-blue active:bg-dark-navy transition-colors bg-green text-white font-josefin';
		default:
		case 'primary':
		return 'bg-pink text-white text-lg font-bold font-josefin hover:bg-blue transition-colors active:bg-dark-blue';
	}
});

const btnSize = computed(() => {
	switch (props.size) {
		case 'l':
			return 'py-4 px-8';
		case 's':
			return 'py-2 px-3';
		case 'm':
		default:
			return 'py-2 px-4';
	}
});
</script>

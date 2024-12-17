<template>
    <div class="bg-brand-bg-gray rounded-lg p-4 flex flex-col gap-2" :class="[widthClass, heightClass]">
        <!-- Skeleton image -->
        <div class="skeleton-loading rounded-lg w-full h-4/6" :class="[widthClass, heightClass]">
        </div>
        <!-- Skeleton title -->
        <div class="skeleton-loading rounded-lg w-full h-1/6" :class="[widthClass, heightClass]">
        </div>
        <!-- Skeleton price -->
        <div class="skeleton-loading rounded-lg w-full h-1/6" :class="[widthClass, heightClass]">
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    widthClass: string;
    heightClass: string;
}>()
</script>

<style scoped>
.skeleton-loading {
    background-color: var(--brand-decorative, #e2e8f0); /* Fallback color */
    position: relative;
    overflow: hidden;
}

.skeleton-loading::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
    );
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}
</style>
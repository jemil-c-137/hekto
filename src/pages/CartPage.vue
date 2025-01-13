<template>
    <main>
        <div v-if="loading" class="min-h-screen flex items-center justify-center">
            <LoadingSpinner />
        </div>
        <div v-else>
            <div class="content-container grid grid-cols-8">
                <div class="col-span-5 h-[300px] bg-black"></div>
                <div class="col-start-6 col-span-8 h-[300px]">
                    <p class="text-center font-josefin text-xl">Cart totals</p>
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoadingSpinner from '@/UI/LoadingSpinner.vue';

const loading = ref<boolean>(false);
</script>
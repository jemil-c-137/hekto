<template>
    <main>
        <div v-if="loading" class="min-h-screen flex items-center justify-center">
            <LoadingSpinner />
        </div>
        <div v-else>
            <div class="content-container grid grid-cols-8 gap-8">
                <div class="col-span-5 h-[300px] bg-black"></div>
                <div class="col-start-6 col-span-8">
                    <p class="text-center font-josefin text-xl mb-8">Order Summary</p>
                    <ShippingAddress />

                    <p class="text-center font-josefin text-lg mb-6">Cart totals</p>
                    <div class="bg-brand-bg-gray p-6">
                        <div class="mb-4 flex justify-between relative after:absolute after:h-[2px] after:bg-brand-decorative after:top-6 after:w-full">
                            <span class="text-md font-semibold">Subtotals</span>
                            <span>$200</span>
                        </div>

                        <div class="mb-6 flex justify-between relative after:absolute after:h-[2px] after:bg-brand-decorative after:top-6 after:w-full">
                            <span class="text-md font-semibold">Totals</span>
                            <span>$350</span>
                        </div>

                        <p class="mb-6 text-xs text-brand-muted">✅ Shipping & taxes calculated at checkout</p>

                        <BaseButton :style="'secondary'">
                            Proceed to Checkout
                        </BaseButton>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoadingSpinner from '@/UI/LoadingSpinner.vue';
import BaseButton from '@/UI/BaseButton.vue';
import ShippingAddress from '@/modules/Cart/ShippingAddress.vue';

const loading = ref<boolean>(false);
</script>
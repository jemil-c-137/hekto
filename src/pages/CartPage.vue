<template>
    <main>
        <div v-if="loading" class="min-h-screen flex items-center justify-center">
            <LoadingSpinner />
        </div>
        <div v-else>
            <div class="content-container grid grid-cols-8 gap-8">
                <div class="col-span-5">
                    <CartProducts />
                </div>
                <div class="col-start-6 col-span-8">
                    <p class="text-center text-xl mb-8 font-bold">Order Summary</p>
                    <ShippingAddress class="mb-4" />
                    <div class="bg-brand-bg-gray p-6">
                        <p class="font-josefin text-lg mb-6">Cart totals</p>
                        <div class="flex justify-between relative">
                            <span class="text-md font-medium">Cart</span>
                            <span>$200</span>
                        </div>

                        <div class="pb-3 flex justify-between relative border-b border-b-brand-semi">
                            <span class="text-md font-medium">Shipping</span>
                            <span>$350</span>
                        </div>

                        <div class="my-3 flex justify-between relative">
                            <span class="text-md font-bold">Total</span>
                            <span>$350</span>
                        </div>

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
import CartProducts from '@/modules/Cart/CartProducts.vue';

const loading = ref<boolean>(false);
</script>
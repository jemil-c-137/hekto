<template>
    <div class="bg-brand-bg-gray p-4 rounded">
        <p class="font-josefin text-md mb-2">Estimate Shipping</p>
        <div class="flex gap-8 mb-3 border-b border-brand-decorative pb-4">
            <form class="flex flex-col gap-4 w-1/2">
                <InputField v-model="country" placeholder="Country" required with-border />
                <InputField v-model="city" placeholder="City" required with-border />
                <InputField v-model="zipcode" placeholder="ZIP/PLZ" required type="number" with-border />
            </form>
            <BaseButton class="mt-auto" size="xs" rounded @click="calculateDelivery">
                <p class="flex gap-1">
                    <span class="text-sm">Calculate</span>
                    <Icon class="text-white" icon="bi:truck" />
                </p>
            </BaseButton>
        </div>


        <div class="flex-col gap-4">
            <div class="flex gap-2 items-center mb-1">
                <input type="radio" name="standard" id="standard" v-model="delivery" value="standard">
                <label for="standard">
                    <p>Standard Shipping - ${{ standardPrice }}</p>
                    <p class="text-brand-muted text-xs">5-7 business days</p>
                </label>
            </div>

            <div class="flex gap-2 items-center mb-1">
                <input type="radio" name="standard" id="standard" v-model="delivery" value="express">
                <label for="standard">
                    <p>Express Shipping - ${{ expressPrice }}</p>
                    <p class="text-brand-muted text-xs">2-3 business days</p>
                </label>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue';
import InputField from '@/UI/InputField.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const country = ref('');
const city = ref('');
const zipcode = ref('');

const expressPrice = ref<number>(20);
const standardPrice = ref<number>(10);

const delivery = ref<'express' | 'standard'>('standard');

const calculateDelivery = () => {
    if (!country.value || !city.value || !zipcode.value) {
        return;
    }

    const price = Math.random();

    standardPrice.value = Math.floor(price * 30)
    expressPrice.value = Math.floor(price * 60)
}
</script>
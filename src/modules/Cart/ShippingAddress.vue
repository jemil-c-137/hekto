<template>
    <div class="w-1/2">
        <p class="font-josefin text-md mb-2">Estimate Shipping</p>
        <form class="flex flex-col gap-4 mb-3">
            <InputField v-model="country" placeholder="Country" required />
            <InputField v-model="city" placeholder="City" required />
            <InputField v-model="zipcode" placeholder="ZIP/PLZ" required type="number" />
        </form>

        <BaseButton size="s" rounded>
            <span>Calculate</span>
        </BaseButton>

        <div>
            <div class="flex gap-2 items-center mb-1">
                <input type="radio" name="standard" id="standard">
                <label for="standard">
                    <p>Standard Shipping - $5.99</p>
                    <p class="text-brand-muted text-xs">5-7 business days</p>
                </label>
            </div>

            <div class="flex gap-2 items-center mb-1">
                <input type="radio" name="standard" id="standard">
                <label for="standard">
                    <p>Express Shipping - $14.99</p>
                    <p class="text-brand-muted text-xs">2-3 business days</p>
                </label>
            </div>
            <div class="flex gap-2 items-center mb-1">
                <input type="radio" name="standard" id="standard">
                <label for="standard">
                    <p>Overnight Shipping - $29.99</p>
                    <p class="text-brand-muted text-xs">1 business day</p>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue';
import InputField from '@/UI/InputField.vue';
import { ref } from 'vue';

const country = ref('');
const city = ref('');
const zipcode = ref('');
</script>
<template>
    <div>
        <h3 class="section-title mb-12">What Shopex Offer!</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                <FeatureCard v-for="card in cards" :key="card.title" :title="card.title" :description="card.description">
                    <template #icon>
                        <component class="mb-6" :is="card.icon" />
                    </template>
            </FeatureCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import FeatureCard from './FeatureCard.vue';
import FreeDelivery from '@/UI/svg/FreeDelivery.vue';
import CashBack from '@/UI/svg/CashBack.vue';
import PremiumQuality from '@/UI/svg/PremiumQuality.vue';
import CustomerSupport from '@/UI/svg/CustomerSupport.vue';

const cards = [
    {
        title: 'Free Delivery',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        icon: FreeDelivery,
    },
    {
        title: 'Cash Back',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        icon: CashBack,
    },
    {
        title: 'Premium Quality',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        icon: PremiumQuality,
    },
    {
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        icon: CustomerSupport,
    }
]
</script>

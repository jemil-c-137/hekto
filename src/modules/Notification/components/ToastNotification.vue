<template>
    <Teleport to="body">
        <div class="fixed top-12 left-1/2 -translate-x-1/2 z-5000">
            <AlertMessage v-for="alert in alerts"
                        :message="alert.message"
                        :type="alert.type"
                        :key="alert.message" />
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import AlertMessage from '@/UI/AlertMessage.vue'
import { useAlertStore } from '../store/alertStore';

const alertStore = useAlertStore();

const { alerts } = storeToRefs(alertStore);
</script>
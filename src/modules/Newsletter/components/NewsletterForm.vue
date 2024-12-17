<template>
    <section
        class="max-w-screen-2xl mx-auto flex flex-col items-center justify-center mt-24 pt-56 pb-32 bg-[url('https://github.com/jemil-c-137/hekto/blob/gh-pages/assets/bg-palm.jpg?raw=true')] bg-no-repeat"
    >
        <h3 class="mb-7 section-title">Get Leatest Update By Subscribe 0ur Newslater</h3>
        <SignUpField @submit="handleSubmit" />
    </section>
</template>

<script setup lang="ts">
import SignUpField from '@/components/SignUpField.vue';
import { useAlertStore } from '@/modules/Notification';

const alertStore = useAlertStore();

const { addAlert } = alertStore;

const handleSubmit = () => {
    addAlert('You are subscribed to the newsletter', 'success');
}
</script>
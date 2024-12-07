<template>
    <form class="flex" @submit.prevent="handleSubmit">
        <InputField v-model="email" type="email" placeholder="Email" />
        <BaseButton type="submit" :rounded="false" size="s">Sign Up</BaseButton>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputField from "@/components/atoms/InputField.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";

const email = ref("");

const handleSubmit = () => {
    console.log(email.value);
};
</script>

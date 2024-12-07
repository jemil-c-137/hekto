<template>
    <form class="flex" @submit.prevent="handleSubmit">
        <InputField v-model="email" type="email" placeholder="Email" />
        <BaseButton type="submit" :rounded="false" size="s">Sign Up</BaseButton>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputField from "@/UI/InputField.vue";
import BaseButton from "@/UI/BaseButton.vue";

const email = ref("");

const handleSubmit = () => {
    console.log(email.value);
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="flex">
        <InputField v-model="inputValue" required placeholder="Search" />
        <BaseButton :rounded="false" size="s" type="submit">
            <SearchLogo class="w-6" />
        </BaseButton>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import InputField from "@/components/atoms/InputField.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
import SearchLogo from "@/components/svg/logos/SearchLogo.vue";

const inputValue = ref("");

const handleSubmit = () => {
    console.log(inputValue.value);
};
</script>

<template>
    <section class="content-container">
        <div class="mb-32">
            <h5 class="section-title mb-32">Discount items</h5>
            <div class="flex flex-col md:flex-row items-center">
                <div class="mb-8">
                    <img src="@/assets/discount/wood-chair.png" alt="" />
                </div>
                <div class="md:order-[-1]">
                    <p class="product-title mb-4">20% Discount of All Products</p>
                    <p class="font-josefin text-pink text-xl mb-5">Eams Sofa Compact</p>
                    <p class="leading-8 text-pale-purple mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse
                    nec, bibendum condimentum.
                    </p>
                    <ol class="text-pale-purple mb-9">
                    <li><span class="mr-1 text-off-purple">&#10004;</span>Material expose like metals</li>
                    <li><span class="mr-1 text-off-purple">&#10004;</span>Simple neutral colours.</li>
                    <li>
                        <span class="mr-1 text-off-purple">&#10004;</span>Clear lines and geomatric figures
                    </li>
                    <li>
                        <span class="mr-1 text-off-purple">&#10004;</span>Material expose like metals
                    </li>
                    </ol>
                    <BaseButton>Shop Now</BaseButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue'
</script>

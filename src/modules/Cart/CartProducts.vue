<template>
    <div>
        <table class="w-full">
            <thead class="pb-4">
                <tr>
                    <th class="text-left text-xl pb-8">Product</th>
                    <th class="text-left text-xl pb-8">Price</th>
                    <th class="text-left text-xl pb-8">Quantity</th>
                    <th class="text-left text-xl pb-8">Total</th>
                </tr>
            </thead>
            <tbody class="font-josefin">
                <tr v-for="product in products" :key="product.id">
                    <td class="flex">
                        <img class="max-w-[100px]" :src="product.img" alt="">
                        <div class="text-sm">
                            <p class="font-semibold text-lg">{{ product.name }}</p>

                            <span>
                                Color: 
                            </span>
                            <span :style="`color: ${product.color.hexValue}`">{{ product.color.name }}</span>
                            <span :style="`background: ${product.color.hexValue}`" class="w-3 h-3 ml-1 inline-block"></span>
                        </div>
                    </td>
                    <td>
                        <p>${{ product.price }}</p>
                    </td>
                    <td>
                        <div class="flex items-center justify-center rounded-lg h-12 w-fit">
                            <button class="w-7 h-full flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-l-lg transition-colors"
                            >
                                <span class="text-gray-600">-</span>
                            </button>
                            
                            <span class="font-semibold text-center">{{ product.quantity }}</span>
                            
                            <button
                            class="w-7 h-full flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-r-lg transition-colors">
                                <span class="text-gray-600">+</span>
                            </button>
                        </div>
                    </td>
                    <td>
                        <p>{{ product.totalPrice }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const products = ref(
    [
        {
            name: 'Luna Chair',
            id: 1,
            price: 42,
            totalPrice: 84,
            color: {
                name: "black",
                hexValue: "#000"
            },
            quantity: 2,
            img: 'https://github.com/jemil-c-137/hekto/blob/gh-pages/assets/chair2.png?raw=true'
        },
        {
            name: 'Aero Seat',
            id: 2,
            price: 30,
            totalPrice: 120,
            color: {
                name: "brown",
                hexValue: "#964B00"
            },
            quantity: 4,
            img: 'https://github.com/jemil-c-137/hekto/blob/gh-pages/assets/chair1.png?raw=true'
        },
    ]
)
</script>
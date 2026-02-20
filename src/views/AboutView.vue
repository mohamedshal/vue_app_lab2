<template>
  <div class="card bg-base-200 shadow-xl p-6">
    <h1 class="text-3xl font-bold">Mohamed Shalaby</h1>
    <p class="opacity-80 mt-2">Course: Front-end Development, ITI</p>
    <p class="mt-4">Welcome to My Shop! We provide quality products with great discounts and excellent customer service.</p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => console.log("AboutView mounted"));
onUnmounted(() => console.log("AboutView unmounted"));
</script>
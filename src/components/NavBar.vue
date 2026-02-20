<template>
  <div class="navbar bg-base-300 shadow-sm">
    <div class="flex-1">
      <span class="btn btn-ghost text-xl">My Shop</span>
    </div>
    <div class="flex gap-4">
      <nav class="flex gap-3">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="'/product/' + 1">Product 1</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => console.log("NavBar mounted"));
onUnmounted(() => console.log("NavBar unmounted"));
</script>
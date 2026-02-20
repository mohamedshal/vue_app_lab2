<template>
  <div class="card bg-base-200 shadow-xl p-4">
    <img :src="product.image" class="rounded-lg mb-3" />
    <h3 class="text-lg font-bold">{{ product.name }}</h3>
    <p class="text-green-700 font-semibold">${{ product.price - (product.price * (product.discount || 0)) / 100 }}</p>
    <span v-if="product.badge" class="badge badge-outline">{{ product.badge }}</span>
    <RouterLink :to="'/product/' + product.id" class="btn btn-primary mt-2">View Product</RouterLink>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
const props = defineProps({
  product: { type: Object, required: true }
});

onMounted(() => console.log(`ProductCard mounted for ID: ${props.product.id}`));
onUnmounted(() => console.log(`ProductCard unmounted for ID: ${props.product.id}`));
</script>
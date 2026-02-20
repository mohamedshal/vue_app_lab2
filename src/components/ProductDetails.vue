<template>
  <div class="card bg-base-200 shadow-xl p-6">
    <img :src="product.image" class="rounded-lg mb-4 w-full" />
    <h1 class="text-3xl font-bold">{{ product.name }}</h1>
    <p class="opacity-80">{{ product.description }}</p>
    <div class="flex gap-4 text-xl mt-2">
      <span class="font-semibold text-green-700">${{ discountedPrice }}</span>
      <span v-if="product.discount > 0" class="line-through opacity-60">${{ product.price }}</span>
    </div>
    <p class="mt-2">Stock: {{ product.stock }}</p>
    <div class="flex gap-2 mt-2">
      <span v-for="tag in product.tags" :key="tag" class="badge badge-outline">{{ tag }}</span>
    </div>
    <button 
      class="btn btn-primary mt-4" 
      :disabled="product.stock === 0"
      @click="$emit('buy', product.id)"
    >
      {{ product.stock === 0 ? 'Out of Stock' : 'Buy Now' }}
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
const props = defineProps({
  product: { type: Object, required: true },
  discountedPrice: { type: Number, required: true }
});

onMounted(() => console.log(`ProductDetails mounted for ID: ${props.product.id}`));
onUnmounted(() => console.log(`ProductDetails unmounted for ID: ${props.product.id}`));
</script>
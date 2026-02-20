<template>
  <ProductDetails 
    :product="matchedProduct" 
    :discountedPrice="discountedPrice" 
    @buy="$emit('buy', matchedProduct)"
  />

  <section class="mt-6">
    <h2 class="text-2xl font-bold my-4">Related Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard
        v-for="p in relatedProducts"
        :key="p.id"
        :product="p"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import ProductCard from "../components/ProductCard.vue";
import ProductDetails from "../components/ProductDetails.vue";

const props = defineProps({
  products: { type: Array, required: true },
});

const route = useRoute();
const productId = computed(() => Number(route.params.id));

const matchedProduct = computed(() => {
  return props.products.find((p) => p.id === productId.value) || props.products[0] || {};
});

const relatedProducts = computed(() => props.products.filter((p) => p.id !== productId.value));

const discountedPrice = computed(() => {
  const p = matchedProduct.value || {};
  const price = Number(p.price || 0);
  const disc = Number(p.discount || 0);
  return price - (price * disc) / 100;
});

onMounted(() => console.log(`ProductView mounted for ID: ${productId.value}`));
onUnmounted(() => console.log("ProductView unmounted"));
</script>
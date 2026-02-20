<template>
  <section class="card bg-base-200 shadow-xl p-6">
    <ProductCard :product="mainProduct" />
  </section>

  <section class="mt-6">
    <h2 class="text-2xl font-bold my-4">Related Products</h2>
    <div class="carousel rounded-box w-full gap-4 overflow-x-auto p-4">
      <div
        v-for="item in relatedProducts"
        :key="item.id"
        class="carousel-item flex-shrink-0 basis-[32%]"
      >
        <ProductCard :product="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import ProductCard from "../components/ProductCard.vue";

const props = defineProps({
  products: { type: Array, required: true },
});

const mainProduct = computed(() => props.products[0] || {});
const relatedProducts = computed(() => (props.products || []).slice(1));

onMounted(() => console.log(`HomeView mounted — ${props.products.length} items`));
onUnmounted(() => console.log("HomeView unmounted"));
</script>

<style scoped>
.carousel {
  display: flex;
  flex-wrap: nowrap;
}
.carousel-item {
  margin-right: 1rem;
}
</style>
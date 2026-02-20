<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => console.log("CarouselBanner mounted"));
onUnmounted(() => console.log("CarouselBanner unmounted"));

const props = defineProps({
  relatedProducts: Array,
  getDiscounted: Function
});
</script>

<template>
  <div class="carousel flex gap-4 overflow-x-auto p-4">
    <div v-for="item in relatedProducts" :key="item.id" class="carousel-item basis-[32%] shrink-0">
      <div class="card bg-base-200 shadow-xl p-4 w-full">
        <img :src="item.image" class="rounded-lg mb-3 w-full" />
        <h3 class="text-lg font-bold">{{ item.name }}</h3>
        <p class="font-semibold text-green-700">${{ getDiscounted(item) }}</p>
        <p v-if="item.discount>0" class="line-through opacity-60 ml-2">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>
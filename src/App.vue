<template>
  <!-- ================= FULL WIDTH HEADER ================= -->
  <header class="w-full bg-base-300 p-4 shadow">
    <NavBar />
  </header>

  <!-- ================= MAIN CONTENT ================= -->
  <main class="max-w-4xl mx-auto p-8 space-y-12">
    <RouterView :products="products" @buy="handleBuy" />
  </main>

  <!-- ================= FULL WIDTH FOOTER ================= -->
  <footer class="w-full bg-base-300 p-4 text-center mt-12">
    <p class="opacity-70">© 2026 My Shop — All Rights Reserved</p>
  </footer>
</template>

<script setup>
import { reactive, computed } from "vue";


// ================= IMPORT COMPONENTS =================
import NavBar from "./components/NavBar.vue";
import CarouselBanner from "./components/CarouselBanner.vue";
import ProductCard from "./components/ProductCard.vue";
/* ====== IMPORT JSON ====== */
import data from "./data.json";

/* ====== IMPORT IMAGES ====== */
import productMainImg from "./assets/images/ec0101378_left_feed1000.avif";
import rp1 from "./assets/images/np-198309-mfach00534-boot-camel-0.webp";
import rp2 from "./assets/images/np-224721-mfach00717-beige-0.webp";
import rp3 from "./assets/images/P01049356.avif";

/* ====== MAP JSON TO IMAGES ====== */
const product = reactive({
  ...data.mainProduct,
  image: productMainImg
});

const relatedProducts = reactive(
  data.relatedProducts.map((item) => {
    let img = rp1;
    if (item.id === 3) img = rp2;
    else if (item.id === 4) img = rp3;
    return { ...item, image: img };
  })
);

const products = computed(() => [product, ...relatedProducts]);

/* ====== COMPUTED ====== */
const discountedPrice = computed(() => {
  return product.price - (product.price * product.discount) / 100;
});

/* ====== HELPER FUNCTION ====== */
function getDiscounted(item) {
  return item.price - (item.price * item.discount) / 100;
}

/* ====== HANDLE BUY EVENT ====== */
function handleBuy(product) {
  console.log("User wants to buy:", product);
}
</script>

<style>
body {
  background: #f4f4f5;
}
</style>

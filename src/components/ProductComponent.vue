<template>
  <div>
    <div class="flex flex-row flex-wrap gap-2 justify-between max-w-screen-xl">
      <div
        v-for="product in products"
        :key="product.id"
        class="w-[300px] h-[400px] border-2 rounded-xl flex flex-col p-3"
      >
        <img :src="product.image" alt="Product Image" />
        <p>Price: ${{ product.promotionAsPercentage }}</p>
        <div>
          <h3>{{ product.name }}</h3>
          <p class="text-sm">group: {{ product.group }}</p>
          <p class="text-sm">Price: {{ product.title }}</p>
          <p>rating: ({{ product.rating }})</p>
          <p>size: {{ product.size }}</p>
          <p>price: ${{ product.price }}</p>
          <p>discount: ${{ product.discount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>

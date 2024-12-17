<template>
  <div id="app" class="parent">
    <!-- Menu Component -->
    <MenuComponent features="Feature Categories" :groups="groups" />

    <!-- Categories Section -->
    <div class="parent-category">
      <div v-for="(category, index) in categories" :key="index">
        <Category
          :imageSrc="category.image"
          :title="category.name"
          :itemCount="category.productCount"
          :bgColor="category.color"
        />
      </div>
    </div>
    <br />

    <!-- Promotions Section -->
    <div class="flex flex-row gap-4">
      <div v-for="(promotion, index) in promotions" :key="index">
        <Promotion
          :image="promotion.image"
          :title="promotion.title"
          :buttonColor="promotion.buttonColor"
          @click="primaryAction"
        />
      </div>
    </div>

    <!-- Menu Component -->
    <MenuComponent features="Popular Products" :groups="groups" />

    <div>
      <ProductComponent :products="products" />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useProductStore } from "./stores/productStore"; // Import the Pinia store
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import MenuComponent from "./components/MenuComponent.vue";
import ProductComponent from "./components/ProductComponent.vue";

export default {
  name: "App",
  components: {
    Category,
    Promotion,
    MenuComponent,
    ProductComponent,
  },
  computed: {
    // Map state from the Pinia store
    ...mapState(useProductStore, [
      "categories",
      "promotions",
      "groups",
      "products",
    ]),
  },

  methods: {
    primaryAction() {
      alert("Primary button clicked!");
    },
  },
  mounted() {
    const productStore = useProductStore();

    // Fetch data using store actions
    productStore.fetchData();
  },
};
</script>

<style>
.parent {
  display: flex;
  flex-direction: column;
}

.parent-category {
  display: flex;
  flex-direction: row;
  gap: 22px;
}
</style>

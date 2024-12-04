<template>
  <div id="app" class="parent">
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
    <div class="flex flex-row gap-4">
      <div v-for="(promotion, index) in promotions" :key="index">
        <Promotion
          :image="promotion.image"
          :title="promotion.title"
          :buttonColor="promotion.buttonColor"
          :onClick="primaryAction"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "./components/Button.vue";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";

export default {
  name: "App",
  components: {
    Category,
    Promotion,
    Button,
  },
  data() {
    return {
      categories: [],
      promotions: [],
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories"
        );
        this.categories = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/promotions"
        );
        this.promotions = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },
    primaryAction() {
      alert("Primary button clicked!");
    },
  },
  mounted() {
    // Fetch categories and promotions when the component is loaded
    this.fetchCategories();
    this.fetchPromotions();
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

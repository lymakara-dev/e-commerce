import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName) =>
        state.categories.filter((category) => category.group === groupName);
    },
    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.filter((product) => product.group === groupName);
    },
    getProductsByCategory: (state) => {
      return (categoryId) =>
        state.products.filter((product) => product.categoryId === categoryId);
    },
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    },
  },
  actions: {
    async fetchData() {
      try {
        const [categories, promotions, groups, products] = await Promise.all([
          axios.get("http://localhost:3000/api/categories"),
          axios.get("http://localhost:3000/api/promotions"),
          axios.get("http://localhost:3000/api/groups"),
          axios.get("http://localhost:3000/api/products"),
        ]);

        this.categories = categories.data;
        this.promotions = promotions.data;
        this.groups = groups.data;
        this.products = products.data;
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    },
  },
});

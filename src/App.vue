<!-- App.vue -->
<template>
  <div id="app">
    <category />
  </div>
</template>

<script>
import category from "./components/category.vue";

export default {
  name: "App",
  components: {
    category,
  },
};
</script>

<style>
/* Global styles here */
</style>

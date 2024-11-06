<template>
  <div id="app" class="parent">
    <div class="parent-category">
      <div v-for="(category, index) in categories" :key="index">
        <Category
          :imageSrc="category.imageSrc"
          :title="category.title"
          :itemCount="category.itemCount"
          :imageBgColor="category.imageBgColor"
          :textBgColor="category.textBgColor"
        />
      </div>
    </div>
    <br />
    <div class="parent-promotion">
      <div
        class="child-promotion"
        v-for="(promotion, index) in promotions"
        :key="index"
      >
        <Promotion class="promotion" />
        <Button
          class="button"
          :label="promotion.buttonLabel"
          :color="promotion.buttonColor"
          size="12px"
          :onClick="primaryAction"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
      categories: [
        {
          imageSrc: "./../../public/burger.png",
          title: "Burger & Fries",
          itemCount: 10,
          imageBgColor: "lightblue",
          textBgColor: "#f4f4f4",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Burger & Fries",
          itemCount: 10,
          imageBgColor: "lightblue",
          textBgColor: "#f4f4f4",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#fff7e6",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#fff7e6",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#fff7e6",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#fff7e6",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#orange",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#orange",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#orange",
        },
        {
          imageSrc: "./../../public/burger.png",
          title: "Pizza & More",
          itemCount: 8,
          imageBgColor: "lightgreen",
          textBgColor: "#orange",
        },
      ],
      promotions: [
        {
          buttonLabel: "Shop Now ->",
          buttonColor: "#3BB77E",
        },
        {
          buttonLabel: "View Deals ->",
          buttonColor: "#FF5733",
        },
        {
          buttonLabel: "View Deals ->",
          buttonColor: "#FF5733",
        },
      ],
    };
  },
  methods: {
    primaryAction() {
      alert("Primary button clicked!");
    },
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

.parent-promotion {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.child-promotion {
  position: relative;
  margin-top: 20px;
}

.button {
  position: absolute;
  top: 190px;
  left: 48px;
}
</style>

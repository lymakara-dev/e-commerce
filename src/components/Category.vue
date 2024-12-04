<template>
  <div class="container" :style="{ backgroundColor: bgColor }">
    <div class="image">
      <img :src="'http://localhost:3000/' + imageSrc" alt="Category1" />
    </div>
    <div class="text">
      <h1 class="header">{{ title }}</h1>
      <h1 class="paragraph">{{ itemCount }} items</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    default: "./../../public/burger.png",
    imageSrc: {
      type: String,
      default: "./../../public/burger.png",
    },
    title: {
      type: String,
      default: "Cake & Milk",
    },
    itemCount: {
      type: Number,
      default: 14,
    },
    bgColor: {
      type: String,
      default: "red",
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #f2fce4;
  width: 137px;
  height: 177px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.text {
  width: 100%;
  text-align: center;
  padding: 10px;
}

.header {
  color: #253d4e;
  font-size: 16px;
}

.paragraph {
  color: #b6b6b6;
  font-size: 10px;
}
</style>

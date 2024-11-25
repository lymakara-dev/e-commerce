<template>
  <div class="category-card" :style="{ backgroundColor: cardBgColor }">
    <img :src="imgSrc" alt="altText" />
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: {
    cardBgColor: {
      type: String,
      Required: true,
    },
    imgSrc: {
      type: String,
      Required: true,
    },
    altText: {
      type: String,
      Required: true,
    },
    title: {
      type: String,
      Required: true,
    },
    description: {
      type: String,
      Required: true,
    },
  },
};
</script>

<style>
.category-card {
  width: 136px;
  height: 177px;
  border: none;
  border-radius: 10px;
  color: #253d4e;
  font-family: "Quicksand", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

.description {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}
</style>

<template>
  <div class="promotion-card">
    <img class="image" :src="imgSrc" :alt="altText" />
    <h4 class="heading">{{ heading }}</h4>
  </div>
</template>

<script>
export default {
  name: "MyPromotion",
  props: {
    heading: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.promotion-card {
  background-color: white;
  width: 512px;
  height: 300px;
  border-radius: 10px;

  position: relative;
  overflow: hidden;
}

.heading {
  position: absolute;
  top: 75px;
  left: 48px;

  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #253d4e;
  width: 220px;
  height: 92px;
}

.image {
  position: absolute;
  right: 0;
  bottom: 0;

  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>

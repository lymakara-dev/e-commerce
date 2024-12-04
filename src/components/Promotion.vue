<template>
  <div class="child-promotion">
    <div class="container">
      <div class="image">
        <img :src="'http://localhost:3000/' + image" alt="Promotion Image" />
      </div>
      <div class="text">
        <h1 class="header">{{ title }}</h1>
      </div>
    </div>
    <div class="button">
      <Button
        label="Shop Now"
        :ButtonColor="buttonColor"
        :onClick="onClickFunction"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Promotion",
  components: { Button },
  props: {
    title: String,
    image: String,
    buttonColor: String,
    onClick: Function,
  },
  methods: {
    onClickFunction() {
      this.onClick();
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #f0e8d5;
  width: 512px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
}
.image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}
.text {
  background-color: orange;
  width: 100%;
  text-align: center;
}
.header {
  color: #253d4e;
  font-size: 24px;
  font-weight: 700px;
  text-align: left;
  width: 271px;
  height: 92px;
  position: absolute;
  top: 75px;
  left: 48px;
}
.button {
  position: absolute;
  top: 190px;
  left: 48px;
}

.child-promotion {
  position: relative;
  margin-top: 20px;
}
</style>

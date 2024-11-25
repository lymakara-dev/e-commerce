<script>
import MyButton from "./components/button.vue";
import MyCategory from "./components/category.vue";
import MyPromotion from "./components/promotion.vue";

export default {
  components: {
    MyButton,
    MyCategory,
    MyPromotion,
  },
};
</script>

<template>
  <div class="parent">
    <div class="category-container">
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="burger.png"
        title="Burger"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="peach.png"
        title="Peach"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="kiwi.png"
        title="Oganic Kiwi"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="apple.png"
        title="Red Apple"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="snack.png"
        title="Snack"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="plum.png"
        title="Black Plum"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="cabbage.png"
        title="Vegetable"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="headphone.png"
        title="Headphone"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="milk.png"
        title="Cake & Milk"
        description="10 items"
      />
      <MyCategory
        cardBgColor="#F2FCE4"
        imgSrc="orange.png"
        title="Orange"
        description="10 items"
      />
    </div>
    <div class="promotion-container">
      <div class="card">
        <MyPromotion
          heading="Everyday Fresh & Clean with Our Products"
          imgSrc="onion.jpeg"
          altText="Onion picture"
        />
        <MyButton class="button" label="Shop Now" btnColor="#3BB77E" />
      </div>
      <div class="card">
        <MyPromotion
          heading="Make your Breakfast Healthy and Easy"
          imgSrc="vegetables.jpeg"
          altText="Onion picture"
        />
        <MyButton class="button" label="Shop Now" btnColor="#3BB77E" />
      </div>
      <div class="card">
        <MyPromotion
          heading="The best Organic Products Online"
          imgSrc="vegetables.jpeg"
          altText="Onion picture"
        />
        <MyButton class="button" label="Shop Now" btnColor="#FDC040" />
      </div>
    </div>
  </div>
</template>

<style>
.card {
  position: relative;
}

.button {
  position: absolute;
  top: 190px;
  left: 48px;
}

.parent {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 22px;
}

.category-container {
  display: flex;
  flex-direction: row;
  gap: 22px;
}

.promotion-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>

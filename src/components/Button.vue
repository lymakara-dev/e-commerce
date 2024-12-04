<template>
  <button :style="{ backgroundColor: ButtonColor }" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
    ButtonColor: String,
    onClick: Function,
  },
  methods: {
    handleClick() {
      this.onClick();
    },
  },
};
</script>

<style scoped>
button {
  color: white;
  border: none;
  cursor: pointer;
  width: 110px;
  height: 31px;
  border-radius: 3px;
}
</style>

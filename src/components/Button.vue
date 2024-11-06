<template>
  <button
    :style="{ backgroundColor: color, fontSize: size }"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "Click me" },
    color: { type: String, default: "blue" },
    size: { type: String, default: "16px" },
    onClick: Function,
  },
  methods: {
    handleClick() {
      if (this.onClick) this.onClick();
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

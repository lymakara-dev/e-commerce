<template>
  <button class="my-button" :style="{ backgroundColor: btnColor }">
    {{ label }}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 icon-size"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    btnColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.my-button {
  color: white;
  /* font-family: "Quicksand", sans-serif;
  font-size: 12px;
  font-weight: 700px;
  line-height: 15px; */
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.icon-size {
  width: 12px;
  height: 12px;
}
</style>

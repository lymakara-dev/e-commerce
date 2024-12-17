<template>
  <div class="flex flex-row items-center justify-between pt-2 pb-2">
    <h2 class="font-bold text-2xl">{{ features }}</h2>
    <div class="flex flex-row gap-4">
      <h2 class="text-lg font-bold">All</h2>
      <ul class="text-lg flex flex-row items-center gap-4">
        <li v-for="group in groups" :key="group.id">{{ group }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groups: Array,
    features: String,
  },
};
</script>

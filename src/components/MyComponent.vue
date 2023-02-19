<template>
  <div class="my-component">{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyComponent",
  props: {
    message: {
      type: String,
      default: "Hello, World!",
    },
  },
});
</script>

<style lang="less">
</style>

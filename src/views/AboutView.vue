<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div class="about">
    <button @click="count++">Click me</button>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

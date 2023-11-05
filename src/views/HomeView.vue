<template>
  <div class="home">
    <CategoriesList :categories="categories" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import CategoriesList from "./components/CategoriesList.vue";
import Category from "../types/Categories";
import { categoriesDataSet } from "../dataSets/Categories.dataset";
import CategoriesList from "@/components/CategoriesList.vue";

export default {
  name: "HomeView",
  components: { CategoriesList },

  setup() {
    const categories = ref<Category[]>(categoriesDataSet);

    return { categories };
  },
};
</script>

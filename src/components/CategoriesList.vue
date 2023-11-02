<template>
  <div class="d-flex justify-content-center">
    <table class="table table-striped custom-div">
      <thead>
        <!-- <tr>
          <th v-for="key in Object.keys(categories[0])" :key="key">
            {{ key }}
          </th>
        </tr> -->

        <tr>
          <th>Icon</th>
          <template v-for="key in Object.keys(categories[0])">
            <th :key="key" v-if="key !== 'iconUrl' && key !== 'id'">
              {{ key }}
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="category in categories" :key="category.id">
          <td v-for="value in Object.values(category)" :key="value">
            {{ value }}
          </td>
        </tr> -->

        <tr v-for="category in categories" :key="category.id">
          <td>
            <img
              :src="category.iconUrl"
              alt="Category Icon"
              style="max-width: 50px"
            />
          </td>
          <template v-for="value in Object.values(category)">
            <td
              :key="value"
              v-if="value !== category.iconUrl && value !== category.id"
            >
              {{ value }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Category from "@/types/Categories";
import CategoryDiv from "./CategoryDiv.vue";
export default defineComponent({
  props: {
    categories: {
      required: true,
      type: Array as PropType<Category[]>,
    },
  },
});
</script>

<style scoped>
.custom-div {
  width: 90%;
}
</style>

<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="tableHeaders"
    :items="categoriesRow"
    item-value="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Category from "@/types/Categories";
import { VDataTable } from "vuetify/lib/labs/components.mjs";

export default defineComponent({
  data() {
    const filteredHeaders = [];
    for (const key of Object.keys(this.categories[0])) {
      if (key !== "id" && key !== "iconUrl") {
        filteredHeaders.push(key);
      }
    }
    return {
      itemsPerPage: 5,
      tableHeaders: [
        {
          title: "Logo",
          value: "logo",
          align: "center",
          sortable: true,
        },
        ...filteredHeaders.map((key) => {
          return {
            title: key,
            value: key,
            align: "center",
            sortable: true,
          };
        }),
      ],
      categoriesRow: this.categories.map((category) => {
        return {
          logo: category.iconUrl,
          name: category.name,
          slug: category.slug,
          activeFrom: category.activeFrom,
          activeUntil: category.activeUntil,
          createdAt: category.createdAt,
          updatedAt: category.updatedAt,
        };
      }),
    };
  },

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
.icon {
  width: 5%;
}
</style>

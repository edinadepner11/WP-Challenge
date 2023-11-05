<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div class="outer-div">
    <VDataTable
      :key="categoryData"
      v-model:items-per-page="itemsPerPage"
      :headers="tableHeaders"
      :items="categoriesRow"
      item-value="name"
      class="elevation-1 inner-table"
      ><template v-slot:item.logo="{ item }">
        <v-img :src="item.logo" alt="Category Icon" max-width="30px"></v-img>
      </template>
      <template v-slot:item.actions="{ item }">
        <div>
          <v-btn @click="onViewClick(item)">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn @click="onDeleteClick(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template></VDataTable
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Category from "@/types/Categories";
// import { VDataTable } from "vuetify/lib/labs/components.mjs";
// import { VDataTable } from "vuetify/labs/VDataTable";
export default defineComponent({
  data() {
    const filteredHeaders = [];
    for (const key of Object.keys(this.categories[0])) {
      if (key !== "id" && key !== "iconUrl") {
        filteredHeaders.push(key);
      }
    }
    console.log(this.categories.length);
    return {
      categoryData: this.categories.length,
      itemsPerPage: 5,
      tableHeaders: [
        {
          text: "Logo",
          value: "logo",
          align: "end",
          sortable: true,
        },
        ...filteredHeaders.map((key) => {
          return {
            title: key,
            value: key,
            align: "end",
            sortable: true,
          };
        }),
        {
          title: "Actions",
          value: "actions",
          align: "end",
          sortable: false,
        },
      ],
      categoriesRow: this.categories.map((category) => {
        return {
          logo: category.iconUrl,
          name: category.name,
          slug: category.slug,
          activeFrom: category.activeFrom ? category.activeFrom : "N/A",
          activeUntil: category.activeUntil ? category.activeUntil : "N/A",
          createdAt: category.createdAt.slice(
            0,
            category.createdAt.indexOf("T")
          ),
          updatedAt: category.updatedAt.slice(
            0,
            category.createdAt.indexOf("T")
          ),
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

  methods: {
    onViewClick(item: any) {
      console.log(item);
    },

    onDeleteClick(item: any) {
      const { slug } = item;
      const index = this.categoriesRow.findIndex(
        (category) => category.slug === slug
      );

      if (index !== -1) {
        // eslint-disable-next-line vue/no-mutating-props
        this.categoriesRow.splice(index, 1);
      }
    },
  },
});
</script>

<style scoped>
.outer-div {
  width: 85%;
  margin-left: 7.5%;
  margin-right: 7.5%;
}
.inner-table {
  width: 100%;
  border-radius: 10px;
}
</style>

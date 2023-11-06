<template>
  <div v-if="showPopup" class="custom-popup">
    <div class="popup-content">
      <button @click="closePopup">Close</button>
      <div class="popup-details" v-if="category">
        <h2>{{ category.name }}</h2>
        <p>ID: {{ category.id }}</p>
        <p>Created At:{{ category.createdAt }}</p>
        <p>Updated At: {{ category.updatedAt }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Category from "@/types/Categories";
import { PropType } from "vue";

export default {
  props: {
    showPopup: Boolean,
    category: Object as PropType<Category | null>,
  },
  methods: {
    closePopup() {
      this.$emit("close", undefined);
    },
  },
};
</script>

<style scoped>
.custom-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  width: 30%;
}

.popup-details {
  margin-top: 20px;
}
</style>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  recipe: Object,
});

// Truncate long descriptions (can be toggled to show full text)
const truncateDescription = ref(true);
const maxDescriptionLength = 100;
const toggleFullDescription = () => {
  truncateDescription.value = !truncateDescription.value;
};
const truncatedDescription = computed(() => {
  let description = props.recipe.description;
  if (truncateDescription.value && description.length > maxDescriptionLength) {
    description = description.substring(0, maxDescriptionLength - 3) + "...";
  }
  return description;
});
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg bg-white">
    <img class="w-full" :src="recipe.image_url" :alt="recipe.filename" />
    <div class="px-4 py-4">
      <!-- Title and Subtitle -->
      <div class="mb-2">
        <div class="font-bold text-xl">{{ recipe.title }}</div>
        <div class="text-lg">{{ recipe.subtitle }}</div>
      </div>

      <!-- Description -->
      <div class="text-gray-500 mb-2">
        <div v-if="recipe.description.length <= maxDescriptionLength">
          {{ recipe.description }}
        </div>
        <div v-else>
          <button
            v-if="recipe.description.length > maxDescriptionLength"
            @click="toggleFullDescription"
            class="text-left"
          >
            {{ truncatedDescription }}
            <span class="text-green-500 hover:text-green-600">
              Show {{ truncateDescription ? "More" : "Less" }}
            </span>
          </button>
        </div>
      </div>

      <!-- Tags -->
      <div class="mb-2">
        <span v-for="(tag, index) in recipe.tags.slice(0, 3)" :key="index">
          {{ tag }} <span v-if="index < 2">| </span>
        </span>
      </div>

      <!-- Show Recipe -->
      <div class="border border-gray-100 mb-2"></div>
      <button
        :href="'/recipes/' + recipe.id"
        class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
      >
        View Recipe
      </button>
    </div>
  </div>
</template>

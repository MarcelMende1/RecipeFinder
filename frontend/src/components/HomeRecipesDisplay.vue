<script setup>
import { reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import RecipeCard from "@/components/RecipeCard.vue";

// state for status of the API request (loading / received data)
const state = reactive({
  recipes: [],
  isLoading: true,
});

// request recipes from API
onMounted(async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/recipes");
    state.recipes = await response.json();
  } catch (error) {
    console.error("Error fetching recipes", error);
  } finally {
    state.isLoading = false;
    state.recipes.map((x) => console.log(x.title));
  }
});
</script>

<template>
  <!-- Browse Recipes -->
  <section class="bg-blue-50 px-4 py-8">
    <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
      Browse Recipes
    </h2>
    <div class="container-xl lg:container m-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4"
      >
        <RecipeCard
          v-for="recipe in state.recipes.slice(0, 4)"
          :key="recipe.id"
          :recipe="recipe"
          :showDescription="true"
        />
      </div>
    </div>
  </section>

  <!-- View All Recipes -->
  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/recipes"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Recipes</RouterLink
    >
  </section>
</template>

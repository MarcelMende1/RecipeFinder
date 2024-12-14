<script setup>
import { reactive, onMounted } from "vue";
import RecipeCard from "@/components/RecipeCard.vue";

const state = reactive({
  recipes: [],
  isLoading: true,
});

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
  <section class="bg-blue-50 px-4 py-8">
    <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
      Browse Recipes
    </h2>
    <!-- TODO: add Filter functionality -->
    <div class="container-xl lg:container m-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4"
      >
        <RecipeCard
          v-for="recipe in state.recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>
    </div>
  </section>
</template>

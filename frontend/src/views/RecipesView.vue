<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import Hero from "@/components/Hero.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import DropdownMenu from "@/components/DropdownMenu.vue";

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

// for filtering the recipes
const queryString = ref("");
const authorOptions = ["All", "Official", "By Users"];
const authorFilter = ref(authorOptions[0]);

const filteredRecipes = computed(() => {
  // filter recipes using by queryString
  let lowercaseQueryString = queryString.value.toLowerCase();
  let temp = state.recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(lowercaseQueryString) ||
      r.subtitle.toLowerCase().includes(lowercaseQueryString) ||
      // check ingredients as well    (TODO: maybe remove later? this might be too slow, with large amount of recipes)
      r.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowercaseQueryString)
      )
  );

  // filter recipes by author
  let lowercaseAuthorFilter = authorFilter.value.toLowerCase();
  switch (lowercaseAuthorFilter) {
    case "all":
      break;
    case "official":
      temp = temp.filter(
        (r) => r.author.toLowerCase() === lowercaseAuthorFilter
      );
      break;
    case "by users":
      temp = temp.filter((r) => r.author.toLowerCase() != "official");
      break;
    default:
      console.error("Author filter contains invalid value");
  }

  return temp;
});
</script>

<template>
  <section>
    <Hero
      title="Add Simple explaination here"
      subtitle="propably not in a hero though"
    />
  </section>

  <section class="bg-gray-100 px-4 py-8">
    <div class="bg-white rounded-md container-xl lg:container m-auto p-4">
      <!-- Filter options -->
      <div class="relative flex items-center space-x-4 mb-4">
        <!-- Search bar -->
        <div class="flex-grow">
          <div class="relative flex items-center">
            <i
              class="fa-solid fa-magnifying-glass absolute left-3 text-gray-500"
            ></i>
            <input
              type="search"
              v-model="queryString"
              placeholder="Search recipes..."
              class="w-full pl-10 px-4 py-2 text-sm border border-gray-300 rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        <!-- TODO: add filter for Tags (either defined set or all tags from recipes list) -->

        <!-- Dropdown for author -->
        <DropdownMenu
          label="Show recipes:"
          :options="authorOptions"
          @update:selected="(selectedOption) => (authorFilter = selectedOption)"
        />
      </div>

      <!-- display (filtered) recipes -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <RecipeCard
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>
    </div>
  </section>
</template>

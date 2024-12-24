<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/vue.svg";

/**
 * Checks if routePath equals current route.
 *
 * Used for adding a class that highlights the current link as active.
 * @param routePath
 */
const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Sticking to the right side -->
          <div class="md:mr-auto">
            <div class="flex space-x-2">
              <!-- Logo -->
              <RouterLink to="/" class="flex flex-shrink-0 items-center mr-4">
                <img class="h-10 w-auto" :src="logo" alt="Vue Logo" />
                <span class="hidden md:block text-white text-2xl font-bold ml-2"
                  >Food Planner</span
                >
              </RouterLink>

              <!-- Pages -->
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-green-800 hover:bg-gray-900'
                    : 'hover:bg-green-900',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/recipes"
                :class="[
                  isActiveLink('/recipes')
                    ? 'bg-green-800 hover:bg-gray-900'
                    : 'hover:bg-green-900',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                >Recipes</RouterLink
              >
            </div>
          </div>

          <!-- Sticking to the right side -->
          <div class="md:ml-auto">
            <!-- Recipe Related (TODO: hide, if not logged in) -->
            <div class="flex space-x-2">
              <RouterLink
                to="/recipes/add"
                :class="[
                  isActiveLink('/recipes/add')
                    ? 'bg-green-800 hover:bg-gray-900'
                    : 'hover:bg-green-900',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                >Add Recipe</RouterLink
              >

              <!-- Account related -->
              <RouterLink
                to="/login"
                :class="[
                  isActiveLink('/login')
                    ? 'bg-green-800 hover:bg-gray-900'
                    : 'hover:bg-green-900',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                >Login</RouterLink
              >
              <RouterLink
                to="/register"
                :class="[
                  isActiveLink('/register')
                    ? 'bg-green-800 hover:bg-gray-900'
                    : 'hover:bg-green-900',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                >Register</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<template>
  <!-- Developers and Employers -->
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg">
        <!-- First Card -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold">
            For Inspiration Seekers <i class="ml-1 fa-solid fa-utensils"></i>
          </h2>
          <p class="mt-2 mb-4">Browse our recipes and find your next meal</p>
          <a
            href="jobs.html"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Recipes
          </a>
        </div>
        <!-- Second Card -->
        <div class="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold">
            For Kitchen Innovators <i class="ml-1 fa-solid fa-wand-sparkles"></i>
          </h2>
          <p class="mt-2 mb-4">Share your recipe creations with other people</p>
          <a
            href="add-job.html"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add Recipe to Collection
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

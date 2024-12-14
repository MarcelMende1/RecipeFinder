<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import RecipesList from '@/components/RecipesList.vue';
</script>

<template>
  <Navbar />
  <!-- TODO: maybe add background-image here? -->
  <Hero title="Find your new favorite Recipe" subtitle="Explore our collection and find the recipes that fit your taste!"/>
  <HomeCards />
  <RecipesList />
</template>


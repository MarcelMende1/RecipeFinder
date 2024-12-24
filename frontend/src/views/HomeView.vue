<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import HomeRecipesDisplay from '@/components/HomeRecipesDisplay.vue';
</script>

<template>
  <!-- TODO: maybe add background-image here? -->
  <Hero title="Find your new favorite Recipe" subtitle="Explore our collection and find the recipes that fit your taste!"/>
  <HomeCards />
  <HomeRecipesDisplay />
</template>
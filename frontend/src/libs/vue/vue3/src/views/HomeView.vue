<script setup>
import { RouterView } from 'vue-router'
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <RouterView />
  </main>
</template>

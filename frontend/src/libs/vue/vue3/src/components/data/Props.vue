<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <main>
    <div class="msg">{{msg}}</div>
  </main>
</template>
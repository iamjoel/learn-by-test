<script setup>
let count = 0

</script>

<template>
  <main>
    <div>数字: {{counter}}</div>
    <button @click="counter--">-</button><input :value="couter" /><button>-</button>
  </main>
</template>
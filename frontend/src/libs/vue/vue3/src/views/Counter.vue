<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const count = ref(0)

const handleChange = event => console.log(event.target.value)
const handleKeyup = event => console.log(event.target.value)

onMounted(() => {
  console.log('mounted')
})

onUnmounted(() => {
  console.log('unmounted')
})

</script>

<template>
  <main>
    <div>数字: {{count}}</div>
    <div>
      <button @click="count--">-</button>
      <input v-model="count" @Change="handleChange" @keyup="handleKeyup" />
      <button @click="count++">+</button>
    </div>
  </main>
</template>
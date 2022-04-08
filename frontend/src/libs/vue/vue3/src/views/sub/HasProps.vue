<script setup >
import {  ref } from 'vue'

const props = defineProps({
  name: String
})

const emit = defineEmits(['change'])

const name = ref(props.name)
const changeName = () => {
  name.value = name.value === 'joel' ? 'jack' : 'joel'
  emit('change', name.value)
}
</script>

<template>
  <main>
    <div>{{name}}</div>
    <div>
      <button @click="changeName">改名</button>
    </div>
  </main>
</template>
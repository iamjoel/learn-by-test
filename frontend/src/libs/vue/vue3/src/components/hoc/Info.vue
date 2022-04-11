<script setup>
const props = defineProps({
  name: String,
  age: Number
})

</script>
<template>
  <main>
    {{props.name}}: {{props.age}}
  </main>
</template>
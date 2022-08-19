<template>
  <div>
    <slot></slot>
    <button @click="$emit('search')">搜索</button>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    
  },
}
</script>

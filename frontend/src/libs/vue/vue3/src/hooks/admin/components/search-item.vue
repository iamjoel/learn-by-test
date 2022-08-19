<template>
  <div>
    <label>{{this.title}}</label>
    <div>
      <slot></slot>
    </div>
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

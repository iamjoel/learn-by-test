<template>
  <div>
    <div v-for="item in list" :key="item">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  setup(props) {
    console.log(props.list)
  },
}
</script>

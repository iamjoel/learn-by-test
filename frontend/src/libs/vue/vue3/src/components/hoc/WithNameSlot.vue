<script setup>
  import { computed } from 'vue'
  import Info from './Info.vue'
  import useName from './useName'

  const props = defineProps({})
  const { name } = useName() // 动态值
  const withNameProps = computed(() => ({
    ...props,
    name: name.value,
  }))

</script>
<template>
  <Info v-bind="withNameProps"></Info>
</template>
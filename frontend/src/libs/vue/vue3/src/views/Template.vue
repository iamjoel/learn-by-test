<script setup>
import { ref } from 'vue'

const list = [
  {
    id: 1,
    name: 'vue',
  },
  {
    id: 2,
    name: 'react', 
  },
  {
    id: 3,
    name: 'angular',
  },
]


const isShowMore = ref(false)
const toggleShowMore = () => isShowMore.value = !isShowMore.value
</script>

<template>
  <main>
    <ul>
      <li 
        v-for="(item, index) in (isShowMore ? list : list.slice(0, 2))" :key="item.id"
        :style="{
          backgroundColor: item.id % 2 === 0 ? 'red' : 'blue',
        }"
        :class="{
          'is-first': index === 0,
        }"
      >
        <a 
          :href="item.id % 2 === 0 ? 'http://baidu.com' : 'http://bing.com'"
          target="_blank"
        >
          {{item.name}}
        </a>
      </li>
    </ul>
    <button @click="toggleShowMore">{{isShowMore ? '隐藏更多' : '显示更多'}}</button>
  </main>
</template>

<style scoped>
li {
  margin-bottom: 10px;
}
.is-first {
  border: 1px solid yellow;
}
</style>
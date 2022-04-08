<script setup>
import { ref, reactive } from 'vue'

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

const refObj = ref({name: 'joel', deepInfo: {
  a: {
    b: 1
  }
}})

const reactiveObj = reactive({name: 'joel-r', deepInfo: {
  a: {
    b: 3
  }
}});
const changeName = () => {
  refObj.value.name = refObj.value.name === 'joel' ? 'jack' : 'joel'
  reactiveObj.name = reactiveObj.name === 'joel-r' ? 'jack-r' : 'joel-r'
}
const changeDeep = () => {
  refObj.value.deepInfo.a.b = refObj.value.deepInfo.a.b === 1 ? 2 : 1
  reactiveObj.deepInfo.a.b = reactiveObj.deepInfo.a.b === 3 ? 4 : 3
}

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


    <div>ref name: {{refObj.name}} 深的属性: {{refObj.deepInfo.a.b}}</div>
    <div>reactiveObj name: {{reactiveObj.name}} 深的属性: {{reactiveObj.deepInfo.a.b}}</div>
    <button @click="changeName">改名</button>
    <button @click="changeDeep">改深的属性</button>
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
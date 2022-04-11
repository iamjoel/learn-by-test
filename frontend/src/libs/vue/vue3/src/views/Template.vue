<script setup>
import { ref, reactive, computed,  watch, watchEffect } from 'vue'
import HasProps from '@/views/sub/HasProps.vue'
import SlotDefault from '@/views/sub/slot/SlotDefault.vue'
import SlotMulti from '@/views/sub/slot/SlotMulti.vue'
import SlotWithData from '@/views/sub/slot/SlotWithData.vue'

import useCount from '@/hooks/useCount'

import InfoWithName from '@/components/hoc/InfoWithName'

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

const handleNameChange = name => console.log(name)

const firstTwoChar = computed(() => refObj.value.name.slice(0, 2))

watchEffect(() => {
  console.log('watchEffect', refObj.value.name)
})

watch([refObj.value], ([newVal], [oldVal]) => {
  console.log(`old: ${oldVal.name}, new: ${newVal.name}`)
})

// 自定义hooks
const {
  count,
  setCount
} = useCount()

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


    <div>ref name: {{refObj.name}}。前两个字符：{{firstTwoChar}} 深的属性: {{refObj.deepInfo.a.b}}</div>
    <div>reactiveObj name: {{reactiveObj.name}} 深的属性: {{reactiveObj.deepInfo.a.b}}</div>
    <button @click="changeName">改名</button>
    <button @click="changeDeep">改深的属性</button>

    <HasProps :name="refObj.name" @Change="handleNameChange" />

    <h2>slot</h2>
    <SlotDefault>
      <div>slot 内容</div>
    </SlotDefault>
    <SlotDefault />

    <SlotMulti>
        <template v-slot:a>往A槽丢</template>
        <!-- 简写 -->
        <template #b>往B槽丢: 简写</template>
    </SlotMulti>

    <SlotMulti>
        <template v-slot:a>还是往A槽丢</template>
    </SlotMulti>

    <SlotWithData>
        <template v-slot:default="slotProps">
            <div>item: {{slotProps.item}}</div>
        </template>
    </SlotWithData>

    <div>
      count: {{count}} 
      <button @click="setCount(count + 1)">+</button>
      <button @click="setCount(count - 1)">-</button>
    </div>

    <InfoWithName :age="20" />
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
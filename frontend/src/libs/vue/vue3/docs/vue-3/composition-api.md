# 组合式 API
[文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)。 

[<script setup>](https://vuejs.org/api/sfc-script-setup.html)

组合式 API 对应的是 响应式 API。组合式 API 是内聚的，响应式 API是非内聚的。
## 生命周期
onMounted, onUnmounted 等。

## 模板语法
* 循环，条件
* 绑定属性
* 绑定类名，样式
* 绑定事件

## 表单绑定值
用 v-model 绑定。
```html
<input v-model="count" />
```

## 响应式
reactive更适合定义复杂的数据类型（json/arr）。ref适合定义基本数据类型（可接收基本数据类型和对象）

### ref
在 js 中，设置和取值，要用 ref.value。在 template 中，设置和取值直接用 ref，不要加 value。

### reactive
直接改内部的值。

## Watch & Computed
[文档](https://v3.cn.vuejs.org/api/computed-watch-api.html)

computed，虚拟属性:
```js
const firstTwoChar = computed(() => refObj.value.name.slice(0, 2))
```

watchEffect 不需要声明 依赖列表。只要回调里的用到的值发生变化，就会触发回调。

watch 需要依赖列表。可以拿到旧值和新值。

```js
watchEffect(() => {
  console.log('watchEffect', refObj.value.name)
})

watch([refObj.value], ([newVal], [oldVal]) => {
  console.log(`old: ${oldVal.name}, new: ${newVal.name}`)
})
```

## Props
声明 & 使用属性。
```js
const props = defineProps({
  name: String
})
```

## emit
声明 & 使用传给父组件的事件。

```js
const emit = defineEmits(['change'])
```

## Slot
组件内 Slot 定义
```html
<slot></slot>
<slot name="a"></slot>
<li v-for="(item, index) in [1, 2, 3]" :key="item">
    <slot :item="item" />
</li>
```

父组件传入 Slot
```html
<SlotDefault>
    <div>slot 内容</div>
</SlotDefault>

<SlotMulti>
    <template v-slot:a>还是往A槽丢</template>
    <!-- 简写 -->
    <template #b>往B槽丢: 简写</template>
</SlotMulti>

<SlotWithData>
    <template v-slot:default="slotProps">
        <div>item: {{slotProps.item}}</div>
    </template>
</SlotWithData>
```

## 组件给很深的子组件传值 Provide / Inject



## 组件复用方式
### 高阶组件


### hooks
```js
import { ref, onMounted } from 'vue'

export default function useCount() {
  onMounted(() => {
    console.log('useCount mounted')
  })
  const count = ref(0)
  const setCount = (val) => {
    count.value = val
  }
  return {
    count,
    setCount
  }
}
```
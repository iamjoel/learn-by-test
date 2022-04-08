# 组合式 API
[文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)。

[<script setup>](https://vuejs.org/api/sfc-script-setup.html)

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

## 组件给很深的子组件传值 Provide / Inject


## Watch & Computed

## 组件复用方式
### 高阶组件


### 自定义 Option
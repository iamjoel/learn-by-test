<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
const router = useRouter()
const route = useRoute()

const id = ref(route.params.id)
watch(() => route, () => {
  console.log('route changed')
})

const toHome = () => router.push({
  name: 'home'
})

const log = () => console.log(111)
</script>
<template>
  <main>
    id: {{ id || '未设置' }} <br>
    {{route.params.id}}
    请求参数: {{ route.query }}
    <!-- router link 和 push 都没有用 -->
    <a href="javascript: void(0);" @click="toHome">返回首页</a><br>
    <RouterLink to="/">router返回首页</RouterLink>
  </main>
</template>


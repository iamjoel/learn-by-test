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
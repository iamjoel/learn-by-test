import { ref } from 'vue'

export default function useName() {
  const name = ref('Joel(HOC use slot Default)')
  setTimeout(() => {
    name.value = 'Joel(HOC use slot)'
  }, 2000)
  return {
    name
  }
}
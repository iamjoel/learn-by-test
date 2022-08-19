import { onMounted, reactive, watch, toRefs } from 'vue'
import SearchForm from './components/search-form.vue'
import SearchItem from './components/search-item.vue'
import TableGrid from './components/table-grid.vue'

export default function useList () {
  const data = reactive({
    searchQuery: {},
    list: [],
    pager: {
      current: 1,
      total: 1
    }
  })

  const fetchList = () => {
    data.list = []
    for (let i = 0; i < 10; i++) {
      data.list.push(Math.round(Math.random() * 1000))
    }
    console.log(data.searchQuery)
    console.log(data.list)
  }

  onMounted(() => {
    console.log('mounted')
    fetchList()
  })

  watch(() => data.searchQuery, fetchList, { deep: true })
  return {
    ...toRefs(data),
    fetchList,
    components: {
      SearchForm,
      SearchItem,
      TableGrid
    }
  }
}

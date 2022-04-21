import { h } from '@vue/runtime-core'
// https://vuejs.org/guide/extras/render-function.html
const WithName = (WrappedComponent) => {
  return {
    render () {
      const props = this.$props || {}
      return h(WrappedComponent, {
        name: 'Joel(HOC)',
        ...props
      })
    }
  }
}

export default WithName

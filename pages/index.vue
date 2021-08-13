<script>
import {
  computed,
  defineComponent,
  useContext,
  useFetch
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { store } = useContext()
    const posts = computed(() => store.state.posts.posts)
    useFetch(async () => {
      await store.dispatch('posts/getPosts')
    })
    return { posts }
  },
  head: {}
})
</script>

<template>
  <ThePostsList v-bind="{ posts }" />
</template>

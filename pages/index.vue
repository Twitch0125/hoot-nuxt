<script>
import { postsModule } from '~/store/posts'

export default {
  async asyncData({ store }) {
    await store.dispatch('posts/getPosts')
  },
  computed: {
    ...postsModule.mapState(['posts'])
  }
}
</script>

<template>
  <section>
    <div>
      <ThePostsList v-bind="{ posts }" />
    </div>
  </section>
</template>

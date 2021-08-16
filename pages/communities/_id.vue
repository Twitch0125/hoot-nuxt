<script>
import { asyncFunc } from '~/assets/async-func'
export default {
  async asyncData({ $http, $config, params }) {
    const [community, err] = await asyncFunc(
      $http.$get(`${$config.lotide}/communities/${params.id}`)
    )
    if (err) {
      console.error(err)
    }
    return {
      community
    }
  }
}
</script>
<template>
  <section class="p-4">
    <h1 class="text-2xl font-bold capitalize">{{ community.name }}</h1>
    <div>
      <nuxt-link
        to="/posts/new"
        class="px-3 py-2 bg-primary-800 text-white font-medium rounded"
      >
        New Post
      </nuxt-link>
    </div>
  </section>
</template>

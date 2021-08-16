/* eslint-disable no-console */
<script>
import { asyncFunc } from '~/assets/async-func'
export default {
  async asyncData({ $http, $config, params }) {
    const [data, err] = await asyncFunc(
      $http.$get($config.lotide + `/posts/${params.id}`)
    )
    if (err) {
      console.error(err)
    }

    return {
      post: data
    }
  }
}
</script>

<template>
  <section
    class="
      max-w-4xl
      p-4
      mx-auto
      break-words
      bg-white
      prose-primary
      sm:mt-5 sm:shadow sm:rounded
    "
  >
    <h1 class="text-lg font-semibold md:text-xl">{{ post.title }}</h1>
    <div class="prose md:prose-lg max-w-none" v-html="post.content_html"></div>
  </section>
</template>

<script>
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useRoute
} from '@nuxtjs/composition-api'
import { asyncFunc } from '~/assets/utils'

export default defineComponent({
  setup() {
    const { $http, $config } = useContext()
    const route = useRoute()
    const post = ref({})

    useFetch(async () => {
      const [data, err] = await asyncFunc(
        $http.$get($config.lotide + `/posts/${route.value.params.id}`)
      )
      if (!err) post.value = data
      else console.error(err)
    })
    return { post }
  }
})
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
    <div
      class="prose md:prose-lg max-w-none"
      v-html="post.content_html || post.content_text"
    ></div>
  </section>
</template>

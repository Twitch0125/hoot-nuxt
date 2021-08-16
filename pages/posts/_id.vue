/* eslint-disable no-console */
<script>
import { asyncFunc } from '~/assets/async-func'
import { findTimeDifference } from '~/assets/utils'

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
  },
  methods: {
    findTimeDifference
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
      prose prose-primary
      sm:mt-5 sm:shadow sm:rounded
    "
  >
    <figure>
      <div class="flex flex-col md:flex-row md:gap-2">
        <span> {{ post.author.username }}@{{ post.author.host }} </span>
        <cite>
          <a
            class="inline-flex items-center gap-2"
            :href="post.href"
            target="new"
          >
            <span>
              {{ post.href }}
            </span>
            <!-- external-link -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
          </a>
        </cite>
        <div>{{ findTimeDifference(new Date(post.created)) }} ago</div>
        <nuxt-link class="font-mono" :to="`/communities/${post.community.id}`">
          /{{ post.community.name }}
        </nuxt-link>
      </div>
    </figure>
    <h1 class="text-lg font-semibold md:text-xl">{{ post.title }}</h1>
    <div
      class="md:prose-lg max-w-none"
      v-html="$md.render(post.content_html)"
    ></div>
  </section>
</template>

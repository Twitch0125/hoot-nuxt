<script>
import { asyncFunc } from '~/assets/async-func'

export default {
  asyncData() {
    return { name: '' }
  },
  methods: {
    async createCommunity() {
      const [data, err] = await asyncFunc(
        this.$axios.$post(this.$config.lotide + '/communities', {
          name: this.name,
        })
      )
      if (err) {
        console.error(err)
      } else {
        this.$router.push(`/communities/${data.id}`)
      }
    },
  },
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
      sm:mt-5 sm:shadow sm:rounded
    "
  >
    <h1 class="text-2xl font-medium">New Community</h1>
    <div>
      <form @submit.prevent.stop="createCommunity">
        <label for="name">Name</label>
        <BaseInput required v-model="name" id="name" name="name" />
        <button
          class="px-3 py-2 rounded bg-primary-700 text-white font-medium mt-4"
          type="submit"
        >
          Create Community
        </button>
      </form>
    </div>
  </section>
</template>

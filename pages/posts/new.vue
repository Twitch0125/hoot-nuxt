<script>
// import Stackedit from 'stackedit-js'
export default {
  asyncData() {
    return { body: '', stackedit: null }
  },
  methods: {
    async stackEdit() {
      const { default: Stackedit } = await import('stackedit-js')
      this.stackedit = new Stackedit()
      this.stackedit.openFile({
        name: 'New Post',
        content: { text: this.body }
      })
      this.stackedit.on('fileChange', (file) => {
        this.body = file.content.text
      })
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
      sm:mt-5 sm:shadow sm:rounded
    "
  >
    <h1>New Post</h1>
    <div>
      <textarea
        id="body"
        ref="body"
        v-model="body"
        name="body"
        cols="30"
        rows="10"
        class="border border-gray-300 rounded"
      />
      <button
        class="border border-gray-300 rounded px-3 py-2"
        @click="stackEdit"
      >
        Edit with Stackedit
      </button>
    </div>
    <h3 class="text-lg font-bold text-gray-600 my-4">Preview</h3>
    <div class="prose prose-primary" v-html="$md.render(body)"></div>
  </section>
</template>

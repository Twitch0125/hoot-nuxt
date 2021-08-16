<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<template>
  <div class="flex flex-col max-w-4xl gap-4 pt-5 mx-auto">
    <h1 class="text-2xl font-semibold">Posts from the Whole Network</h1>
    <BasePost v-for="post in posts" :key="post.id" v-bind="{ post }" />
  </div>
</template>

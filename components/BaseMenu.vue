<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    this.isOpen = this.value
  },
  methods: {
    open() {
      this.isOpen = true
      this.$emit('input', this.isOpen)
    }
  }
}
</script>

<template>
  <div v-bind="$attrs" v-on="$listeners">
    <slot name="activator" v-bind="{ on: { click: open } }"></slot>
    <slot v-if="isOpen" name="default" />
  </div>
</template>

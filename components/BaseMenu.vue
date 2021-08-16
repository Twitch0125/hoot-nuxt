<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: undefined
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    value(newVal) {
      this.isOpen = newVal
    }
  },
  methods: {
    open() {
      if (this.value !== undefined) {
        this.$emit('input', true)
      } else {
        this.isOpen = true
      }
    },
    close() {
      if (this.value !== undefined) {
        this.$emit('input', false)
      } else {
        this.isOpen = true
      }
    }
  }
}
</script>

<template>
  <div v-bind="$attrs" v-on="$listeners">
    <slot name="activator" v-bind="{ on: { click: open } }"></slot>
    <BaseMenuTransition>
      <div v-if="isOpen" v-click-outside="close">
        <slot name="default" />
      </div>
    </BaseMenuTransition>
  </div>
</template>

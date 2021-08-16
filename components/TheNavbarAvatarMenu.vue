<script>
import { userModule } from '~/store/user'
export default {
  methods: {
    ...userModule.mapActions(['signout']),
    async submitSignout() {
      const [, err] = await this.signout()
      if (!err) {
        this.$router.push('/')
      }
    }
  }
}
</script>
<template>
  <div
    class="
      origin-top-right
      absolute
      right-0
      mt-2
      w-56
      rounded-md
      shadow-lg
      bg-white
      ring-1 ring-black ring-opacity-5
      focus:outline-none
      z-10
    "
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="py-1 font-medium" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a
        id="menu-item-0"
        href="#"
        class="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        tabindex="-1"
        >Account settings</a
      >
      <form role="none" @submit.prevent="submitSignout">
        <button
          id="menu-item-3"
          type="submit"
          class="
            text-gray-700
            block
            w-full
            text-left
            px-4
            py-2
            text-sm
            font-medium
          "
          role="menuitem"
          tabindex="-1"
        >
          Sign out
        </button>
      </form>
    </div>
  </div>
</template>

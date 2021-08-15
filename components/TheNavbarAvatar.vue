<script>
import { userModule } from '~/store/user'
export default {
  computed: {
    ...userModule.mapState(['id', 'username'])
  },
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
  <a href="#" class="flex-shrink-0 block group">
    <div class="flex items-center">
      <div>
        <span
          class="inline-block overflow-hidden bg-gray-100 rounded-full w-9 h-9"
        >
          <svg
            class="w-full h-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>

        <!-- <img
          class="inline-block rounded-full h-9 w-9"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        /> -->
      </div>
      <div class="ml-3 font-medium">
        <nuxt-link v-if="!id" class="text-base text-white" to="/signin"
          >Sign in</nuxt-link
        >
        <template v-else>
          <BaseMenu class="relative inline-block text-left">
            <template #activator="{ on }">
              <p
                class="
                  text-sm
                  font-medium
                  text-primary-50
                  group-hover:text-white
                "
                v-on="on"
              >
                {{ username }}
              </p>
            </template>
            <template #default>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
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
                  <div class="py-1" role="none">
                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <a
                      id="menu-item-0"
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      >Account settings</a
                    >
                    <a
                      id="menu-item-1"
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      >Support</a
                    >
                    <a
                      id="menu-item-2"
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      >License</a
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
                        "
                        role="menuitem"
                        tabindex="-1"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </transition>
            </template>
          </BaseMenu>
        </template>
      </div>
    </div>
  </a>
</template>

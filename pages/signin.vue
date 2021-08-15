<script>
import { userModule } from '~/store/user'
export default {
  layout: 'account',
  data() {
    return { username: null, password: null, errors: [] }
  },
  methods: {
    ...userModule.mapActions(['signin']),
    async submit() {
      const body = { username: this.username, password: this.password }
      const [, err] = await this.signin(body)
      if (err) {
        this.errors.push(await err.response.text())
      }
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div
    class="
      flex
      items-center
      justify-center
      min-h-screen
      px-4
      py-12
      sm:px-6
      lg:px-8
    "
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <div
          class="
            flex
            justify-center
            w-auto
            h-12
            mx-auto
            text-5xl
            font-black
            text-white
          "
        >
          HOOT
        </div>
        <h2 class="mt-6 text-3xl font-extrabold text-center text-primary-50">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="username" class="sr-only">Username</label>
            <BaseInput
              id="username"
              v-model="username"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="rounded-b-none relative focus:z-10"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <BaseInput
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="rounded-t-none relative focus:z-10"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="text-sm">
          <a
            href="#"
            class="
              text-base
              font-medium
              text-white
              underline
              focus:ring-primary-800
            "
          >
            Forgot your password?
          </a>
        </div>

        <div
          v-for="(error, i) in errors"
          :key="i"
          class="
            text-error-700 text-base
            font-medium
            p-4
            bg-error-100
            rounded-sm
          "
        >
          {{ error }}
        </div>

        <div class="flex flex-col gap-2">
          <button
            type="submit"
            class="
              relative
              flex
              justify-center
              w-full
              px-4
              py-2
              text-sm
              font-medium
              text-white
              bg-primary-800
              border border-transparent
              rounded-md
              group
              hover:bg-primary-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-primary-500
            "
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- lock-closed -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-primary-600 group-hover:text-primary-500"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
          <span class="text-base font-medium text-primary-100">
            Don't have an account?
            <nuxt-link class="underline" no-prefetch to="/register"
              >Register for one!</nuxt-link
            >
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

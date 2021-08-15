<script>
export default {
  layout: 'account'
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
          Register your account
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        :action="`${$config.lotide}/users`"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm flex flex-col gap-6">
          <div>
            <label for="password" class="text-white">Password</label>
            <BaseInput
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
            />
          </div>
          <div>
            <label for="username" class="text-white">Username</label>
            <BaseInput id="username" name="username" autocomplete="username" />
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <label for="email-address" class="text-white">Email Address</label>
            <span id="email-optional" class="text-sm text-primary-100">
              Optional
            </span>
          </div>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
            >
              <!-- mail -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
            </div>

            <BaseInput
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="email@example.com"
              class="pl-10"
              required
            />
          </div>
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
            Register
          </button>
          <span class="text-base font-medium text-primary-100">
            Already have an account?
            <nuxt-link class="underline" no-prefetch to="/signin"
              >Sign in!</nuxt-link
            >
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

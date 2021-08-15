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
        <!-- <p class="text-sm font-medium text-primary-50 group-hover:text-white">
          Tom Cook
        </p>
        <p class="text-xs font-medium text-primary-50 group-hover:text-white">
          View profile
        </p> -->
        <nuxt-link class="text-base text-white" to="/signin">Sign in</nuxt-link>
      </div>
    </div>
  </a>
</template>

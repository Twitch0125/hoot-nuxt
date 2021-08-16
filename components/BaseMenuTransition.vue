<template>
  <transition
    name="menu"
    enter-active-class="transition ease-out duration-100"
    enter-class="transform opacity-0 scale-95 z-10"
    enter-to-class="transform opacity-100 scale-100"
    leave-class="transform opacity-100 scale-100 z-10"
    leave-active-class="transition ease-in duration-75"
    leave-to-class="transform opacity-0 scale-95"
  >
    <slot />
  </transition>
</template>

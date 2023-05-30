<template>
  <component
      :is="to ? NuxtLink : href ? 'a' : 'button'"
      :to="to"
      :href="href"
      class="button"
      :class="[isSmall && 'is--small']"
      v-on:@click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>


<script setup lang="ts">
import {NuxtLink} from "#components";

const props = defineProps({
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  isSmall: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.button {
  width: auto;
  background-color: #000;
  color: white;
  padding: 1rem 2rem;

  &.is--small {
    padding: 0.5rem 0.5rem;
  }
}

</style>
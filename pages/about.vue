<template>
  <div style="min-height: 200vh">
    <h1>{{ msg }}</h1>

    <NuxtLink :to="`/`" >
      Index
    </NuxtLink>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  msg: {
    type:String,
    default: 'Welcome to the about page'
  }
})
</script>
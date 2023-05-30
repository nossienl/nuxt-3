<template>
  <div style="min-height: 200vh">
    <h1>Welcome to the homepage</h1>

    <NuxtLink :to="`/about`" >
      About
    </NuxtLink>
    <br/><br/>
    // Button<br/>
    <AtomButton
        @click="onClickButton"
        isSmall
    >Button</AtomButton>
    <br/><br/>
    // Button as nuxt-link<br/>
    <AtomButton
        to="/about"
        rel="next"
    >Link</AtomButton>
    <br/><br/>
    // Button as anchor<br/>
    <AtomButton
        href="https://thenextbit.de/en/blog"
        target="_blank"
        rel="external"
    >Link</AtomButton>
    <br/><br/>
    <span>
      lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </span>
    </div>
</template>
<script setup lang="ts">
const onClickButton = () => {
  console.log('button clicked')
};
</script>
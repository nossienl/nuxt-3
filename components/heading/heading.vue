<style scoped src="./heading.scss" />
<script src="./heading.script.ts" />

<template>
  <component :is="`h${size}`" :class="`heading heading-0${size}`">
    <slot />
  </component>
</template>

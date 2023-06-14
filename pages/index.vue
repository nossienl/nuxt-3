<template>
  <div class="page">
    <div class="item">
      <Heading :level="1">Homepage</Heading>
    </div>

    <div class="item">
      <Heading :level="2">Buttons</Heading>
      <Button
          @click="onClickButton"
          isSmall
      >Button</Button>


      <Button
          to="/search"
          rel="next"
      >Search</Button>

      <Button
          href="https://google.com"
          target="_blank"
          rel="external"
      >Link</Button>
    </div>

    <div class="item">
      <Boxes />
    </div>


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

<style lang="scss">
.page {
  width: 100%;
  min-height: 200vh;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.item {
  display: block;
  margin-bottom: 30px;
}
</style>

<template>
  <div>
    <Menu :isVisible="menuVisible" @menu-item-click="closeMenu" />
    <header :class="{ 'is--shrink': shrink, 'is--open': menuVisible }">
      <div class="container nav-bar-container">
        <NuxtLink :to="`/`" class="nav-bar-logo">
         logo
        </NuxtLink>

        <button
            class="nav-bar-button"
            @click="showMenu"
            :class="{ 'is--open': menuVisible }"
        >
          <span></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

let shrink = ref("");
let menuVisible = ref(false);

const handleScroll = () => {
  shrink.value = window.pageYOffset > 120;
};

if (process.client) {
  window.addEventListener("scroll", handleScroll);
}



onMounted(async () => {
  handleScroll();
});

const showMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const closeMenu = () => {
  menuVisible.value = false;
};

const route = useRoute();
watch(
    () => route.query,
    () => (menuVisible.value = false)
);
</script>

<style lang="scss">
header {
  width: 100%;
  position: fixed;
  top: 0;
  height: $nav-bar-height;
  padding: 2rem 0;
  background: white;
  transition: height 250ms ease, background-color 250ms ease;
  border-bottom: 1px solid red;
  z-index: 2;
}

.is--shrink {
  height: 70px;
  background-image: none;
  box-shadow: 0 0 10px rgba(#000, 0.2);
}

.is--open {
  background-image: none;
  color: var(--color-white-100);
}

.nav-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white-100);
  height: 100%;
}


.nav-bar-button {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-white-100);

  span {
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background-color: currentColor;
    transition: background-color 250ms ease;

    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 0;
      height: 4px;
      width: 100%;
      background-color: currentColor;
      transform-origin: right center;
      transition: transform 250ms ease;
    }

    &::before {
      top: -8px;
      transform: scaleX(0.5);
    }
    &::after {
      bottom: -8px;
      transform: scaleX(0.75);
    }
  }

  &:hover {
    color: var(--color-green-100);
    span {
      &::before,
      &::after {
        transform: scaleX(1);
      }
    }
  }

  &.is--open {
    color: var(--color-green-100);

    span {
      background-color: transparent;
      &::before,
      &::after {
        transform-origin: center center;
        top: 0;
      }
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
      }
    }
  }
}
</style>
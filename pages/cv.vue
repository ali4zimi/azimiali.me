<template>
  <NuxtLayout>
    <h3>Me and Technology</h3>
    <div class="w-8/12 mx-auto mt-10 px-4 relative aspect-video bg-slate-300">

      <div class="time-line">d</div>
      <div @click="toggleMenu">{{ menuOpen }}</div>
    </div>
  </NuxtLayout>
</template>

<style>
.time-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #fff;
  transform: translateX(-50%);

}
</style>

<script setup>

import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  useToggle.toggle(menuOpen)
  console.log(menuOpen.value)
}
</script>

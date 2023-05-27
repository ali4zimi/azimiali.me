<template>
  <div class="loader bg-slate-300"></div>
</template>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  z-index: 9999;
  transition: width 0.3s ease-in-out;
  width: 0%;
}
</style>

<script setup>
const nuxtApp = useNuxtApp();

onBeforeMount(() => {
  const loader = document.querySelector(".loader");
  //set width to 100%;
  loader.style.width = "10%";
});

nuxtApp.hook("page:start", () => {
  const loader = document.querySelector(".loader");
  loader.classList.remove("hidden");
  loader.style.width = "10%";
  setTimeout(() => {
    loader.style.width = "40%";
  }, 1000);
});

nuxtApp.hook("page:finish", () => {
  const loader = document.querySelector(".loader");
  loader.style.width = "100%";
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
});
</script>
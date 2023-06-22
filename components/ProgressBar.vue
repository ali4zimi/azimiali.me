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
const router = useRouter()

router.beforeEach(() => {
  const loader = document.querySelector(".loader");
  loader.classList.remove("hidden");
  loader.style.width = "10%";
})

router.afterEach(() => {
  const loader = document.querySelector(".loader");
  loader.style.width = "100%";
  setTimeout(() => {
    loader.classList.add("hidden");
    loader.style.width = "0%";
  }, 1000);
})
</script>
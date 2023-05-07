<template>
  <div>
    <Navbar />
    <div class="w-1/2 mx-auto bg-slate-100">
      <slot />
    </div>
  </div>
</template>

<script setup>

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Ali B. Azimi',
  meta: [
    {
      name: 'description',
      content: 'Ali Azimi is a software engineer based in Munich.'
    }
  ]
})
</script>

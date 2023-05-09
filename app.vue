<template>
  <div>
    <Html class="scroll-smooth" />
    <NuxtPage />
    <!-- <div class="bg-slate-100 dark:bg-slate-600">Hi</div> -->
  </div>
</template>

<script setup>

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Ali Azimi',
  meta: [
    {
      name: 'description',
      content: 'Ali Azimi is a software engineer based in Munich.'
    }
  ]
})
</script>

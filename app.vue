<template>
  <div class="root hidden">
    <NuxtPage />
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

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  document.querySelector('.root').classList.remove('hidden')
})
</script>

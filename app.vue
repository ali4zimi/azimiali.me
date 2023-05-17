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
  // remove hidden after half a second

  document.querySelector('.root').classList.remove('hidden')
})
</script>

<template>
  <ProgressBar />
  <div class="root hidden" id="root">
    <NuxtPage />
  </div>
</template>

<script setup>

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap'
    }
  ],
})

</script>

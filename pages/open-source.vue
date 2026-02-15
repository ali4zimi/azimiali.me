<template>
  <NuxtLayout>
    <h1>Open Source Contributions</h1>
    
    <p class="text-slate-600 dark:text-slate-400">
      My contributions to open source projects on GitHub.
    </p>

    <div class="flex flex-col gap-2 mb-20">
      <a 
        :href="contribution.link" 
        class="card py-3 px-4" 
        v-for="contribution in contributions" 
        :key="contribution.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="contribution-title">{{ contribution.title }}</div>
        <div class="mt-0 flex gap-3 text-slate-400 dark:text-slate-600 text-[0.8rem]">
          <div class="">{{ contribution.date }}</div>
          <div class="flex gap-2">
            <div class="uppercase">Repo: </div>
            <div class="">{{ contribution.repo }}</div>
          </div>
        </div>
      </a>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.contribution-title {
 @apply w-full py-2
}
</style>

<script setup>
useHead({
  title: 'Open Source - Ali Azimi',
  meta: [
    {
      name: 'description',
      content: 'Ali Azimi\'s contributions to open source projects on GitHub.'
    }
  ]
})

const contributions = [
  {
    title: 'Improved Nuxt Module Documentation',
    link: 'https://github.com/nuxt/nuxt/pull/22081',
    repo: 'nuxt/nuxt',
    date: 'Jul 11, 2023'
  },
  {
    title: 'Documented Server-Side Route Limitations',
    link: 'https://github.com/nuxt/nuxt/pull/21919',
    repo: 'nuxt/nuxt',
    date: 'Jul 3, 2023'
  },
  {
    title: 'Implemented Language Switcher Feature',
    link: 'https://github.com/nuxt/movies/pull/41',
    repo: 'nuxt/movies',
    date: 'Jul 2, 2023'
  },
  {
    title: 'Fixed Scrolling Navigation Bug',
    link: 'https://github.com/nuxt/movies/pull/29',
    repo: 'nuxt/movies',
    date: 'Jun 7, 2023'
  },
  {
    title: 'Enhanced Chat Message Metadata Storage',
    link: 'https://github.com/musonza/chat/pull/290',
    repo: 'musonza/chat',
    date: 'Dec 17, 2021'
  },
]
</script>

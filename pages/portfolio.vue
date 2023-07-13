<template>
  <NuxtLayout>
    <NuxtLayout name="content">
        <h1 class="mb-3">Works</h1>
        <!-- <p>In progress: will upload my works soon</p> -->
        <div class="grid sm:grid-cols-2 gap-3">
          <nuxt-link :to="project.code_link" class="figure" v-for="project in data.projects">
            <div class="figure-title">{{ project.name }}</div>
            <div class="figure-description">{{ project.description }}</div>
            <div class="technologies-used absolute bottom-3">
              <div class="text-slate-600 dark:text-slate-400 text-sm uppercase mt-5">Technologies used:</div>
              <div class="flex gap-1">
                <span v-for="technology in project.technologies" class="p-1 text-xs rounded-sm text-slate-200 dark:text-slate-400d bg-slate-800 dark:bg-slate-500">{{ technology }}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
        
        <div class="mt-10">
          <h3 class="mb-3 text-slate-400 font-thin">Contributions on Github</h3>
          <div class="text-xl font-light flex flex-col gap-2">
            <nuxt-link :to="contribution.link" class="contribution" v-for="contribution in contributions">
              <div class="title">{{ contribution.title }}</div>
              <div class=" mt-0 flex justify-between text-slate-400 dark:text-slate-500">
                <div class="flex gap-2">
                  <div class="text-sm uppercase">Repo: </div>
                  <div class="text-sm">{{ contribution.repo }}</div>
                </div>

                  <div class="text-sm text-slate-300 dark:text-slate-600">{{ contribution.date }}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
    </NuxtLayout>
  </NuxtLayout>
</template>

<style scoped>
.figure {
  @apply relative h-[170px] py-5 px-4 bg-slate-50 dark:bg-gray-900 rounded-md cursor-pointer border dark:border-gray-900;
}

.figure:hover {
  @apply border-slate-900 dark:border-gray-400;
}

.figure-title {
  @apply text-slate-600 dark:text-slate-400;
}

.figure-description {
  @apply text-slate-600 dark:text-gray-400 font-thin text-sm;
}

.contribution {
  @apply bg-slate-50 dark:bg-gray-900 py-3 px-4 rounded-md border dark:border-gray-900;
  /* @apply border-b dark:border-gray-900 py-3 px-4; */
}

.contribution .title {
  @apply text-lg text-slate-600 dark:text-slate-400 whitespace-nowrap overflow-hidden overflow-ellipsis;
}

.contribution:hover {
  @apply border-slate-900 dark:border-gray-400;
}

</style>

<script setup>

useHead({
  title: 'Portfolio - Ali Azimi',
  meta: [
    {
      name: 'description',
      content: 'Ali Azimi is a software engineer based in Munich.'
    }
  ]
})

const { data } = await useAsyncData('portfolio', () => queryContent('/pages/portfolio').findOne())


const contributions = [
  {
    title: 'docs: add instruction on how to use other modules in a module',
    link: 'https://github.com/nuxt/nuxt/pull/22081',
    repo: 'nuxt/nuxt',
    date: 'Jul 11, 2023'
  },
  {
    title: 'docs: added a note about server dynamic routes limitation',
    link: 'https://github.com/nuxt/nuxt/pull/21919',
    repo: 'nuxt/nuxt',
    date: 'Jul 3, 2023'
  },
  {
    title: 'feat: add language switcher option',
    link: 'https://github.com/nuxt/movies/pull/41',
    repo: 'nuxt/movies',
    date: 'Jul 2, 2023'
  },
  {
    title: 'fix: scrolling issue',
    link: 'https://github.com/nuxt/movies/pull/29',
    repo: 'nuxt/movies',
    date: 'Jun 7, 2023'
  },
  {
    title: "Added 'data()' function to store details about message type in 'data' column of 'message' table",
    link: 'https://github.com/musonza/chat/pull/290',
    repo: 'musonza/chat',
    date: 'Dec 17, 2021'
  },
]

</script>

<template>
  <NuxtLayout>
    <NuxtLayout name="content">
        <div class="hidden">
          <h3 class="mb-3 text-slate-600 dark:text-slate-400 font-thin">Latest contributions</h3>
          <div class="flex gap-3">
            <div class="w-[150px] min-h-[50px] bg-gray-300 rounded-md py-3 px-4">
              <div class="icon flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48.77" height="32" viewBox="0 0 256 168"><path fill="#00DC82" d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492l-15.628 26.214Zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z"/></svg>
              </div>
              <div class="text-xs">Nuxt</div>
            </div>
            <div class="w-[150px] h-[50px] bg-gray-300 rounded-md"></div>
            <div class="w-[150px] h-[50px] bg-gray-300 rounded-md"></div>
          </div>
        </div>
        
        <div class="mt-10">
          <h3 class="mb-3 text-slate-600 dark:text-slate-400 font-thin">Contributions on Github</h3>
          <div class="text-xl font-light flex flex-col gap-1">
            <nuxt-link :to="contribution.link" class="contribution" v-for="contribution in contributions">
              <div class="contribution-title">{{ contribution.title }}</div>
              <div class=" mt-0 flex gap-3 text-slate-400 dark:text-slate-600 text-[0.8rem]">
                <div class="">{{ contribution.date }}</div>
                <div class="flex gap-2">
                  <div class=" uppercase">Repo: </div>
                  <div class="">{{ contribution.repo }}</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <hr>

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

}

.contribution-title {
  @apply  font-thin text-sm  text-slate-600 dark:text-slate-400 whitespace-nowrap overflow-hidden overflow-ellipsis;
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
  // {
  //   title: 'chore: Remove extendDefaultPlugins because it is deprecated',
  //   link: 'https://github.com/decaporg/decap-cms/pull/6834',
  //   repo: 'decaporg/decap-cms',
  //   date: 'Jul 4, 2023'
  // },
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

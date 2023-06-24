<template>
  <NuxtLayout>
    <NuxtLayout name="content">
        <h1 class="mb-3">Works</h1>
        <!-- <p>In progress: will upload my works soon</p> -->
        <div class="grid grid-cols-2 gap-3">
          <nuxt-link :to="project.code_link" class="figure" v-for="project in data.projects">
            <div class="figure-title">{{ project.name }}</div>
            <div class="figure-description">{{ project.description }}</div>
            <div class="technologies-used absolute bottom-3">
              <div class="text-slate-600 dark:text-slate-400 text-sm uppercase mt-5">Technologies used:</div>
              <div class="flex gap-1">
                <span v-for="technology in project.technologies" class="p-1 text-xs rounded-md text-slate-600 dark:text-slate-600 bg-slate-300 dark:bg-slate-200">{{ technology }}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
    </NuxtLayout>
  </NuxtLayout>
</template>

<style scoped>
.figure {
  @apply relative h-[200px] py-5 px-4 bg-slate-50 dark:bg-gray-900 rounded-md cursor-pointer border dark:border-gray-900;
}

.figure:hover {
  @apply border-slate-900 dark:border-gray-100;
}

.figure-title {
  @apply text-slate-600 dark:text-slate-400;
}

.figure-description {
  @apply text-slate-600 dark:text-gray-400 font-thin text-sm;
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

</script>

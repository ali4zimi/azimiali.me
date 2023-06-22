<template>
  <NuxtLayout>
    <NuxtLayout name="content">
        <h1 class="mb-3">Works</h1>
        <!-- <p>In progress: will upload my works soon</p> -->
        <div class="grid grid-cols-2 gap-3">
          <nuxt-link :to="project.link" class="figure" v-for="project in data.projects">
            <h3 class="my-1 text-slate-600 dark:text-slate-400">{{ project.name }}</h3>
            <p class="text-sm">{{ project.description }}</p>
          </nuxt-link>
        </div>
    </NuxtLayout>
  </NuxtLayout>
</template>

<style scoped>
.figure {
  @apply h-[130px] py-5 px-4 bg-slate-50 dark:bg-gray-900 rounded-md cursor-pointer border dark:border-gray-900;
}

.figure:hover {
  @apply border-slate-900 dark:border-gray-100;
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

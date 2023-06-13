<template>
  <NuxtLayout>
    <NuxtLayout name="content">
        <h1 class="font-semibold mb-3">Portfolio</h1>
        <!-- <p>In progress: will upload my works soon</p> -->
        <div class="grid grid-cols-2 gap-3">
          <nuxt-link :to="project.link" class="figure" v-for="project in data.projects">
            <h4 class="my-1 font-bold">{{ project.name }}</h4>
            <p class="text-sm">{{ project.description }}</p>
          </nuxt-link>
        </div>
    </NuxtLayout>
  </NuxtLayout>
</template>

<style>
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

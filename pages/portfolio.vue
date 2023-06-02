<template>
  <NuxtLayout>
    <div class="max-w-3xl mx-auto mt-10 px-4">
      <main class="general prose mx-auto dark:prose-invert">
        <h2 class="text-2xl mb-5">Portfolio</h2>
        <p>Under Construction</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 hidden">
          <nuxt-link :to="project.link" class="figure" v-for="project in data.projects">
            <h4 class="my-1 font-bold">{{ project.name }}</h4>
          </nuxt-link>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<style>
.figure {
  @apply relative h-[150px] p-3 bg-slate-100 rounded-md overflow-hidden cursor-pointer dark:bg-slate-900 border-slate-900 dark:border-slate-300 hover:border 
}

.caption {
  @apply absolute left-0 bottom-0 right-0 px-3 py-2 bg-slate-50 opacity-0 transition-all duration-500 ease-in-out dark:bg-slate-700 dark:text-slate-50
}

.figure:hover .caption {
  @apply opacity-80
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

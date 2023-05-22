<template>
  <NuxtLayout>
    <div class="mx-auto mt-10 px-4">
      <main class="max-w-3xl mx-auto text-slate-800">
        <h1>Portfolio</h1>
        <p>Here are some of the projects I have worked on.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <nuxt-link :to="project.link" class="figure" v-for="project in data.projects">
            <img :src="project.image" :alt="project.title" class="w-full aspect-9/16 object-cover object-center">
            <div class="caption">
              <h4 class="my-1 font-bold">{{ project.name }}</h4>
              <div class="whitespace-nowrap text-ellipsis overflow-hidden">{{ project.description }}</div>
            </div>
          </nuxt-link>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<style>
.figure {
  @apply relative bg-slate-300 rounded-md border overflow-hidden cursor-pointer dark:bg-slate-800 dark:border-s-slate-400
}

.caption {
  @apply absolute left-0 bottom-0 right-0 px-3 py-2 bg-slate-50 opacity-0 transition-all duration-500 ease-in-out dark:bg-slate-700 dark:text-slate-50
}

.figure:hover .caption {
  @apply opacity-80
}
</style>

<script setup>

const { data } = await useAsyncData('portfolio', () => queryContent('/pages/portfolio').findOne())


</script>

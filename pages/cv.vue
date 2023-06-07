<template>
  <NuxtLayout>
    <div class="mx-auto mt-10">
      <main>

        <!-- <SkillList /> -->
        
        <Timline title="Education" v-if="data" :list="data.educations" />

        <Timline title="Experience" v-if="data" :list="data.experiences" />

      </main>
    </div>
  </NuxtLayout>
</template>

<style>
/* Customizing styles */
.prose li {
  @apply my-0
}

.tm-title {
  @apply text-xl font-semibold text-slate-600 dark:text-slate-400;
}

.item-title {
  @apply font-semibold text-slate-600 dark:text-slate-200;
}

.cv-timeline .prose p, li, a, h1, h2, h3, h4, h5, h6  {
  @apply text-[1rem] text-slate-600 dark:text-slate-300; 
}


.cv-timeline .item a {
  @apply font-semibold text-blue-400 dark:text-blue-300 hover:text-blue-400;
}
</style>

<script setup>

useHead({
  title: 'CV - Ali Azimi',
  meta: [
    {
      name: 'description',
      content: 'Ali Azimi is a software engineer based in Munich.'
    }
  ]
})

const { data } = useAsyncData('cv', () => queryContent('pages/cv').findOne())

</script>
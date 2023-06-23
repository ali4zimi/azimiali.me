<template>
  <NuxtLayout>
    <!-- CV is not using content layout -->
    <div class="mx-auto mt-10">

      <ScrollGuide />

      <main class="pb-14">
        <!-- <SkillList /> -->

        <CvTimline title="Education" v-if="data" :list="data.educations" />

        <CvTimline title="Experience" v-if="data" :list="data.experiences" />

      </main>
    </div>
  </NuxtLayout>
</template>

<style>

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

const { data } = useAsyncData('cv', () => queryContent('pages/cv').findOne());

</script>
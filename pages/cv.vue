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
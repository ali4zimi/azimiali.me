<template>
  <NuxtLayout>
    <div class="mx-auto mt-10">
      <main>
        
        <Timline title="Education" v-if="data" :list="data.educations" />

        <Timline title="Experience" v-if="data" :list="data.experiences" />

      </main>
    </div>
  </NuxtLayout>
</template>

<style>
.timeline .prose p, li, a, h1, h2, h3, h4, h5, h6  {
  @apply text-[1rem]; 
}


.timeline .prose a {
  @apply font-semibold text-blue-800 hover:text-blue-900;
}
</style>

<script setup>

const { data } = useAsyncData('cv', () => queryContent('pages/cv').findOne())

</script>
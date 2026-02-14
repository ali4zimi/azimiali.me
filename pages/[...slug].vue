<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
        <div class="mb-10">
          <h1 class="">{{ doc.title }}</h1>
          <div class="published-at text-slate-400 dark:text-slate-500 text-sm mb-3 border-t dark:border-slate-700">{{ formatDate(doc.publish_date) }}</div>
        </div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
  </NuxtLayout>
</template>

<script setup>

function formatDate(date) {
  // format date, show both date and time
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })


}

</script>
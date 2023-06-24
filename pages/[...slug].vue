<template>
  <NuxtLayout>
    <NuxtLayout name="content">
      <ContentDoc v-slot="{ doc }">
        <h1 class="mb-3">{{ doc.title }}</h1>
        <div class="published-at text-slate-600 dark:text-slate-500 text-sm mb-3 border-t dark:border-slate-700">{{ formatDate(doc.publish_date) }}</div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </NuxtLayout>
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
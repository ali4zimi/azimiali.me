<template>
  <NuxtLayout>
    <NuxtLayout name="content">
      <ContentDoc v-slot="{ doc }">
        <h1 class="mb-3">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </NuxtLayout>
  </NuxtLayout>
</template>


<template>
  <NuxtLayout>
    <div class="mx-auto mt-10 px-4">
      <main class="prose dark:prose-invert">
        <ContentDoc path="/pages/portfolio">
          <template v-slot="{ doc }">
            <div v-html="doc.title"></div>
          </template>
        </ContentDoc>
      </main>
    </div>
  </NuxtLayout>
</template>

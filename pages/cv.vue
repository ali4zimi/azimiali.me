<template>
  <NuxtLayout>
    <div class="max-w-3xl mx-auto mt-10 px-4">
      <main class="prose dark:prose-invert">
        <!-- content from /pages/cv.md -->
        <ContentDoc path="/pages/cv">
          <template v-slot="{ doc }">
            <div v-html="doc.title"></div>
          </template>
        </ContentDoc>
      </main>
    </div>
  </NuxtLayout>
</template>

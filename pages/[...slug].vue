<template>
  <NuxtLayout>
    <div class=" w-fit mx-auto">
      <!-- <ContentList path="/blog/posts" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
        </div>
      </ContentList> -->
  
      <main class="prose prose-code prose-xl dark:prose-invert">
        <ContentDoc />
      </main>
    </div>

  </NuxtLayout>
</template>

<style>
pre {
  @apply dark:bg-slate-100;
}
</style>

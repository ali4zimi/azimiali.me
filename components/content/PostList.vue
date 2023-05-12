<template>
  <div class="">
    <h2>Articles</h2>
    <ContentList path="/posts" v-slot="{ list }">
      <div class="flex flex-col gap-2">
        <nuxt-link :to="article._path" class="article title" v-for="article in list" :key="article._path">
          <div class="title">{{ article.title }}</div>
          <!-- published formatted date -->
          <div class="text-sm text-gray-500">
            <span class=" uppercase">Published: </span>
            <span class="text-slate-900">{{ formatDate(article.date) }}</span>
          </div>
          <div>
            Tags
          </div>
        </nuxt-link>
      </div>
    </ContentList>
  </div>
</template>

<style>
.article {
  @apply w-full py-4 px-3 bg-white border rounded-md cursor-pointer
}
.article:hover {
  @apply border-gray-950
}
.article .title {
  @apply text-2xl
}
</style>

<script setup> 

const formatDate = (date) => {
  if (date === undefined) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}
</script>

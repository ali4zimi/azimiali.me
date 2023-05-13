<template>
  <div class="">
    <h2>Articles</h2>
    <ContentList path="/posts" v-slot="{ list }">
      <div class="flex flex-col gap-2">
        <nuxt-link :to="article._path" class="article title" v-for="article in articles" :key="article._path">
          <div class="title">{{ article.title }}</div>
          <div class="text-sm pt-3">
            <span class=" text-slate-300 uppercase">Published: </span>
            <span class="text-slate-400">{{ formatDate(article.date) }}</span>
          </div>
        </nuxt-link>
      </div>
    </ContentList>
  </div>
</template>

<style>
.article {
  @apply w-full py-5 px-4 bg-white border rounded-md cursor-pointer 
}
.dark .article {
  @apply bg-gray-900 border-gray-900 text-gray-100 hover:border-gray-100  
}
.article:hover {
  @apply border-gray-950
}
.article .title {
  @apply text-xl truncate
}
.dark .article .title {
  @apply text-gray-100
}
.article .publish-date {
  @apply text-gray-500
}
</style>

<script setup> 

const articles = await queryContent('posts')
  .sort({ date: -1 })
  .find()
console.log(articles);


const formatDate = (date) => {
  if (date === undefined) return '';
  // format date as MM/DD/YYYY
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString('en-US', options);
}
</script>

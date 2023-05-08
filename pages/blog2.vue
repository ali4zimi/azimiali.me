<template>
  <NuxtLayout>
    <div>
      <div class="text-slate-900 text-2xl font-bold">Blog</div>
      <div>
        <div class="text-2xl my-2 dark:text-slate-200" v-for="post in news">
          {{ post.title }}
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const news = [
  {
    title: 'My first blog post',
    description: 'This is my first blog post',
    date: '2021-10-10',
    slug: 'my-first-blog-post'
  },
  {
    title: 'My second blog post',
    description: 'This is my second blog post',
    date: '2021-10-11',
    slug: 'my-second-blog-post'
  },
  {
    title: 'My third blog post',
    description: 'This is my third blog post',
    date: '2021-10-12',
    slug: 'my-third-blog-post'
  }
]
</script>

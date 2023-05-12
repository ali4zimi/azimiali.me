<template>
  <div class="">
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <nuxt-link :to="article._path" class="text no-underline text-2xl mt-5">{{ article.title }}</nuxt-link>
        <img :src="article.coverImage" class="w-full" />
      </div>
    </ContentList>
  </div>
</template>

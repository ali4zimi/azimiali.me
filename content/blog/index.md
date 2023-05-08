---
title: 'Title of the page'
description: 'meta description of the page'
---

::card
      <ContentList path="/blog/posts" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
        </div>
      </ContentList>

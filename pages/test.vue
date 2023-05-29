<template>
    <NuxtLayout>
      <ContentRendererMarkdown :value="data" />
        
    </NuxtLayout>
</template>

<script setup>
const { data } = useAsyncData('cv', () => queryContent('pages/cv').findOne())


const transformMarkdown = (markdownContent) => {
  const { content, data } = matter(markdownContent)
  const html = marked(content)
  return { html, data }
}

</script>
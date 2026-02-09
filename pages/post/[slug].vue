<template>
  <NuxtLayout>
    <NuxtLayout name="content">
      <div v-if="error" class="text-red-500 dark:text-red-400">
        <h1>Post Not Found</h1>
        <p>{{ error }}</p>
      </div>
      
      <div v-else-if="!data?.post" class="text-slate-600 dark:text-slate-400">
        Loading post...
      </div>
      
      <div v-else>
        <div class="mb-10">
          <h1>{{ getPostTitle(data.post) }}</h1>
          <div class="published-at text-slate-400 dark:text-slate-500 text-sm mb-3 border-t dark:border-slate-700">
            {{ formatDate(getPublishDate(data.post)) }}
          </div>
        </div>
        
        <!-- Post Content -->
        <div class="post-content">
          <div v-for="block in data.blocks" :key="block.id" class="mb-4">
            <NotionBlock :block="block" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
const { getPostIdBySlug, createSlug, setMappings } = usePostSlugMapping();

const slug = String(route.params.slug);
let postId = getPostIdBySlug(slug);

// If slug not found in session, fetch all posts to get the mapping
if (!postId) {
  const { data: postsData } = await useFetch('/api/posts');
  
  if (postsData.value?.posts) {
    const mappings = {};
    let foundPost = null;
    
    postsData.value.posts.forEach(post => {
      const title = post.properties.title.title[0]?.plain_text || 'untitled';
      const postSlug = createSlug(title);
      mappings[postSlug] = post.id;
      
      if (postSlug === slug) {
        foundPost = post;
      }
    });
    
    // Save all mappings for future use
    setMappings(mappings);
    
    // Get the post ID for this slug
    postId = foundPost?.id;
  }
}

const { data, error } = await useFetch(`/api/post?id=${postId}`, {
  // Only fetch if we have a valid postId
  immediate: !!postId,
});

// Helper functions to extract post properties
const getPostTitle = (post) => {
  return post.properties?.title?.title?.[0]?.plain_text || 'Untitled';
}

const getPublishDate = (post) => {
  return post.properties?.publish_date?.date?.start;
}

const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}
</script>

<style scoped>
.post-content {
  @apply prose dark:prose-invert max-w-none;
}
</style>

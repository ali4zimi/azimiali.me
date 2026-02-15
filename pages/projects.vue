<template>
  <NuxtLayout>
    <h1 class="mb-3">Projects</h1>
      
      <div v-if="error" class="text-red-500 dark:text-red-400">
        Failed to load projects. Please try again later.
      </div>
      
      <div v-else-if="!data?.projects" class="text-slate-600 dark:text-slate-400">
        Loading projects...
      </div>
      
      <div v-else class="flex flex-col gap-3 mb-20">
        <div 
          v-if="data.projects.length === 0" 
          class="text-slate-600 dark:text-slate-400"
        >
          No projects found.
        </div>
        
        <div v-for="project in data.projects" :key="project.id" class="project-card">
          <!-- Thumbnail -->
          <div 
            class="project-thumbnail"
            :style="{
              backgroundImage: project.cover?.type === 'external' 
                ? `url(${project.cover.external.url})` 
                : project.cover?.type === 'file'
                ? `url(${project.cover.file.url})`
                : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          />
          
          <!-- Content -->
          <div class="project-content">
            <!-- Title -->
            <h2 class="project-title">
              {{ project.properties.Title.title[0]?.plain_text || 'Untitled' }}
            </h2>
            
            <!-- Description -->
            <p v-if="project.properties.Description.rich_text.length > 0" class="project-description">
              {{ project.properties.Description.rich_text[0]?.plain_text }}
            </p>
            
            <!-- Tags -->
            <div v-if="project.properties.Tag.multi_select.length > 0" class="project-tags">
              <span 
                v-for="tag in project.properties.Tag.multi_select" 
                :key="tag.id" 
                class="project-tag"
              >
                {{ tag.name }}
              </span>
            </div>
            
            <!-- URL Link -->
            <a 
              v-if="project.properties.URL.url" 
              :href="project.properties.URL.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
  </NuxtLayout>
</template>

<style scoped>
.project-card {
  @apply flex flex-col md:flex-row items-stretch gap-0 border dark:border-gray-900 overflow-hidden rounded-lg bg-slate-50 dark:bg-gray-900 transition-all;
  height: auto;
  min-height: 300px;
}

@media (min-width: 768px) {
  .project-card {
    height: 200px;
    min-height: 200px;
  }
}

.project-card:hover {
  @apply border-slate-900 dark:border-gray-400;
}

.project-thumbnail {
  @apply flex-shrink-0 bg-slate-100 dark:bg-slate-700;
  width: 100%;
  height: 200px;
}

@media (min-width: 768px) {
  .project-thumbnail {
    width: 250px;
    height: auto;
  }
}

.project-content {
  @apply flex flex-col gap-2 py-4 px-4 md:py-5 md:px-5 flex-1;
}

.project-title {
  @apply text-lg md:text-xl font-bold text-slate-600 dark:text-slate-400 leading-tight m-0;
}

.project-description {
  @apply text-slate-600 dark:text-slate-400 text-sm line-clamp-2 md:line-clamp-2 m-0 font-thin;
}

.project-tags {
  @apply flex flex-wrap gap-2;
}

.project-tag {
  @apply px-2 py-1 md:px-3 rounded-full text-xs md:text-sm font-medium bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200;
}

.project-link {
  @apply mt-auto inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm;
}
</style>

<script setup>
const { data, error } = await useFetch("/api/projects");

useHead({
  title: 'Projects - Ali Azimi',
  meta: [
    {
      name: 'description',
      content: 'A showcase of projects I have worked on, including personal and open source projects.'
    }
  ]
})
</script>
<template>
  <NuxtLayout>
    <div class="error-page">
      <h1 class="error-code">{{ error.statusCode }}</h1>
      <h2 class="error-title">
        {{ error.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
      </h2>
      <p class="error-message">
        {{ error.statusCode === 404 
          ? 'The page you are looking for does not exist or has been moved.' 
          : 'An unexpected error occurred. Please try again later.' 
        }}
      </p>
      <div class="error-actions">
        <NuxtLink to="/" class="btn-home">
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.error-page {
  @apply text-center py-16;
}

.error-code {
  @apply text-9xl font-thin text-slate-200 dark:text-slate-800 mb-6;
  line-height: 1;
}

.error-title {
  @apply text-3xl font-thin text-slate-600 dark:text-slate-400 mb-4;
}

.error-message {
  @apply text-slate-600 dark:text-slate-400 mb-8 font-light;
  font-size: 1rem;
  line-height: 1.8rem;
}

.error-actions {
  @apply flex justify-center;
}

.btn-home {
  @apply text-slate-800 px-3 py-2 border rounded-md shadow dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 font-medium transition-colors;
  text-decoration: none;
}
</style>

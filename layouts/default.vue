<template>
  <div class="relative w-full min-h-[100vh] flex flex-col">
    <Navbar />
    <div class="mt-16 mb-28 px-4">
      <main class="content prose mx-auto dark:prose-pre:bg-slate-700 dark:prose-invert">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style>
.content {
  @apply max-w-xl
}

.content h1 {
  @apply mb-3 text-slate-600 dark:text-slate-400;
  font-weight: 400;
  font-size: 2rem;
}

.content p {
  @apply text-slate-600 dark:text-slate-400;
  font-size: 1rem;
  line-height: 1.8rem;
  margin-top: 0.5rem;
}

.content a {
  @apply text-slate-800 dark:text-slate-400;
  text-decoration: none;
  font-weight: 500;
}

.content img {
  @apply w-full mx-auto rounded-md;
}

.content strong {
  @apply text-slate-600 dark:text-slate-400;
}

.content ul {
  @apply list-disc list-inside;
}

.content li {
  @apply text-slate-600 dark:text-slate-400;
}

.content blockquote {
  @apply border-l-4 border-slate-200 dark:border-slate-400 pl-4;
}

.content blockquote p {
  @apply text-slate-600 dark:text-slate-400;
}
</style>

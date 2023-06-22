<template>
    <div class=" mt-16 px-4">
        <main class="content prose mx-auto">
            <slot />
        </main>
    </div>
</template>

<style>
.content {
  @apply max-w-xl
}

.content p {
  @apply text-slate-500 dark:text-slate-400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin-top: 0.5rem;
}

.content a {
  /* color: var(--fg-deeper); */
  text-decoration: none;
  font-weight: 500;
}

.content h1 {
  @apply mb-3 text-slate-600 dark:text-slate-400;
  font-weight: 400;
  font-size: 2rem;
}


/* h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 0;
  } */
</style>

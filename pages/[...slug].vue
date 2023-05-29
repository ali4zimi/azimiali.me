<template>
  <NuxtLayout>
    <div class="max-w-3xl mx-auto mt-10 px-4">
      <main class="general prose mx-auto dark:prose-invert">
        <ContentDoc />
      </main>
    </div>
  </NuxtLayout>
</template>

<style>


  .general.prose p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 2.25rem;
  }

  .general.prose a {
    color: var(--fg-deeper);
    text-decoration: none;
    font-weight: 500;
  }

   h1 {
    font-size: 2.5rem;
    /* font-weight: bolder; */
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 1rem;
  }
</style>

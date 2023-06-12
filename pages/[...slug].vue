<template>
  <NuxtLayout>
    <div class="mt-10 px-4 flex justify-center">
      <main class="bio prose">
        <ContentDoc />
      </main>
    </div>
  </NuxtLayout>
</template>

<style>
  .bio {
    @apply max-w-2xl 
  }
  .bio p {
    font-size: 1.125rem;
    line-height: 2.25rem;
    margin-top: 0.5rem;
  }

  .bio a {
    color: var(--fg-deeper);
    text-decoration: none;
    font-weight: 500;
  }

  .bio h1 {
    @apply text-3xl my-0;
  }

   /* h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 0;
  } */
</style>

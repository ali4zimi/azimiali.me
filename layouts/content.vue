<template>
    <div class="mt-10 px-4">
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
  font-size: 1.125rem;
  line-height: 2.25rem;
  margin-top: 0.5rem;
}

.content a {
  color: var(--fg-deeper);
  text-decoration: none;
  font-weight: 500;
}

.content h1 {
  @apply text-3xl my-0;
}

/* h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 0;
  } */
</style>

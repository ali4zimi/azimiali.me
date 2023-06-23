<template>
  <div class="relative w-full min-h-[100vh] flex flex-col">
    <Navbar />
    <div class="px-4 pb-5 mb-28">
      <slot />
    </div>
    <Footer />
  </div>
</template>

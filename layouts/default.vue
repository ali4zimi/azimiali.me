<template>
  <div>
    <Body class="bg-slate-100 dark:bg-slate-900" />
    <Navbar />
    <div class="w-1/2 mx-auto">
      <div class=" px-5 py-10">
        <slot />
      </div>
    </div>
  </div>
</template>

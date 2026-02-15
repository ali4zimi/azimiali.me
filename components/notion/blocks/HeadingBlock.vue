<template>
    <h1 v-if="block.type === 'heading_1'" class="text-3xl font-bold mb-4 mt-8 text-slate-700 dark:text-slate-100">
        {{ block.heading_1.rich_text[0]?.plain_text }}
    </h1>
    
    <h2 v-else-if="block.type === 'heading_2'" class="text-2xl font-bold mb-4 mt-6 text-slate-700 dark:text-slate-200">
        {{ block.heading_2.rich_text[0]?.plain_text }}
    </h2>
    
    <h3 v-else-if="block.type === 'heading_3'" class="text-xl font-bold mb-4 mt-4 text-slate-700 dark:text-slate-300">
        {{ block.heading_3.rich_text[0]?.plain_text }}
    </h3>
</template>

<script setup>
defineProps({
  block: Object
})
</script>
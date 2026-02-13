<template>
  <div>
    <div class="mb-10">
      <h1>{{ post.properties?.title?.title?.[0]?.plain_text }}</h1>
      <div
        class="published-at text-slate-400 dark:text-slate-500 text-sm mb-3"
      >
      </div>
    </div>

    <div v-for="block in blocks" :key="block.id" class="mb-4">
      <BlockRenderer :block="block" />
    </div>
  </div>
</template>

<script setup>
import BlockRenderer from './BlockRenderer.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  blocks: {
    type: Array,
    required: true,
  },
});
</script>

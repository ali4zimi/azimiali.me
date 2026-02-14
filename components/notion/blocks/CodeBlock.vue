<template>
  <div class="code-block-wrapper">
    <span class="language-label">{{ language }}</span>
    <div v-if="highlightedCode" v-html="highlightedCode" class="shiki-wrapper"></div>
    <pre v-else class="fallback-code"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  block: {
    type: Object,
    required: true
  }
});

const highlightedCode = ref('');
const code = ref('');
const language = ref('');

onMounted(async () => {
  try {
    code.value = props.block.code?.rich_text?.[0]?.plain_text || '';
    language.value = props.block.code?.language || 'text';
    
    const languageMap = {
      'plain text': 'text',
      'css': 'css',
      'javascript': 'javascript',
      'html': 'html',
      'python': 'python',
      'c++': 'cpp',
      'c#': 'csharp',
      'typescript': 'typescript',
      'java': 'java',
    };
    
    const shikiLang = languageMap[language.value.toLowerCase()] || language.value;
    
    // Dynamically import Shiki to avoid SSR issues
    const { codeToHtml } = await import('shiki');
    
    highlightedCode.value = await codeToHtml(code.value, {
      lang: shikiLang,
      themes: {
        light: 'nord',
        dark: 'rose-pine-dawn'
      }
    });
  } catch (error) {
    console.error('Error highlighting code:', error);
  }
});
</script>

<style scoped>
.code-block-wrapper {
  @apply my-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 relative;
  background: rgb(46, 52, 64);
}

.dark .code-block-wrapper {
  background: rgb(14, 16, 19);
}

.language-label {
  @apply absolute top-2 right-2 text-xs font-mono text-gray-500 dark:text-gray-500 uppercase px-2 py-1 rounded;
  background: rgba(112, 112, 112, 0.2);
  z-index: 10;
}

.dark .language-label {
  background: rgba(0, 0, 0, 0.4);
}

.shiki-wrapper :deep(pre) {
  @apply m-0 p-4 overflow-x-auto;
  font-size: 0.875rem;
  line-height: 1.5;
}

.shiki-wrapper :deep(code) {
  @apply font-mono;
}

.fallback-code {
  @apply m-0 p-4 bg-white dark:bg-gray-800 overflow-x-auto text-sm;
  font-family: 'Courier New', monospace;
}

.fallback-code code {
  @apply text-gray-800 dark:text-gray-200;
}

/* Override Shiki's inline background to use our container background */
.shiki-wrapper :deep(.shiki),
.shiki-wrapper :deep(.shiki span) {
  background-color: transparent !important;
}
</style>
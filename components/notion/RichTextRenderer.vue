<template>
  <span v-for="(textItem, index) in text" :key="index">
    <a 
      v-if="textItem.href" 
      :href="textItem.href" 
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-600 dark:text-blue-400 hover:underline"
      :class="getTextClasses(textItem)"
    >
      {{ textItem.plain_text }}
    </a>
    <span 
      v-else
      :class="getTextClasses(textItem)"
    >
      {{ textItem.plain_text }}
    </span>
  </span>
</template>

<script setup>
const props = defineProps({
  text: {
    type: Array,
    required: true,
  },
});

const getTextClasses = (textItem) => {
  const classes = [];
  
  if (textItem.annotations) {
    if (textItem.annotations.bold) classes.push('font-bold');
    if (textItem.annotations.italic) classes.push('italic');
    if (textItem.annotations.strikethrough) classes.push('line-through');
    if (textItem.annotations.underline) classes.push('underline');
    if (textItem.annotations.code) classes.push('bg-slate-100 dark:bg-zinc-900 px-1 py-0.5 rounded text-sm font-mono');
  }
  
  return classes.join(' ');
}
</script>

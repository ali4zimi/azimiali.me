<template>
  <div>
    <!-- Paragraph -->
    <p v-if="block.type === 'paragraph'" class="mb-4">
      <RichText :text="block.paragraph.rich_text" />
    </p>

    <!-- Heading 1 -->
    <h1 v-else-if="block.type === 'heading_1'" class="text-3xl font-bold mb-4 mt-8">
      <RichText :text="block.heading_1.rich_text" />
    </h1>

    <!-- Heading 2 -->
    <h2 v-else-if="block.type === 'heading_2'" class="text-2xl font-bold mb-3 mt-6">
      <RichText :text="block.heading_2.rich_text" />
    </h2>

    <!-- Heading 3 -->
    <h3 v-else-if="block.type === 'heading_3'" class="text-xl font-bold mb-2 mt-4">
      <RichText :text="block.heading_3.rich_text" />
    </h3>

    <!-- Bulleted List -->
    <ul v-else-if="block.type === 'bulleted_list_item'" class="list-disc ml-6 mb-2">
      <li><RichText :text="block.bulleted_list_item.rich_text" /></li>
    </ul>

    <!-- Numbered List -->
    <ol v-else-if="block.type === 'numbered_list_item'" class="list-decimal ml-6 mb-2">
      <li><RichText :text="block.numbered_list_item.rich_text" /></li>
    </ol>

    <!-- Code Block -->
    <pre v-else-if="block.type === 'code'" class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{{ getPlainText(block.code.rich_text) }}</code></pre>

    <!-- Quote -->
    <blockquote v-else-if="block.type === 'quote'" class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic mb-4">
      <RichText :text="block.quote.rich_text" />
    </blockquote>

    <!-- Divider -->
    <hr v-else-if="block.type === 'divider'" class="my-6 border-gray-300 dark:border-gray-700" />

    <!-- Image -->
    <img 
      v-else-if="block.type === 'image'" 
      :src="getImageUrl(block.image)" 
      :alt="getImageCaption(block.image)"
      class="max-w-full h-auto rounded-lg mb-4"
    />

    <!-- Fallback for unsupported blocks -->
    <div v-else class="text-gray-400 text-sm mb-2">
      [Unsupported block type: {{ block.type }}]
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
});

const getPlainText = (richText) => {
  return richText?.map(text => text.plain_text).join('') || '';
}

const getImageUrl = (image) => {
  if (image.type === 'external') {
    return image.external.url;
  } else if (image.type === 'file') {
    return image.file.url;
  }
  return '';
}

const getImageCaption = (image) => {
  return getPlainText(image.caption);
}
</script>

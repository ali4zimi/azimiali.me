<template>
  <p class="notion-paragraph">
    {{ block.paragraph.rich_text[0]?.plain_text }}
  </p>

  <!-- children slot -->
  <slot />
</template>

<script setup>
defineProps({
  block: Object
})
</script>

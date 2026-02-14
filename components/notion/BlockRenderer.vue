<template>
  <component
    :is="component"
    :block="block"
  >

    <!-- RECURSION HAPPENS HERE -->
    <template v-if="block.children?.length">
      <div class="notion-children">
        <BlockRenderer
          v-for="child in block.children"
          :key="child.id"
          :block="child"
        />
      </div>
    </template>
  </component>
</template>

<script setup>
import ParagraphBlock from './blocks/ParagraphBlock.vue';
import HeadingBlock from './blocks/HeadingBlock.vue';
import CodeBlock from './blocks/CodeBlock.vue';
import UnsupportedBlock from './blocks/UnsupportedBlock.vue';


const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
});


const registry = {
  paragraph: ParagraphBlock,
  heading_1: HeadingBlock,
  heading_2: HeadingBlock,
  heading_3: HeadingBlock,
  code: CodeBlock,
  // bulleted_list_item: ListItemBlock,
  // numbered_list_item: ListItemBlock
};

const component = computed(() => {
  return registry[props.block.type] || UnsupportedBlock;
})
</script>

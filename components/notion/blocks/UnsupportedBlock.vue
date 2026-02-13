<template>
    <div class="notion-unsupported">
        Unsupported block type: {{ block.type }}
    </div>
</template>

<script setup>
defineProps({
  block: Object
})
</script>
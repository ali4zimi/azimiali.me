<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short' };
  return new Date(date).toLocaleDateString('en-US', options);
}

const transformMarkdown = async (content) => {
  return await markdownParser.parse('<setup-id>', content)
}

</script>

<template>
  <div class="item mt-5" :class="index % 2 != 0 ? 'flex-row-reverse' : ''">
    <div class="col">
      <div class="item-header w-full flex justify-between gap-2">
        <div class="flex gap-2">
          <div class="w-10 h-10  rounded-full flex justify-center items-center">
            <img :src="item.organization.icon" />
          </div>
          <div>
            <div class="item-title">{{ item.title }}</div>
            <a target="_blank" :href="item.organization.website" class="org-link">{{
              item.organization.name }}</a>
          </div>
        </div>
        <div>
          <div class="text-sm">{{ formatDate(item.start_date) }}</div>
        </div>
      </div>

      <div class="item-body mt-3">
        <MarkdownRenderer class="prose" :md="item.description" />
      </div>

      <div class="bg-white">
        <!-- Skills: -->
      </div>

    </div>
    <div class="pointer">
      <div class="pointer-circle"></div>
    </div>
    <div class="col empty">
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply relative w-full pl-8 sm:px-0 flex justify-center gap-[50px];
}

.item-title {
  @apply font-semibold text-slate-500 dark:text-slate-400;
}

.org-link {
  @apply text-blue-400 dark:text-blue-300 dark:opacity-70 hover:underline;
}

.col {
  @apply w-[400px] sm:w-1/4 min-h-[200px] p-4 overflow-hidden
  bg-slate-50 dark:bg-slate-900 dark:text-slate-200 rounded-md cursor-pointer border dark:border-gray-900 z-40;
  animation: fadein 1.5s forwards;
}

.col:hover {
  @apply border-slate-400 dark:border-slate-500;
}

.col:hover+.pointer .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-900;
}


.col:has(+ .pointer:hover) {
  @apply border-slate-400 dark:border-slate-500;
}
.col.empty {
  @apply w-0;
  animation-name: expand;
  animation-delay: 1s;
  animation: expand 1.5s forwards;
}

@keyframes expand {
  0% {
    width: 200px;
  }

  100% {
    width: 400px;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.prose {
  @apply leading-5 text-slate-500 dark:text-slate-500;
}

.prose li {
  @apply my-0
}

.pointer {
  @apply w-5 h-5 top-5 absolute bg-slate-300 dark:bg-slate-300 rounded-full z-20 cursor-pointer left-[10px] sm:left-[50%];
  transform: translateX(-50%);
}

.pointer-circle {
  @apply w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-300;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pointer:hover .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-500;
}

.empty {
  @apply hidden sm:block sm:invisible;
}

</style>
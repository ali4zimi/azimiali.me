<template>
    <div class="cv-timeline">
        <div class="tm-header">
            <div class="tm-title" v-if="title">
              {{ title }}
            </div>
        </div>
        <div class="relative w-full  flex flex-col gap-5 pb-10">
            <div class="cv-timeline-line">
                <div class="cv-timeline-filler"></div>
            </div>

            <div class="cv-endline-pointer">
            </div>

            <div class="events flex flex-col mt-5">
                <CvTimlineItem :item="item" :index="index" v-for="(item, index) in list" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.cv-timeline {
  @apply relative mt-10;
}

.tm-header {
  @apply w-full flex sm:justify-center items-center;
}

.tm-title {
  @apply text-center py-1 px-3 border-b-2 border-slate-300 dark:text-slate-200;
  @apply text-slate-500 dark:text-slate-400;
  font-size: 1.8rem;
  font-weight: 400;
}

.cv-timeline-line {
  @apply w-2 h-full bg-slate-300 dark:bg-slate-300 left-[10px] sm:left-[50%];
  position: absolute;
  width: 2px;
  height: 100%;
  top: 0;
  transform: translateX(-50%);
}

/* .cv-timeline-filler {
  @apply w-full h-full bg-slate-500;
} */

.cv-endline-pointer {
  @apply bg-slate-300 absolute bottom-0 left-[10px] sm:left-[50%];
  width: 15px;
  height: 15px;
  transform: translateX(-50%);
}


.item-link {
  @apply  text-blue-400 dark:text-blue-300 dark:opacity-70 hover:underline;
}

.col {
  @apply w-[400px] sm:w-1/4 min-h-[200px] p-4 bg-slate-50 dark:bg-slate-900 dark:text-slate-200 
  rounded-md cursor-pointer border dark:border-gray-900 z-30;
  animation: fadein 1.5s forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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

.empty {
  @apply hidden sm:block sm:invisible;
}

.pointer {
  @apply w-5 h-5 top-5 absolute
  bg-slate-300 dark:bg-slate-300 
  rounded-full z-20 cursor-pointer left-[10px] sm:left-[50%];
  transform: translateX(-50%);
}

.pointer-circle {
  @apply w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-300;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.col:hover {
  @apply border-slate-400 dark:border-slate-500;
}

.col:hover + .pointer .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-900;
}

.pointer:hover .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-500;
}

.col:has(+ .pointer:hover) {
  @apply border-slate-400 dark:border-slate-500;
}

</style>

<script setup>
// define props

const props = defineProps({
    list: {
        type: Array,
        default: () => []
    },
    title: {
        type: String,
        default: 'No title'
    }
})

const formatDate = (date) => {
  // format like MMM YYYY
  const options = { year: 'numeric', month: 'short' };
  return new Date(date).toLocaleDateString('en-US', options);
}

// import markdownParser from '@nuxt/content/transformers/markdown'

const transformMarkdown = async (content) => {
  return await markdownParser.parse('<setup-id>', content)
}

</script>
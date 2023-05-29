<template>
    <div class="cv-timeline">
        <div class="tm-header">
            <div class="tm-title" v-if="title">
                {{ title  }}
            </div>
        </div>
        <div class="relative w-full  flex flex-col gap-5 pb-10">
            <div class="cv-timeline-line">
                <div class="cv-timeline-filler"></div>
            </div>

            <div class="cv-endline-pointer">
            </div>

            <div class="events flex flex-col mt-5">
                <div class="item mt-5" v-for="(item, index) in list"
                    :class="index % 2 != 0 ? 'flex-row-reverse' : ''">
                    <div class="col">
                        <div class="item-header w-full flex justify-between">
                            <div class="flex gap-2">
                                <div class="w-10 h-10  rounded-full flex justify-center items-center">
                                    <img :src="item.organization.icon" />
                                </div>
                                <div>
                                    <div class="font-bold">{{ item.title }}</div>
                                    <a target="_blank" :href="item.organization.website" class="text-sm">{{
                                        item.organization.name }}</a>
                                </div>
                            </div>
                            <div>
                                <div class="text-sm">{{ formatDate(item.start_date) }}</div>
                            </div>
                        </div>

                        <div class="item-body mt-3">
                            <!-- <div class="prose leading-5" v-html="$markdownToHtml(item.description)"></div> -->
                            <MarkdownRenderer class="prose" :md="item.description" />

                        </div>

                    </div>
                    <div class="pointer">
                        <div class="pointer-circle"></div>
                    </div>
                    <div class="col empty">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.cv-timeline {
  @apply relative mt-10;
}

.tm-header {
  @apply w-full flex justify-center items-center;
}

.tm-title {
  @apply text-center py-1 px-3 text-xl border-2 border-slate-300 dark:text-slate-200 ;
  /* left: 50%;
  transform: translateX(-50%); */
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
  @apply bg-slate-300 absolute bottom-0 left-[50%];
  width: 15px;
  height: 15px;
  transform: translateX(-50%);
}

.item {
  @apply relative w-full pl-8 sm:px-0 flex justify-center gap-[50px];
}

.col {
  @apply w-full sm:w-1/3 min-h-[200px] p-4 bg-slate-50 dark:bg-slate-700 dark:text-slate-200 rounded-md cursor-pointer;
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
  @apply w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.col:hover {
  @apply bg-slate-200 dark:bg-slate-600;
}

.col:hover + .pointer .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-200;
}

.pointer:hover .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-200;
}

.pointer:hover + .col {
  @apply bg-slate-200 dark:bg-slate-600;
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
  // Month Year
  const d = new Date(date)
  return `${d.toLocaleString('default', { month: 'long' })} ${d.getFullYear()}`
}

// import markdownParser from '@nuxt/content/transformers/markdown'

const transformMarkdown = async (content) => {
  return await markdownParser.parse('<setup-id>', content)
}

</script>
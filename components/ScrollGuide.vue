<script setup>

const scrollEnd = ref(false);

onMounted(() => {
  const scrollDownArrow = document.querySelector('.scroll-down-arrow')
  const rootEl = document.querySelector('.root')

  rootEl.addEventListener('scroll', () => {
    // if scroll is at the end of the page, hide the scroll down button
    if (rootEl.scrollTop + rootEl.clientHeight + 100 >= rootEl.scrollHeight) {
      scrollEnd.value = true
    } else {
      scrollEnd.value = false
    }
  })
})

function scrollDown() {
  const rootEl = document.querySelector('.root')
  rootEl.scrollTo({
    top: rootEl.scrollTop + rootEl.clientHeight,
    behavior: 'smooth'
  })
}

function scrollTop() {
  const rootEl = document.querySelector('.root')
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="scroll-arrow">
    <div title="Scroll down" class="scroll-down-arrow" v-if="!scrollEnd" @click="scrollDown">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
          <path d="m19 11l-7 6l-7-6" />
          <path d="m19 7l-7 6l-7-6" opacity=".5" />
        </g>
      </svg>
    </div>

    <div title="Scroll back to the top" class="scroll-top-arrow" v-else @click="scrollTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M7.5 15a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15ZM4.793 6.5L7.5 3.793L10.207 6.5l-.707.707l-1.5-1.5V11H7V5.707l-1.5 1.5l-.707-.707Z" clip-rule="evenodd"/></svg>
    </div>
  </div>
</template>

<style scoped>
.scroll-arrow {
  @apply fixed bottom-0 left-0 right-0 z-50
  flex justify-center items-center
}

.scroll-down-arrow {
  @apply  mb-5 cursor-pointer animate-bounce text-slate-500;
  margin-left: -7px;
}

.scroll-top-arrow {
  @apply  mb-5 cursor-pointer text-slate-500;
  margin-left: -7px;
}
</style>
<template>
  <div class="loader" :style="{ width: progress + '%' }"></div>
</template>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(to right, #64748b, #334155);
  z-index: 9999;
  transition: width 0.2s ease-out, opacity 0.4s ease-in-out;
  width: 0%;
  opacity: 1;
}

.loader.hidden {
  opacity: 0;
}
</style>

<script setup>
const router = useRouter()
const progress = ref(0)
let interval = null

const startProgress = () => {
  progress.value = 0
  const loader = document.querySelector(".loader")
  if (loader) {
    loader.classList.remove("hidden")
  }
  
  // Simulate realistic loading progress
  let currentProgress = 0
  interval = setInterval(() => {
    if (currentProgress < 20) {
      currentProgress += Math.random() * 10
    } else if (currentProgress < 50) {
      currentProgress += Math.random() * 4
    } else if (currentProgress < 80) {
      currentProgress += Math.random() * 2
    } else if (currentProgress < 90) {
      currentProgress += Math.random() * 0.5
    }
    
    currentProgress = Math.min(currentProgress, 90)
    progress.value = currentProgress
  }, 200)
}

const finishProgress = () => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
  
  progress.value = 100
  
  setTimeout(() => {
    const loader = document.querySelector(".loader")
    if (loader) {
      loader.classList.add("hidden")
    }
    setTimeout(() => {
      progress.value = 0
    }, 400)
  }, 300)
}

router.beforeEach((to, from, next) => {
  startProgress()
  next()
})

router.afterEach(() => {
  finishProgress()
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>
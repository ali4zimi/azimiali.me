<template>
  <NuxtLayout>
    <h1 class="text-center">Coming Soon</h1>

    <div class="dragzone hidden">
      <div class="timeline-wrapper">
        <div class="bg-black absolute top-0 bottom-0 w-1"></div>

        <div class="pointer absolute bottom-0 left-0 z-10">
          <div class="flex items-center gap-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M3 7.5L11 0v15L3 7.5Z"/></svg>
            <div class="w-full border">1995</div>
          </div>
        </div>
        <input type="range" list="tickmarks" @input="moveSlider" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style>


.dragzone {
  @apply bg-slate-100;
  position: relative;
  width: 100%;
  height: 80vh;
}

.timeline-wrapper {
  @apply absolute top-0 bottom-0 bg-red-100;
  left: 50%;
  transform: translateX(-50%);
}


input[type="range"] {
  position: absolute;
  top: 10px;
  bottom: 10px;
  z-index: 20;
  cursor: pointer;
  appearance: slider-vertical;
  width: 40px;
  opacity: 0;
}


</style>

<script setup>

const moveSlider = (e) => {
  const dragzone = document.querySelector('.dragzone');
  const pointer = document.querySelector('.pointer');

  const dragzoneHeight = dragzone.offsetHeight;

  // pointer.style.bottom = (e.target.value * (dragzoneHeight - 60) / e.target.offsetHeight) + '%';


  let a = e.target.value * 100 / e.target.offsetHeight;
  let b = (dragzoneHeight - pointer.offsetHeight - 20 ) / 100;

  pointer.style.bottom = (a * b) + '%';

}
</script>

<template>
  <NuxtLayout>
    <h1>Coming Soon</h1>
    <div class="presentation-screen w-full h-[80vh] relative mt-5 bg-slate-50">
      <div class="timeline-wrapper hidden">
        <div class="timeline">
          <div class="line"></div>
          <div class="pointer">1995</div>
          <input type="range" class="range" @input="movePointer" value="0" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style>

.timeline-wrapper {
  @apply absolute py-[30px];
  min-width: 50px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.timeline {
  @apply relative cursor-pointer;
  height: 100%;
}

.line {
  @apply absolute  w-1 bg-green-400 rounded-md;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  bottom: 10px;
}

.pointer {
  @apply absolute w-4 h-4 bg-green-600 rounded-md text-white;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  text-align: center;
}

.range {
  /* appearance: slider-vertical; */
  -webkit-appearance: slider-vertical;
  -moz-appearance: slider-vertical;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

</style>

<script setup>


const movePointer = (e) => {
  const pointer = document.querySelector('.pointer');
  const line = document.querySelector('.timeline');

  const pointerHeight = pointer.offsetHeight;
  const lineHeight = line.offsetHeight;

  const pointerPosition = e.target.value / 100;
  const space = lineHeight - pointerHeight;

  pointer.style.bottom = (pointerPosition * space) + 'px';

  console.log(pointerPosition * space);

}
</script>
<template>
  <NuxtLayout>
    <h1 class="text-center">Coming Soon</h1>

    <div class="dragzone relative w-8/12 mx-auto mt-10 px-4  aspect-video bg-slate-300 hidden">
      <div class="timeline"></div>
      <div id="dragable">
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.timeline {
  @apply bg-slate-500 ;
  position: absolute;
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

#dragable {
  @apply bg-slate-500 ;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  top: 50%;
}
</style>

<script setup>

onMounted(() => {
  const dragable = document.getElementById('dragable');
  let currentValue = 0;

  dragable.addEventListener('mousedown', (e) => {
    // get current position with %
    const currentPercentage = parseInt(dragable.style.top, 10);
    e.preventDefault();
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  const onMouseMove = (e) => {
    const newPercentage = currentPercentage + e.movementY;
    if (newPercentage >= 0 && newPercentage <= 100) {
      dragable.style.top = `${newPercentage}%`;
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };
})
</script>

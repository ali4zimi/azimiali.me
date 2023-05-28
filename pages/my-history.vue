<template>
  <NuxtLayout>
    <h1 class="text-center">Coming Soon</h1>
    <div class="presentation-screen w-full h-[70vh] relative mt-5 bg-slate-50">
      <div class="timeline-wrapper">
        <div class="timeline">
          <div class="tm-line"></div>
          <div class="tm-pointer">1995</div>
          <input type="range" class="tm-range" @input="movePointer" list="years" value="0" />

        </div>
      </div>

      <div class="w-full h-full flex">
        <div class="w-1/2 p-10">
          <div class="h-full">
            <div class="item w-fit bg-slate-600 p-3 rounded-md text-slate-50 my-1" v-for="item in eventList">
              <div class="header flex items-center gap-1">
                <div class="icon w-10 h-10 bg-slate-400 rounded-full"></div>
                <div class="">
                  <div class=" font-bold">{{ item.title }}</div>
                  <div class="text-sm">{{ item.year }}</div>
                </div>
              </div>
              <div class="body mt-3">
                <div class="">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 p-10">
          <div class="h-full">d</div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style>
.timeline-wrapper {
  @apply absolute py-[30px] left-[30px] sm:left-[50%];
   min-width: 50px;
  height: 100%;
  transform: translateX(-50%);
}

.timeline {
  @apply relative cursor-pointer;
  height: 100%;
}

.tm-line {
  @apply absolute w-1 bg-green-400 rounded-md;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  bottom: 10px;
}

.tm-pointer {
  @apply absolute w-4 h-4 bg-green-600 rounded-md text-white;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  text-align: center;
}

.tm-range {
  /* appearance: slider-vertical; */
  -webkit-appearance: slider-vertical;
  -moz-appearance: slider-vertical;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.item .body {
  @apply hidden overflow-hidden transition-all duration-300;
}

.item:hover .body{
  @apply visible;
}
</style>

<script setup>


const movePointer = (e) => {
  const pointer = document.querySelector('.tm-pointer');
  const line = document.querySelector('.timeline');

  const pointerHeight = pointer.offsetHeight;
  const lineHeight = line.offsetHeight;

  const pointerPosition = e.target.value / 100;
  const space = lineHeight - pointerHeight;

  pointer.style.bottom = (pointerPosition * space) + 'px';


  pointer.innerHTML = e.target.value;

}


const eventList = [
  {
    year: 1995,
    title: 'Birth',
    description: 'I was born.'
  },
  {
    year: 2013,
    title: 'High School',
    description: 'I finished high school and started my bachelor degree in Computer Science.'
  },
  {
    year: 2017,
    title: 'Bachelor Degree',
    description: 'I finished my bachelor degree in Computer Science.'
  },
  {
    year: 2018,
    title: 'First Job',
    description: 'I started my first job as a Software Developer.'
  },
  {
    year: 2020,
    title: 'First Job',
    description: 'I started my first job as a Software Developer.'
  },
  {
    year: 2021,
    title: 'First Job',
    description: 'I started my first job as a Software Developer.'
  },
]

onMounted(() => {

  for (let i = 0; i <= 100; i++) {
    const option = document.createElement('div');

    const probability = Math.random() < 0.5 ? 1 : 2;


  }
  
  
  for (let i = 0; i < eventList.length; i++) {
    const event = eventList[i];

  }
})
</script>
<template>
  <NuxtLayout>
    <h1 class="text-center">Coming Soon</h1>
    <div class="relative w-full  p-0 sm:p-3 flex flex-col gap-5">

      <div class="item" v-for="(item,index) in experiences">
        <div class="col" :class="index%2==0 ? 'col-left' : 'invisible'">
          <div class="font-bold">{{ item.title }}</div>
        </div>
        <div class="pointer"></div>
        <div class="col" :class="index%2==0 ? 'invisible' : 'col-right'">
          <div class="font-bold">{{ item.title }}</div>
        </div>
      </div>

      <div class="cv-timeline">
        <div class="cv-timeline-filler"></div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style>

.cv-timeline {
  @apply w-2 h-full bg-slate-300 left-[10px] sm:left-[50%];
  position: absolute;
  width: 2px;
  height: 100%;
  top: 0;
  transform: translateX(-50%);
}


/* .cv-timeline-filler {
  @apply w-full h-full bg-slate-500;
} */

.item {
  @apply relative w-full pl-8 sm:px-0 flex justify-center gap-[50px];
}

.col {
  @apply w-full sm:w-1/3 h-80 p-4 bg-slate-50 rounded-md cursor-pointer;
}

.invisible {
  @apply hidden sm:block;
}

.col:hover {
  @apply bg-slate-100;
}

.pointer {
  @apply w-5 h-5 top-5 absolute bg-slate-300 rounded-full z-20 cursor-pointer left-[10px] sm:left-[50%];
  transform: translateX(-50%);
}

.col-left:hover + .pointer {
  @apply bg-slate-500;
}

.pointer:has(+ .col-right:hover) {
  @apply bg-slate-500;
}

.pointer:hover {
  @apply bg-slate-500;
}

.pointer:hover + .col-right {
  @apply bg-slate-100;
}
</style>

<script setup>

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Google',
    date: '2019 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'Web Developer',
    company: 'Facebook',
    date: '2017 - 2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'Software Engineer',
    company: 'Google',
    date: '2019 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'Web Developer',
    company: 'Facebook',
    date: '2017 - 2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'Software Engineer',
    company: 'Google',
    date: '2019 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'Web Developer',
    company: 'Facebook',
    date: '2017 - 2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'Software Engineer',
    company: 'Google',
    date: '2019 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu'
  }
]

</script>
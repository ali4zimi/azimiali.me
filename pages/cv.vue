<template>
  <NuxtLayout>
    <div class="mx-auto mt-10">
      <main>
        <h1 class="text-center dark:text-slate-200 hidden">Coming Soon (Under Development)</h1>
        
        <div class="cv-timeline">
          <div class="tm-header">
            <div class="tm-title">
              Education
            </div>
          </div>
          <div class="relative w-full  flex flex-col gap-5 pb-10">
            <div class="cv-timeline-line">
              <div class="cv-timeline-filler"></div>
            </div>
  
            <div class="cv-endline-pointer">
            </div>
  
            <div class="events flex flex-col mt-5">
              <div class="item mt-5" v-for="(item,index) in experiences">
                <div class="col" :class="index%2==0 ? 'col-left' : 'invisible'">
                  <div class="item-header w-full flex justify-between">
                    <div class="flex gap-2">
                      <div class="w-10 h-10  rounded-full flex justify-center items-center">
                        <img :src="item.icon" alt="" />
                      </div>
                      <div>
                        <div class="font-bold">{{ item.title }}</div>
                        <a href="https://www.google.com" class="text-sm">{{ item.company }}</a>
                      </div>
                    </div>
                    <div>
                      <div class="text-sm">{{ item.date }}</div>
                    </div>
                  </div>
      
                  <div class="item-body mt-3">
                    <div class="">{{ item.description }}</div>
                  </div>
      
                </div>
                <div class="pointer"><div class="pointer-circle"></div></div>
                <div class="col" :class="index%2==0 ? 'invisible' : 'col-right'">
                  <div class="item-header w-full flex justify-between">
                    <div class="flex gap-2">
                      <div class="w-10 h-10  rounded-full flex justify-center items-center">
                        <img :src="item.icon" alt="" />
                      </div>
                      <div>
                        <div class="font-bold">{{ item.title }}</div>
                        <a href="https://www.google.com" class="text-sm">{{ item.company }}</a>
                      </div>
                    </div>
                    <div>
                      <div class="text-sm">{{ item.date }}</div>
                    </div>
                  </div>
      
                  <div class="item-body mt-3">
                    <div class="">{{ item.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                
        <div class="cv-timeline">
          <div class="tm-header">
            <div class="tm-title">
              Experience
            </div>
          </div>
          <div class="relative w-full  flex flex-col gap-5 pb-10">
            <div class="cv-timeline-line">
              <div class="cv-timeline-filler"></div>
            </div>
  
            <div class="cv-endline-pointer">
            </div>
  
            <div class="events flex flex-col mt-5">
              <div class="item mt-5" v-for="(item,index) in experiences">
                <div class="col" :class="index%2==0 ? 'col-left' : 'invisible'">
                  <div class="item-header w-full flex justify-between">
                    <div class="flex gap-2">
                      <div class="w-10 h-10  rounded-full flex justify-center items-center">
                        <img :src="item.icon" alt="" />
                      </div>
                      <div>
                        <div class="font-bold">{{ item.title }}</div>
                        <a href="https://www.google.com" class="text-sm">{{ item.company }}</a>
                      </div>
                    </div>
                    <div>
                      <div class="text-sm">{{ item.date }}</div>
                    </div>
                  </div>
      
                  <div class="item-body mt-3">
                    <div class="">{{ item.description }}</div>
                  </div>
      
                </div>
                <div class="pointer"><div class="pointer-circle"></div></div>
                <div class="col" :class="index%2==0 ? 'invisible' : 'col-right'">
                  <div class="item-header w-full flex justify-between">
                    <div class="flex gap-2">
                      <div class="w-10 h-10  rounded-full flex justify-center items-center">
                        <img :src="item.icon" alt="" />
                      </div>
                      <div>
                        <div class="font-bold">{{ item.title }}</div>
                        <a href="https://www.google.com" class="text-sm">{{ item.company }}</a>
                      </div>
                    </div>
                    <div>
                      <div class="text-sm">{{ item.date }}</div>
                    </div>
                  </div>
      
                  <div class="item-body mt-3">
                    <div class="">{{ item.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </NuxtLayout>
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
  @apply w-full sm:w-1/3 h-80 p-4 bg-slate-50 dark:bg-slate-700 dark:text-slate-200 rounded-md cursor-pointer;
}

.invisible {
  @apply hidden sm:block;
}

.col:hover {
  @apply bg-slate-200 dark:bg-slate-600;
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

.pointer:hover .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-200;
}

.col-left:hover + .pointer .pointer-circle {
  @apply bg-slate-400 dark:bg-slate-200;
}

.pointer:has(+ .col-right:hover) {
  @apply bg-slate-400 dark:bg-slate-200;
}


/* .pointer:hover + .col-right {
  @apply bg-slate-100;
} */
</style>

<script setup>

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Google',
    icon: 'https://img.icons8.com/color/48/000000/google-logo.png',
    date: '2019 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'Web Developer',
    company: 'Facebook',
    icon: 'https://img.icons8.com/color/48/000000/facebook-new.png',
    date: '2017 - 2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },
  {
    title: 'IT Manager',
    company: 'Microsoft',
    icon: 'https://img.icons8.com/color/48/000000/microsoft.png',
    date: '2019 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  },

]

const educations = [
  {
    title: 'Master\'s Degree in Management and Technology',
    organization: 'Technical University of Munich',
    icon: 'https://img.icons8.com/color/48/000000/technical-support.png',
    start_date: 'Oct 2022',
    end_date: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc. Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices odio, nec aliquam eros nisl eu nunc.',
  }
]
</script>
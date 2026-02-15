<template>
  <div class="mobile-menuoverlay fixed top-0 left-0 bottom-0 right-0 bg-slate-900 opacity-20 dark:bg-black dark:opacity-50 z-30"  v-if="isMobileMenuOpen" @click="toggleMobileMenu">
  </div>
  <div class="mobile-menu fixed z-40" :class="isMobileMenuOpen ? 'active' : ''">
    <ul class="mobile-menu-links">
      <li v-for="link in links">
        <nuxt-link :to="link.path" class="link-underline">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </div>
  <nav class="navbar">
    <div class="flex items-center gap-3">
      <div class="mobile-menu-toggler" @click="toggleMobileMenu">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
        </svg>
      </div>
      <div class="flex justify-center items-center">
        <nuxt-link to="/" class="logo font-semibold">
          <div class="inline-block text-slate-600 top-0 text-2xl dark:text-slate-300">A</div>
          <div class="inline-block text-slate-400 text-md dark:text-slate-400">A</div>
        </nuxt-link>
        <div class="loading-icon hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        </div>
      </div>
    </div>

    <div class="nav-menu">
      <ul class="nav-links flex">
        <li v-for="link in links">
          <nuxt-link :to="link.path" class="link-underline text-xl">{{ link.name }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="https://github.com/ali4zimi">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                <path fill="currentColor"
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </nuxt-link>
        </li>
      </ul>

      <div class="theme-switcher" @click="toggleTheme">
        <div v-if="theme == 'dark'">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M12 21q-3.775 0-6.388-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.525-.35 1.075-.037t.475.987q-.35 3.45-2.937 5.725T12 21Zm0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19Zm-.25-6.75Z" />
          </svg>
        </div>
        <div v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M11 5V1h2v4h-2Zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425L17.65 7.75ZM19 13v-2h4v2h-4Zm-8 10v-4h2v4h-2ZM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35L6.35 7.7Zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75L19.05 20.5ZM1 13v-2h4v2H1Zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7l-2.85 2.85ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16Zm0-4Z" />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  @apply w-full py-6 px-6 bg-slate-100 flex justify-between items-center relative dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 z-50
}

.nav-menu {
  @apply flex justify-between gap-5 text-xl text-slate-700 cursor-pointer  dark:text-slate-300
}

.nav-menu ul {
  @apply items-center gap-5 hidden sm:flex
}

.nav-menu li {
  @apply flex items-center
}

.nav-menu a.router-link-exact-active {
  @apply font-bold text-slate-950 dark:text-slate-50
}

.nav-menu a.router-link-exact-active::after {
  @apply w-full bg-slate-900 dark:bg-slate-50
}

.theme-switcher {
  @apply pr-2 flex justify-center items-center cursor-pointer
}

.mobile-menu-toggler {
  @apply  flex sm:hidden cursor-pointer
}
.mobile-menu-toggler svg {
  @apply text-slate-900 dark:text-slate-100
}


.mobile-menu {
  @apply w-[270px] py-[120px] px-7 fixed top-0 left-[-270px] bottom-0 bg-slate-100 dark:bg-zinc-900 flex flex-col gap-5 text-xl text-slate-700 dark:text-slate-300 transition-all duration-300 ease-in-out z-40
}

.mobile-menu-links {
  @apply flex flex-col gap-5
}

.mobile-menu-links li:hover {
  @apply text-slate-950 dark:text-slate-50 font-semibold
}

.mobile-menu-links a.router-link-exact-active {
  @apply font-bold text-slate-950 dark:text-slate-50
}

.mobile-menu-links a.router-link-exact-active::after {
  @apply w-full bg-slate-900 dark:bg-slate-50
}

.mobile-menu.active {
  @apply left-0
} 

/* .logo {
  @apply absolute transition-all duration-300 ease-in-out
}

.loading {
  @apply absolute transition-all duration-300 ease-in-out
} */

</style>

<script setup>
// const theme = useTheme();
const isMobileMenuOpen = ref(false);

const links = [
  {
    name: 'Home',
    path: '/',
  },
  // {
  //   name: 'Projects',
  //   path: '/projects',
  // },
  {
    name: 'Open Source',
    path: '/open-source',
  },
  // {
  //   name: 'Blog',
  //   path: '/blog',
  // }, 
]

const theme = useTheme();

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    theme.value = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    theme.value = 'light';
  }

  document.querySelector('.root').classList.remove('hidden')
})

const toggleTheme = () => {
  if (theme.value === 'light') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    theme.value = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    theme.value = 'light';
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}


// const router = useRouter()
// // const loading = ref(false)

// router.beforeEach(() => {
//   const logo = document.querySelector('.logo')
//   const loading = document.querySelector('.loading-icon')
  
//   logo.classList.add('hidden')
//   loading.classList.remove('hidden')
// })

// router.afterEach(() => {
//   const logo = document.querySelector('.logo')
//   const loading = document.querySelector('.loading-icon')
  
//   setTimeout(() => {
//     logo.classList.remove('hidden')
//     loading.classList.add('hidden')
//   }, 1000);

// })
</script>

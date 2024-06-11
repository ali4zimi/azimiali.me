<template>
    <NuxtLayout>
        <NuxtLayout name="content">
            <ContentDoc />


            <div class="">
                <div class="mt-1 mb-0 text-2xl text-slate-600 font-thin dark:text-slate-400 p-0">Current Focus</div>
                <div class="mt-0 mb-3">
                    <div class="text-slate-600 dark:text-slate-400">Cloud Software Engineering</div>
                    <div class="progressbar">
                        <div class="progressbar-fill w-10/12">
                            <!-- <div class="glow"></div> -->
                        </div>
                    </div>
                </div>
                <div class="mt-0 mb-3">
                    <div class="text-slate-600 dark:text-slate-400">Typescript</div>
                    <div class="progressbar">
                        <div class="progressbar-fill w-8/12">
                            <!-- <div class="glow"></div> -->
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>

    </NuxtLayout>
</template>
  
<style scoped>
.progressbar {
    @apply w-full h-2 bg-slate-200 rounded-md;
    box-shadow: steelblue 0 0 5px rgba(0, 0, 0, 0.2);
}

.dark .progressbar {
    @apply bg-slate-700;
}

.progressbar-fill {
    @apply h-full rounded-md flex justify-end;
    background: linear-gradient(90deg, #c3f2ee, #4dc0b5);
    /* background-size: 500%; */
    /* animation: progress 30s linear infinite; */
}

.glow {
    /* @apply h-full w-[100px];
    shadow: 0 0 100px rgba(118, 211, 117, 0.5);
    background: linear-gradient(90deg, #c3f2ee, #4dc0b5);
    opacity: 0.5; */
}

.dark  .progressbar-fill {
    background: linear-gradient(90deg, #25514d, #4dc0b5);
}


@keyframes progress {
    0% {
        background-position: 400%;
    }
    0% {
        background-position: 500%;
    }
}

</style>

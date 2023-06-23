<script setup>

const skills = ref([
    { 
        name: "JavaScript", 
        icon: ''    
    },
    {
        name: "TypeScript",
        icon: "TS"
    },
    {
        name: "VueJS",
        icon: "Vue"
    }
])


</script>

<template>
    <div class="text-slate-500 mt-5">
        <h1 class="">Skills used</h1>
        <div class="flex gap-2">
            <div class="w-10 h-10 bg-white rounded-md" v-for="skill in skills" >
                
            </div>
        </div>
    </div>
</template>
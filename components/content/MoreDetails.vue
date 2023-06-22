<script setup>

const show = ref(false);

function expand() {
    const details = document.querySelector('.details');
    details.style.maxHeight = '1000px';
    show.value = true;
}

function collapse() {
    const details = document.querySelector('.details');
    details.style.maxHeight = '0px';
    show.value = false;
}


</script>

<template>
    <div>
        <div class="details">
            <slot />
        </div>
        <button v-if="!show" @click="expand()">Show More...</button>
        <button v-if="show" @click="collapse()">Show Less...</button>
    </div>
</template>

<style scoped>
button {
    @apply text-slate-400 text-sm;
}
.details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease-out;
}
</style>
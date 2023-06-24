<script setup>

function expand(e) {
    const col = e.target.closest('.col');

    const moreLessToggler = col.querySelector('.more-less-toggler');
    const details = moreLessToggler.previousElementSibling;

    const moreDetails = col.querySelector('.more-details-button');
    const lessDetails = col.querySelector('.less-details-button');

    moreDetails.classList.add('hidden');
    lessDetails.classList.remove('hidden');
    details.style.maxHeight = '2000px';
}

function collapse(e) {
    const col = e.target.closest('.col');

    const moreLessToggler = col.querySelector('.more-less-toggler');
    const details = moreLessToggler.previousElementSibling;

    const moreDetails = col.querySelector('.more-details-button');
    const lessDetails = col.querySelector('.less-details-button');

    moreDetails.classList.remove('hidden');
    lessDetails.classList.add('hidden');
    details.style.maxHeight = '0px';
}

</script>

<template>
    <div class="details">
        <slot />
    </div>
    <div class="more-less-toggler">
        <!-- <span class="more-details-button text-slate-400 hover:text-blue-400" @click="expand">More...</span>
            <span class="less-details-button text-slate-400 hover:text-blue-400 hidden" @click="collapse">Less...</span> -->
        <LessDetailsButton />
    </div>
</template>

<style scoped>
.details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
}
</style>
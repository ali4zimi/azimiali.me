<script setup>

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
    <div class="less-details-button inline-block hidden">
        <span class="text-blue-300 hover:text-blue-500" @click="collapse">...Less</span>
    </div>
</template>
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

</script>

<template>
    <div class="more-details-button inline-block">
        <span class="text-blue-300 hover:text-blue-500" @click="expand">More...</span>
    </div>
</template>
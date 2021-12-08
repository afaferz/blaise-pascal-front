<template lang="pug">
div
    Header
    main.layoutDefault__main
        slot
    Footer
</template>

<script>
import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";

export default {
    name: "LayoutDefault",
    components: {
        Header,
        Footer
    }
};
</script>
<style lang="postcss">
</style>

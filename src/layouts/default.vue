<template lang="pug">
div
    Header
    main.layoutDefault__main
        slot
    Footer
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import Header from '@/components/Common/Header.vue';
import Footer from '@/components/Common/Footer.vue';
import Loader from '@/components/Custom/Loader.vue';

export default defineComponent({
    setup() {
        const store = useStore();
        const loading = computed(() => store.getters['getLoading']);
        return {
            loading,
            store,
        };
    },
    name: 'LayoutDefault',
    components: {
        Header,
        Footer,
        Loader,
    },
});
</script>
<style lang="postcss"></style>

<template lang="pug">
#app(:style="{ opacity: loading ? 0 : 1 }")
    div(v-if="!loading")
        RouterView(v-slot="{ Component }")
            Transition(name="slide-fade", mode="out-in")
                component(:is="Component")
    div(v-else)
        Teleport(to="body") 
            Loader
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUpdated } from 'vue';
import { useStore } from 'vuex';
import Loader from '@/components/Custom/Loader.vue';

export default defineComponent({
    setup() {
        const store = useStore();
        const loading = computed(() => store.getters['getLoading']);

        const onLoading = () => {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    // Simulação de loading
                    setTimeout(() => store.commit('SET_LOADING', false), 2500);
                } else {
                    store.commit('SET_LOADING', true);
                }
            };
        };
        onMounted(onLoading);
        onUpdated(onLoading);
        return {
            loading,
        };
    },
    components: {
        Loader,
    },
});
</script>

<style>
#app {
    background: #2c3e50;
    min-height: 100vh;
}
[v-cloack] {
    display: none;
}
.slide-fade-enter-active {
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 0.9s cubic-bezier(0.5, 0.9, 1, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(-30%);
    overflow: hidden;
    opacity: 0;
}
</style>

<template lang="pug">
#app
    RouterView(v-slot="{ Component }")
        Transition(name="slide-fade", mode="out-in")
            component(:is="Component")
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    setup() {
        const store = useStore();

        const onLoading = () => {
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    console.log("OIOI ACABOU");
                    setTimeout(
                        () => store.dispatch("GET_LOADING", false),
                        1800
                    );
                } else {
                    store.dispatch("GET_LOADING", true);
                }
            };
        };
        onMounted(onLoading);
        onUpdated(onLoading);
    },
});
</script>

<style>
#app {
    background: #2c3e50;
    min-height: 100vh;
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

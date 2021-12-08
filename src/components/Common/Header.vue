<template lang="pug">
header.max-w-screen-xl.py-12.mx-auto.space-y-8.overflow-hidden(class="sm:px-6 lg:px-8") 
    NavbarDesktop(:routes="routes")
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import NavbarDesktop from "./Navbar/Desktop.vue";

export default defineComponent({
    setup() {
        const store = useStore();
        const count = ref(store.state);
        const inc = () => {
            store.commit("increment");
        };

        return {
            count,
            inc,
        };
    },
    name: "Header",
    components: {
        NavbarDesktop,
        // NavbarMobile,
    },
    data() {
        return {
            routes: [
                {
                    path: "/vida",
                    name: "Vida",
                },
                {
                    path: "/obras",
                    name: "Obras",
                },
                {
                    path: "/",
                    name: "Home",
                },
                {
                    path: "/frases",
                    name: "Frases",
                },
                {
                    path: "/experimente",
                    name: "Experimente",
                },
            ],
        };
    },
});
</script>

<style lang="postcss">
</style>
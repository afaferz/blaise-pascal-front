<template lang="pug">
header.max-w-screen-xl.mx-auto.navbar-shadow.overflow-hidden(class="sm:px-6 lg:px-8 md:py-12 md:space-y-8") 
    NavbarDesktop(:routes="routes")
    NavbarMobile
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import NavbarDesktop from './Navbar/Desktop.vue';
import NavbarMobile from './Navbar/Mobile.vue';

export default defineComponent({
    setup() {
        const store = useStore();
        const count = ref(store.state);
        const inc = () => {
            store.commit('increment');
        };

        return {
            count,
            inc,
        };
    },
    name: 'Header',
    components: {
        NavbarDesktop,
        NavbarMobile,
    },
    data() {
        return {
            routes: [
                {
                    path: '/vida',
                    name: 'Vida',
                },
                {
                    path: '/obras',
                    name: 'Obras',
                },
                {
                    path: '/',
                    name: 'Home',
                },
                {
                    path: '/frases',
                    name: 'Frases',
                },
                {
                    path: '/experimente',
                    name: 'Experimente',
                },
            ],
        };
    },
});
</script>

<style lang="postcss">
@media screen and (max-width: 600px) {
    .navbar-shadow {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}
</style>

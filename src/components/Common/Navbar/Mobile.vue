<template lang="pug">
nav.navbar.navbar-mobile
    div.navbar__actions
        img(
            src="./../../../assets/img/blaise-pascal-without-bg.png",
            width="50",
            height="50"
            class="logo"
        )
        button.menu-button(@click="showMenu = !showMenu")
            img(
                src="./../../../assets/img/icons/lamp.svg"
                width="50",
                height="50"
                class="menu"
            )
    ul.navbar-list(v-show="showMenu")
        li.navbar-item(v-for="(route, index) in routes", :key="route.path")
            RouterLink.navbar-link.p-4(:to="route.path")
                span {{ route.name }}
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

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
    name: 'NavbarDesktop',
    data() {
        return {
            showMenu: false,
            routes: [
                {
                    path: '/',
                    name: 'Home',
                },
                {
                    path: '/vida',
                    name: 'Vida',
                },
                {
                    path: '/obras',
                    name: 'Obras',
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
<style lang="postcss" scoped>
@import '../../../assets/styles/_variables/index.css';
/* .navbar {
    max-width: 1024px;
} */
@media screen and (min-width: 978px) {
    .navbar-mobile {
        display: none;
    }
}
.navbar.navbar-mobile {
    /* background: red; */
}
.navbar__actions {
    display: flex;
    justify-content: space-between;
    background: ;
    padding: 1em 1.5em;
    align-content: center;
}
.navbar__actions > img.logo {
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}
.navbar-list {
    position: relative;
    background: #cde0e8;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.navbar-item {
    display: flex;
    align-items: center;
}
.navbar-link {
    color: var(--thirty);
    font-size: 1em;
    font-family: var(--font-link);
    font-weight: bold;
    letter-spacing: 0.25em;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 0 1px 0 #495d72, 0 1px 0 #3b4c5d, 0 1px 0 #495d72,
        0 1px 0 #546a81, 0 0px 3px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.3);
    z-index: 10;
}
.navbar-link::before {
    background: var(--secondary);
    bottom: 1.05em;
    content: '';
    display: block;
    height: 15px;
    left: 0;
    opacity: 0.7;
    position: absolute;
    transform: skewX(-20deg);
    transition: 0.5s ease-in-out;
    width: 0;
    z-index: -1;
}
.navbar-item:not(:nth-child(3)) .navbar-link:hover::before {
    padding: 0 1em;
    width: 95%;
}
.translateY-enter {
    transform: translateY(-200px);
    opacity: 0;
}

.translateY-enter-active,
.translateY-leave-active {
    transform-origin: top left 0;
    transition: 0.2s ease;
}

.translateY-leave-to {
    transform: translateY(-200px);
    opacity: 0;
}
</style>

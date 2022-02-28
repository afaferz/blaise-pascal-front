<template lang="pug">
nav.navbar.navbar-desktop
    ul.navbar-list
        li.navbar-item(v-for="(route, index) in routes", :key="route.path")
            RouterLink.navbar-link.p-4(:to="route.path")
                img(
                    v-if="route.name === 'Home'"
                    src="./../../../assets/img/blaise-pascal-without-bg.png",
                    width="90",
                    height="90"
                )
                span(v-else) {{ route.name }}
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

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
    name: "NavbarDesktop",
    props: {
        routes: {
            type: Array,
            default: () => [],
        },
    },
    methods: {},
});
</script>

<style lang="postcss">
@import "../../../assets/styles/_variables/index.css";
/* .navbar {
    max-width: 1024px;
} */
@media screen and (max-width: 600px) {
    .navbar-desktop {
        display: none;
    }
}
.navbar-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.navbar-item {
    display: flex;
    align-items: center;
}
.navbar-link {
    color: #fefefe;
    font-size: 1.5em;
    font-family: var(--font-link);
    font-weight: bold;
    letter-spacing: 0.25em;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 0 1px 0 #fefefe, 0 1px 0 #fdfdfd, 0 1px 0 #fefefe,
        0 1px 0 #fcfcfc, 0 0px 3px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.3),
        0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
        0 20px 20px rgba(0, 0, 0, 0.15), 2px 2px 2px rgba(206, 89, 55, 0);
    z-index: 10;
}
.navbar-link::before {
    background: var(--secondary);
    bottom: 1.05em;
    content: "";
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
</style>
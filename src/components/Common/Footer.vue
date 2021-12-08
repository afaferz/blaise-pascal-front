<template lang="pug">
footer.footer.border-t-2.border-gray-800.border-opacity-75
    .max-w-screen-lg.py-4.mx-auto.overflow-hidden(class="sm:px-6 lg:px-8") 
        nav.flex.flex-row.justify-around.items-center.py-2
            a.footer-link.text-base.leading-6.py-2.uppercase.text-center.transform.transition.duration-500.ease-in-out(
                class="hover:-translate-y-2",
                v-for="route in routes",
                :key="route.name",
                :href="route.path"
            ) {{ route.name }}

            a.border-2.border-blue-500.font-bold.text-blue-500.px-4.py-3.transition.duration-300.ease-in-out.mr-6(
                class="hover:bg-blue-500 hover:text-white",
                href="#"
            ) Voltar ao topo

        p.my-4.text-base.leading-6.text-center.text-gray-400 © Todos os direitos reservados -
            a.ml-2(href="") afaferz
            span.ml-1 ❤️
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
    name: "Footer",
    data() {
        return {
            routes: [
                {
                    path: "/",
                    name: "Projetos",
                },
                {
                    path: "/",
                    name: "Artigos",
                },
                {
                    path: "/",
                    name: "Colabore",
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
@import "../../assets/styles/_variables/index.css";
footer.footer {
    box-shadow: -4px 2px 15px -2px rgb(0, 0, 0), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.footer-link {
    color: #fefefe;
    font-size: 1.5em;
    font-family: var(--font-link);
    font-weight: bold;
    letter-spacing: 0.25em;
}
</style>
<template lang="pug">
LayoutDefault 
    section.container.mx-auto.h-screen
        div
            span.title-info Blaise
            div
                span | Clermont-Ferrand, 19 de junho de 1623 |
                    svg.icon.icon--lamp
                        use(
                            xlink:href="./../../src/assets/img/sprite-icons.svg#lamp"
                        )
                br
                span | Paris, 19 de agosto de 1662 |
                    svg.icon.icon--tombstone
                        use(
                            xlink:href="./../../src/assets/img/sprite-icons.svg#tombstone"
                        )
            span.title-info Pascal
    section.container.mx-auto.h-screen Informações
    section.container.mx-auto.h-screen Outro
</template>

<script>
import LayoutDefault from "@/layouts/default.vue";

export default {
    name: "Vida",
    components: {
        LayoutDefault
    }
};
</script>
<style lang="postcss">
@import "./../assets/styles/_variables/index.css";
.icon.icon--lamp {
    display: inline-block;
    height: 40px;
    /* transform: translate3d(0, 8px, 0); */
    width: 40px;
}
.icon.icon--tombstone {
    display: inline-block;
    height: 30px;
    width: 30px;
}
.title-info {
    letter-spacing: 0.01em;
    font-size: 3em;
    color: var(--secondary);
    text-shadow: 2px 2px 2px #a7c6f6, 2px 2px 2px #aed4f6, 2px 2px 2px #b3d4f6,
        2px 2px 2px #b3d4e8, 0 6px 1px rgba(0, 20, 150, 0.1),
        0 0 4px rgba(0, 20, 150, 0.1), 0 1px 3px rgba(0, 20, 150, 0.3),
        0 3px 5px rgba(0, 0, 20, 0.2), 0 5px 10px rgba(0, 0, 20, 0.25),
        0 10px 10px rgba(0, 0, 20, 0.2), 0 20px 20px rgba(0, 0, 20, 0.15);
    font-weight: bold;
    text-transform: uppercase;
}
</style>

<template lang="pug">
LayoutDefault
    section.container.mx-auto.h-screen.intro
        .title
            span.title-description Blaise
            .title-description
                span.title-description--born | Clermont-Ferrand, 19 de junho de 1623 |
                    img.icon.icon--lamp(
                        src="./../../src/assets/img/icons/lamp.svg"
                    )
                    //- svg.icon.icon--lamp
                    //-     use(
                    //-         xlink:href="./../../src/assets/img/sprite-icons.svg#lamp"
                    //-     )
                br
                span.title-description--death | Paris, 19 de agosto de 1662 |
                    img.icon.icon--tombstone(
                        src="./../../src/assets/img/icons/tombstone.svg"
                    )
                    //- svg.icon.icon--tombstone
                    //-     use(
                    //-         xlink:href="./../../src/assets/img/sprite-icons.svg#tombstone"
                    //-     )
            span.title-description Pascal
    section.container.mx-auto.h-screen Informações
    section.container.mx-auto.h-screen Outro
    //- teleport
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
.intro {
}
.title {
    display: grid;
    font-family: "Times New Roman", Times, serif;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 200px 150px 200px;
    height: 100%;
    padding: 4em 0;
}
.title-description {
    display: flex;
    align-items: center;
    justify-content: center;
}
.title-description:not(:nth-child(2)) {
    color: var(--secondary);
    font-size: 5.75rem;
    letter-spacing: 0.01em;
    text-shadow: 2px 2px 2px #a7c6f6, 2px 2px 2px #aed4f6, 2px 2px 2px #b3d4f6,
        2px 2px 2px #b3d4e8, 0 6px 1px rgba(0, 20, 150, 0.1),
        0 0 4px rgba(0, 20, 150, 0.1), 0 1px 3px rgba(0, 20, 150, 0.3),
        0 3px 5px rgba(0, 0, 20, 0.2), 0 5px 10px rgba(0, 0, 20, 0.25),
        0 10px 10px rgba(0, 0, 20, 0.2), 0 20px 20px rgba(0, 0, 20, 0.15);
    font-weight: bold;
    text-transform: uppercase;
}
.title-description:nth-child(1) {
    background: blue;
    grid-column: 1 / 4;
    grid-row: 1 / 2;
}
.title-description:nth-child(2) {
    align-items: center;
    background: red;
    display: flex;
    flex-direction: column;
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    justify-content: center;
}
.title-description:nth-child(3) {
    background: yellow;
    grid-column: 1 / 4;
    grid-row: 3 / 3;
}
.title-description .title-description--born,
.title-description .title-description--death {
    align-items: center;
    color: #fefefe;
    display: flex;
    font-weight: bold;
    font-size: 1rem;
    height: 35%;
    margin: 0 auto;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    width: 80%;
}
.icon.icon--lamp {
    display: inline-block;
    height: 40px;
    margin-left: 2px;
    vertical-align: middle;
    transform: translate3d(0, -4px, 0);
    width: 40px;
}
.icon.icon--tombstone {
    display: inline-block;
    margin-left: 4px;
    height: 30px;
    width: 30px;
}
@media screen and (min-width: 1280px) {
    .title {
        grid-template-rows: repeat(3, 200px);
    }
    .title-description:not(:nth-child(2)) {
        font-size: 10rem;
    }
    .title-description:nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
    .title-description:nth-child(2) {
        display: flex;
        flex-direction: column;
        grid-column: 1 / 4;
        grid-row: 2 / 3;
    }
    .title-description:nth-child(3) {
        grid-column: 3 / 3;
        grid-row: 3 / 3;
    }
    .title-description .title-description--born,
    .title-description .title-description--death {
        align-items: center;
        color: #fefefe;
        display: flex;
        font-weight: bold;
        font-size: 2rem;
        height: 35%;
        margin: 0 auto;
        padding: 0 6em;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
        width: 80%;
    }
}
</style>

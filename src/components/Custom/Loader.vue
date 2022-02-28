<template lang="pug">
div
    Transition(name="fade", mode="out-in")
        .loader
            .loader-container
                .w-full.h-px.mb-6
                    .bg-blue-600.h-px(style="width: 100%; height: 15px") 
                    .flex.flex-col.text-center.w-screen.h-screen.align-center.justify-center
                        .number-box(v-for="n in pascalTriangleItens") 
                            .number-row.my-3
                                span.number.mx-4(v-for="i in n") {{ i }}
                        //- <svg width="100" height="100"><line x1="50" y1="50" x2="350" y2="350" stroke="black"/></svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
declare type PascalTriangle = number[];

export default defineComponent({
    data() {
        return {
            pascalTriangleItens: [] as Array<PascalTriangle>,
        };
    },
    mounted() {
        this.generateTriangle(7);
    },
    methods: {
        async generateTriangle(iterations: number) {
            const GENERATE = (n: number) => this._pascalTriangle(n);
            for (let i = 0; i < iterations; i++) {
                setTimeout(() => {
                    this.pascalTriangleItens.push(GENERATE(i));
                }, i * 500);
            }
        },
        _pascalTriangle(numberOfElements = 1): PascalTriangle {
            let oldLine;
            if (numberOfElements == 0) return [1];
            else oldLine = this._pascalTriangle(numberOfElements - 1);

            const newLine = [];

            for (let i = 0; i < oldLine.length - 1; i++)
                newLine.push(oldLine[i] + oldLine[i + 1]);

            const line = [1].concat(newLine).concat([1]);

            return line;
        },
    },
});
</script>
<style lang="postcss">
@import '../../assets/styles/_variables/index.css';

.loader {
    display: flex;
    background: #fefefe;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9999;
}
.loader-container {
    background-color: rgba(0, 0, 0, 0);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: scale(1.1);
}
.number-row {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
}
.number {
    background: var(--secondary);
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 55px;
    padding: 15px;
    position: relative;
    width: 55px;
}
.number-box:not(:last-child) .number-row .number::before {
    animation: reveal-line 1s ease infinite alternate;
    background: #00000083;
    bottom: -32px;
    content: '';
    height: 38px;
    right: 79%;
    rotate: 50deg;
    position: absolute;
    width: 2px;
    z-index: 99;
}
.number-box:not(:last-child) .number-row .number::after {
    animation: reveal-line 1s ease infinite alternate;
    animation-delay: 2s;
    background: #00000083;
    bottom: -32px;
    content: '';
    height: 38px;
    left: 79%;
    rotate: -50deg;
    position: absolute;
    width: 2px;
    z-index: 99;
}
@keyframes reveal-line {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

<template lang="pug">
.loader(v-if="startLoader")
    .w-full.h-px.mb-6
        .bg-blue-600.h-px(style="width: 100%; height: 15px")
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        startLoader: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        if (this.startLoader) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    },
});
</script>
<style lang="postcss">
@import "../../assets/styles/_variables/index.css";
.loader, #nprogress {
    background: var(--secondary);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    overflow: hidden;
    z-index: 10;
}
</style>
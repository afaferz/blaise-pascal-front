<template lang="pug">
LayoutDefault 
    .teste.white Vida
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
.teste {
    /* background: white; */
    min-height: 100vh;
}
</style>

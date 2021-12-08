<template lang="pug">
#app
    RouterView(v-slot="{ Component }")
        Transition(name="slide-fade", mode="out-in")
            component(:is="Component")
</template>

<style>
#app {
    background: #2c3e50;
    min-height: 100vh;
}
.slide-fade-enter-active {
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 0.9s cubic-bezier(0.5, 0.9, 1, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(-30%);
    overflow: hidden;
    opacity: 0;
}
</style>

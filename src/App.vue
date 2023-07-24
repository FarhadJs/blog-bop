<template>
  <TheHeader />
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      currentPage: "home",
    };
  },
};
</script>

<style></style>

<!-- <a href="https://vitejs.dev" target="_blank">
  <img src="/vite.svg" class="logo" alt="Vite logo" />
</a>
<a href="https://vuejs.org/" target="_blank">
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
</a> -->
<!-- <HelloWorld msg="Vite + Vue" /> -->

<!-- <Home v-if="currentPage === 'home'"></Home>
  <About v-else-if="currentPage === 'about'"></About>
  <Contact v-else-if="currentPage === 'contact'"></Contact> -->

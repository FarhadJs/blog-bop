<template>
  <TheHeader :page="currentPage" @changePage="currentPage = $event" />

  <keep-alive>
    <component :is="currentPage"></component>
  </keep-alive>

  <TheFooter></TheFooter>
</template>

<script>
import { defineAsyncComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue'
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import Home from "./components/pages/Home.vue";
import Contact from "./components/pages/Contact.vue";
import About from "./components/pages/About.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    Home: defineAsyncComponent(() => import("./components/pages/Home.vue")),
    Contact: defineAsyncComponent(() =>
      import("./components/pages/Contact.vue")
    ),
    About: defineAsyncComponent(() => import("./components/pages/About.vue")),
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

<template>
  <Header />
  <Nav />
  <Sidebar />
  <PostList />
  <Footer />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Footer from "./components/layouts/Footer.vue";
import Header from "./components/layouts/Header.vue";
import Nav from "./components/layouts/Nav.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
// import Post from "./components/Post.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    Header,
    Footer,
    Nav,
    Sidebar,
    PostList,
    // Post,
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

<template>
  <header>
    <h2 class="logo">Blog Bop</h2>
    <div>
      <a
        :class="{ 'text-gray-300': page === 'home' }"
        @click="$emit('changePage', 'home')"
        >Home</a
      >
      <a
        :class="{ 'text-gray-300': page === 'about' }"
        @click="$emit('changePage', 'about')"
        >About</a
      >
      <a
        :class="{ 'text-gray-300': page === 'contact' }"
        @click="$emit('changePage', 'contact')"
        >Contact</a
      >
      <a
        :class="{ 'text-gray-300': page === 'blog' }"
        @click="$emit('changePage', 'blog')"
        >Blog</a
      >
    </div>
  </header>
  <br />
  <br />
</template>

<script>
export default {
  props: ["page"],
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
header {
  width: 100%;
  background-color: rgb(57, 57, 57);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  padding: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid white;
  filter: drop-shadow(0 0 15px white);
}
div {
  margin-right: 5%;
  width: 230px;
  display: flex;
  justify-content: space-around;
}
h2 {
  font-size: 2em;
  line-height: 1.1;
  margin-left: 10%;
  user-select: none;
}

.logo {
  @apply transition-all;
  will-change: filter;
  transition: filter 300ms;
  cursor: pointer;
}
.logo:hover {
  filter: drop-shadow(0 0 5px #a5a5a5);
}
</style>

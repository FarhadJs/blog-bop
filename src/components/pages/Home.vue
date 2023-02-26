<template>
  <TheNav />
  <SidebarPosts />
  <PostList />
</template>

<script>
import PostList from "../PostList.vue";
import TheNav from "../layouts/TheNav.vue";
import SidebarPosts from "../layouts/SidebarPosts.vue";

export default {
  components: {
    PostList,
    TheNav,
    SidebarPosts,
  },
};
</script>

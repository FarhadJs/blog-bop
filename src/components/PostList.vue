<template>
  <!-- <AlertMessage>
    <div
      class="bg-blue-200 w-96 mx-auto ml-16 text-blue-800 mb-3 p-2 rounded-md cursor-pointer select-none"
    >
      <p>this is a information message</p>
    </div>
  </AlertMessage> -->

  <div v-if="!loading" id="PPage">
    <PostBlogs :post="posts[0]" :Inclass="['border']" />
    <div id="small" v-for="(postGroup, index) in posts.slice(1)" :key="index">
      <PostBlogs
        v-for="post in postGroup"
        :key="post.id"
        :post="post"
        style="width: 375px; margin-top: 20px"
      />
    </div>
  </div>
  <div v-else>Loading...</div>

  <PageNumber
    v-if="!loading"
    :totalPage="page.total"
    :currentPage="page.current"
    @Page-changed="changePage"
  />
</template>

<script>
import PostBlogs from "./PostBlogs.vue";
import axios from "axios";
import _ from "underscore";
import PageNumber from "./PageNumber.vue";
import AlertMessage from "./AlertMessage.vue";

export default {
  components: {
    PostBlogs,
    PageNumber,
    AlertMessage,
  },

  data() {
    return {
      posts: null,
      loading: false,
      page: {
        current: 1,
        total: 0,
      },
    };
  },

  created() {
    this.getPostData(1);
  },
  methods: {
    changePage(page) {
      this.getPostData(page);
    },
    getPostData(page = 1) {
      this.loading = true;
      axios
        .get(`http://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`)
        .then((res) => {
          console.log(res.headers);
          this.posts = res.data;
          let mainPost = this.posts.shift();

          this.posts = [mainPost, ..._.chunk(this.posts, 2)];
          this.page.current = page;
          this.page.total = parseInt(
            parseInt(res.headers["x-total-count"]) / 9
          );
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
#PPage {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  @apply mb-5 px-10;
}

#small {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  @apply w-full;
}
</style>

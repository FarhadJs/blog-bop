<template>
  <div v-if="!loading">
    <Post :post="posts[0]" :Inclass="['border']" />
    <div id="small" v-for="(postGroup, index) in posts.slice(1)" :key="index">
      <Post
        v-for="post in postGroup"
        :key="post.id"
        :post="post"
        style="width: 300px;margin-top: 20px;"
      />
    </div>
  </div>
  <div v-else>Loading...</div>

  <PageNumber
    :totalPage="page.total"
    :currentPage="page.current"
    @Page-changed="changePage"
    :pre-page="5"
  />
</template>

<script>
import Post from "./Post.vue";
import axios from "axios";
import _ from "underscore";
import PageNumber from "./PageNumber.vue";

export default {
  components: {
    Post,
    PageNumber,
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
          // console.log(_.chunk(this.posts, 2));

          this.posts = [mainPost, ..._.chunk(this.posts, 2)];
          this.page.current = page;
          this.page.total = parseInt(
            parseInt(res.headers["x-total-count"]) / 9
          );
          console.log(this.page);
          console.log(this.posts);
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
div {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
}

#small {
  width: 70%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
}
</style>

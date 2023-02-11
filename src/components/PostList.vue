<template>
  <div v-if="!loading">
    <Post
      :post="posts[0]"
      style="margin-bottom: 20px"
      imgStyle="width:700px;"
      txtPost="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque voluptatem, deserunt, expedita laborum culpa neque perspiciatis illo itaque ab ipsa dolorem vero asperiores in sapiente? Error repudiandae perferendis autem?"
    />
    <div id="small" v-for="(postGroup, index) in posts.slice(1)" :key="index">
      <Post
        v-for="post in postGroup"
        :key="post.id"
        :post="post"
        style="
          margin-bottom: 20px;
          margin-right: 10px;
          margin-left: 10px;
          width: 340px;
          height: 350px;
        "
        imgStyle="width:340px;height:max-content;width: 100%;
  height: 100%;"
      />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import Post from "./Post.vue";
import axios from "axios";
import _ from "underscore";

export default {
  components: {
    Post,
  },

  data() {
    return {
      posts: null,
      loading: false,
    };
  },

  created() {
    this.loading = true;
    axios
      .get("http://jsonplaceholder.typicode.com/posts?_page=1&_limit=9")
      .then((res) => {
        this.posts = res.data;
        let mainPost = this.posts.shift();
        // console.log(_.chunk(this.posts, 2));

        this.posts = [mainPost, ..._.chunk(this.posts, 2)];
        console.log(this.posts);
        this.loading = false;
      })
      .catch((err) => console.log(err));
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

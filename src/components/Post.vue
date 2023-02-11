<template>
  <div :style="style" id="post-tab">
    <a href="#!"
      ><img
        src="./../assets/wallpaper/20221228.jpg"
        alt="..."
        :style="imgStyle"
    /></a>
    <div id="post-body">
      <hr />
      <div id="post">
        <span id="post-date">January 1, 2022</span>
        <h2>Post Title</h2>
        <p>
          {{ post.body }}
        </p>
        <a href="#!">Read more -></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    style: { type: Object },
    imgStyle: { type: String },
    post: { type: Object },
  },
};
</script>

<style scoped>
h2 {
  margin: 0px;
  font-size: medium;
}
hr {
  border: none;
  background-color: white;
  height: 1px;
  margin: 0px;
}
p {
  font-size: small;
  overflow-y: auto;
  height: 40px;
}
span {
  font-size: x-small;
  opacity: 50%;
}
#post {
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 10px;
}
#post-tab {
  width: 700px;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
}
#post-body {
  background-color: #242424;
  text-align: left;
  height: 100%;
  margin-top: -5px;
}
</style>

<template>
  <div id="post-tab" :style="style" class="mx-5">
    <a href="#!"
      ><img
        src="./../assets/wallpaper/20221228.jpg"
        alt="..."
        :style="imgStyle"
    /></a>
    <div id="post-body" class="">
      <hr />
      <div id="post">
        <span id="post-date">January 1, 2022</span>
        <h2 class="font-bold">Post Title</h2>
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
    Inclass: { type: Array },
  },
};
</script>

<style lang="scss" scoped>

</style>

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
  @apply h-10 font-light overflow-ellipsis;
}
p::-webkit-scrollbar {
  width: 10px;
  border: 2px solid rgb(117, 117, 117);
  margin-left: 10px;
  @apply rounded-xl;
}
p::-webkit-scrollbar-thumb{
  @apply bg-neutral-400 rounded-xl;
}
p::-webkit-scrollbar-track{
  @apply border;
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
  display: flex;
  flex-direction: column;
  @apply border border-neutral-600;
}
#post-body {
  background-color: #242424;
  text-align: left;
  height: 100%;
  margin-top: -5px;
}
</style>

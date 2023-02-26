<template>
  <div id="sbar">
    <div id="search">
      <label>Search</label>
      <div id="search-bar" class="flex justify-center my-3">
        <input
          type="search"
          id="sh-text"
          class="border border-r-0 border-neutral-500 outline-none px-3"
        />
        <input
          type="submit"
          value="Go!"
          class="bg-neutral-600 p-2 cursor-pointer border border-l-0 border-neutral-500"
        />
      </div>
    </div>
    <div id="categories">
      <label>Categories</label>
      <div id="categories-bar" class="flex justify-center items-stretch p-2">
        <a href="#">Html</a>
        <a href="#">Css</a>
        <a href="#">Js</a>
        <a href="#">Fornt-end</a>
      </div>
    </div>

    <div id="Side-Widget">
      <label>Side Widget</label>
      <div id="SideWidget-bar" class="m-3 text-gray-300">
        <p>This is a widget tab for show the widgets for you.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  @apply mx-3;
}

label {
  @apply w-full bg-slate-400 py-1 text-lg font-thin;
  display: block;
  position: relative;
  background-color: rgba(92, 92, 92, 0.833);
  margin-bottom: 15px;
  padding-left: 10px;
}

#sbar {
  float: right;
  width: 30%;
  position: absolute;
  right: 5%;
  top: 28.2%;
}

#search {
  @apply w-full;
  border: 1px darkgray solid;
  background-color: rgb(46, 46, 46);
  text-align: left;
  margin: 20px;
  margin-top: 0px;
}

#categories {
  @apply w-full;
  border: 1px darkgray solid;
  background-color: rgb(46, 46, 46);
  text-align: left;
  margin: 20px;
  margin-top: 0px;
}

#Side-Widget {
  @apply w-full;
  border: 1px darkgray solid;
  background-color: rgb(46, 46, 46);
  text-align: left;
  margin: 20px;
  margin-top: 0px;
}
</style>

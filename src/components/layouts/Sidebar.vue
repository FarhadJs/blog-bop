<template>
  <div id="sbar">
    <div id="search">
      <label>Search</label>
      <div id="search-bar">
        <input type="search" id="sh-text" />
        <input
          type="submit"
          value="Go!"
          style="
            border: none;
            border-radius: 0 0 0 0;
            height: 35px;
            cursor: pointer;
            border: 1px solid gray;
          "
        />
      </div>
    </div>
    <div id="categories">
      <label>Categories</label>
      <div id="categories-bar">
        <a href="#">Html</a>
        <a href="#">Css</a>
        <a href="#">Js</a>
        <a href="#">Fornt-end</a>
      </div>
    </div>

    <div id="Side-Widget">
      <label>Side Widget</label>
      <div id="SideWidget-bar">
        <p>This is a widget tab for show the widgets for you.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  display: block;
  width: 97%;
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
}

#search {
  border: 1px darkgray solid;
  background-color: rgb(46, 46, 46);
  text-align: left;
  margin: 20px;
  margin-top: 0px;
}
#search-bar {
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
}
#sh-text {
  outline: none;
  border: 1px solid gray;
  border-radius: 0 0 0 0;
  font-size: 18px;
  font-style: normal;
  padding: 5px;
}

#categories {
  border: 1px darkgray solid;
  background-color: rgb(46, 46, 46);
  bottom: 190px;
  text-align: left;
  margin: 20px;
}
#categories-bar {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
}
#categories-text {
  outline: none;
  border: none;
  border-radius: 0 0 0 0;
  font-size: 20px;
}

#Side-Widget {
  border: 1px darkgray solid;
  background-color: rgb(46, 46, 46);
  text-align: left;
  margin: 20px;
}
#SideWidget-bar {
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>

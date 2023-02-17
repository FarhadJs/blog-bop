<template>
  <PageNumber />
  <footer>This site made whith ♥ and this site has Open Sourse Lisence.</footer>
</template>

<script>
import PageNumber from "../PageNumber.vue";

export default {
  components: { PageNumber },
};
</script>

<style scoped>
footer {
  background-color: black;
  padding: 20px;
}
</style>

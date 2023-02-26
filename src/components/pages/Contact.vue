<template>
  <div>
    <h2 class="text-xl mt-20">Contact Page</h2>
    <br>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>

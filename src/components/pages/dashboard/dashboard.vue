<template>
  <div class="my-10">
    <h1 class="text-2xl">Dashboard Page</h1>

    <router-link to="/dashboard/users">Users</router-link>
    <router-link to="/dashboard/groups">Groups </router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style></style>

<template>
  <div id="app">
<!--    <IndexPage/>-->
    <PersonalPage/>
  </div>
</template>

<script>
// import IndexPage from "@/components/index/IndexPage";

import PersonalPage from "@/components/personal/PersonalPage";
export default {
  name: 'App',
  components: {
    PersonalPage,
    // IndexPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

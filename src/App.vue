<template>
  <div id="app">
    <e-header id="Header" />
    <router-view />
    <e-footer id="Footer" />
  </div>
</template>
<script>
import eHeader from "@/components/header.vue";
import eFooter from "@/components/footer.vue";
export default {
  components: { eHeader, eFooter },
};
</script>
<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: HPSimplifiedHansLight, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

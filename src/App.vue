<template>
  <div id="app">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <router-view />
    <e-footer />
  </div>
</template>
<script>
import eFooter from "@/components/footer.vue";
export default {
  components: { eFooter },
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  .logo {
    text-align: left;
    width: 200px;
    padding: 30px 40px;
    position: fixed;
    top: 0;
    left: 0;
    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <Navbar></Navbar>
  <div id="body">
    <router-view />
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
#body {
  padding-bottom: 9rem;
}
</style>

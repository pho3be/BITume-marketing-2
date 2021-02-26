<template>
  <div id="app">
<!--    <img alt="BITume logo" src="./assets/BITume-logo.png">-->
    <TopMenu/>
    <HomeLanding/>
    <Footer/>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import Footer from './components/Footer.vue'
import HomeLanding from './components/HomeLanding.vue'

export default {
  name: 'App',
  components: {
    Footer,
    HomeLanding,
    TopMenu
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>

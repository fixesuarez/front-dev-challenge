<template>
  <div id="app">
    <IntroBlock />
    <section class="app__block app__block--illustration">
      <img
        alt="beauty-products"
        src="./assets/beauty-products.jpg"
        class="block__illustration">
    </section>
    <SearchSkinCare />
  </div>
</template>

<script>
import SearchSkinCare from './components/SearchSkinCare'
import IntroBlock from './components/IntroBlock'

export default {
  name: 'app',
  components: {
    SearchSkinCare,
    IntroBlock
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100vh;
  background-color: #DB0992;;
}
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.app__block {
  width: 50%;
  height: 50vh;
}
.block__illustration {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 750px){
  .app__block {
    width: 100%;
    height: 40vh;
  }
}
</style>

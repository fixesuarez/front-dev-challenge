<template>
  <section class="app__block app__block-intro">
    <p class="block-intro__text">This is a page for</p>
    <p class="block-intro__text">beauty product search</p>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.app__block-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #55D7FF;
}
.block-intro__text {
  margin: 0;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
}

@media screen and (max-width: 750px){
  .block-intro__text {
    font-size: 1em;
  }
}
</style>

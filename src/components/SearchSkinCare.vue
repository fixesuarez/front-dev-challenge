<template>
  <section class="app__block app__block-search">
    <form
      class="skin-care-form"
      @submit.prevent="searchSkinCare()">
      <input
        type="text"
        v-model="skinCareInput"
        class="skincare-form__input">
      <button class="skincare-form__button">Search</button>
    </form>
    <p
      v-if="displayEmptyResult"
      class="empty-result-text">
      We have no product matching your research
    </p>
    <ul class="product-list">
      <li
        v-for="(product, index) in productResults"
        :key="index"
        class="product-item">
        <span class="product-item__brand">{{ product.brand }} - </span>
        <span class="product-item__name">{{product.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
const PRODUCT_URL = 'https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com/product?q='

export default {
  data: () => ({
    skinCareInput: '',
    firstResearchDone: false,
    productResults: []
  }),
  computed: {
    displayEmptyResult () {
      return this.firstResearchDone && this.productResults.length === 0
    }
  },
  methods: {
    searchSkinCare () {
      this.$http.get(`${PRODUCT_URL}${this.skinCareInput}`).then(products => {
        this.productResults = products.body
        this.firstResearchDone = true
      }, () => {
        alert('Une errerur s\'est produite lors de la récupération des données')
      })
    }
  }
}
</script>

<style scoped>
.app__block-search {
  width: 100%;
  height: auto;
  padding: 0 25%;
  min-height: 50vh;
  background-color: #DB0992;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.skin-care-form {
  margin: 40px 0;
  display: flex;
}
.skincare-form__input {
  padding: 5px 10px;
  flex: 1;
  border-radius: 4px;
  border: none;
  outline: none;
  border: 1px solid #7c7c7c;
}
.skincare-form__button {
  margin-left: 20px;
  padding: 5px 15px;
  background-color: #55D7FF;
  border-radius: 4px;
  border: 1px solid #7c7c7c;
  outline: none;
  cursor: pointer;
}

.empty-result-text {
  color: white;
  margin: 0;
}

.product-list {
  margin: 0;
  padding: 0 0 0 20px;
}
.product-item {
  color: white;
}
.product-item__brand {
  font-weight: bold;
}

@media screen and (max-width: 750px) {
  .app__block-search {
    padding: 20px;
    min-height: unset;
  }
  .skin-care-form {
    margin: 0 0 20px 0;
  }
}
</style>

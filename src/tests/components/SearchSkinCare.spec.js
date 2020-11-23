import SearchSkinCare from '../../components/SearchSkinCare.vue'
import { shallowMount  } from '@vue/test-utils'

describe('SearchComponent', () => {
  it('Should not display empty result when mounted', () => {
    const wrapper = shallowMount (SearchSkinCare)
    expect(wrapper.find('p.empty-result-text').exists()).toBe(false)
  })
  it('Should have empty list when mounted', () => {
    const wrapper = shallowMount (SearchSkinCare)
    expect(wrapper.find('ul.product-list').exists()).toBe(true)
    expect(wrapper.find('li.product-item').exists()).toBe(false)
  })

  // it('Input is binded to data', async () => {
  //   const wrapper = shallowMount (SearchSkinCare)
  //   const textInput = wrapper.find('input')
  //   expect(textInput.element.value).toBe('')

  //   await wrapper.setData({ skinCareInput: 'Hello' })
  //   expect(textInput.element.value).toBe('Hello')
  // })

  it('has items in list when data is set', () => {
    const wrapper = shallowMount (SearchSkinCare, {
      data () {
        return {
          productResults: PRODUCTS_MOCK
        }
      }
    })
    expect(wrapper.findAll('.product-item').length).toBe(4)
  })
  it('has correct text in list items', () => {
    const wrapper = shallowMount (SearchSkinCare, {
      data () {
        return { productResults: PRODUCTS_MOCK }
      }
    })

    const listItems = wrapper.findAll('.product-item')

    expect(listItems.at(0).find('.product-item__brand').text()).toBe('tatcha -')
    expect(listItems.at(0).find('.product-item__name').text()).toBe('gold camellia beauty oil')

    expect(listItems.at(1).find('.product-item__brand').text()).toBe('tatcha -')
    expect(listItems.at(1).find('.product-item__name').text()).toBe('gold camellia beauty oil')

    expect(listItems.at(2).find('.product-item__brand').text()).toBe('aid beauty -')
    expect(listItems.at(2).find('.product-item__name').text()).toBe('ultra repair cream')

    expect(listItems.at(3).find('.product-item__brand').text()).toBe('aid beauty -')
    expect(listItems.at(3).find('.product-item__name').text()).toBe('ultra repair face moisturizer')
  })
})

const PRODUCTS_MOCK = [{
  id: 929,
  brand: "tatcha",
  name: "gold camellia beauty oil",
  ingredient_list: ["caprylic/capric triglyceride","ethylhexyl palmitate","squalane (olive origin)","camellia japonica seed oil","fragrance (natural)","polyglyceryl-10 pentaisostearate","dimer dilinoleyl dimer dilinoleate","phytosteryl macadamiate (macadamia)","oryza sativa (rice) germ oil","water","tocopherol","stearyl glycyrrhetinate (licorice)","oryzanol (rice bran oil extract)","inositol (rice extract)","camellia sinensis (green tea) leaf extract","alcohol","glycerin","algae extract","gold","phenoxyethanol"]
}, {
    id: 1616,
  brand: "tatcha",
  name: "gold camellia beauty oil",
  ingredient_list: ["caprylic/capric triglyceride","ethylhexyl palmitate","squalane (olive origin)","camellia japonica seed oil","fragrance (natural)","polyglyceryl-10 pentaisostearate","dimer dilinoleyl dimer dilinoleate","phytosteryl macadamiate (macadamia)","oryza sativa (rice) germ oil","water","tocopherol","stearyl glycyrrhetinate (licorice)","oryzanol (rice bran oil extract)","inositol (rice extract)","camellia sinensis (green tea) leaf extract","alcohol","glycerin","algae extract","gold","phenoxyethanol"]
}, {
    id: 1666,
  brand: "aid beauty",
  name: "ultra repair cream",
  ingredient_list: ["stearic acid","glycerin","c12-15 alkyl benzoate","caprylic/capric triglyceride","glyceryl stearate se","glyceryl stearate","cetearyl alcohol","butyrospermum parkii butter","dimethicone","squalane","allantoin","camellia sinensis leaf extract","caprylyl glycol","ceramide 3","chrysanthemum parthenium extract","colloidal oatmeal","disodium edta","eucalyptus globulus leaf oil","glycyrrhiza glabra root extract","sodium hydroxide","xanthan gum","phenoxyethanol."]
}, {
    id: 1670,
  brand: "aid beauty",
  name: "ultra repair face moisturizer",
  ingredient_list: ["glyceryl stearate se","glycerin","caprylic/capric triglyceride","colloidal oatmeal","urea","squalane","dimethicone","cetyl alcohol","cetearyl alcohol","caprylyl glycol","phenoxyethanol","allantoin","butyrospermum parkii (shea) butter","limnanthes alba (meadowfoam) seed oil","persea gratissima (avocado) oil","carbomer","sodium hydroxide","camellia sinensis (white tea) leaf extract","chrysanthemum parthenium (feverfew) extract","glycyrrhiza glabra (licorice) root extract","ceramide 3."]
}]

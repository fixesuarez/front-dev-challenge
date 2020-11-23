import App from '../App.vue'
import SearchSkinCare from '../components/SearchSkinCare.vue'
import IntroBlock from '../components/IntroBlock.vue'
import { mount } from '@vue/test-utils'

describe('AppComponent', () => {
  it("Should have IntroBlock component", () => {
    const wrapper = mount(App)
    const introBlockWrapper = wrapper.findComponent(IntroBlock)
    expect(introBlockWrapper.exists()).toBe(true)
  })

  it("Should have search component", () => {
    const wrapper = mount(App)
    const searchWrapper = wrapper.findComponent(SearchSkinCare)
    expect(searchWrapper.exists()).toBe(true)
  })
})

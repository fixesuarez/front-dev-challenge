import IntroBlock from '../../components/IntroBlock.vue'
import { shallowMount } from '@vue/test-utils'

describe('SearchComponent', () => {
  it("Should have first sentence", () => {
    const wrapper = shallowMount(IntroBlock)
    expect(wrapper.find('p:nth-child(1)').text()).toBe(`This is a page for`)
  })

  it("Should have second sentence", () => {
    const wrapper = shallowMount(IntroBlock)
    expect(wrapper.find('p:nth-child(2)').text()).toBe(`beauty product search`)
  })
})

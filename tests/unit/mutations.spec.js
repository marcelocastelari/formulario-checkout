import { mount } from '@vue/test-utils'
import { teste } from '@/store/index'

describe('values change on mutations', () => {
  it('validade', async ()  => {
    
    const wrapper = mount(teste,  {
        data() { 
            return {
                count: 0,
            }
        }
    })
    await wrapper.setData({ count: 5 })
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.count).toEqual(5)
  })
})
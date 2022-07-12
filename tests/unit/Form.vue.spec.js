import { mount, shallowMount } from '@vue/test-utils'
import FormPage from '@/components/FormPage.vue'

describe('Mounted FormPage', () => {
    const wrapper = mount(FormPage);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('has a button', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('update data value when react value is changed', async () => {
        const wrapper = mount(FormPage, {
            data() { 
                return {
                    react: 0,
                }
            }
        })
        await wrapper.setData({ react: 2 })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.react).toEqual(2)
    })

    it('update data value when vue value is changed', async () => {
        const wrapper = mount(FormPage, {
            data() { 
                return {
                    vue: 0,
                }
            }
        })
        await wrapper.setData({ vue: 5 })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.vue).toEqual(5)
    })

    it('update data value when angular value is changed', async () => {
        const wrapper = mount(FormPage, {
            data() { 
                return {
                    angular: 0,
                }
            }
        })
        await wrapper.setData({ angular: 10 })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.angular).toEqual(10)
    })
})




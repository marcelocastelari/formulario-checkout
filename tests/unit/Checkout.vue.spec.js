import { mount, shallowMount } from '@vue/test-utils'
import CheckOut from '@/components/CheckOutPage.vue'
import { createStore } from 'vuex'

describe("Iniciando testes unitários", () => {
    it('has data', () => {
        expect(typeof CheckOut.data).toBe('function')
    }) 
})
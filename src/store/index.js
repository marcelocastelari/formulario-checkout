import Vue from "vue";
import { createStore } from 'vuex'

export const teste = {
  teste: state => state.count = 0
}

export default createStore({
  state: {
      react: 0,
      vue: 0,
      angular: 0,
      observacoes: "",
  },
  getters: {
  },
  mutations: {
   getReact  (state, payload) {
      state.react = payload;
    },
    getVue(state, payload) {
      state.vue = payload;
    },
    getAngular(state, payload) {
      state.angular = payload;
    },
    getObs(state, payload) {
      state.observacoes = payload;
    }
    
  },
  actions: {
    getItens(context, payload) {
      context.commit("STORE", payload);
    }
  },
  modules: {
  },

})


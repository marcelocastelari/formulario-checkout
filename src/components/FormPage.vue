<template>
  
  <div class="reative w-96 lg:w-2/3 mx-auto bg-gray-200 rounded h-auto shadow-xl">  

      <div class="flex justify-center">
        <h1 class="text-black font-semibold mt-6">Formulário para compra de Adesivos</h1>
      </div>

      <h2 class="text-slate-900 mt-10 font-semibold">Escolha os adesivos:</h2>
      
      <!-- Cards Container -->
      <div class="flex flex-col lg:flex-row justify-center w-full">
        <div class="flex flex-col bg-white rounded-lg shadow-lg w-80 m-6 h-auto h-1/5">
          <label for="" class="text-center text-stone-700 italic">React</label>
          <img src="../assets/images/react.png" alt="" class="h-48 m-8 mx-auto md:h-32">
          <div class="flex place-content-around bg-gray-200">
                <span class="p-2">Selecione a Quantidade:</span>
                <input type="number" class="bg-gray-200 w-10 outline-0" min="0" v-model="react" />
          </div>
          <a href="#" class="bg-blue-500 text-white p-3 text-center" @click="ObtemQuantidadeReact()">Adicionar</a>
        </div>
        <div class="flex flex-col bg-white rounded-lg shadow-md w-80 m-6 h-auto md:h-1/5">
          <label for="" class="text-center text-stone-700 italic">Vue</label>
          <img src="../assets/images/vue.png" alt="" class="h-48 m-8 mx-auto md:h-32">
          <div class="flex place-content-around bg-gray-200">
                <span class="p-2">Selecione a Quantidade:</span>
                <input type="number" class="bg-gray-200 w-10 outline-0"  min="0" v-model="vue" />
          </div>
          <a href="#" class="bg-blue-500 text-white p-3 text-center" @click="ObtemQuantidadeVue()">Adicionar</a>
        </div>
        <div class="flex flex-col bg-white rounded-lg shadow-md w-80 m-6 h-auto md:h-1/5">
          <label for="" class="text-center text-stone-700 italic">Angular</label>
          <img src="../assets/images/angular.png" alt="" class="h-48 m-8 mx-auto md:h-32">
          <div class="flex place-content-around bg-gray-200">
                <span class="p-2">Selecione a Quantidade:</span>
                <input type="number" class="bg-gray-200 w-10 outline-0"  min="0" v-model="angular" />
          </div>
          <a href="#" class="bg-blue-500 text-white p-3 text-center" @click="ObtemQuantidadeAngular()">Adicionar</a>
        </div>
      </div>
      <div class="flex w-full justify-center">
        <h2 class="font-bold flex justify-start w-5/6" for="">Observações:</h2>  
      </div>
      <div class="mb-8 flex justify-center w-full">
        <div></div>
        <textarea class="outline-0 w-5/6 flex h-56 p-3 rounded h-20 "  placeholder="Escreva suas obervações..." v-model="observacoes"></textarea>
        <div></div>
      </div>  

      <div class="bg-gray-300 h-20 rounded">
   
           <router-link to="Checkout">
            <button class="mt-5 bg-green-500 hover:bg-green-700 hover:border-0 w-48 h-12 text-white p-1 rounded mb-5">Continuar</button>
           </router-link>
        
      </div>
      
    </div>
</template>

<style>
  .opacity-enter-active {
    transition: opacity 0.5s ease;
  }

  .opacity-leave-active {
    transition: opacity 0.5s ease;
  }

  .opacity-enter-from{
    opacity: 0;
  }

  .opacity-leave-to {
    opacity: 0;
  }
</style>

<script>
  

import ModalPage from './CheckOutPage.vue';

export default {
    data() {
        return {
            counter: 0,
            react: 0,
            vue: 0,
            angular: 0,
            observacoes: "",
            isModalOpen: false,
            validaItems: false
        };
    },

  computed: {
    react: {
      get() {
        return this.$store.state.react
      },
      set(value) {
        this.$store.commit("getReact", value);
      }
    },
    vue: {
      get() {
        return this.$store.state.vue;
      },
      set(value) {
        this.$store.commit("getVue", value);
      }
    },
    angular: {
      get() {
        return this.$store.state.angular;
      },
      set(value) {
        this.$store.commit("getAngular", value);
      }
    },
    observacoes: {
      get() {
        return this.$store.state.observacoes
      },
      set(value) {
        this.$store.commit("getObs", value);
      }
    },
  },

    methods: {
        ObtemQuantidadeReact() {
            console.log(this.react);
        },
        ObtemQuantidadeVue() {
            console.log(this.vue);
        },
        ObtemQuantidadeAngular() {
            console.log(this.angular);
        },
        VerificaItems() {
          if(this.$store.state.react > 0 || this.$store.state.vue > 0 || this.$store.state.angular > 0) {
                this.validaItems = true;
            }
        }
    },    
      components: { ModalPage },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

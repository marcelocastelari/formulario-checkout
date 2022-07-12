<template>
    <Transition name="opacity">
      <ModalFinalizado v-if="isModalOpen" @closeModal="fecharModal" />
    </Transition>
    <div class="lg:w-2/3 md:w-1/2 sm:w-96 mx-auto h-auto flex">
        <div class="
        bg-white
        w-screen
        flex flex-col
        mx-auto
        rounded-lg
        items-center
        p-4
        overflow-auto
      ">
            <div class="border rounded w-full h-full">
                <div class="p-2 bg-blue-500 text-white font-semibold rounded-tl rounded-tr">
                    Checkout
                </div>

                <table class="w-full mt-5">
                    <tr class="border border-collapse">
                        <th class="border-b-2 bg-gray-100 w-3/6">Item:</th>
                        <th class="border-b-2 bg-gray-100 w-3/6">Quantidade:</th>
                    </tr>
                    <tr class="border border-collapse" v-if="this.$store.state.react">
                        <td class="border p-2 border-collapse w-3/6">React</td>
                        <td class="border p-2 border-collapse w-3/6">{{ this.$store.state.react }}</td>
                    </tr>
                    <tr class="border border-collapse" v-if="this.$store.state.vue">
                        <td class="border p-2 border-collapse w-3/6">Vue</td>
                        <td class="border p-2 border-collapse w-3/6">{{ this.$store.state.vue }}</td>
                    </tr>
                    <tr class="border border-collapse" v-if="this.$store.state.angular">
                        <td class="border p-2 border-collapse w-3/6">Angular</td>
                        <td class="border p-2 border-collapse w-3/6">{{ this.$store.state.angular }}</td>
                    </tr>
                    <tr class="border border-collapse w-full">
                        <th class="border-b-2 bg-gray-100">Observações:</th>
                        <td>{{ this.$store.state.observacoes }}</td>
                    </tr>
                </table>

                <div class="p-5 flex justify-center gap-2">
                    <span class="font-bold">Selecione a forma de pagamento desejada:</span>
                </div>
                <div>
                    <TabNav class="w-11/12 lg:w-full mx-auto mb-5" :tabList="tabList" variant="vertical">
                        <template v-slot:tabPanel-1>
                            <div class="">
                                <span class="">Preecha os dados do cartão: </span>
                            </div>
                            <div class="mx-auto w-3/4 ">
                                <div class="flex flex-col lg:flex-row lg:ml-5">
                                    <div class="mt-5 items-center">
                                        <span class="flex">Número:</span>
                                        <input
                                            class="w-full bg-gray-200 p-2 rounded outline-0 flex placeholder:justify-center"
                                            type="text" placeholder="**** **** **** ****">
                                    </div>
                                    <div class=" lg:ml-5 mt-5 items-center">
                                        <span class="flex">Nome do Titular:</span>
                                        <input class="flex lg:w-80 bg-gray-200 p-2 rounded outline-0" type="text"
                                            placeholder="Nome Sobrenome">
                                    </div>
                                    <div class=" lg:ml-5 mt-5 items-center">
                                        <span class="flex">CPF:</span>
                                        <input class="flex w-full bg-gray-200 p-2 rounded outline-0" type="number"
                                            placeholder="xxx xxx xxx xx">
                                    </div>
                                </div>
                                <div class="flex flex-col lg:flex-row lg:ml-5 lg:w-full lg:space-x-4 mt-5 lg:items-center">
                                    <div>
                                        <span class="flex">Validade:</span>
                                        <div class="flex">
                                            <input class="flex w-16 bg-gray-200 text-gray-400 p-2 rounded outline-0"
                                                type="number" placeholder="07">
                                            <input class="flex ml-5 w-20 bg-gray-200 text-gray-400 p-2 rounded outline-0"
                                                type="number" placeholder="2022">
                                        </div>
                                    </div>
                                    <div>
                                        <span class="flex lg:ml-12 mt-5 lg:mt-0">CVV:</span>
                                        <input class="flex lg:ml-12 w-16 bg-gray-200 text-gray-400 p-2 rounded outline-0"
                                            type="number" placeholder="123">
    
                                    </div>
                                </div>
                            </div>

                        </template>
                        <template v-slot:tabPanel-2> 
                            <span>Dados do Boleto</span> 
                            <div id="toPrint" class="flex justify-center mx-auto">
                                <input class=" mt-3 w-2/4 bg-gray-200 p-2 rounded outline-0" type="text" v-on:focus="$event.target.select()" ref="clone" :value="value" readonly>
                            </div>
                            <div class="flex justify-center">
                                <button class="
                                mt-3 
                                transition-all
                                w-32
                                h-8
                                rounded
                                text-white
                                bg-green-500
                                mt-4
                                hover:bg-green-700" 
                                @click="copy"
                                type="submit">Copiar</button>
                                <button class="
                                mt-3 
                                ml-5
                                transition-all
                                w-32
                                h-8
                                rounded
                                text-white
                                bg-yellow-500
                                hover:bg-green-700" 
                                @click="print()"
                                type="submit">Imprimir</button>

                            </div>
                        </template>
                        <template v-slot:tabPanel-3>
                            <span>Escaneie o QRCode:</span>
                            <img src="../assets/images/qrcode.png" alt="" class="mx-auto w-1/5 h-1/5 mb-5">
                            <span>Pix copia e cola:</span> 
                            <div class="flex justify-center mx-auto">
                                <input class=" mt-3 w-2/4 bg-gray-200 p-2 rounded outline-0" type="text"  v-on:focus="$event.target.select()" ref="clone" :value="value" readonly>
                                <button class="
                                mt-3
                                ml-3
                                transition-all
                                w-32
                                h-10
                                rounded
                                text-white
                                bg-green-500
                                hover:bg-green-700" 
                                @click="copy"
                                type="submit">Copiar</button>
                            </div>
                                                          
                        </template>
                    </TabNav>
                </div>
                <div class="flex flex-col lg:flex-row lg:justify-center items-center mb-5">

                    <button @click="abrirModal()" class="
                items-center
                transition-all
                w-52
                h-12
                lg:flex
                justify-center
                rounded
                text-white
                bg-green-500
                mt-4
                hover:bg-green-700
                ">
                        Finalizar Compra
                    </button>
                    <router-link to="/">
                    <button class="
                items-center
                transition-all
                w-52
                h-12
                lg:flex
                justify-center
                rounded
                text-white
                bg-red-500
                mt-4
                lg:ml-5
                hover:bg-red-700
                ">
                        Cancelar
                    </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TabNav from './TabNav.vue';

import jspdf from 'jspdf'
import { doc } from 'prettier';
import ModalFinalizado from './ModalFinalizado.vue';
import store from '@/store';

export default {

    data() {
        return {
            tabList: ["Cartão de Crédito", "Boleto", "Pix"],
            value: "00001 00002 00003 000004 00000 000000 1 00000000000",
            isModalOpen: false
        };
    },

    methods: {
        copy() {
            this.$refs.clone.focus();
            document.execCommand('copy');
        },
        print() {
            let page = document.getElementById('toPrint').innerHTML;
            window.print();
        },
        limpaItems() {
            this.$store.state.react = 0;
            this.$store.state.vue = 0;
            this.$store.state.angular = 0;
        },
        fecharModal() {
            this.isModalOpen = false;
        },
        abrirModal() {
            if(this.$store.state.react > 0 || this.$store.state.vue > 0 || this.$store.state.angular > 0) {
                this.isModalOpen = true;
            } else {
                alert('Adicione pelo menos um item para finalizar a compra!')
            }
            
        }

    },

    components: {
    TabNav,
    ModalFinalizado
}
};
</script>

<style>
</style>
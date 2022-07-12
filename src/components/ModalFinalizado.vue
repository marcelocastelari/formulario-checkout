<template>
    <div class="w-full h-full fixed flex">
        <div class="
        bg-white
        w-3/4
        h-3/4
        flex flex-col
        justify-center
        mx-auto
        rounded-lg
        items-center
        p-4
      ">
            <span class="font-bold text-4xl">Compra finalizada com sucesso!</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="green" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>

            <div class="">
                <router-link to="/">
                    <button @click="limpaItems()" class="
                    items-center
                    transition-all
                    w-40
                    h-10
                    flex
                    justify-center
                    rounded
                    text-white
                    bg-red-500
                    mt-4
                    hover:bg-red-700
                    ">
                        Fechar
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            limpaItems() {
                this.$store.state.react = 0;
                this.$store.state.vue = 0;
                this.$store.state.angular = 0;
                this.$store.state.observacoes = "";
            },
        }
    }
</script>
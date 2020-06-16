<template>
  <v-app>


    <v-main>
        <v-container>
        <v-tabs>
            <v-tab to="/order">Старт</v-tab>
            <v-tab to="/report">Отчеты</v-tab>
            <v-tab>Тикет</v-tab>
        </v-tabs>
            <transition name="fade">
        <router-view />
            </transition>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';


export default {
  name: 'App',

  components: {
  //  HelloWorld,

  },

  data: () => ({
    mes1:'Выберите услугу'
  }),
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
    transition: scale .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}

</style>
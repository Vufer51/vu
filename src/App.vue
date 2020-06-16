<template>
  <v-app>


    <v-main>
        <v-container>
        <v-tabs>
            <v-tab to="/order">Старт</v-tab>
            <v-tab to="/hw">Отчеты</v-tab>
            <v-tab>Тикет</v-tab>
        </v-tabs>
        <router-view />
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

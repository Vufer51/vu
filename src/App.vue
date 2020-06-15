<template>
  <v-app>


    <v-content>
      <Order></Order>

    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Order from './components/order';

export default {
  name: 'App',

  components: {
  //  HelloWorld,
    Order,
  },

  data: () => ({
    mes1:'Выберите услугу'
  }),
};
</script>

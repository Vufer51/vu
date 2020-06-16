import Vue from 'vue';
import VueRouter from 'vue-router';

import Order from './components/order';
import HW from './components/HelloWorld'

Vue.use(VueRouter);

let routes = [
    { name: 'order', path: '/order', component: Order},
    { name: 'hello', path: '/hw', component: HW},
];

export default new VueRouter({
    routes
});
import Vue from 'vue';
import VueRouter from 'vue-router';

import Order from './components/order';
import Report from './components/report'


Vue.use(VueRouter);

let routes = [
    { name: 'order', path: '/order', component: Order},
    { name: 'report', path: '/report', component: Report},
];

export default new VueRouter({
    routes
});
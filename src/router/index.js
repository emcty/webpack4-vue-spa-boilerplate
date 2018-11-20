import Vue from 'vue';
import Router from 'vue-router';

import aboutUs from '../views/aboutUS/App.vue';
import accRentIncome from '../views/accRentIncome/App.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: aboutUs
      },
      {
        path: '/accRentIncome',
        name: 'accRentIncome',
        component: accRentIncome
      }
    ]
});



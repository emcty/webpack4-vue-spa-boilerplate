import Vue from 'vue';
import Router from 'vue-router';


import accRentIncome from '../views/accRentIncome/App.vue';
import helpCenter from '../views/helpCenter/helpCenter.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/accRentIncome',
        name: 'accRentIncome',
        component: accRentIncome
      },
      {
        path: '/helpCenter',
        name: 'helpCenter',
        component: helpCenter
      }
    ]
});



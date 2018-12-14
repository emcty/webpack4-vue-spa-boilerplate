import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/accRentIncome',
        name: 'accRentIncome',
        component: ()=>import("../views/accRentIncome/App.vue")
      },
      {
        path: '/helpCenter',
        name: 'helpCenter',
        component: ()=>import("../views/helpCenter/helpCenter.vue")
      }
    ]
});

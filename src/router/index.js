import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: ()=>import("../views/home/App.vue")
      },
      {
        path: '/cssModule',
        name: 'cssModule',
        component: ()=>import("../views/cssModule/App.vue")
      },
      {
        path: '/helpCenter',
        name: 'helpCenter',
        component: ()=>import("../views/helpCenter/helpCenter.vue")
      }
    ]
});

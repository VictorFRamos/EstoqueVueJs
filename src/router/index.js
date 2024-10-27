import Vue from 'vue';
import Router from 'vue-router';
import Inventory from '../views/Inventory.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Inventory,
    }
  ]
});
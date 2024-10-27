import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Importando o Vue Router
import store from './store'; // Importando o Vuex

Vue.config.productionTip = false; // Desativa a mensagem de produção no console

new Vue({
  router, // Adiciona o Vue Router
  store, // Adiciona o Vuex
  render: h => h(App) // Renderiza o componente App
}).$mount('#app'); // Monta a aplicação no elemento com id "app"
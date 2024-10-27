import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [] // Estado inicial do estoque
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item); // Adiciona um item ao estoque
    },
    REMOVE_ITEM(state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId); // Remove um item do estoque
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item); // Ação para adicionar um item
    },
    removeItem({ commit }, itemId) {
      commit('REMOVE_ITEM', itemId); // Ação para remover um item
    }
  },
  getters: {
    getItems(state) {
      return state.items; // Retorna todos os itens do estoque
    }
  }
});
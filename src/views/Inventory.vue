<template>
  <div>
    <h1>Controle de Estoque</h1>
    <ItemForm @save="addItem" />
    <div v-for="item in items" :key="item.id">
      <Item :item="item" @remove="removeItem" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Item from './components/Item.vue';
import ItemForm from './components/ItemForm.vue';

export default {
  components: { Item, ItemForm },
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetchItems() {
      const response = await axios.get('http://localhost:5000/api/items');
      this.items = response.data;
    },
    async addItem(item) {
      await axios.post('http://localhost:5000/api/items', item);
      this.fetchItems(); // Atualiza a lista após adicionar um item
    },
    async removeItem(id) {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      this.fetchItems(); // Atualiza a lista após remover um item
    }
  },
  mounted() {
    this.fetchItems(); // Carrega os itens quando o componente é montado
  }
}
</script>
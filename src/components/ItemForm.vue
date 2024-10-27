<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nome do Item:</label>
        <input
          type="text"
          id="name"
          v-model="item.name"
          placeholder="Digite o nome do item"
          required
        />
      </div>
      <div>
        <label for="quantity">Quantidade:</label>
        <input
          type="number"
          id="quantity"
          v-model.number="item.quantity"
          placeholder="Digite a quantidade"
          required
        />
      </div>
      <button type="submit">Salvar Item</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        item: {
          name: '',
          quantity: 0,
        }
      };
    },
    methods: {
      submitForm() {
        // Emite um evento para o componente pai com os dados do item
        this.$emit('save', { ...this.item });
        
        // Limpa o formulário após o envio
        this.item.name = '';
        this.item.quantity = 0;
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 15px;
    padding: 8px;
  }
  
  button {
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #36a76c;
  }
  </style>
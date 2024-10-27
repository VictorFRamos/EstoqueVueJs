<template>
    <div class="home">
      <h1>Bem-vindo ao Controle de Estoque</h1>
      <p>Este aplicativo permite que você gerencie seus itens de estoque de forma simples e eficiente.</p>
      <router-link to="/inventory" class="btn">Ir para Controle de Estoque</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .btn:hover {
    background-color: #36a76c;
  }
  </style>
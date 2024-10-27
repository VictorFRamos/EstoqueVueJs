<template>
    <div id="app">
      <header>
        <h1>Controle de Estoque</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/inventory">Estoque</router-link>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
  
  header {
    background-color: #42b983;
    padding: 10px;
    color: white;
  }
  
  nav {
    margin-top: 10px;
  }
  
  nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  </style>
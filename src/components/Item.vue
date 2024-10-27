<template>
  <div>
    <h3>{{ item.name }}</h3>
    <p>Quantidade: {{ item.quantity }}</p>
    <button @click="removeItem">Remover</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    removeItem() {
      this.$emit('remove', this.item.id);
    }
  }
}
</script>
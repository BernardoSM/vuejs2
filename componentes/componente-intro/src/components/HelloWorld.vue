<template>
  <div id="app">
    <h1>Contadores</h1>
    <div class="number">{{ contador }}</div>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    adicionar() {
      this.contador++
    },
    subtrair() {
      this.contador--
    }
  }
}

</script>

<style scoped>
  .number {
    font-size: 20px;
  }

  button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: coral;
    outline: none;
    margin: 10px;
    border: none;
  }
</style>

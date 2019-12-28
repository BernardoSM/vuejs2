<template>
  <div id="app">
    <hello-world v-for="c in 5" :key="c"/>
    <app-contador></app-contador>
  </div>

</template>

<script>
//Registrando de forma local, esse componente app.vue está chamando outro componente
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    'hello-world': HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

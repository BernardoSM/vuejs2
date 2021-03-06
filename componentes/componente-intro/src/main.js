import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Registrando de forma global
import Contador from './components/HelloWorld.vue'
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')

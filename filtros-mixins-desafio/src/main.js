import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('lengthCount', function(text){
	return text.split(' ').map(p => `${p} (${p.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')

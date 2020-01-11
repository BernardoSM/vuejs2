<template>
	<div>
		<ul>
			<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
			<input type="text" v-model="fruta" @keydown.enter="add">
		</ul>
		<p>{{ global }}</p>
	</div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
	mixins: [frutasMixin, usuarioMixin],
	created() {
		console.log('Created - frutas.vue')
	}
}
</script>

<style>
	
</style>
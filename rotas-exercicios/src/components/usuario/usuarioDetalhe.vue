<template>
	<div class="usuario-detalhe">
		<h3>Usuário Detalhe</h3>
		<hr>
		<p><strong>Codigo:</strong>{{id}}</p>
		<!-- :to="`/usuario/${id}/editar`" -->
		<router-link tag="button" primario 
		:to="{ 
			name: 'editarUsuario', 
			params: { id },
			query: { completo: true, lingua: 'pt' },
			hash: '#rodape'
		 	}">
			Editar
		</router-link>
	</div>
</template>

<script>
	export default {
		props: ['id'],
		beforeRouteEnter(to, from, next){
			console.log('dentro do component -> usuario detalhe')
			// next(vm => {
			// 	console.log(vm.id)
			// })

			const autenticado = true

			autenticado ? next() : next(false)
		}
	}
</script>

<style>
	
</style>
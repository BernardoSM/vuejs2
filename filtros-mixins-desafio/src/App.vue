<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p> Desafio 1 - {{str1 | botarVirgula}}</p>
		<p> Desafio 1 - {{str2 | lengthCount}}</p>
		<hr>
		<p> Desafio 1 - {{fraseComVirgulas}}</p>
		<p> Desafio 1 - {{fraseComTamanhos}}</p>
	</div>
</template>

<script>
import frasesMixin from './frasesMixin'

export default {
	mixins: [frasesMixin],
	filters: {
		botarVirgula(text){
			return text.split(' ').join(',')
		}
	},
	data() {
		return {
			str1: 'Texto do desafio 1',
			str2: 'Esse é o texto do desafio 2'
		}
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
	font-size: 2.5rem;
}
</style>

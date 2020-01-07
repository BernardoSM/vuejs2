<template>
	<div id="app">
		<h1>tasks</h1>
		<div class="tarefa-input">
			<input type="text" v-model="taskName" @keydown.enter="addTask">
			<button class="send" @click="addTask">Enviar</button>
		</div>
		<lista-tarefa :tasks="tasks" @taskDeleted="deleteTask"/>
	</div>
</template>

<script>
import ListaTarefa from './components/ListaTarefa'

export default {
	components: {
		ListaTarefa
	},
	data() {
		return {
			tasks: [
				{
					name: 'limpar coco',
					done: false
				},
				{
					name: 'fazer comida',
					done: true
				}
			],
			taskName: ''
		}
	},
	methods: {
		addTask() {
			this.tasks.push({name: this.taskName, done: false});
		},
		deleteTask(i){
			this.tasks.splice(i, 1)
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	.tarefa-input {
		width: 80%;
		position: relative;
		height: 50px;
		margin: 0 auto;
		margin-bottom: 50px;
	}

	.tarefa-input input {
		width: 100%;
		height: 50px;
		border: none;
		background: white;
		color: black;
		padding: 0;
	}

	.send {
		border: none;
		position: absolute;
		top: 0;
		right: 0;
		width: 80px;
		height: 50px;
		background: grey;
		color: black;
	}
</style>

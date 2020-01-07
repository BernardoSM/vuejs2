<template>
	<div class="block" :class="{green: task.done}">
		<button @click="$emit('taskDeleted', task)">X</button>
		<p class="name" @click="completeTask">
			{{ task.name }}
		</p>
	</div>
</template>

<script>

export default {
	props: {
		task: Object
	},
	methods: {
		completeTask() {
			this.task.done ? this.task.done = false : this.task.done = true;
		}
	}
}

</script>

<style scoped>
	.block {
		width: 200px;
		height: 100px;
		background: red;
		color: white;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px;
	}

	.block.green {
		background: green;
	}

	.name {
		cursor: pointer;
		font-size: 16px;
		font-weight: 600;
	}

	button {
		border: none;
		background: white;
		position: absolute;
		top: 0;
		right: 0;
		width: 20px;
		height: 20px;
		font-size: 16px;
		color: black;
	}
</style>
<template>
	<div class="tasks-content">
		<template v-if="tasks.length > 0">
			<Tarefa v-for="(task, i) in tasks" :key="task.name" :task="task" @taskDeleted="$emit('taskDeleted', i)">
			</Tarefa>
		</template>
		<template v-else>
			Sua vida está em dia =)
		</template>
	</div>
</template>

<script>
import Tarefa from './Tarefa'

export default {
	components: {
		Tarefa
	},
	props: {
		tasks: Array
	}
}

</script>

<style scoped>
	.tasks-content {
		width: 80%;
	    height: auto;
	    display: flex;
	    justify-content: center;
	    flex-wrap: wrap;
	}
</style>
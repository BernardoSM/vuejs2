<template>
	<div id="app">
		<project-navigation/>

		<project-toolbar/>

		<project-content/>

		<project-footer/>
	</div>
</template>

<script>
//Registrando de forma local, esse componente app.vue está chamando outro componente
import navigation from './components/navigation.vue'
import toolbar from './components/toolbar.vue'
import content from './components/content.vue'
import footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    'project-navigation': navigation,
    'project-toolbar': toolbar,
    'project-content': content,
    'project-footer': footer
  }
}
</script>

import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio'
//import Usuario from './components/usuario/usuario'
//import UsuarioLista from './components/usuario/usuarioLista'
//import UsuarioDetalhe from './components/usuario/usuarioDetalhe'
//import UsuarioEditar from './components/usuario/usuarioEditar'
import Menu from './components/template/menu'
import MenuAlt from './components/template/menuAlt'

Vue.use(Router)

const Usuario = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/usuario')
const UsuarioEditar = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/usuarioEditar')
const UsuarioLista = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/usuarioLista')
const UsuarioDetalhe = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/usuarioDetalhe')

const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		}else if(to.hash){
			return { selector: to.hash }
		}else{
			return { x: 0, u: 0}
		}
		
		//return { x: 0, y: 1000}
	},
	routes: [{
		path: '/',
		//component: Inicio,
		name: 'inicio',
		components: {
			default: Inicio,
			menu: Menu
		}
	}, {
		path: '/usuario',
		//component: Usuario,
		components: {
			default: Usuario,
			menu: MenuAlt,
			menuInferior: MenuAlt
		},
		props: true,
		children: [
			{ path: '', component: UsuarioLista },
			{ path: ':id', component: UsuarioDetalhe, props: true,
				beforeEnter: (to, from, next) => {
					console.log('antes da rota -> usuário detalhe')
					next()
				} },
			{ path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
		]
	}, {
		path: '*',
		redirect: '/'
	}]
})

router.beforeEach((to, from, next) => {
	console.log('antes das rotas -> global')
	next()
})

export default router
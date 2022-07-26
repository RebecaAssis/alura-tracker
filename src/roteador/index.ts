import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasView from '../views/TarefasView.vue';
import ProjetosView from '../views/ProjetosView.vue';

const rotas: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'TarefasView',
		component: TarefasView
	},
	{
		path: '/projetos',
		name: 'ProjetosView',
		component: ProjetosView
	}
];

const roteador = createRouter({
	history: createWebHashHistory(),
	routes: rotas
})

export default roteador;
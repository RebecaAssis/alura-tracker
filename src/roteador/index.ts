import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/TarefasView.vue'

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'TarefasView',
    component: Tarefas
}];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;
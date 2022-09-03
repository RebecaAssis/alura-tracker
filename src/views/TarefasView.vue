<template>
	<FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
	<div class="lista">
		<TarefaComponente v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
		<TaskBox v-if="listaEstaVazia">
			você não está muito produtivo hoje :(
		</TaskBox>
	</div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefa from '../components/FormularioTarefa.vue';
import TarefaComponente from '../components/TarefaComponente.vue';
import TaskInterface from '../interfaces/TaskInterface';
import TaskBox from '../components/TaskBox.vue';

export default defineComponent({
	name: "TarefasView",
	components: {
		FormularioTarefa,
		TarefaComponente,
		TaskBox
	},

	data() {
		return {
			tarefas: [] as TaskInterface[],

		}
	},

	computed: {
		listaEstaVazia(): boolean {
			return this.tarefas.length === 0;
		}
	},

	methods: {
		salvarTarefa(tarefa: TaskInterface) {
			this.tarefas.push(tarefa);
		}
	}
});
</script>
  
  <style>
  
  </style>
  
<template>
	<TaskBox>
		<div class="columns">
			<div class="column is-7">
				{{ tarefa.descricao || 'Tarefa sem descrição' }}
			</div>
			<div class="column">
				<CronometroTarefa :tempoEmSegundos="tarefa.duracaoEmSegundos" />
			</div>
		</div>
	</TaskBox>


</template>

<script lang="ts">
import TaskInterface from '@/interfaces/TaskInterface';
import { defineComponent, PropType } from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';
import TaskBox from './TaskBox.vue';

export default defineComponent({
	name: "TarefaComponente",
	components: { 
		CronometroTarefa, 
		TaskBox 
	},
	props: {
		tarefa: {
			type: Object as PropType<TaskInterface>,
			required: true
		}
	}
})
</script>

<style scoped>

</style>
<template>
	<div class="box has-text-weight-bold">
		<div class="columns">
			<div class="column is-7">
				Descrição da tarefa
			</div>
			<div class="column">
				<CronometroTarefa :tempoEmSegundos=15 />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';

export default defineComponent({
    name: "TarefaComponente",
	components: { CronometroTarefa },
})
</script>

<style scoped>
.box {
	background: #FAF0CA;
}
</style>
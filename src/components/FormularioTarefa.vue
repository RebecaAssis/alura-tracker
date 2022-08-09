<template>
	<div class="box">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Formulário para a criaação de uma nova tarefa">
				<input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?"
					v-model="descricaoDaTarefa">
			</div>
			<div class="column">
				<TemporizadorTarefa @aoTemporizadorFinalizado="finalizarTarefa" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorTarefa from "./TemporizadorTarefa.vue";

export default defineComponent({
	name: "FormularioTarefa",
	components: { TemporizadorTarefa },
	//data() é um método que retorna um estado pra a gente
	data() {
		return {
			descricaoDaTarefa: ''
		}
	},
	methods: {
		finalizarTarefa(tempoDecorrido: number): void {
			console.log(tempoDecorrido);
			console.log(this.descricaoDaTarefa);

			this.descricaoDaTarefa = '';
		}
	}
})
</script>

<style scoped>
</style>
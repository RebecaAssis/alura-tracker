<template>
	<div class="box">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Formulário para a criaação de uma nova tarefa">
				<input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
			</div>
			<div class="column">
				<div class="is-flex is-align-items-center is-justify-content-space-between">
					<section>
						<strong>{{ tempoDecorrido }}</strong>
					</section>
					<button class="button" @click="iniciar">
						<span class="icon">
							<i class="fas fa-play"></i>
						</span>
						<span>play</span>
					</button>
					<button class="button" @click="finalizar">
						<span class="icon">
							<i class="fas fa-stop"></i>
						</span>
						<span>stop</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'FormularioTarefa',
	data() {
		return {
			tempoEmSegundos: 0
		}
	},
	//computed property: monitora uma informação e, conforme ela é alterada, ele vai reagir e vai se
	//atualizar
	computed: {
		tempoDecorrido(): string {
			return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
		}
	},
	methods: {
		iniciar() {
			//começar a contagem
			//setInterval() recebe 2 params. o 1º é de fato o que queremos fazer e o 2º éo
			//intervalo de tempo que precisa ser calculado, em milisegundos, para que ele seja
			//executado novamente
			setInterval(() => {
				this.tempoEmSegundos += 1;
			}, 1000);

			console.log('iniciando');
		},
		finalizar() {
			console.log('finalizando');
		}
	}
})
</script>

<style scoped>
</style>
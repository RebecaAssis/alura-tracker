<template>
	<div class="is-flex is-align-items-center is-justify-content-space-between">
		<CronometroTarefa :tempoEmSegundos="tempoEmSegundos" />
		<ButtonDefault @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando"/>
		<ButtonDefault @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTarefa from "./CronometroTarefa.vue";
import ButtonDefault from "./ButtonDefault.vue";

export default defineComponent({
	name: "TemporizadorTarefa",
	emits: ['aoTemporizadorFinalizado'],
	components: { CronometroTarefa, ButtonDefault },
	data() {
		return {
			tempoEmSegundos: 0,
			cronometro: 0,
			cronometroRodando: false
		};
	},
	methods: {
		iniciar() {
			//começar a contagem
			//setInterval() recebe 2 params. o 1º é de fato o que queremos fazer e o 2º éo
			//intervalo de tempo que precisa ser calculado, em milisegundos, para que ele seja
			//executado novamente
			this.cronometroRodando = true;
			this.cronometro = setInterval(() => {
				this.tempoEmSegundos += 1;
			}, 1000);
		},
		finalizar() {
			this.cronometroRodando = false;
			clearInterval(this.cronometro);
			
			this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
			this.tempoEmSegundos = 0;
		}
	},
})
</script>

<style lang="scss" scoped>
</style>
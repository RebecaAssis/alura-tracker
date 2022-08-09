<template>
	<button class="button" @click="clicado" :disabled="desabilitado">
		<span class="icon">
			<i :class="icone"></i>
		</span>
	</button>
	<span>{{ texto }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ButtonDefault",
	
	emits: ['clicado'],

	props: {
		desabilitado: {
			type: Boolean
		},
		icone: {
			type: String,
			required: true
		},
		texto: {
			type: String,
			required: true
		}
	},

	methods: {
		clicado() : void {
			this.$emit('clicado');
		}
	}
});
</script>

<style lang="scss" scoped>
</style>
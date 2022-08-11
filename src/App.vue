<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioTarefa />
      <div class="lista">
        <TarefaComponente />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import TarefaComponente from './components/TarefaComponente.vue';

export default defineComponent({
    name: "App",
    components: { BarraLateral, FormularioTarefa, TarefaComponente }
});
</script>

<style>
.lista {
	padding: 1.25rem;
}
</style>

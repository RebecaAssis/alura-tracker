<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaComponente v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <TaskBox v-if="listaEstaVazia">
          você não está muito produtivo hoje :(
        </TaskBox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import TarefaComponente from './components/TarefaComponente.vue';
import TaskInterface from './interfaces/TaskInterface'
import TaskBox from './components/TaskBox.vue';

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioTarefa,
    TarefaComponente,
    TaskBox
  },

  data() {
    return {
      tarefas: [] as TaskInterface[],
      modoEscuroAtivo: false
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
    },

    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
.lista {
  padding: 1.25rem;
}
</style>

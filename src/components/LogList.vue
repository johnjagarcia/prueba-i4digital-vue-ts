<template>
  <b-table :data="data" striped hoverable>
    <b-table-column field="url" label="Recurso" centered v-slot="props">
      {{ props.row.url }}
    </b-table-column>

    <b-table-column field="method" label="Método" centered v-slot="props">
      {{ props.row.method }}
    </b-table-column>

    <b-table-column field="query" label="Parametros" centered v-slot="props">
      {{ props.row.query }}
    </b-table-column>

    <b-table-column field="date" label="Fecha" centered v-slot="props">
      {{ props.row.date }}
    </b-table-column>
  </b-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "../plugins/axios";
import Log from "../types/Log";

@Component
export default class LogList extends Vue {
  data: Log[] = [];

  async created() {
    await this.fetchLogs();
  }

  public async fetchLogs(): Promise<void> {
    try {
      const { data } = await axios.get("/logs");
      this.data = data;
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  }
}
</script>

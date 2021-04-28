<template>
  <div class="container mt-3">
    <h1 class="title">Logs</h1>
    <LogList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LogList from "../components/LogList.vue"; // @ is an alias to /src

@Component({
  components: {
    LogList,
  },
})
export default class Home extends Vue {}
</script>

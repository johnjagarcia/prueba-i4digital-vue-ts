<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="data:image/png;base64,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"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="/"> Usuarios </b-navbar-item>
      <b-navbar-item href="/logs"> Logs </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

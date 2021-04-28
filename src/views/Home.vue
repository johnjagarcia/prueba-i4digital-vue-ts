<template>
  <div class="container mt-3">
    <h1 class="title">Lista de usuarios</h1>
    <UserList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserList from "../components/UserList.vue"; // @ is an alias to /src

@Component({
  components: {
    UserList,
  },
})
export default class Home extends Vue {}
</script>

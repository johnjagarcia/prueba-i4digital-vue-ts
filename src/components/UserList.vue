<template>
  <b-table :data="data" striped hoverable>
    <b-table-column field="name" label="Nombres" centered v-slot="props">
      {{ props.row.name }}
    </b-table-column>

    <b-table-column field="name" label="Usuario" centered v-slot="props">
      {{ props.row.username }}
    </b-table-column>

    <b-table-column field="phone" label="Teléfono" centered v-slot="props">
      {{ props.row.phone }}
    </b-table-column>

    <b-table-column field="address" label="Dirección" centered v-slot="props">
      {{ props.row.address.street }}
    </b-table-column>

    <b-table-column field="city" label="Ciudad" centered v-slot="props">
      {{ props.row.address.city }}
    </b-table-column>

    <b-table-column field="company" label="Empresa" centered v-slot="props">
      {{ props.row.company.name }}
    </b-table-column>

    <b-table-column field="website" label="Web" centered v-slot="props">
      {{ props.row.website }}
    </b-table-column>

    <b-table-column label="Publicaciones" centered v-slot="props">
      <b-button
        type="is-ghost"
        outlined
        icon-left="comment-check"
        @click="goToPublications(props.row)"
      >
      </b-button>
    </b-table-column>

    <b-table-column label="Fotos" centered v-slot="props">
      <b-button
        type="is-ghost"
        outlined
        icon-left="postage-stamp"
        @click="goToPhotos(props.row)"
      >
      </b-button>
    </b-table-column>
  </b-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "../plugins/axios";
import User from "../types/User";

@Component
export default class UserList extends Vue {
  data: User[] = [];

  async created(): Promise<void> {
    await this.fetchUsers();
  }

  public async fetchUsers(): Promise<void> {
    try {
      const { data } = await axios.get("/users");
      this.data = data;
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  }

  goToPublications(user: User): void {
    this.$router.push({
      name: "Posts",
      params: { userId: user.id.toString(), name: user.name },
    });
  }

  goToPhotos(user: User): void {
    this.$router.push({
      name: "Photos",
      params: { userId: user.id.toString(), name: user.name },
    });
  }
}
</script>

<template>
  <div class="container mt-3">
    <PhotoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhotoList from "../components/PhotoList.vue"; // @ is an alias to /src

@Component({
  components: {
    PhotoList,
  },
})
export default class Photos extends Vue {}
</script>

<template>
  <div class="container">
    <h1 class="title">Album de fotos - {{ name }}</h1>

    <div class="is-flex is-flex-direction-row is-flex-wrap-wrap">
      <div class="album" :key="album.id" v-for="album in data">
        <div class="album-title is-size-7">{{ album.title }}</div>
        <b-carousel
          :autoplay="false"
          indicator-custom
          :indicator-inside="false"
        >
          <b-carousel-item v-for="photo in album.photos" :key="photo.id">
            <b-image class="image" :src="photo.url"></b-image>
          </b-carousel-item>
          <template #indicators="props">
            <b-image
              class="al image"
              :src="album.photos[props.i].url"
              :title="album.photos[props.i].title"
            ></b-image>
          </template>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "../plugins/axios";
import Album from "../types/Album";
import Photo from "../types/Photo";

@Component
export default class PhotoList extends Vue {
  data: Album[] = [];

  get userId(): string {
    return this.$route.params.userId;
  }
  get name(): string {
    return this.$route.params.name;
  }

  async created(): Promise<void> {
    if (!this.userId)
      this.$router.push({
        name: "Home",
      });
    await this.fetchAlbums();
  }

  public async fetchAlbums(): Promise<void> {
    try {
      const { data } = await axios.get(`/albums?userId=${this.userId}`);
      const albums = await Promise.all<Album>(
        data.map(async (album: Album) => {
          const photos = await this.fetchPhotos(album.id);

          album.photos = photos || [];
          return album;
        })
      );
      this.data = albums;
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  }

  public async fetchPhotos(albumId: number): Promise<Photo[] | undefined> {
    try {
      const { data } = await axios.get(`/photos?albumId=${albumId}`);
      return data;
    } catch (error) {
      alert("Ha ocurrido un error al obtener las fotos");
    }
  }
}
</script>

<style>
.album {
  width: 30%;
  margin: 5px;
}
.album .album-title {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 720px) {
  .album {
    width: 90%;
  }
}
</style>

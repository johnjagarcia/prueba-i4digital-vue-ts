<template>
  <div class="container">
    <h1 class="title">Lista de publicaciones - {{ name }}</h1>
    <div :key="post.id" v-for="post in data">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ post.title }}</strong>
              <br />
              {{ post.body }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"
                  ><i class="fas fa-retweet"></i
                ></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "../plugins/axios";
import Post from "../types/Post";

@Component
export default class PostList extends Vue {
  data: Post[] = [];

  get userId() {
    return this.$route.params.userId;
  }
  get name() {
    return this.$route.params.name;
  }

  async created() {
    if (!this.userId)
      this.$router.push({
        name: "Home",
      });
    await this.fetchPosts();
  }

  public async fetchPosts(): Promise<void> {
    try {
      const { data } = await axios.get(`/publications?userId=${this.userId}`);
      this.data = data;
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  }
}
</script>

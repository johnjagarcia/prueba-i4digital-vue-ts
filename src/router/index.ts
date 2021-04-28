import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import Photos from '../views/Photos.vue';
import Logs from '../views/Logs.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/logs',
    name: 'Logs',
    component: Logs
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

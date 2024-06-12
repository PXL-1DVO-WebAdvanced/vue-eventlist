import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue' // Import Home
import NotFound from '@/views/NotFoundView.vue' // Import NotFou
import EventListView from '@/views/EventListView.vue' // Import EventListView
import EventDetailView from '@/views/EventDetailView.vue' // Import EventDetailView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/events/:id',
      name: 'EventDetail',
      component: EventDetailView,
    }
  ]
})

export default router

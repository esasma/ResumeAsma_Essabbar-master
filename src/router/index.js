import { createRouter, createWebHistory } from 'vue-router'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/Artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/Festival', name: 'FestivalView', component: FestivalView },
    { path: '/Mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },

  ]
})

export default router

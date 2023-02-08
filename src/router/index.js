import { createRouter, createWebHistory } from 'vue-router'
import ResumeViewEnglish from '../views/ResumeViewEnglish.vue'
import ResumeView from '../views/ReseumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/ResumeViewEnglish', name: 'ResumeViewEnglish', component: ResumeViewEnglish },
    { path: '/', name: 'ResumeView', component: ResumeView },



  ]
})

export default router
